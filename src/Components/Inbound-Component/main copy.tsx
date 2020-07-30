/*
import React, { Component, ReactDOM } from 'react';
import './main.css';
import data from './InboundModel.json';
import data1 from './OutboundModel.json';
import JqxGrid, { jqx } from '../assets/jqwidgets-react/react_jqxgrid';

class App extends React.Component{
    constructor() {
    super();
    this.myGrid = React.createRef();
    const MainData1   = data;  //inboud-date
    const MainData2   = data1; //out-bound-data
    const objectArray = data.StepsDetails;
    const source = {
        datafields: []  ,
        datatype: 'json',  
        id: 'id'        ,
        localdata: []   
        };
    const ordersDetailsSource = {
        datafields: []  ,
        datatype: 'json',
        record: 'StepDetails' ,
        root: 'Orders'  ,
        localdata: []
    };
    const ordersDataAdapter = new jqx.dataAdapter(ordersDetailsSource); 
    ordersDataAdapter.localdata = []
    for(const obj of objectArray){
        ordersDataAdapter.localdata.push(obj)
    }

    const photoRenderer = (row, column, value) => {
        const name = this.myGrid.current.getrowdata(row).StepName;
        const imgurl = './../images/' + name.toLowerCase() + '.png';
        const img = '<div style="background: white;"><img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
        return img;
    }
    const renderer = (row, column, value) => {
        return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    }


    const nestedGrids = [];
    const initrowdetails = (index, parentElement, gridElement, record) => {
    const id = record.StepName.toString();
    const nestedGridContainer = parentElement.children[0];
    nestedGrids[index] = nestedGridContainer;
    const filtergroup = new jqx.filter();
    const filtervalue = id;
    const filtercondition = 'equal';
    const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
    // fill the orders depending on the id.
    const orders = ordersDataAdapter.records;
    const ordersbyid = [];
    for (let i = 0; i < 4; i++) {
        const order = orders[i];
        const result = filter.evaluate(order.StepName);
        if (result) {
            ordersbyid.push(order);
        }
    }
    const ordersSource = {
        datafields: [
            { name: "StepName"  ,  type: 'string' },         
            { name: "StepOrder" ,  type: 'string' }, 
            { name: "Status"    ,  type: 'string' }, 
            { name: "StartDate" ,  type: 'string' }, 
            { name: "EndDate"   ,  type: 'string' }, 
            { name: "Error"     ,  type: 'string' }, 
            { name: "FileUrl"   ,  type: 'string' }, 
            { name: "LastStep"  ,  type: 'string' }  
        ],
        id: 'OrderID',
        localdata: ordersbyid
    }
    const nestedGridAdapter = new jqx.dataAdapter(ordersSource);
    if (nestedGridContainer != null) {
        const columns = [
            { text: "Step Name"  , datafield: "StepName"  ,    width: 200  },
            { text: "Step Order" , datafield: "StepOrder" ,    width: 200  },
            { text: "Status"     , datafield: "Status"    ,    width: 150  },
            { text: "Start Date" , datafield: "StartDate" ,    width: 150  },
            { text: "End Date"   , datafield: "EndDate"   ,    width: 150  },
            { text: "Error"      , datafield: "Error"     ,    width: 150  },
            { text: "File Url"   , datafield: "FileUrl"   ,    width: 150  },
            { text: "Last Step"  , datafield: "LastStep"  ,    width: 200  }
        ];
        ReactDOM.render(
            <JqxGrid width={780} height={200} 
            source={nestedGridAdapter} columns={columns} />,
            document.getElementById(nestedGridContainer.StepName)
        );
    }
    };
    source.localdata = [MainData2, MainData1];
    this.state = {
        source: new jqx.dataAdapter(source),
        columns: [
        { text: "Partnership Code",  columngroup: "Transaction Details"  ,   datafield: "StepDetails"    ,   width: 250                          },
        { text: "Transaction Id"  ,  columngroup: "Transaction Details"  ,   datafield: "Transaction_Id"     ,   cellsalign: 'right', align: 'right' },
        { text: "Transaction Set" ,  columngroup: "Transaction Details"  ,   datafield: "Transaction_Set_Id" ,   align: 'right', cellsalign: 'right' },
        { text: "ISA Control"     ,  columngroup: "Transaction Details"  ,   datafield: "ISAControlNum"      ,   cellsalign: 'right', width: 100     },
        { text: "Key data"        ,   columngroup: "Transaction Details" ,   datafield: "KeyId"              ,   align: 'center'                     },
        { text: "Created date"    ,  columngroup: "Transaction Details"  ,   datafield: "Created_Date"       ,   cellsalign: 'right', width: 100     },
        { text: "Status"          ,  columngroup: "Transaction Details"  ,   datafield: "Status"             ,   align: 'center'                     }
        ],
        initrowdetails,
        ready: () => {
           this.myGrid.current.showrowdetails();
        },
        rowdetailstemplate: {
        rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>',
        rowdetailsheight: 220,  
        rowdetailshidden: true  
        },
        }
    }
    render() {   
    return (
    <div className="MainDiv">
        <h1 className="Maintitle">Data Lookup</h1>
        <JqxGrid 
            width={1000} source={this.state.dataAdapter} columns={this.state.columns}
            selectionmode={'multiplecellsadvanced'} columngroups={this.state.columngroups}
            rowdetails={true} rowsheight={35} initrowdetails={this.state.initrowdetails}
            ready={this.state.ready} rowdetailstemplate={this.state.rowdetailstemplate} 
  
            />
        { console.log(this.state.dataAdapter) }
    </div>
    );
}
}

export default App;*/