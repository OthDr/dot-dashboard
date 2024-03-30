import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { User } from '../../data/types/User';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'birthDate', headerName: 'Birth Date', width: 130 },
    { field: 'function', headerName: 'Function', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
];

interface Props {
    users: User[];
}

const UsersDataTable: React.FC<Props> = ({ users }: Props) => {

    const rows = users.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthDate: user.birthDate,
        function: user.function,
        status: user.status ? 'Active' : 'Inactive',
    }));

    return (
        <div className='lg:h-[calc(100vh-118px)] h-full w-full bg-primaryWhite rounded-lg shadow-lg shadow-purple-950/70'>
            <DataGrid
                rows={rows}
                columns={columns}
                autoPageSize
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                checkboxSelection
            />
        </div>
    );
};

export default UsersDataTable;
