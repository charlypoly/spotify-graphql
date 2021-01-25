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
              operationHeaders: {
                Authorization:
                  'Bearer BQDJo99kYrXaXoMPKL1DBoYpvbbmaeylDKkMD-wlQulFp30H-v1pI92rsL16e1x37LUZrGpmtDYuvNYF_63SezN6S3MveVk9NewTD4bRFmubTxkejPw651Tis3MfnEz9lVYaHIoChVXqW7MSSBHmUI75v0pws15BHgBUfT6fX0Q5ZzFz_BnxlUypOAcWaKCbnbs4kjhFu8lTvP-XjSUEfuAwqSctZo7WL_mgjh_M5WJl7UymbmFfYjoMikH0ayGt4uMc1nwRSw55e5le',
              },
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
