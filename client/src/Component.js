import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Component() {
  const[text,setText]=useState();
    useEffect(()=>
    {
        axios("api/data").then(res=>
            {
                setText(res.data.message);
            });
    })
  return (

    <div>
   <h1>{text}</h1>
    </div>
  )
}
