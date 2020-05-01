import {FormField, icons} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.MenuBarForm',
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
            id: 'LabelField',
            objectType: 'LabelField',
            labelVisible: false,
            value: 'This is a group box containing menus. The menus are displayed in the menu bar on top.\nCheck out the properties on the bottom to configure each menu individually.',
            gridDataHints: {
              h: 2,
              weightY: 0
            }
          }
        ],
        menus: [
          {
            id: 'Menu1',
            objectType: 'scout.Menu',
            text: 'First menu'
          },
          {
            id: 'Menu2',
            objectType: 'scout.Menu',
            text: 'Second menu',
            iconId: icons.WORLD
          },
          {
            id: 'HierarchicalMenu',
            objectType: 'scout.Menu',
            text: 'Hierarchical menu',
            childActions: [
              {
                id: 'ReplaceMenu',
                objectType: 'scout.Menu',
                text: 'Replace child menus'
              },
              {
                id: 'SubMenu1',
                objectType: 'Menu',
                text: 'Sub Menu 1'
              },
              {
                id: 'SubMenu2',
                objectType: 'Menu',
                text: 'Sub Menu 2',
                childActions: [
                  {
                    id: 'SubSubMenu1',
                    objectType: 'Menu',
                    text: 'Sub Sub Menu 1'
                  },
                  {
                    id: 'SubSubMenu2',
                    objectType: 'Menu',
                    text: 'Sub Sub Menu 2'
                  }
                ]
              }
            ]
          },
          {
            id: 'FormFieldMenu',
            objectType: 'scout.FormFieldMenu',
            horizontalAlignment: 1,
            field: {
              id: 'SmartField',
              objectType: 'SmartField',
              label: 'Form Field Menu',
              lookupCall: 'jswidgets.LocaleLookupCall',
              labelVisible: false,
              statusVisible: false,
              labelPosition: FormField.LabelPosition.ON_FIELD,
              gridDataHints: {
                widthInPixel: 200
              }
            }
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
                label: 'Properties',
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'SelectedMenuField',
                    objectType: 'SmartField',
                    label: 'Target',
                    lookupCall: 'jswidgets.MenuItemLookupCall',
                    value: 'Menu1'
                  },
                  {
                    id: 'MenuPropertiesBox',
                    objectType: 'GroupBox',
                    labelVisible: false,
                    borderVisible: false,
                    fields: [
                      {
                        id: 'ShrinkableField',
                        objectType: 'CheckBoxField',
                        label: 'Shrinkable',
                        labelVisible: false,
                        tooltipText: '${textKey:MenuShrinkableTooltipText}',
                        gridDataHints: {
                          fillHorizontal: false
                        }
                      },
                      {
                        id: 'StackableField',
                        objectType: 'CheckBoxField',
                        label: 'Stackable',
                        labelVisible: false,
                        tooltipText: '${textKey:MenuStackableTooltipText}',
                        gridDataHints: {
                          fillHorizontal: false
                        }
                      }
                    ]
                  },
                  {
                    id: 'ActionPropertiesBox',
                    objectType: 'jswidgets.ActionPropertiesBox'
                  },
                  {
                    id: 'FormFieldPropertiesBox',
                    objectType: 'jswidgets.FormFieldPropertiesBox'
                  }
                ]
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: 'TabItem',
            label: 'Actions',
            fields: [
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
