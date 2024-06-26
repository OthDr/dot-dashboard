import React from 'react';
import UsersTable from '../../../components/tables/UsersTable';
import mockUsers from '../../../data/usersMockData';

const ColSpan7: React.FC = () => {
    return (
        <div className='group relative block rounded-xl overflow-auto h-[260px] lg:h-full'>
            <UsersTable users={mockUsers}/>
        </div>
    );
};

export default ColSpan7;