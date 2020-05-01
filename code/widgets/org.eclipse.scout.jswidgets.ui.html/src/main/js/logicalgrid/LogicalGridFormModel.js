export default () => ({
  id: 'jswidgets.LogicalGridForm',
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
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'TargetField',
                    objectType: 'SmartField',
                    label: '${textKey:Target}'
                  },
                  {
                    id: 'LogicalGridField',
                    objectType: 'SmartField',
                    label: 'Logical Grid',
                    lookupCall: 'jswidgets.LogicalGridLookupCall',
                    tooltipText: '${textKey:LogicalGridTooltip}'
                  }
                ]
              },
              {
                id: 'GridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Grid Data Hints'
              },
              {
                id: 'CalculatedGridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Calculated Grid Data',
                enabled: false,
                useHints: false,
                expandable: true,
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
                id: 'Actions.AddFieldBox',
                objectType: 'jswidgets.GroupBoxAddFieldBox'
              },
              {
                id: 'Actions.DeleteFieldBox',
                objectType: 'jswidgets.GroupBoxDeleteFieldBox'
              }
            ]
          }
        ]
      }
    ]
  }
});
