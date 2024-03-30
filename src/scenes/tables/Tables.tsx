import React from 'react'
import UsersTable from './UsersTable'
import mockUsers from '../../data/usersMockData'

const Tables: React.FC = () => {
    return (
        <div className='text-white'>
            Tables
            <UsersTable users={mockUsers} />
        </div>
    )
}

export default Tables