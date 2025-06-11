
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Login() {
  const {register, handleSubmit,reset}=useForm()
  const navigate = useNavigate();
  const [loading,setLoading]= useState(false);
  const Login = async (data) =>{
    setLoading(true)
      try{
        const res = await axios.post("https://testaoron.limsa.uz/api/auth/login",data);
        const token = res?.data?.data?.access_token;
    const success = res?.data?.success;

    console.log("Token:", token);
    console.log("Success:", success);
        
        if (res?.data?.success) {
          localStorage.setItem("token",res?.data?.data?.access_token);
          reset();
          navigate('/');
        }
        else{
          alert(res?.data?.message || "Login yoki parolda xatolik");
        }
      } catch (error) {
        alert(res?.data?.message || "Login yoki parolda xatolik");
        console.log(error);
      } finally{
        setLoading(false)
      }
  }
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
           Login
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Ims kiriting</label>
            <input
              {...register('login')}
              type='text'
              placeholder="Ismingizni kiriting"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              {...register('password')}
              type="password"
              placeholder="Parolingizni kiriting"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            onClick={handleSubmit(Login)}
            disabled={loading}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {loading?'Yuborilmoqda...':'Yuborish'}
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login