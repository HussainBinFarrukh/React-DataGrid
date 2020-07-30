import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import data from '../assets/OutboundModel.json';
import data1 from '../assets/InboundModel.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})  
export class AppComponent {
    InData: any = data;
    outData: any = data1; 
    objectArray: any = data.StepsDetails;
    
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    source: any =
    {
        datafields: [
          { name: "TransactionName"     },        
          { name: "Transaction_Id"      },
          { name: "Transaction_Set_Id"  },
          { name: "ISAControlNum"       },
          { name: "KeyId"               },
          { name: "Created_Date"        },
          { name: "Status"              },

        ],
        localdata: [this.outData, this.InData,this.outData, this.InData,this.outData, this.InData  ]
    };

    //Main data assigned
    MainDataAdapter: any = new jqx.dataAdapter(this.source);
    getWidth() : any {
      if (document.body.offsetWidth < 850) {
        return '100%';
      }
      
      return 950;
    }
    

    
    StepDetailsSource: any =
    {
        datafields: [
          { name: "StepName"   },        
          { name: "StepOrder"  },
          { name: "Status"     },
          { name: "StartDate"  },
          { name: "EndDate"    },
          { name: "Error"      },
          { name: "FileUrl"    },
          { name: "LastStep"   }
        ],
        datatype: 'Json',
        localdata: this.objectArray
    };

    //Step Details Data assigned
    StepDetailsdapter = new jqx.dataAdapter(this.StepDetailsSource, { autoBind: true });
    nestedGrids: any[] = new Array();
    // create nested grid.
    initRowDetails = (index: number, parentElement: any, record: any): void => {
        let id = record.StepOrder;
        let nestedGridContainer = parentElement.children[0];
        this.nestedGrids[index] = nestedGridContainer;
        let filtergroup = new jqx.filter();
        let filtervalue = id;
        let filtercondition = 'equal';
        let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // fill the orders depending on the Step Order number.
        let StepDetails = this.StepDetailsSource.record;
        let StepsByOrder = [];
        for (let i = 0; i < StepDetails.length; i++) {
            let result = filter.evaluate(StepDetails[i]);
            if (result)
            StepsByOrder.push(StepDetails[i]);
        }
        let StepDetailsSource = {
            datafields: [
              { name: "StepName"  },        
              { name: "StepOrder" },
              { name: "Status"    },
              { name: "StartDate" },
              { name: "EndDate"   },
              { name: "Error"     },
              { name: "FileUrl"   },
              { name: "LastStep"  }
            ],
            datatype: 'Json',
            localdata: this.objectArray
        }
        let nestedGridAdapter = new jqx.dataAdapter(StepDetailsSource);
        if (nestedGridContainer != null) {
            let settings = {
                width: 780,
                height: 200,
                source: nestedGridAdapter, 
                columns: [
                  { text: "Step Name"  , datafield: "StepName"  ,    width: 200  },
                  { text: "Step Order" , datafield: "StepOrder" ,    width: 200  },
                  { text: "Status"     , datafield: "Status"    ,    width: 150  },
                  { text: "Start Date" , datafield: "StartDate" ,    width: 150  },
                  { text: "End Date"   , datafield: "EndDate"   ,    width: 150  },
                  { text: "Error"      , datafield: "Error"     ,    width: 150  },
                  { text: "File Url"   , datafield: "FileUrl"   ,    width: 150  },
                  { text: "Last Step"  , datafield: "LastStep"  ,    width: 200  }
                ]
            };
            jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
        }
    }

    renderer = (row: number, column: any, value: string): string => {
        return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    }
    rowdetailstemplate: any = {
        rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>', rowdetailsheight: 220, rowdetailshidden: true
    };
    ready = (): void => {
        this.myGrid.showrowdetails(1);
    };
    columns: any[] =
    [
      { text: "Partnership Code",   datafield: "TransactionName"    ,   align: 'center', cellsrenderer: this.renderer },
      { text: "Transaction Id"  ,   datafield: "Transaction_Id"     ,   align: 'center', cellsrenderer: this.renderer },
      { text: "Transaction Set" ,   datafield: "Transaction_Set_Id" ,   align: 'center', cellsrenderer: this.renderer },
      { text: "ISA Control"     ,   datafield: "ISAControlNum"      ,   align: 'center', cellsrenderer: this.renderer },
      { text: "Key data"        ,   datafield: "KeyId"              ,   align: 'center', cellsrenderer: this.renderer },
      { text: "Created date"    ,   datafield: "Created_Date"       ,   align: 'center', cellsrenderer: this.renderer },
      { text: "Status"          ,   datafield: "Status"             ,   align: 'center', cellsrenderer: this.renderer }
      ];
      
}
