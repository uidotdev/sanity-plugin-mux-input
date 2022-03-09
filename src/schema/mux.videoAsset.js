export default {
  name: 'mux.videoAsset',
  type: 'document',
  title: 'Video asset',
  fields: [
    {
      type: 'string',
      name: 'filename',
    },
    {
      type: 'string',
      name: 'status',
    },
    {
      type: 'string',
      name: 'assetId',
    },
    {
      type: 'string',
      name: 'playbackId',
    },

    {
      type: 'number',
      name: 'thumbTime',
    },
  ],
}
