import './App.css'

function App() {
 

  return (
    <>
      <section id="center" className='flex flex-col border p-5 rounded-2xl inset-shadow-amber-900 gap-4 m-auto'>
        <h1>Creating Note</h1>
        <input className='border text-white p-2 w-3xs' type="text" placeholder='Enter title'/>
        <input className='border text-white py-10 px-2 w-3xs' type="text" placeholder='Description'/>
        <button className='bg-blue-600 p-3'>Create</button>
        
      </section>
    </>
  )
}

export default App
