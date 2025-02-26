import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost : 'bedaya',
  api: {
    projectId: '6cnt02zo',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
