import { YamlConfig } from '@graphql-mesh/types'
import { parseConfig } from '@graphql-mesh/config'
import { getMesh } from '@graphql-mesh/runtime'
import * as yaml from 'js-yaml'

const client = async (configOverrides: Partial<YamlConfig.Config> = {}) => {
  const config = await parseConfig({
    ...configOverrides,
    ...(yaml.load('.meshrc.yaml') as YamlConfig.Config),
  })
  const { execute } = await getMesh(config)
  return execute
}

export default client
