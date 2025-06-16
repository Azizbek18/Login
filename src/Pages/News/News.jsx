import axios from 'axios'
import React, { useEffect, useState } from 'react'

function News() {
const[user,setUser]=useState([])
const fetchUser = async (data)=>{
try{
const res = await axios.get('https://testaoron.limsa.uz/api/news',data)
setUser(res.data.data);
console.log(res.data.data);
1
}
catch(error){
console.log(error);
}
}
useEffect(()=>{
fetchUser()
},[])
return (
<div className="p-4">
  <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
    <div className="flex justify-between px-[10px] pt-[20px] items-center mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">Mahsulot Kategoriyalari</h2>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        Yangisini qo'shish
      </button>
    </div>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-green-600 text-white text-sm uppercase">
        <tr>
          <th className="px-6 py-3 text-center">№</th>
          <th className="px-6 py-3 text-center">Image</th>
          <th className="px-6 py-3 text-center">Title (EN)</th>
          <th className="px-6 py-3 text-center">Description</th>
          <th className=" px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-center">
        {user.map((item,index) => (
        <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
          <td className="w-[2px] border-2 border-[#c8c8c8]  px-6 py-4">{index + 1}</td>
          <td className="w-[10%] border-2 border-[#c8c8c8] px-6 py-4">
            <img className='w-[400px] h-[100px] rounded-[15px]' src={`https://testaoron.limsa.uz/${item.image}`} alt="Rasm" />
          </td>
          <td className="w-[25%] border-2 border-[#c8c8c8] px-6 py-4">{item.title_en}</td>
          <td
            className="w-[35%] border-2 border-[#c8c8c8] px-6 py-4 max-w-[200px] truncate whitespace-nowrap overflow-hidden">
            {item.description_en}
          </td>
          <td className="border-2 border-[#c8c8c8] p-2 space-x-3 text-center">
            <button className="bg-yellow-400 text-white px-5 py-[5px] rounded hover:bg-yellow-500">
              Edit
            </button>
            <button className="bg-red-500 text-white px-5 py-[5px] rounded hover:bg-red-600">
              Delete
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
)
}

export default News