import './dataTable.scss'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Loading from '../loading/Loading'
import { Link } from 'react-router-dom'


const columns = [
    {
        field: 'id', headerName: 'شناسه', width: 90
    },
    {
        field: 'name',
        headerName: 'نام',
        width: 220,
        editable: true,
    },
    {
        field: 'username',
        headerName: 'نام کاربری',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'آدرس پست الکترونیکی',
        width: 250,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'شماره تماس',
        width: 220,
        editable: true
    },
    {
        field: 'zipcode',
        headerName: 'کدپستی',
        width: 220,
        editable: true,
        sortable: false,
        renderCell(params) {
            return (
                <>
                    <span>{params.row.address.zipcode}</span>
                </>
            )
        }
    },
    {
        field: 'info',
        headerName: 'اطلاعات',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell(params) {
            return (
                <>
                    <p>20</p>
                    <span>{params.row.name}</span>
                </>
            )
        }
    },
];
const DataTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const fetchUserApi = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const responseJson = await response.json();
        return responseJson;
    }
    const deleteClickHandle =(e)=>{
      const id = e.target.dataset.id;
      setUsers(users.filter(user=> user.id != id))
    }
    const actionColumns = [{
        field:"action" , headerName:"Action",width:200 ,renderCell:(params)=>{
            return (
              <>
                <div className="cellAction">
                 
                     <Link to={`/users/${params.row.id}`} style={{textDecoration:"none"}}>
                      <div className="viewButton">
                        <a>جزئیات</a>
                      </div>
                    </Link>
                  <div className="deleteButton" data-id={params.row.id} onClick={deleteClickHandle}>حذف</div>
                </div>
              </>
            );
        }
    }]
    useEffect(() => {
        fetchUserApi().then(response => {
            setUsers(response)
            setLoading(true)
        })
    }, [])
    return (
      <>
        {!loading ? (
          <Loading />
        ) : (
          <div className="dataTable">
            <div className="add-new">
              <p>افزودن کاربر جدید</p>
              <Link to={"new"}>
                <div className="add-btn">
                  <a>افزودن</a>
                </div>
              </Link>
            </div>
            <Box sx={{ height: 500, width: "100%", fontSize: "1.6rem" }}>
              <DataGrid
                rows={users}
                columns={columns.concat(actionColumns)}
                className="dataGrid"
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 7,
                    },
                  },
                }}
                pageSizeOptions={[7]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        )}
      </>
    );
}

export default DataTable
