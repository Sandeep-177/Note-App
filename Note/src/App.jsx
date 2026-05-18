
import { useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [firstInput,setFirstinput]=useState('');
  const [secondInput,setSecondinput]=useState('');
  const [datas,setDatas]=useState([]);
  function go(e) {
    e.preventDefault();
  setDatas([...datas,{title:firstInput, description:secondInput}])


  setFirstinput('');
  setSecondinput('');
 }

  return (
    <>
      <section id="center" className='flex flex-col items-center border p-5 rounded-2xl inset-shadow-amber-900 gap-4 m-auto mb-16'>
        <h1>Creating Note</h1>
        <form onSubmit={go} className='flex flex-col gap-4'>
        <input className='border text-white p-2 w-3xs' type="text" value={firstInput} onChange={(e)=>{
          setFirstinput(e.target.value);
        }} placeholder='Enter title' required/>
        <textarea className='resize-none border text-white h-28 py-2 px-2  w-3xs' type="text" value={secondInput} onChange={(e)=>{
          setSecondinput(e.target.value);
        }} placeholder='Description' required></textarea>
        {/* <input className='border text-white py-10 px-2 w-3xs' type="text" value={secondInput} onChange={(e)=>{
          setSecondinput(e.target.value);
        }} placeholder='Description' required/> */}
        <button className='bg-blue-600 p-3 transform transition-transform duration-150 active:scale-95 rounded text-2xl font-semibold' >Create</button>
        </form>
        
      </section>

      <div className='m-[10%] flex flex-wrap gap-7
      '>
      {/* {
        datas && (<Card data={datas} />)
      } */}
      <Card data={datas} />
      </div>
    </>
  )
}

export default App
