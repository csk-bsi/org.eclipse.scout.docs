export default () => ({
  id: 'jswidgets.WidgetsOutline',
  title: '${textKey:Widgets}',
  outlineOverview: {
    objectType: 'jswidgets.WidgetsOutlineOverview'
  },
  nodes: [
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Accordion',
      detailForm: {
        objectType: 'jswidgets.AccordionForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Button',
      detailForm: {
        objectType: 'jswidgets.ButtonForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Browser Field',
      detailForm: {
        objectType: 'jswidgets.BrowserFieldForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Carousel',
      detailForm: {
        objectType: 'jswidgets.CarouselForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Check Box Field',
      detailForm: {
        objectType: 'jswidgets.CheckBoxFieldForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      expanded: true,
      text: 'Custom Fields',
      childNodes: [
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Chart',
          detailForm: {
            objectType: 'jswidgets.ChartForm'
          }
        },
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Watch Field',
          detailForm: {
            objectType: 'jswidgets.WatchFieldForm'
          }
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Date Field',
      detailForm: {
        objectType: 'jswidgets.DateFieldForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Desktop',
      detailForm: {
        objectType: 'jswidgets.DesktopForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Form',
      detailForm: {
        objectType: 'jswidgets.FormForm',
        detailForm: true
      }
    },
    {
      objectType: 'PageWithNodes',
      expanded: true,
      text: 'File Chooser Field',
      detailForm: {
        objectType: 'jswidgets.FileChooserFieldForm'
      },
      childNodes: [
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'File Chooser Button',
          detailForm: {
            objectType: 'jswidgets.FileChooserButtonForm'
          }
        },
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'File Chooser',
          detailForm: {
            objectType: 'jswidgets.FileChooserForm'
          }
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Group Box',
      detailForm: {
        objectType: 'jswidgets.GroupBoxForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Label',
      detailForm: {
        objectType: 'jswidgets.LabelForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Label Field',
      detailForm: {
        objectType: 'jswidgets.LabelFieldForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'List Box',
      detailForm: {
        objectType: 'jswidgets.ListBoxForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Logical Grid',
      detailForm: {
        objectType: 'jswidgets.LogicalGridForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Menu Bar',
      detailForm: {
        objectType: 'jswidgets.MenuBarForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Mode Selector',
      detailForm: {
        objectType: 'jswidgets.ModeSelectorForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      text: 'Number Field',
      detailForm: {
        objectType: 'jswidgets.NumberFieldForm'
      },
      expanded: true,
      childNodes: [
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Integer Field',
          detailForm: {
            objectType: 'jswidgets.IntegerFieldForm'
          }
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      text: 'Pages',
      expanded: true,
      childNodes: [
        {
          objectType: 'jswidgets.SamplePageWithTable'
        },
        {
          objectType: 'jswidgets.SamplePageWithNodes'
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Popup',
      detailForm: {
        objectType: 'jswidgets.PopupForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Radio Button Group',
      detailForm: {
        objectType: 'jswidgets.RadioButtonGroupForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Rest',
      detailForm: {
        objectType: 'jswidgets.RestForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Sequence Box',
      detailForm: {
        objectType: 'jswidgets.SequenceBoxForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      text: 'Smart Field',
      expanded: true,
      detailForm: {
        objectType: 'jswidgets.SmartFieldForm'
      },
      childNodes: [
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Proposal Field',
          detailForm: {
            objectType: 'jswidgets.ProposalFieldForm'
          }
        },
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Multiline Smart Field',
          detailForm: {
            objectType: 'jswidgets.MultilineSmartFieldForm'
          }
        },
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Table Smart Field',
          detailForm: {
            objectType: 'jswidgets.TableSmartFieldForm'
          }
        },
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Tree Smart Field',
          detailForm: {
            objectType: 'jswidgets.TreeSmartFieldForm'
          }
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'String Field',
      detailForm: {
        objectType: 'jswidgets.StringFieldForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Tab Box',
      detailForm: {
        objectType: 'jswidgets.TabBoxForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      text: 'Table',
      expanded: true,
      detailForm: {
        objectType: 'jswidgets.TableForm'
      },
      childNodes: [
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Editable Table',
          detailForm: {
            objectType: 'jswidgets.EditableTableForm'
          }
        },
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Hierarchical Table',
          detailForm: {
            objectType: 'jswidgets.HierarchicalTableForm'
          }
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Tag Field',
      detailForm: {
        objectType: 'jswidgets.TagFieldForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      text: 'Tile Grid',
      expanded: true,
      detailForm: {
        objectType: 'jswidgets.TileGridForm'
      },
      childNodes: [
        {
          objectType: 'PageWithNodes',
          leaf: true,
          text: 'Virtual Tile Grid',
          detailForm: {
            objectType: 'jswidgets.VirtualTileGridForm'
          }
        }
      ]
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Tile Accordion',
      detailForm: {
        objectType: 'jswidgets.TileAccordionForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Tree',
      detailForm: {
        objectType: 'jswidgets.TreeForm'
      }
    },
    {
      objectType: 'PageWithNodes',
      leaf: true,
      text: 'Tree Box',
      detailForm: {
        objectType: 'jswidgets.TreeBoxForm'
      }
    }
  ]
});
