import React, { Component } from 'react';
import './main.css';
import data from './InboundModel.json';
import data1 from './OutboundModel.json';

import JqxGrid, { jqx } from '../assets/jqwidgets-react/react_jqxgrid';

class App extends Component {




    render() {
    
        const MainData1 = data;

        const MainData2 = data1;
          

        const source = {
            datafields: [],
            datatype: 'json',
            id: 'id',
            localdata: []
        };

        source.localdata = [MainData2,MainData1];
        const dataAdapter = new jqx.dataAdapter(source);

        const columns=
            [
                { text: "Partnership Code",  columngroup: "Transaction Details",   datafield: "TransactionName"          ,   width: 250                          },
                { text: "Transaction Id" ,   columngroup: "Transaction Details",   datafield: "Transaction_Id"    ,   cellsalign: 'right', align: 'right' },
                { text: "Transaction Set",   columngroup: "Transaction Details",   datafield: "Transaction_Set_Id",   align: 'right', cellsalign: 'right' },
                { text: "ISA Control",       columngroup: "Transaction Details",   datafield: "ISAControlNum"     ,   cellsalign: 'right', width: 100     },
                { text: "Key data",          columngroup: "Transaction Details",   datafield: "KeyId"             ,   align: 'center'                     },
                { text: "Created date",      columngroup: "Transaction Details",   datafield: "Created_Date"      ,   cellsalign: 'right', width: 100     },
                { text: "Status",            columngroup: "Transaction Details",   datafield: "Status"            ,   align: 'center'                     }
            
            ];

        const columngroups =
            [
                { text: 'Product Details', align: 'center', name: 'ProductDetails' }
            ];   
            
        return (
            <div className="MainDiv">
            <h1 className="Maintitle">Data Lookup</h1>
            {        console.log(MainData1),
                console.log(data)
            }
            <JqxGrid 
                width={1000} source={dataAdapter} columns={columns}
                pageable={true }autoheight={true} sortable={true}
                altrows={true} enabletooltips={true} editable={true}
                selectionmode={'multiplecellsadvanced'} columngroups={columngroups}
            >
            </JqxGrid>
            </div>
        );
    }
}

export default App;



/*
const dataAdapter = new jqx.dataAdapter(source);

const cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
    if (value < 20) {
        return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #ff0000;'>${value}</span>`;
    }
    else {
        return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #008000;'>${value}</span>`;
    }
};

const columns=
    [
        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
        { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
        { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
    ];

const columngroups =
    [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ];   */





    /**
     * import React, { Component } from 'react';

import JqxGrid, { jqx } from './assets/jqwidgets-react/react_jqxgrid';

class App extends Component {
    render() {
        const source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'ProductName', type: 'string' },
                    { name: 'QuantityPerUnit', type: 'int' },
                    { name: 'UnitPrice', type: 'float' },
                    { name: 'UnitsInStock', type: 'float' },
                    { name: 'Discontinued', type: 'bool' }
                ],
                root: 'Products',
                record: 'Product',
                id: 'ProductID',
                url: './assets/products.xml'
            };

        const dataAdapter = new jqx.dataAdapter(source);

        const cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
            if (value < 20) {
                return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #ff0000;'>${value}</span>`;
            }
            else {
                return `<span style='margin: 4px; float:${columnproperties.cellsalign}; color: #008000;'>${value}</span>`;
            }
        };

        const columns=
            [
                { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
                { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
                { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
                { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
            ];

        const columngroups =
            [
                { text: 'Product Details', align: 'center', name: 'ProductDetails' }
            ];   
        return (
            <JqxGrid 
                width={850} source={dataAdapter} columns={columns}
                pageable={true }autoheight={true} sortable={true}
                altrows={true} enabletooltips={true} editable={true}
                selectionmode={'multiplecellsadvanced'} columngroups={columngroups}
            />
        );
    }
}

export default App;
     */