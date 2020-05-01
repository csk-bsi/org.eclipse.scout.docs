export default () => ({
  id: 'jswidgets.SmartFieldForm',
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
            id: 'SmartField',
            objectType: 'SmartField',
            lookupCall: 'jswidgets.LocaleLookupCall',
            label: 'Smart Field',
            menus: [
              {
                id: 'NewLanguageMenu',
                text: '${textKey:NewLanguageMenu}',
                objectType: 'Menu'
              }
            ],
            statusMenuMappings: [
              {
                id: 'NewLanguageMenuStatusMapping',
                objectType: 'StatusMenuMapping',
                menu: 'NewLanguageMenu',
                codes: [
                  2
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: 'TabBox',
        labelVisible: false,
        cssClass: 'jswidgets-configuration',
        gridColumnCount: 1,
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: 'TabItem',
            label: 'Properties',
            fields: [
              {
                id: 'SmartFieldPropertiesBox',
                objectType: 'jswidgets.SmartFieldPropertiesBox',
                label: 'Smart Field Properties',
                labelVisible: false,
                borderVisible: false
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
