export default function Card({data}){
    return(
        <>
       {
        data.map((n)=>{
            return(
             <div className="w-60 h-60 border bg-[url('https://www.bing.com/images/search?view=detailV2&ccid=hPvNslzw&id=65CC0D543FD19E86BB64E49B6FCA87D3E99A3DB6&thid=OIP.hPvNslzw-n1EAZhP6wg_-gAAAA&mediaurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20210331%2Fourmid%2Fpngtree-yellow-line-list-cartoon-label-paper-png-image_3183677.png&exph=360&expw=360&q=note+paper&form=IRPRST&ck=458C1CDC04ABC4ADAC5B0F35815433CB&selectedindex=6&itb=0&cit=ccid_VhnMqmKr*cp_99CD57E6AC3EE7331A73C2C8561ACD61*mid_F070B910590F68AEF94CBA8E8DF6E490CC9B146B*thid_OIP.VhnMqmKr1HPlzHmvwQbemAAAAA&vt=2&sim=11')] rounded-xl">
            <h1 className="wrap-break-word">{n.title}</h1>
            <p className="wrap-break-word">{n.description}</p>
        </div>
        )
        })
       }
        </>
    )
}