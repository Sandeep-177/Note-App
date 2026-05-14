export default function Card({data}){
    return(
        <>
        <div className="w-60 h-60 border">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
        </>
    )
}