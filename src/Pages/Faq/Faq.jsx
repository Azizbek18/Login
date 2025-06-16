import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Faq() {
const [user,setUser]=useState([])
const fetchUser = async (data) =>{
try{
const res = await axios.get('https://testaoron.limsa.uz/api/faq',data)
console.log(res.data.data);
setUser(res.data.data)
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
    <div className="px-[20px]">
      <div className="flex justify-between px-[10px] pt-[20px] items-center ">
        <h2 className="text-2xl font-semibold text-gray-800">FAQ Management</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Add Faq
        </button>
      </div>
      {
    user.length === 0 ? (
    <div className="flex justify-center items-center py-[60px] flex-col ">
      <img className='w-[120px] h-[120px]' src="/error.png" alt="Sayt logosi" />
      <p className='py-[10px]'>No Data Available</p>
    </div>
    ):(jdj)
    }
    </div>
    
  </div>
</div>
)
}

export default Faq