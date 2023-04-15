import React from 'react'
import { useState } from 'react'
import axios from 'axios'
  
export const Newsletter = () => {

  const [email, setEmail] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(email);
     const data={
      Email:email
     }
     axios.post('https://sheet.best/api/sheets/dbd8632e-c20c-43da-a224-237f376cee18',data).then((response)=>{
     //console.log(response);
     // clearing form fields
     setEmail('');
     })
  }

  
  return ( 
    <>
    <div>
      
    <form className='form relative block' onSubmit={handleSubmit}>
        <fieldset>
            <div className='flex xm:flex-col md:flex-row py-[4rem] justify-center items-center gap-[4rem]'>
                <div className='flex-1'>
                    <h3 className='text-center text-3xl'>Suscríbete</h3>
                    <p className='text-center py-[1rem] px-[1rem]'>No pierdas oportunidad de obtener la valiosa información que tenemos para tí y para tus niños</p>
                </div>
                <div className='flex-1 flex flex-row'>
                    <input id="email" name="email" type="email" className='block xm:basis-[50%] md:basis-[70%] rounded-l-[0.5rem] py-[1rem] px-[2rem] xm:w-[50%] md:w-[90%]' placeholder='tuemail@email.com' required onChange={(e)=>setEmail(e.target.value)} value={email} />
                    <button type='submit' className='block flex-1 bg-[var(--color-button-one)] py-[1rem] px-[1rem] rounded-r-[0.5rem] text-white font-bold tracking-[var(--ls-body)]xm:basis-[50%] md:basis-[30%] xm:w-[50%] md:w-[10%] '>Suscribirse</button>
                </div>
            </div>
        </fieldset>
    </form>
    </div>
    </>
  )
}
