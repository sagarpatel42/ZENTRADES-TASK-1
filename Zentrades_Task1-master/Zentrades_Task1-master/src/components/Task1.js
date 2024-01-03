import axios from "axios";
import React, { useEffect, useState } from "react";

const TableDisplay = () => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const response = await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const sortDataByPopularity = () => {
        const sortedData = Object.values(data.products).sort((a, b) => b.popularity - a.popularity);
        setData({
            ...data,
            "products": sortedData
        })
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-start items-center w-full p-5">
            <div className="text-2xl font-semibold w-full flex justify-center">
                Task 1
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="font-semibold mb-2">Data</h1>
                    <button onClick={sortDataByPopularity} className="bg-blue-400 hover:bg-blue-600
        text-white py-2 px-4 rounded shadow-lg">Sort by Popularity</button>
                </div>
                <div>
                    <div className="relative overflow-x-auto shadow-lg rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Sub Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Popularity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { data.products && Object.keys(data.products).map((value, key) => (
                                    <tr className="bg-white border-b" key={key}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {data.products[value].title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.products[value].subcategory}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.products[value].popularity}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.products[value].price}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableDisplay



