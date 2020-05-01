export default () => ({
  id: 'jswidgets.FileChooserFieldForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: 'GroupBox',
    fields: [
      {
        id: 'DetailBox',
        objectType: 'GroupBox',
        gridColumnCount: 1,
        fields: [
          {
            id: 'FileChooserField',
            objectType: 'FileChooserField',
            label: 'File chooser'
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: 'TabBox',
        cssClass: 'jswidgets-configuration',
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: 'TabItem',
            label: 'Properties',
            fields: [
              {
                id: 'PropertiesBox',
                objectType: 'GroupBox',
                expandable: true,
                label: 'Properties',
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'AcceptTypesField',
                    objectType: 'StringField',
                    label: 'Accept Types',
                    tooltipText: '${textKey:FileChooserAcceptTypesTooltip}'
                  },
                  {
                    id: 'MaximumUploadSizeField',
                    objectType: 'NumberField',
                    label: 'Max. Upload Size',
                    tooltipText: '${textKey:FileChooserMaximumUploadSizeTooltip}'
                  }
                ]
              },
              {
                id: 'ValueFieldPropertiesBox',
                objectType: 'jswidgets.ValueFieldPropertiesBox'
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: 'jswidgets.FormFieldPropertiesBox'
              },
              {
                id: 'GridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Grid Data Hints'
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: 'TabItem',
            label: 'Actions',
            fields: [
              {
                id: 'FormFieldActionsBox',
                objectType: 'jswidgets.FormFieldActionsBox'
              },
              {
                id: 'WidgetActionsBox',
                objectType: 'jswidgets.WidgetActionsBox'
              }
            ]
          },
          {
            id: 'EventsTab',
            objectType: 'jswidgets.EventsTab'
          }
        ]
      }
    ]
  }
});
