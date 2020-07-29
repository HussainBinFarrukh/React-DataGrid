import React, { Component } from 'react';
import './main.css';
import data from './InboundModel.json';
import data1 from './OutboundModel.json';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';


class InBoundMain extends Component{
  constructor(){
    super();

    //const objectArray = Object.entries(data.StepsDetails);
    const mySDArr = data.StepsDetails;
    const MainData = []
    for (let i = 0; i < 5; i++ ){ 
        MainData.push( data.StepsDetails[0] )      
    }
    this.state = {
      columnDefs: [
        {headerName: "Partnership Code",  field: "PartnerShip_Code"  , sortable: true, filter: true, rowGroup: true }, 
        {headerName: "Transaction Id" ,   field: "Transaction_Id"    , sortable: true, filter: true, width: 350 },
        {headerName: "Transaction Set",   field: "Transaction_Set_Id", sortable: true, filter: true, width: 136}, 
        {headerName: " ISA Control",      field: "ISAControlNum"     , sortable: true, filter: true, width: 180 }, 
        {headerName: "Key data",          field: "KeyId"             , sortable: true, filter: true, width: 100}, 
        {headerName: "Created date",      field: "Created_Date"      , sortable: true, filter: true, width: 300 },
        {headerName: "Status",            field: "Status"            , sortable: true, filter: true, width: 100}

      ],
      rowData: [data, MainData ],
      autoGroupColumnDef: {
        headerName: 'Step Details',
        field: "StepName"
      }
    } 
    console.log(MainData)
    console.log(data.StepsDetails)


  }

  
  render(){ 
    


   return (
    <div className="MainDiv">
    <h1 className="Maintitle">Data Lookup</h1>

      <div className="ag-theme-balham"
        style={{
          sortable: true,
          filter: true,
          width: 1390,
          height: 400

        }}>
        <h2>Click on the Column to sort</h2>
        <AgGridReact 
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}      
          autoGroupColumnDef= {this.state.autoGroupColumnDef} 
        />

        </div>    

    </div>
    );
  }
}

      
export default InBoundMain;






/* <div className="Display-data">   
      <h2 className="json-data-title" >  {objectArray[0] [0]} :   {objectArray[0] [1]}  </h2> 
      <div className="json-data" key={data.id}> 
        {MainData}
        {MainData1}
        {NullData}
      </div>     
    </div>

    <h1 className="StepsDetails-data-title">Step Details</h1>
    <div className="StepsDetails-data">

      {MyData.StepsDetails.map( 
        mydata => <h2 className="StepsDetails-data-single" key={mydata.StepName} > 
         Step Name:   {mydata.StepName} 
        <br/> 
         Step Order:   {mydata.StepOrder}
        <br/>    
         Step Status:   {mydata.Status}
        <br/>  
         Start Date:   {mydata.StartDate}
        <br/>  
         End Date:   {mydata.EndDate}
        <br/>  
         Error:   {mydata.Error}
        <br/>  
         File URL:   {mydata.FileUrl}
        <br/>  
         Last Step?:   {mydata.LastStep.toString()}
        <br/>      
      </h2>
          )}
    </div>*/


    /**
    for (let i = 2; i < 6; i++ ){
      if(objectArray[i][1] == true || objectArray[i][1] == false ){
        MainData.push(  <h2 className="json-data-single" >  {objectArray[i] [0]} :   {objectArray[i] [1].toString()}  </h2> )
      }
      else{  
        MainData.push(  <h2 className="json-data-single" >  {objectArray[i] [0]} :   {objectArray[i] [1]}  </h2> )
    }


    
  }
    for (let i = 7; i < 64; i++ ){
      if(objectArray[i][1] == true || objectArray[i][1] == false ){
        MainData1.push(  <h2 className="json-data-single" >  {objectArray[i] [0]} :   {objectArray[i] [1].toString()}  </h2> )
      }
      else if (objectArray[i][1] == null){  
        NullData.push(  <h2 className="json-data-single" >  {objectArray[i] [0]} :   Null  </h2> )
      }
      else{  
        MainData1.push(  <h2 className="json-data-single" >  {objectArray[i] [0]} :   {objectArray[i] [1]}  </h2> )
    }
    } */