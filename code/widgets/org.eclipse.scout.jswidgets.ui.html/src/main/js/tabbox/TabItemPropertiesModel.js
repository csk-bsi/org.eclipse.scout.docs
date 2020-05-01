export default () => ({
  id: 'jswidgets.TabItemProperties',
  objectType: 'TabItem',
  label: 'Tab Item Properties',
  fields: [
    {
      id: 'TabItemProperties.TargetField',
      objectType: 'SmartField',
      label: 'Target Item'
    },
    {
      id: 'TabItemProperties.MarkedField',
      objectType: 'CheckBoxField',
      label: 'Marked',
      labelVisible: false
    },
    {
      id: 'TabItemProperties.GroupBoxPropertiesBox',
      objectType: 'jswidgets.GroupBoxPropertiesBox'
    },
    {
      id: 'TabItemProperties.FormFieldPropertiesBox',
      objectType: 'jswidgets.FormFieldPropertiesBox'
    },
    {
      id: 'TabItemProperties.GridDataBox',
      objectType: 'jswidgets.GridDataBox',
      label: 'Grid Data Hints'
    }
  ]
});
