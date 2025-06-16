import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { API } from '../../API/api';

function Team() {

const [users,setUsers] = useState([]);
const [loading,setLoading]=useState(false);
const [isModalOpen,setIsModalOpen] = useState(false)
const {register,handleSubmit,reset,setValue}= useForm();
const [successMessage, setSuccessMessage] = useState("");
const [editMode, setEditMode] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);
const [deleteModalOpen, setDeleteModalOpen] = useState(false);
const [deleteUserId, setDeleteUserId] = useState(null);

const handleEdit = (user)=>{
setSelectedUser(user);
setEditMode(true)
setValue("full_name",user.full_name)
setValue("position_de",user.position_de)
setValue("position_ru",user.position_ru)
setValue("position_en",user.position_en)
setIsModalOpen(true);
}

const onSubmit = async (data) => {
setLoading(true);
try {
const formData = new FormData();
if (image) {
formData.append('file', data.image[0]);
}
formData.append('full_name', data.full_name);
formData.append('position_de', data.position_de);
formData.append('position_ru', data.position_ru);
formData.append('position_en', data.position_en);


const token = localStorage.getItem("token");

const res = await axios.post(
"https://testaoron.limsa.uz/api/team-section",
formData,
{
headers: {
Authorization: `Bearer ${token}`,
}
}
);

if (res?.data?.success) {

fetchUsers(); // yangilash
reset();
setIsModalOpen(false);
setSuccessMessage("Ma'lumotlar muvaffaqiyatli qo'shildi!");
setTimeout(() => {
setSuccessMessage("");
}, 3000);
} else {
alert("Ma'lumot qo'shilmadi");
}
} catch (err) {
console.error(err);
alert("Xatolik yuz berdi");
} finally {
setLoading(false);
}
}
const fetchUsers = async ()=>{
setLoading(true)
try{
const res = await API.get("https://testaoron.limsa.uz/api/team-section");
console.log(res?.data?.data);
setUsers(res?.data?.data)
}
catch(error){
console.log(error);
} finally{
setLoading(false)
}
}
useEffect(()=>{
fetchUsers()
},[])


const openModal = ()=>{
setEditMode(false);
setSelectedUser(null)
reset();
setIsModalOpen(true)
}

return (
<div className="p-6">
  <div  className="overflow-x-auto shadow-lg rounded-2xl bg-white">
    <div className='flex justify-between py-[10px] px-[20px] pt-[20px] items-center '>
      <h2 className="text-2xl font-bold ">Team Members</h2>
      <button onClick={openModal} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ">
        Add Team Member
      </button>
    </div>
    <div className="px-[20px] py-[30px]">
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className='bg-green-600 text-white text-sm uppercase'>
        <tr>
          <th className="border-2 border-green-600 py-3">№</th>
          <th className="border-2 border-green-600 py-3">Images</th>
          <th className="border-2 border-green-600 py-3">Full Name</th>
          <th className="border-2 border-green-600 py-3">Position</th>
          <th className="border-2 border-green-600 py-3">Actions</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {loading?(
        <tr>
          <td colSpan={5}>
            <div className='flex justify-center items-center h-[200px]'>
              <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            </div>
          </td>
        </tr>
        ):users.map((user, index) => (
        <tr key={user .id} className={index % 2===0 ? 'bg-gray-100' : '' }>
          <td className=" border-2 border-[#c8c8c8] p-3">{index + 1}</td>
          <td className=" border-2 border-[#c8c8c8] p-3">
            <img src={`https://testaoron.limsa.uz/${user.image}`} alt={user.full_name}
              className="w-16 h-16 object-cover rounded" />
          </td>
          <td className="border-2 border-[#c8c8c8] p-3">{user.full_name}</td>
          <td className="border-2 border-[#c8c8c8] p-3">{user.position_en}</td>
          <td className="border-2 border-[#c8c8c8] p-2 space-x-3 text-center">
            <button onClick={()=>handleEdit(user)} className="bg-yellow-400 text-white px-5 py-[5px] rounded
              hover:bg-yellow-500">
              Edit
            </button>
            <button onClick={()=> handleDeleteClick(user.id)} className="bg-red-500 text-white px-5 py-[5px] rounded
              hover:bg-red-600">
              Delete
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  {isModalOpen && (
  <div className="fixed inset-0 bg-[#00000067] bg-opacity-30 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
      <h2 className="text-2xl font-bold mb-4">Add Team Member</h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input {...register('full_name')} type='text' required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block font-medium mb-1">Position (English)</label>
          <input {...register('position_en')} type='text' required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block font-medium mb-1">Position (Russian)</label>
          <input {...register('position_ru')} type='text'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block font-medium mb-1">Position (German)</label>
          <input {...register('position_de')} type='text'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input {...register('image')} type='file'
            className="w-full px-4 py-2 border rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-gray-100" />
        </div>

        <button type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
          Add Team Member
        </button>
      </form>

      <button onClick={()=> setIsModalOpen(false)}
        className="absolute top-2 right-2 text-black w-8 h-8 rounded-full flex justify-center items-center text-xl
        font-bold">
        ×
      </button>
    </div>
  </div>
  )}
  {successMessage && (
  <div
    className="fixed top-5 right-120 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
    {successMessage}
  </div>
  )}
  {deleteModalOpen && (
  <div className="fixed inset-0 bg-[#00000067] bg-opacity-30 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">O'chirishni xohlaysizmi?</h2>
      <p className="mb-6">Siz rostdan ham ushbu a'zoni o'chirmoqchimisiz?</p>
      <div className="flex justify-end space-x-3">
        <button onClick={()=> setDeleteModalOpen(false)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
          Yo‘q
        </button>
        <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Ha, o‘chirish
        </button>
      </div>
    </div>
  </div>
  )}
</div>
)
}

export default Team