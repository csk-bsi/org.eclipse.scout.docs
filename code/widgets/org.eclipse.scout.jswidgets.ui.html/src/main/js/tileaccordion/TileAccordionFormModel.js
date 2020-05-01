import {FormField} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.TileAccordionForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: 'GroupBox',
    fields: [
      {
        id: 'DetailBox',
        objectType: 'GroupBox',
        gridColumnCount: 2,
        menus: [
          {
            id: 'GroupsMenu',
            objectType: 'Menu',
            text: 'Groups',
            childActions: [
              {
                id: 'InsertMenu',
                objectType: 'Menu',
                text: 'Insert group'
              },
              {
                id: 'DeleteFirstMenu',
                objectType: 'Menu',
                text: 'Delete first group'
              }
            ]
          },
          {
            id: 'InsertTileIntoGroup0Menu',
            objectType: 'Menu',
            text: 'Insert tile into group 0',
            keyStroke: 'insert'
          },
          {
            id: 'InsertTileIntoGroup1Menu',
            objectType: 'Menu',
            text: 'Insert tile into group 1'
          },
          {
            id: 'DeleteSelectedTilesMenu',
            objectType: 'Menu',
            text: 'Delete selected tiles',
            keyStroke: 'delete'
          },
          {
            id: 'SelectNextMenu',
            objectType: 'Menu',
            text: 'Select next tile'
          },
          {
            id: 'SelectAllMenu',
            objectType: 'Menu',
            text: 'Select all tiles'
          },
          {
            id: 'SortMenu',
            objectType: 'Menu',
            text: 'Sort',
            childActions: [
              {
                id: 'SortAscMenu',
                objectType: 'Menu',
                text: 'Ascending'
              },
              {
                id: 'SortDescMenu',
                objectType: 'Menu',
                text: 'Descending'
              }
            ]
          }
        ],
        fields: [
          {
            id: 'AccordionField',
            objectType: 'AccordionField',
            labelVisible: false,
            gridDataHints: {
              h: 8,
              w: 2
            },
            accordion: {
              id: 'Accordion',
              objectType: 'TileAccordion',
              scrollable: true,
              cssClass: 'has-custom-tiles'
            }
          },
          {
            id: 'FilterField',
            objectType: 'StringField',
            label: '${textKey:FilterBy}',
            labelPosition: FormField.LabelPosition.ON_FIELD,
            updateDisplayTextOnModify: true,
            clearable: 'always',
            gridDataHints: {
              fillHorizontal: false,
              widthInPixel: 300
            }
          },
          {
            id: 'StatusField',
            objectType: 'LabelField',
            labelVisible: false,
            gridDataHints: {
              horizontalAlignment: 1
            }
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: 'jswidgets.ConfigurationBox',
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
                    id: 'SelectableField',
                    objectType: 'CheckBoxField',
                    label: 'Selectable',
                    labelVisible: false
                  },
                  {
                    id: 'MultiSelectField',
                    objectType: 'CheckBoxField',
                    label: 'Multi Select',
                    labelVisible: false
                  },
                  {
                    id: 'ExclusiveExpandField',
                    objectType: 'CheckBoxField',
                    label: 'Exclusive Expand',
                    labelVisible: false,
                    tooltipText: '${textKey:ExclusiveExpandTooltip}',
                    gridDataHints: {
                      fillHorizontal: false
                    }
                  },
                  {
                    id: 'ScrollableField',
                    objectType: 'CheckBoxField',
                    label: 'Scrollable',
                    labelVisible: false
                  },
                  {
                    id: 'WithPlaceholdersField',
                    objectType: 'CheckBoxField',
                    label: 'With Placeholders',
                    labelVisible: false
                  },
                  {
                    id: 'VirtualField',
                    objectType: 'CheckBoxField',
                    label: 'Virtual',
                    labelVisible: false,
                    tooltipText: '${textKey:TileGridVirtualTooltip}',
                    gridDataHints: {
                      fillHorizontal: false
                    }
                  },
                  {
                    id: 'GridColumnCountField',
                    objectType: 'NumberField',
                    label: 'Grid Column Count'
                  }
                ]
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: 'jswidgets.FormFieldPropertiesBox',
                expanded: false
              },
              {
                id: 'GridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Grid Data Hints',
                expanded: false
              },
              {
                id: 'LayoutConfigBox',
                objectType: 'jswidgets.TileGridLayoutConfigBox',
                label: 'Tile Grid Layout Config',
                expanded: false
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: 'TabItem',
            label: 'Actions',
            fields: [
              {
                id: 'TileAccordionActionsBox',
                objectType: 'GroupBox',
                fields: [
                  {
                    id: 'InsertTileField',
                    objectType: 'SequenceBox',
                    label: 'Insert',
                    fields: [
                      {
                        id: 'InsertTileCountField',
                        objectType: 'NumberField',
                        labelVisible: false,
                        statusVisible: false,
                        value: 1,
                        gridDataHints: {
                          widthInPixel: 50,
                          weightX: 0
                        }
                      },
                      {
                        id: 'InsertTileTypeField',
                        objectType: 'SmartField',
                        displayStyle: 'dropdown',
                        label: 'Tile Type',
                        labelVisible: false,
                        statusVisible: false,
                        lookupCall: 'jswidgets.TileTypeLookupCall',
                        value: 'simple'
                      }
                    ]
                  },
                  {
                    id: 'InsertTileIntoField',
                    objectType: 'SequenceBox',
                    label: 'into',
                    fields: [
                      {
                        id: 'InsertTileTargetField',
                        objectType: 'SmartField',
                        displayStyle: 'dropdown',
                        labelVisible: false,
                        statusVisible: false
                      },
                      {
                        id: 'InsertTileButton',
                        objectType: 'Button',
                        label: 'Insert'
                      }
                    ]
                  }
                ]
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
