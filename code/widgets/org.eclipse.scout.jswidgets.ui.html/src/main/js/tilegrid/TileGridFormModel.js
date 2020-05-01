import {FormField} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.TileGridForm',
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
            id: 'InsertMenu',
            objectType: 'Menu',
            text: 'Insert tile',
            keyStroke: 'insert'
          },
          {
            id: 'InsertManyMenu',
            objectType: 'Menu',
            text: 'Insert many tiles'
          },
          {
            id: 'DeleteMenu',
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
            id: 'TileField',
            objectType: 'TileField',
            labelVisible: false,
            gridDataHints: {
              h: 8,
              w: 2
            },
            tileGrid: {
              id: 'TileGrid',
              objectType: 'TileGrid',
              scrollable: true,
              gridColumnCount: 5,
              layoutConfig: {
                columnWidth: 100,
                rowHeight: 100
              },
              tiles: [
                {
                  objectType: 'jswidgets.CustomTile',
                  label: 'Tile 1'
                },
                {
                  objectType: 'jswidgets.CustomTile',
                  label: 'Tile 2'
                },
                {
                  objectType: 'jswidgets.CustomTile',
                  label: 'Tile 3'
                },
                {
                  objectType: 'jswidgets.CustomTile',
                  label: 'Tile 4'
                },
                {
                  objectType: 'jswidgets.CustomTile',
                  label: 'Tile 5'
                }
              ]
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
                    id: 'ScrollableField',
                    objectType: 'CheckBoxField',
                    label: 'Scrollable',
                    labelVisible: false
                  },
                  {
                    id: 'InvertColorsField',
                    objectType: 'CheckBoxField',
                    label: 'Invert Colors',
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
                  },
                  {
                    id: 'LogicalGridField',
                    objectType: 'SmartField',
                    label: 'Logical Grid',
                    lookupCall: 'jswidgets.LogicalGridLookupCall',
                    tooltipText: '${textKey:LogicalGridWithRefTooltip}'
                  },
                  {
                    id: 'ColorSchemeField',
                    objectType: 'SmartField',
                    label: 'Color Scheme',
                    lookupCall: 'jswidgets.ColorSchemeLookupCall'
                  },
                  {
                    id: 'TileTypeField',
                    objectType: 'SmartField',
                    displayStyle: 'dropdown',
                    label: 'Tile Type',
                    tooltipText: '${textKey:TileTypeTooltip}',
                    lookupCall: 'jswidgets.TileTypeLookupCall',
                    value: 'simple'
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
