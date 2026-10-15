



function Forms(){
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

   console.log("render");

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        console.log(age);
        console.log(email);
        console.log(password);
    }

}


return (
    <>
    <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
         <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <button type="submit">Submit</button>
    </form>
   </>
)


export default Forms;