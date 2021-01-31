import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerPause',
  method: 'PUT',
  description:
    'Skip User’s Playback To Next Track: Skips to next track in the user’s queue.',
  path: '/me/player/next',
  responseTypeName: 'Void',
}

export default operation
