import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Category() {
  const [user,setUser]= useState([]);

const fetchUsers = async(data) => {
try{
const res = await axios.get("https://testaoron.limsa.uz/api/category",data);
setUser(res?.data?.data);
}
catch(error){
console.log(error);
}
}
useEffect(()=>{
fetchUsers()
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
          <th className="px-6 py-3 text-center">ID</th>
          <th className="px-6 py-3 text-center">Inglizcha (EN)</th>
          <th className="px-6 py-3 text-center">Ruscha (RU)</th>
          <th className="px-6 py-3 text-center">Nemischa (DE)</th>
          <th className=" px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-center">
        {user.map((item,index) => (
        <tr key={item.id} className="hover:bg-gray-50 transition duration-200">
          <td className="border-2 border-[#c8c8c8]  px-6 py-4">{index + 1}</td>
          <td className="border-2 border-[#c8c8c8] px-6 py-4">{item.name_en}</td>
          <td className="border-2 border-[#c8c8c8] px-6 py-4">{item.name_ru}</td>
          <td className="border-2 border-[#c8c8c8] px-6 py-4">{item.name_de}</td>
          <td className="border-2 border-[#c8c8c8] p-2 space-x-3 text-center">
          <button className="bg-yellow-400 text-white px-5 py-[5px] rounded hover:bg-yellow-500">
            Edit
          </button>
          <button  className="bg-red-500 text-white px-5 py-[5px] rounded hover:bg-red-600">
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

export default Category