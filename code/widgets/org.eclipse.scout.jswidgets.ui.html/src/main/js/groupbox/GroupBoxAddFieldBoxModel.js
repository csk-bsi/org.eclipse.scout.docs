export default () => ({
  id: 'jswidgets.GroupBoxAddFieldBox',
  objectType: 'GroupBox',
  label: 'Add field',
  expandable: true,
  gridColumnCount: 2,
  fields: [
    {
      id: 'BeforeField',
      objectType: 'SmartField',
      label: 'Before'
    },
    {
      id: 'LabelField',
      objectType: 'StringField',
      label: 'Label'
    },
    {
      id: 'LabelType',
      objectType: 'SmartField',
      lookupCall: 'jswidgets.FormFieldTypeLookupCall',
      label: 'Type'
    },
    {
      id: 'CreateButton',
      objectType: 'Button',
      label: 'Add',
      processButton: false,
      keyStroke: 'ctrl-insert'
    }
  ]
});
