import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Team() {
  const [users,setUsers] = useState([]);
  const fetchUsers = async ()=>{
    try{
      const res = await axios.get("https://testaoron.limsa.uz/api/team-section");
      console.log(res.data.data);
      setUsers(res.data.data)
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    console.log("Ishlayapti");
    
    fetchUsers();
  },[])
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Team Jadvali</h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border p-3">№</th>
            <th className="border p-3">Images</th>
            <th className="border p-3">Full Name</th>
            <th className="border p-3">Position</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border p-3">{index + 1}</td>
              <td className="border p-3">
                <img
                  src={`https://testaoron.limsa.uz/${user.image}`}
                  alt={user.full_name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border p-3">{user.full_name}</td>
              <td className="border p-3">{user.position_en}</td>
              <td className="border p-2 space-x-3 text-center">
                <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Team