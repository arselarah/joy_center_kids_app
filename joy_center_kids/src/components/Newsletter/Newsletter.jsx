import React from 'react'
import { useState } from 'react'
import axios from 'axios'
  
export const Newsletter = () => {

  const [email, setEmail] = useState('');
  const msg = document.getElementById('msg');

  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(email);
     const data = {
      Email: email
     }
     console.log(data)
     axios.post('https://sheet.best/api/sheets/1dbe9b30-adb2-4ba8-bc5d-bc73a63f6962',data).then((response)=>{
      console.log(data);
       console.log(response);
     //console.log(response);
     // clearing form fields
     msg.innerHTML = "Gracias por suscribirte. Pronto recibirás toda la información en tu email"
     setTimeout(function(){
      msg.innerHTML = ""
     }, 2000)
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
                <div className='flex-1 flex flex-row relative'>
                    <input id="email" name="email" type="email" className='block xm:basis-[50%] md:basis-[70%] rounded-l-[0.5rem] py-[1rem] px-[2rem] xm:w-[50%] md:w-[90%]' placeholder='tuemail@email.com' required onChange={(e)=>setEmail(e.target.value)} value={email} />
                    <button type='submit' className='block flex-1 bg-[var(--color-button-one)] py-[1rem] px-[1rem] rounded-r-[0.5rem] text-white font-bold tracking-[var(--ls-body)]xm:basis-[50%] md:basis-[30%] xm:w-[50%] md:w-[10%] hover:bg-[#106bf4] duration-500'>Suscribirse</button>
                <span id="msg" className='absolute bottom-[-3rem] block text-center w-[100%] font-bold tracking-[var(--ls-body)]'></span>
                </div>
            </div>
        </fieldset>
    </form>
    </div>
    </>
  )
}
