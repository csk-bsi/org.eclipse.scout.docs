export default () => ({
  id: 'jswidgets.TablePropertiesBox',
  objectType: 'GroupBox',
  label: 'Table Properties',
  fields: [
    {
      id: 'AutoResizeColumnsField',
      objectType: 'CheckBoxField',
      label: 'Auto Resize Columns',
      tooltipText: '${textKey:AutoResizeColumnsTooltip}',
      labelVisible: false,
      gridDataHints: {
        fillHorizontal: false
      }
    },
    {
      id: 'AutoOptimizeColumnWidthsField',
      objectType: 'CheckBoxField',
      label: 'Auto Optimize Column Widths',
      tooltipText: '${textKey:AutoOptimizeColumnWidthsTooltip}',
      labelVisible: false,
      gridDataHints: {
        fillHorizontal: false
      }
    },
    {
      id: 'CheckableField',
      objectType: 'CheckBoxField',
      label: 'Checkable',
      labelVisible: false
    },
    {
      id: 'HeaderEnabledField',
      objectType: 'CheckBoxField',
      label: 'Header Enabled',
      labelVisible: false
    },
    {
      id: 'HeaderVisibleField',
      objectType: 'CheckBoxField',
      label: 'Header Visible',
      labelVisible: false
    },
    {
      id: 'HeaderMenusEnabledField',
      objectType: 'CheckBoxField',
      label: 'Header Menus Enabled',
      labelVisible: false
    },
    {
      id: 'MenuBarVisibleField',
      objectType: 'CheckBoxField',
      label: 'Menu Bar Visible',
      labelVisible: false
    },
    {
      id: 'MultiCheckField',
      objectType: 'CheckBoxField',
      label: 'Multi Check',
      labelVisible: false
    },
    {
      id: 'MultiSelectField',
      objectType: 'CheckBoxField',
      label: 'Multi Select',
      labelVisible: false
    },
    {
      id: 'MultilineTextField',
      objectType: 'CheckBoxField',
      label: 'Multiline Text',
      labelVisible: false
    },
    {
      id: 'TruncatedCellTooltipEnabledField',
      objectType: 'CheckBoxField',
      label: 'Truncated Cell Tooltip Enabled',
      labelVisible: false,
      triStateEnabled: true
    },
    {
      id: 'ScrollToSelectionField',
      objectType: 'CheckBoxField',
      label: 'Scroll To Selection',
      labelVisible: false
    },
    {
      id: 'SortEnabledField',
      objectType: 'CheckBoxField',
      label: 'Sort Enabled',
      labelVisible: false
    },
    {
      id: 'FooterVisibleField',
      objectType: 'CheckBoxField',
      label: 'Footer Visible',
      labelVisible: false
    },
    {
      id: 'RowIconVisibleField',
      objectType: 'CheckBoxField',
      label: 'Row Icon Visible',
      labelVisible: false
    },
    {
      id: 'RowIconColumnWidthField',
      objectType: 'NumberField',
      label: 'Row Icon Column Width'
    },
    {
      id: 'CheckableStyleField',
      objectType: 'SmartField',
      label: 'Checkable Style',
      lookupCall: 'jswidgets.CheckableStyleLookupCall'
    },
    {
      id: 'GroupingStyleField',
      objectType: 'SmartField',
      label: 'Grouping Style',
      lookupCall: 'jswidgets.GroupingStyleLookupCall'
    },
    {
      id: 'TileModeField',
      objectType: 'CheckBoxField',
      label: 'Tile Mode',
      labelVisible: false
    }
  ]
});
