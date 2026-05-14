
import { useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [firstInput,setFirstinput]=useState('');
  const [secondInput,setSecondinput]=useState('');
  // const [datas,setDatas]=useState(null);
  function go(e) {
    e.preventDefault();
  // setDatas({dat1:{firstInput}, dat2:{secondInput}})

  setFirstinput('');
  setSecondinput('');
 }

  return (
    <>
      <section id="center" className='flex flex-col border p-5 rounded-2xl inset-shadow-amber-900 gap-4 m-auto'>
        <h1>Creating Note</h1>
        <form onSubmit={go} className='flex flex-col gap-4'>
        <input className='border text-white p-2 w-3xs' type="text" value={firstInput} onChange={(e)=>{
          setFirstinput(e.target.value);
        }} placeholder='Enter title'/>
        <input className='border text-white py-10 px-2 w-3xs' type="text" value={secondInput} onChange={(e)=>{
          setSecondinput(e.target.value);
        }} placeholder='Description'/>
        <button className='bg-blue-600 p-3' >Create</button>
        </form>
        
      </section>
      
    </>
  )
}

export default App
