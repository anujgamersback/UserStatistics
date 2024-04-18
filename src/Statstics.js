import React, { useState } from "react";
import Table from './Table';
import dummyData from "./dummyData";
import WeaponFilters from "./WeaponFilters";


const Tasks = () => {

    return (
        <div className='w-full'>
            {/* <div className='flex items-center justify-between mb-4'> */}
            <div className="bg-gray-800 text-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                    <img src="./chart.png" alt="Valorant" className="w-8 h-8 rounded-full mr-4" />
                    <h2 className="text-lg font-semibold">Game statistics</h2>
                </div>
                <p className="text-sm ml-2">View map win rates and play rates for any rank or game mode.</p>
                <div className="flex ml-0">
                    <button className=" text-white font-bold py-2 px-4 rounded mr-2 hover:border-b-4 hover:border-blue-500">
                        Maps
                    </button>
                    <button className=" text-white font-bold py-2 px-4 rounded mr-2 hover:border-b-4 hover:border-blue-500">
                        Agents
                    </button>
                    <button className=" text-white font-bold py-2 px-4 rounded hover:border-b-4 hover:border-blue-500">
                        Weapons
                    </button>
                </div>
            </div>
            {/* </div> */}
            <div className='w-full'>
                {/* <WeaponFilters /> */}
                <Table datas={dummyData} />
            </div>
        </div>
    );
};

export default Tasks;