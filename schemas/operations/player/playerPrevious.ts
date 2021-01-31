import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerPrevious',
  method: 'PUT',
  description:
    'Skip User’s Playback To Previous Track: Skips to previous track in the user’s queue.',
  path: '/me/player/previous',
  responseTypeName: 'Void',
}

export default operation
