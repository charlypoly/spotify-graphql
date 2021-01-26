import * as fs from 'fs'
import * as yaml from 'js-yaml'
import { YamlConfig } from '@graphql-mesh/types'
import { JSONSchema6 } from 'json-schema'

const glob = require('glob')

import baseSchema from './schemas/base'

const schemaToFilePath = (schema: JSONSchema6, filename: string) => {
  const path = `./json-schemas/${filename}.json`
  fs.writeFileSync(path, JSON.stringify(schema, null, 2))
  return path
}

const processOperationDefinition = (file): YamlConfig.JsonSchemaOperation => {
  const operation: YamlConfig.JsonSchemaOperation = require(file).default
  return {
    ...operation,
    ...(operation.requestSchema
      ? {
          requestSchema: schemaToFilePath(
            operation.requestSchema,
            `${operation.field}.request`
          ),
        }
      : {}),
    ...(operation.responseSchema
      ? {
          responseSchema: schemaToFilePath(
            operation.responseSchema,
            `${operation.field}.response`
          ),
        }
      : {}),
  }
}

glob('./schemas/operations/**/*.ts', (err, files) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  Promise.all(files.map(processOperationDefinition)).then((operations) => {
    const configuration: YamlConfig.Config = {
      sources: [
        {
          name: 'Spotify',
          handler: {
            jsonSchema: {
              baseSchema: schemaToFilePath(baseSchema, 'baseSchema'),
              baseUrl: 'https://api.spotify.com/v1/',
              operations: operations as YamlConfig.JsonSchemaOperation[],
            },
          },
        },
      ],
    }

    const yamlContent = yaml.dump(configuration)
    fs.writeFileSync('.meshrc.yaml', yamlContent)
  })
})
