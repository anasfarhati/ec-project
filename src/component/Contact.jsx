
import React, { useState } from 'react'


const Contact = () => {
    const [email, Setemail] = useState("")
    const [subject, Setsubject] = useState("")
    const [message, Setmessage] = useState("")
    const sendemail=async ()=>{
        var data = {email,subject,message}
         const res =  await fetch("/user/mail",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                Accept: "application/json",
          "Content-Type": "application/json",
            }
         })
        .then((res)=>{
            console.log(res)
            if(res.status>199 ){
                
                  alert('Email Sent Successfully') 
            }
        })
        console.log(res)
    }
    
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img  alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">subject </label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="subject " onChange={(e)=>Setsubject(e.target.value)}/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>Setemail(e.target.value)}/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>Setmessage(e.target.value)}></textarea>
                                </div>
                                <button onClick={sendemail} type="submit" class="btn btn-outline-primary">Send Message </button>
                        
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact ;
