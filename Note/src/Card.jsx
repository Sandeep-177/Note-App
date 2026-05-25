export default function Card({data}){
    return(
        <>
       {
        data.map((n)=>{
            return(
             <div className="bg-no-repeat w-full h-60 border bg-[url('./NoteImg.webp')] bg-center bg-cover rounded-xl">
            
            <h1 className="wrap-break-word">{n.title}</h1>
            <p className="wrap-break-word">{n.description}</p>
        </div>
        )
        })
       }
        </>
    )
}