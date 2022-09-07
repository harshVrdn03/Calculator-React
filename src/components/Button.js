import React from 'react'
const Button = ({value,setinput,input, setprev}) => {

    const cal=(a)=>{
        if(a=== "="){
         let result = Function("return " + input)();
         setprev(input);
         setinput(result);
        }
        else if(a=== "+/-"){
            setinput(input.slice(0, -1));
        }
        else if(a=== "C"){
            setinput("");
            setprev("");
        }
        else{
            setinput(input+a);

        }

    }
  return (
    <div className={`text-center flex justify-center items-center hover:opacity-60 ${value.color?"bg-orange-600":"bg-white"} ${value.text==="="?"col-start-3 col-end-5":""}`} onClick={() => cal(value.text)}> 
        {value.text}
    </div>
  )
}

export default Button