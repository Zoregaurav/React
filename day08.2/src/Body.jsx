import Card from "./Card";


const items=[
    {id:1,name:"Apple",price:200},
    {id:2,name:"Orange",price:100},
    {id:3,name:"Tinde",price:2000},
    {id:4,name:"Egg",price:800},
    {id:5,name:"Mutton",price:800},
    {id:6,name:"Panner",price:200}
]


function Body(){
    return(
        <>
            <h1>We have all items here in blinkit</h1>
            <ul>
                <li>Electronics</li>
                <li>Beauty</li>
                <li>Fruits</li>
                <li>Vegetables</li>
            </ul>

          <div style={{display:"flex",justifyContent:"center",gap:"30px",flexWrap:"wrap"}}>
            {
                items.map((item)=>{
                    return <Card item={item}></Card>
                })
            }
            </div>  
        </>
    )
}

export default Body;