export default () => ({
  id: 'jswidgets.GroupBoxForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: 'GroupBox',
    fields: [
      {
        id: 'DetailBox',
        objectType: 'GroupBox',
        label: 'Group Box',
        fields: [
          {
            id: 'StringField1',
            objectType: 'StringField',
            label: 'String Field 1'
          },
          {
            id: 'StringField2',
            objectType: 'StringField',
            label: 'String Field 2'
          },
          {
            id: 'StringField3',
            objectType: 'StringField',
            label: 'String Field 3'
          },
          {
            id: 'StringField4',
            objectType: 'StringField',
            label: 'String Field 4'
          }
        ],
        menus: [
          {
            id: 'Menu1',
            objectType: 'scout.Menu',
            text: 'Menu',
            horizontalAlignment: 1
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
            label: 'Group Box Properties',
            fields: [
              {
                id: 'GroupBoxPropertiesBox',
                objectType: 'jswidgets.GroupBoxPropertiesBox',
                expandable: true,
                labelVisible: false,
                borderVisible: false
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: 'jswidgets.FormFieldPropertiesBox'
              },
              {
                id: 'GridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Grid Data Hints'
              },
              {
                id: 'BodyLayoutConfigBox',
                objectType: 'jswidgets.LogicalGridLayoutConfigBox'
              }
            ]
          },
          {
            id: 'FieldPropertiesTab',
            objectType: 'TabItem',
            label: 'Field Properties',
            fields: [
              {
                id: 'Field.TargetField',
                objectType: 'SmartField',
                label: 'Target'
              },
              {
                id: 'Field.FormFieldPropertiesBox',
                objectType: 'jswidgets.FormFieldPropertiesBox'
              },
              {
                id: 'Field.GridDataBox',
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
                id: 'Actions.AddMenuBarItemBox',
                objectType: 'jswidgets.GroupBoxAddMenuBarItemBox'
              },
              {
                id: 'Actions.DeleteMenuBarItemBox',
                objectType: 'jswidgets.GroupBoxDeleteMenuBarItemBox'
              },
              {
                id: 'Actions.AddFieldBox',
                objectType: 'jswidgets.GroupBoxAddFieldBox'
              },
              {
                id: 'Actions.DeleteFieldBox',
                objectType: 'jswidgets.GroupBoxDeleteFieldBox'
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
