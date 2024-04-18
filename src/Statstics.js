import React, { useState } from "react";
import Table from './Table';
import dummyData from "./dummyData";


const Tasks = () => {

    return (
        <div className='w-full'>
            {/* <div className='flex items-center justify-between mb-4'> */}
            <div className="bg-gray-800 text-white p-4 rounded-lg">
                <div className="flex items-center">
                    <i className="fas fa-chart-line mr-2"></i>
                    <h2 className="text-lg font-semibold">Game statistics</h2>
                </div>
                <p className="text-sm mb-4">View map win rates and play rates for any rank or game mode.</p>
                <div className="flex">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Maps
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2">
                        Agents
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                        Weapons
                    </button>
                </div>
            </div>
            {/* </div> */}
            <div className='w-full'>
                <Table datas={dummyData} />
            </div>
        </div>
    );
};

export default Tasks;