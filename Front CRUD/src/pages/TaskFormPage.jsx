import React from 'react'
import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {

  const {register, handleSubmit, formState:{errors}, setValue} = useForm();

  const navigate = useNavigate(); 
  const params = useParams();

  const load_task = async () => {
    if(params.id) {
      const res = await getTask(params.id);
      setValue('title', res.data.title);
      setValue('description', res.data.description);
    }
  }

  useEffect(() => {
    load_task();
  
  }, [])

  const onSubmit = handleSubmit(async (data) => {

    if(params.id) {
      await updateTask(params.id, data);
      toast.success('Task updated', {position:'bottom-right', style:{backgroundColor:'black', color:'white'}, icon:'✨'});
    }
    else{
      await createTask(data);
      toast.success('New task added', {position:'bottom-right', style:{backgroundColor:'black', color:'white'}, icon:'👏'});
    }
    navigate('/tasks');
    
  })

  
    

  return (
   <>
    <form onSubmit={onSubmit} className='flex flex-col items-center space-y-4 mt-5'>
  <input
    type="text"
    placeholder="Title"
    {...register('title', { required: true })}
    className='p-2 rounded-lg border border-gray-300'
  />
  {errors.title && <span className='text-red-500'>This field is required</span>}

  <textarea
    placeholder="Description"
    rows="3"
    {...register('description', { required: true })}
    className='p-2 rounded-lg border border-gray-300'
  ></textarea>
  {errors.description && <span className='text-red-500'>This field is required</span>}
  <button
    type='submit'
    className='bg-green-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-800 transition duration-300'
  >
    Save
  </button>
</form>

{params.id && (
  <button
    className='bg-red-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-800 transition duration-300'
    onClick={async () => {
      const accepted = window.confirm('Are you sure?');
      if (accepted) {
        await deleteTask(params.id);
        toast.success('Task deleted', {
          position: 'bottom-right',
          style: { backgroundColor: 'black', color: 'white' },
          icon: '🐱‍👤'
        });
        navigate('/tasks');
      }
    }}
  >
    Delete
  </button>
)}
   </>
  )
}
