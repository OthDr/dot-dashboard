import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { User } from '../../data/types/User';
import avatarPic from "../../assets/userAvatar.png";

interface Props {
    users: User[];
}

const UsersTable: React.FC<Props> = ({ users }: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Birth Date</TableCell>
                        <TableCell>Function</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Picture</TableCell>
                        <TableCell>Last Active</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.birthDate}</TableCell>
                            <TableCell>{user.function}</TableCell>
                            <TableCell>{user.status ? 'Active' : 'Inactive'}</TableCell>
                            <TableCell>
                                <img src={avatarPic}
                                    alt={`${user.firstName}'s profile`}
                                    className='rounded-full w-10 h-10 border border-primaryGreen'
                                />
                            </TableCell>
                            <TableCell>{user.lastActive?.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
