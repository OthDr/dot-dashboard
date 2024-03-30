import React from 'react'
import mockUsers from '../../data/usersMockData'
import UsersDataTable from '../dataTable/UsersDataTabe'

const Tables: React.FC = () => {
    return (
        <div className='block  h-full  text-white w-full '>
            Users
            <UsersDataTable users={mockUsers} />
        </div>
    )
}

export default Tables