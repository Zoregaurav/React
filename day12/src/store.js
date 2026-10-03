
// export let count=0;
// export let user="Rohit";
// export let hell="Mohan";


import {create} from 'zustand';


export const useStore=create(()=>({
    count:0,
    user:"Rohit",
    number:10,
    setUser:()=>{
       set({user:"Mohit"});
    },
     setCount:()=>{
      set((state)=>({
        count:state.count+1,
      }))
     },
     
     setNumber:()=>{
         set({number:30})
     }
      
}))