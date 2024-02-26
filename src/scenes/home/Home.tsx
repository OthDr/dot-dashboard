import React from 'react'
import BarChart from '../../components/charts/BarChart'
import PieChart from '../../components/charts/PieChart';

const Home = () => {
    return (
        <div className=' min-h-screen bg-white p-8'>
            <div className="w-full flex flex-col gap-4 lg:gap-10">
                <div className="grid lg:grid-cols-3 gap-x-6 gap-y-4 h-[80vh] lg:h-[30vh]">
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
                <div className="grid lg:grid-cols-2 h-[75vh] lg:h-[50vh] lg:divide-x divide-slate-200">
                    
                    <BarChart />
                </div>
            </div>
        </div>
    )
};

export default Home