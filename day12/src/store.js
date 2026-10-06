
// export let count=0;
// export let user="Rohit";
// export let hell="Mohan";


import {create} from 'zustand';


export const useStore=create((set)=>({
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
     setNumber:(value)=>{
         set((state)=> ({
            number:state.number+value,
         }))
     }
      
}))