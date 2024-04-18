import React from "react";


const Table = ({ datas}) => {

    const TableHeader = () => (
        <thead className='w-full border-b border-gray-300'>
            <tr className='w-full text-black  text-left'>
                <th className='py-2'>Rank</th>
                <th className='py-2'>Agent</th>
                <th className='py-2'>KD</th>
                <th className='py-2'>KDA</th>
                <th className='py-2'>Win %</th>
                <th className='py-2'>Pick %</th>
                <th className='py-2'>Avg Score</th>
                <th className='py-2'>First Blood %</th>
                <th className='py-2'>Matches</th>
            </tr>
        </thead>
    );

    const TableRow = ({data}) => (
        <tr className='border-b border-gray-200 text-gray-600 hover:bg-gray-300/10'>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data.Rank}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data.Agent}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data.KD}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data.KDA}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data["Win %"]}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data["Pick %"]}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data["Avg Score "]}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data["First Blood %"]}
                    </span>
                </div>
            </td>

            <td className='py-2'>
                <div className={"flex gap-1 items-center"}>
                    <span className='capitalize line-clamp-1'>
                        {data.Matches}
                    </span>
                </div>
            </td>


        </tr>
    );
    return (
        <>
            <div className='bg-white  px-2 md:px-4 pt-4 pb-9 shadow-md rounded'>
                <div className='overflow-x-auto'>
                    <table className='w-full '>
                        <TableHeader />
                        <tbody>

                        {datas && datas.map((data,index) => (
                                <>
                                    <TableRow key={index} data={data}/>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default Table;