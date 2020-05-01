export default () => ({
  id: 'jswidgets.TabBoxDeleteTabItemBox',
  objectType: 'GroupBox',
  label: 'Delete Tab Item',
  expandable: true,
  gridColumnCount: 2,
  fields: [
    {
      id: 'DeleteTabItem.TabItem',
      objectType: 'SmartField',
      label: 'Tab Item'
    },
    {
      id: 'DeleteTabItem.DeleteButton',
      objectType: 'Button',
      label: 'Delete',
      enabled: false,
      processButton: false,
      keyStroke: 'ctrl-delete'
    }
  ]
});
