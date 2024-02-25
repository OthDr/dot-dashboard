import React from 'react'
import BarChart from '../../components/charts/BarChart'
import CalendarChart from '../../components/charts/CalendarChart';
import PieChart from '../../components/charts/PieChart';

const Home = () => {
    return (
        <div className=' min-h-screen bg-white p-8'>
            <div className="w-full flex flex-col gap-4 lg:gap-10">
                <div className="grid grid-cols-3 gap-x-6 h-[30vh]">
                    <div className="hover:bg-slate-100 duration-150 p-2 border border-slate-200 rounded-md">
                        <PieChart />
                    </div>
                    <div className="hover:bg-slate-100 duration-150 p-2 border border-slate-200 rounded-md">
                        <PieChart />
                    </div>
                    <div className="hover:bg-slate-100 duration-150 p-2 border border-slate-200 rounded-md">
                        <PieChart />
                    </div>
                </div>
                <div className="grid grid-cols-2 h-[50vh] divide-x divide-slate-200">
                    <CalendarChart />
                    <BarChart />
                </div>
            </div>
        </div>
    )
};

export default Home