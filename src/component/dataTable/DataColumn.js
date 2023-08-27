export const Column =()=>[
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
        sortable:false,
        renderCell(params){
            return(
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
]