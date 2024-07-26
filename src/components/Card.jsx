import React from 'react'
import { useState } from 'react';
// onlciking at button on card, change the props value on card i.e on UI.

function Card({username, btnText="visit me", param1={name:"vikas" , age:43}, newArr}) {
   // console.log("props::", props);
  //  console.log(username);
  //  console.log(btnText);

const [umar ,setUmar] = useState(param1.age);

const handlesubmit =(e) =>{
  e.preventDefault();
// console.log("button is clicked");
// console.log("vakue of umar :", umar);
setUmar(umar+1);

}
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      
      here is the name : {param1.name} , the age is : {param1.age}, this age is static as it is getting passed from props and umar is {umar} this is increasing on clicking submit btn, and last paramter of array: {newArr}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
    onClick={handlesubmit}>
     {btnText} →
    </button>
  </div>
</div>
  )
}

export default Card