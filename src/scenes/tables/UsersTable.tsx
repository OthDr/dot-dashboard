import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { User } from '../../data/types/User';
import avatarPic from "../../assets/userAvatar.png";

interface Props {
    users: User[];
}

const UsersTable: React.FC<Props> = ({ users }: Props) => {
    return (
        <TableContainer component={Paper} className='overflow-auto'>
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
                            <TableCell

                            >
                                <div
                                    className={` ${user.status ? "bg-primaryGreen/30 text-primaryGreen " : "bg-primaryRed/30 text-primaryRed "} text-center p-1 rounded-lg text-xs `}
                                >

                                    {user.status ? 'Active' : 'Inactive'}
                                </div>
                            </TableCell>
                            <TableCell>
                                <img src={avatarPic}
                                    alt={`${user.firstName}'s profile`}
                                    className='rounded-full w-10 h-10 border border-purple-800'
                                />
                            </TableCell>
                            <TableCell>{`${user.lastActive?.toLocaleDateString()} ${user.lastActive?.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })}`}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
