export default () => ({
  id: 'jswidgets.ActionPropertiesBox',
  objectType: 'GroupBox',
  gridColumnCount: 2,
  label: 'Action Properties',
  expandable: true,
  fields: [
    {
      id: 'EnabledField',
      objectType: 'CheckBoxField',
      label: 'Enabled',
      labelVisible: false
    },
    {
      id: 'VisibleField',
      objectType: 'CheckBoxField',
      label: 'Visible',
      labelVisible: false
    },
    {
      id: 'ToggleActionField',
      objectType: 'CheckBoxField',
      label: 'Toggle Action',
      labelVisible: false
    },
    {
      id: 'SelectedField',
      objectType: 'CheckBoxField',
      label: 'Selected',
      labelVisible: false
    },
    {
      id: 'InheritAccessibilityField',
      objectType: 'CheckBoxField',
      label: 'Inherit Accessibility',
      labelVisible: false
    },
    {
      id: 'IconIdField',
      objectType: 'SmartField',
      lookupCall: 'jswidgets.IconIdLookupCall',
      label: 'Icon Id'
    },
    {
      id: 'KeyStrokeField',
      objectType: 'StringField',
      label: 'Key Stroke'
    },
    {
      id: 'TextField',
      objectType: 'StringField',
      label: 'Text'
    },
    {
      id: 'TooltipTextField',
      objectType: 'StringField',
      label: 'Tooltip Text'
    },
    {
      id: 'HorizontalAlignmentField',
      objectType: 'NumberField',
      label: 'Horizontal Alignment'
    },
    {
      id: 'ActionStyleField',
      objectType: 'SmartField',
      lookupCall: 'jswidgets.ActionStyleLookupCall',
      label: 'Action Style',
      displayStyle: 'dropdown'
    }
  ]
});
