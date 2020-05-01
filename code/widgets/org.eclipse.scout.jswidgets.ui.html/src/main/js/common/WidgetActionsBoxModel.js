export default () => ({
  id: 'jswidgets.WidgetActionsBox',
  objectType: 'GroupBox',
  gridColumnCount: 2,
  label: 'Widget Actions',
  expandable: true,
  fields: [
    {
      id: 'FocusSequenceBox',
      objectType: 'SequenceBox',
      labelVisible: false,
      statusVisible: false,
      fields: [
        {
          id: 'FocusButton',
          objectType: 'Button',
          label: 'Focus',
          displayStyle: 3,
          processButton: false,
          tooltipText: '${textKey:FocusTooltip}',
          gridDataHints: {
            useUiWidth: true,
            weightX: 0
          }
        },
        {
          id: 'FocusReturnField',
          objectType: 'LabelField',
          labelVisible: false
        }
      ]
    },
    {
      id: 'IsFocusableSequenceBox',
      objectType: 'SequenceBox',
      labelVisible: false,
      statusVisible: false,
      fields: [
        {
          id: 'IsFocusableButton',
          objectType: 'Button',
          label: 'Is Focusable',
          displayStyle: 3,
          processButton: false,
          gridDataHints: {
            useUiWidth: true,
            weightX: 0
          }
        },
        {
          id: 'IsFocusableReturnField',
          objectType: 'LabelField',
          labelVisible: false
        }
      ]
    },
    {
      id: 'RevealButton',
      objectType: 'Button',
      label: 'Reveal',
      displayStyle: 3,
      processButton: false,
      tooltipText: '${textKey:RevealTooltip}'
    },
    {
      id: 'ScrollToTopButton',
      objectType: 'Button',
      label: 'Scroll To Top',
      displayStyle: 3,
      processButton: false
    },
    {
      id: 'ScrollToBottomButton',
      objectType: 'Button',
      label: 'Scroll To Bottom',
      displayStyle: 3,
      processButton: false
    },
    {
      id: 'ScrollTopField',
      objectType: 'NumberField',
      label: 'Scroll Top'
    }
  ]
});
