import { forwardRef } from 'react';
 import {connect, useSelector} from 'react-redux';
import { fetchProducts } from '../Actions/ProductAction';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import { white } from 'ansi-colors';
import { Button, Chip, createMuiTheme, MuiThemeProvider } from '@material-ui/core'; 
import { ThemeProvider } from '@material-ui/styles';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
 
// class CustomizedTable extends React.Component{

//   componentDidMount(){
//     this.props.fetchProducts();
//   }



//   render(){

//     return (
//       <div style={{ maxWidth: "100%", backgroundColor:"red"}}>
  
//         <MaterialTable
//         components={{
//           Toolbar: props => (
//               <div style={{ backgroundColor: '#e8eaf5', alignItems:'center', color:'red' }}>
//                 <div style={{alignItems:'center', marginLeft:'1000px',paddingTop:'0px'}}>
//                 <Chip label="ADD WARRANTY DETAILS"  color="secondary" style={{marginRight: 5}}/>
//                 </div>
//                   <MTableToolbar {...props} />
//               </div>
//           )
//       }}
//         icons={tableIcons}
//           columns={[
//             { title: "CreatedAt", field: "createdAt" },
//             {title:"manufacturer", field:"manufacturer"},
//             {title: "model", field: "model"},
//             { title:"ProductName", field:"productName" },
//             {title:"SerialNumber", field:"serialNumber"},
//             { title: "ID", field: "_id" },
//           ]
//         }
//           data={[
//             ...this.props.products
//           ]} 
//           options={{
//             rowStyle: {
//               // backgroundColor: '#EEE',
          
//             }, headerStyle:{
//               backgroundColor:'#9c27b0',
//               color:'#FFF'
//             },

//           }}

//           actions={[
//             {
//               icon: <Chip label="ADD WARRANTY DETAILS"  color="secondary" style={{marginRight: 5}}/>,
//               tooltip: 'Add User',
//               fillIcon:'#FFF',
//               color:'#FFF',
//               backgroundColor:'#FFF',
//               isFreeAction: true,
//               onClick: (event) => alert("You want to add a new row")
//             }
//           ]}
//           title="Warranties Registered"
//         />
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   products:state.products.products,
// })


// export default connect(mapStateToProps, {fetchProducts})(CustomizedTable);


class CustomizedTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columns:[
        { title: "CreatedAt", field: "createdAt" },
        {title:"manufacturer", field:"manufacturer"},
        {title: "model", field: "model"},
        { title:"ProductName", field:"productName" },
        {title:"SerialNumber", field:"serialNumber"},
        { title: "ID", field: "_id" },
      ],
      data:[
        ...this.props.products
      ]
    }

    this.theme = createMuiTheme({
      palette: {
        primary: {
          main: '#4caf50',
        },
        secondary: {
          main: '#ff9100',
        },
      },
      zIndex:30
    

    });
  }
 
  componentWillMount(){
   
    
    this.props.fetchProducts();

  }

  setProducts(){
    console.log(this.props.products);
    this.setState({data:this.props})
  }
  
render(){

  return (
    <ThemeProvider theme={this.theme}>
    <MaterialTable
    style={{
      width:'100%'
    }}
    icons={tableIcons}
      title="Editable Example"
      options={{
        headerStyle:{
          backgroundColor:'#5c007a',
          color:'white',
          alignItems:'center'
        },
        actionsCellStyle:{
          color:'#5c007a',
        },
        
        
      }}
      columns={this.state.columns}
      data={this.props.products}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
      
    >

{
        console.log(this.props.products)
        
      }
    </MaterialTable>
  </ThemeProvider>
  );
}  

}

const mapStateToProps = state => ({
    products:state.products.products,
  })
  
  
  export default connect(mapStateToProps, {fetchProducts})(CustomizedTable);