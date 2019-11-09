import React, {useState, useEffect } from 'react';
import MaterialTable from 'material-table';

function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns:[
        { title: "CreatedAt", field: "createdAt" },
        {title:"manufacturer", field:"manufacturer"},
        {title: "model", field: "model"},
        { title:"ProductName", field:"productName" },
        {title:"SerialNumber", field:"serialNumber"},
        { title: "ID", field: "_id" },
      ],
    data: [
        ...this.props.products
    ],
  });

  useEffect(() => {
    this.props.fetchProducts();
  })

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
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
                setState(prevState => {
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
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

const mapStateToProps = state => ({
    products:state.products.products,
  })
  
  
  export default connect(mapStateToProps, {fetchProducts})(MaterialTableDemo);