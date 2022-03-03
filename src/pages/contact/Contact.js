import React, { useEffect, useRef, useState } from "react";
import './Contact.css'
import Button from '../../components/Button'

const Contact = ()=> {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [errors, setErrors] = useState ({});
    const refName = useRef(null);

    const nameChangeHandler =(event)=> {
        setName(event.target.value); 
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const emailChangeHandler =(event)=> {
        if (validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email : null,
            })
        }else{
            setErrors({
                ...errors,
                email : 'Invalid Email!',
            })
        }
    }

    const requestChangeHandler =(event)=> {
        setRequest(event.target.value); 
    }

    const submitHadler =()=> {
        console.log(name);
        console.log(email);
        console.log(request);
        if (!name){
            alert('Name cont not be empty!');
        }else if(!email){
            alert('Email cont not be empty!');
        }else if(!request){
            alert('Please do not leave the request field empty.');
        }else{
            alert(`Hi ${name},
            Your message has been received.
            We will contact you as soon as possible.`);
            document.getElementById('name').value = "";
            setName('');
            document.getElementById('email').value = "";
            setEmail('');
            document.getElementById('request').value = "";
            setRequest('');
        }
        
    }

    useEffect(()=>{
        refName.current.focus();
    }, [])

    return(
        <div className="Contact">

            <div className="formControl">
                <h3>If you have a question or request, please fill in the fields below.</h3>
            </div>

            <div className="formControl">
                <input id="name" ref={refName} onChange={nameChangeHandler} type="text" placeholder="Name" />
            </div>

            <div className="formControl">
                <input id="email" onChange={emailChangeHandler} type="email" placeholder="Email Address" />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="formControl">
                <textarea id="request" onChange={requestChangeHandler}>Wrire your request here...</textarea>
            </div>

            <div className="formControl">
                <Button onclickHandler={submitHadler}>Submit</Button>
            </div>
            
        </div>
    )
}
export default Contact;