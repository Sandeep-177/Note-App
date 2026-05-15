export default function Card({data}){
    return(
        <>
       {
        data.map((n)=>{
            return(
             <div className="w-60 h-60 border">
            <h1>{n.title}</h1>
            <p>{n.description}</p>
        </div>
        )
        })
       }
        </>
    )
}