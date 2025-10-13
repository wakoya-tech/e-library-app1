import { useState } from "react"

const useLocalStorage=(key,initialValue) =>{
    const [value,setValue]=useState(()=>{
        try{
const localValue=window.localStorage.getItem(key)
       return localValue ? JSON.parse(localValue): initialValue;

}catch(err){
return initialValue
        }
    })
  return [value,setValue];
}

export default useLocalStorage