import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast }  from 'react-hot-toast';
import { Link } from 'react-router-dom';

export function RegisterPage() {

    const {register, handleSubmit, formState:{errors}, setValue} = useForm();

  const navigate = useNavigate(); 



  const onSubmit = handleSubmit(async (data) => {

    navigate('/tasks');
    toast.success('Successful Login', {position:'bottom-right', style:{backgroundColor:'black', color:'white'}, icon:'✨'});
    
  })

  return (
    
    <>
    <form onSubmit={onSubmit} className='flex flex-col items-center space-y-4 mt-5'>
  <input
    type="text"
    placeholder="email"
    {...register('email', { required: true })}
    className='p-2 rounded-lg border border-gray-300 w-[250px]'
  />
  {errors.title && <span className='text-red-500'>This field is required</span>}

  <input
    type="password"
    placeholder="password"
    {...register('password', { required: true })}
    className='p-2 rounded-lg border border-gray-300 w-[250px]'
  />
  {errors.title && <span className='text-red-500'>This field is required</span>}

  <button
    type='submit'
    className='bg-green-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-800 transition duration-300'
  >
    Login
  </button>
</form>
    <p className=' text-center mt-4 font-bold text-white'>Do you already have an account? <Link className=' text-yellow-300' to="/login">Sing in</Link></p>
</>

  )
}
