import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
const [user,setUser]=useState([])
const fetchUser =async (data)=> {
try{
const res = await axios.get('https://testaoron.limsa.uz/api/product?page=1&limit=10&min_sell=2',data)
console.log(res.data.data.products);
setUser(res.data.data.products)
}
catch(error){
console.log(error);
}
}
useEffect(()=>{
fetchUser()
},[])
return (
<div>
  <div className="">
    <div className="flex justify-between px-[10px] pt-[20px] items-center mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">Mahsulot Kategoriyalari</h2>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        Yangisini qo'shish
      </button>
    </div>
    <table>
      <thead className="bg-green-600 text-white text-sm uppercase">
        <tr>
          <th className='w-[2px] px-3 py-3 text-center'>№</th>
          <th className='px-6 py-3 text-center'>Images</th>
          <th className='px-6 py-3 text-center'>Title</th>
          <th className='px-6 py-3 text-center'>Description</th>
          <th className='px-2 py-3 text-center'>Price</th>
          <th className='px-3 py-3 text-center'>Category</th>
          <th className='px-3 py-3 text-center'>Colors</th>
          <th className='px-3 py-3 text-center'>Sizes</th>
          <th className='px-6 py-3 text-center'>Discount</th>
          <th className='px-6 py-3 text-center'>Materials</th>
          <th className='px-6 py-3 text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((item,index)=>(
          <tr className="border-2 border-[#c8c8c8] w-[2px]  px-6 py-4" key={item.id}>
            <td className="border-2 border-[#c8c8c8]  px-3 py-4">{index+1}</td>
            <td>
              {
                item.imeges&&item.imeges.length > 0 ? (
                  <img src={`https://testaoron.limsa.uz/${item.images[0]}`} alt="Photo" />
                ):("No image")
              }
            </td>
            <td className="border-2 border-[#c8c8c8]  px-4 py-4 text-center">{item.title_en}</td>
            <td  className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">{item.description_en}</td>
            <td className="border-2 border-[#c8c8c8]  px-2 py-4 text-center">{item.price}</td>
            <td className="border-2 border-[#c8c8c8]  px-3 py-4 text-center">{item.category.name_en}</td>
            <td className="border-2 border-[#c8c8c8]  px-3 py-4 text-center">
              {<div>{item.colors.map(c => c.color_en).join(", ")}</div>}</td>
            <td className="border-2 border-[#c8c8c8]  px-3 py-4">
            {item.sizes?.map((size, index) => (<div key={index}>{size.size}</div>))}
            </td>
            <td className="border-2 border-[#c8c8c8]  px-6 py-4">
            {item.discount && item.discount.discount > 0
                ? `${item.discount.discount}%`
              : "No Discount"}
            </td>
            <td className="border-2 border-[#c8c8c8]  px-6 py-4">
            {item.materials ? Object.entries(item.materials).map(([key, value], index) => (
          <div key={index}>
            {key}: {value}%
          </div>
        )
      )
    : "No Material Info"}
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</div>
)
}

export default Products