import {icons} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.TabBoxForm',
  displayHint: 'view',
  cssClass: 'tab-box-form',
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
            id: 'TabBox',
            objectType: 'TabBox',
            selectedTab: 'TabItem1',
            tabItems: [
              {
                id: 'TabItem1',
                objectType: 'jswidgets.DynamicTab',
                label: 'First Tab'
              },
              {
                id: 'TabItem2',
                objectType: 'jswidgets.DynamicTab',
                label: 'Second Tab'
              },
              {
                id: 'TabItem3',
                objectType: 'jswidgets.DynamicTab',
                label: 'Third Tab'
              }
            ],
            menus: [
              {
                id: 'AddTabMenu',
                objectType: 'Menu',
                text: 'Add tab item',
                iconId: icons.PLUS,
                stackable: true,
                menuTypes: [
                  'TabBox.Header'
                ],
                keyStroke: 'insert'
              },
              {
                id: 'DeleteTabMenu',
                objectType: 'Menu',
                text: 'Delete tab item',
                iconId: icons.MINUS,
                stackable: true,
                menuTypes: [
                  'TabBox.Header'
                ],
                keyStroke: 'insert'
              },
              {
                id: 'SettingsMenu',
                objectType: 'Menu',
                iconId: icons.GEAR,
                stackable: false,
                menuTypes: [
                  'TabBox.Header'
                ],
                horizontalAlignment: 1
              }
            ]
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: 'TabBox',
        cssClass: 'jswidgets-configuration',
        selectedTab: 'Properties.TabBox',
        tabItems: [
          {
            id: 'Properties.TabBox',
            objectType: 'jswidgets.TabBoxProperties'
          },
          {
            id: 'Properties.TabItem',
            objectType: 'jswidgets.TabItemProperties'
          },
          {
            id: 'ActionsBox',
            objectType: 'TabItem',
            label: 'Actions',
            gridColumnCount: 2,
            fields: [
              {
                id: 'ActionBox.AddTabItem',
                objectType: 'jswidgets.TabBoxAddTabItemBox'
              },
              {
                id: 'ActionBox.DeleteTabItem',
                objectType: 'jswidgets.TabBoxDeleteTabItemBox'
              },
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
