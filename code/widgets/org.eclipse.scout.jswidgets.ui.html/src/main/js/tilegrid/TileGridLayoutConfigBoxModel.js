export default () => ({
  id: 'jswidgets.TileGridLayoutConfigBox',
  type: 'extension',
  extensions: [
    {
      operation: 'insert',
      target: {
        id: 'jswidgets.LogicalGridLayoutConfigBox',
        property: 'fields',
        after: 'MinWidthField'
      },
      extension: [
        {
          id: 'MaxWidthField',
          objectType: 'NumberField',
          label: 'Max Width'
        }
      ]
    }
  ]
});
