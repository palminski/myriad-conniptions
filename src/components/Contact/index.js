import {useState} from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    
    function validateEmail(email){
        const regEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return regEx.test(String(email).toLowerCase());
    }

    const [errorMessage,setErrorMessage] = useState("")
    const [formState, setFormState] = useState({name:"",email:"", message:""});
    const {name,email,message} = formState;
    function handleFormChange(e){
        setFormState({...formState, [e.target.name]:e.target.value});
    }

    function validate(){
        let errMessage = '';
        if (!validateEmail(formState.email)){
            errMessage = "Please Enter A Valid Email";
        }
        if (!formState.name.trim() || !formState.message.trim()) {
            errMessage = 'Please Include Name and Message';
        }
        setErrorMessage(errMessage);
        return errMessage;
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(!validate()) {
            emailjs.send("service_d8kbg57","template_61u52i8",formState,"mJFP0ss7YLIHc1L0s")
            .then((response) => {
                console.log("message sent!", response.status);
                setFormState({name:"",email:"", message:""});
                setErrorMessage("Message Sent!")
            })
        };
    }
    
    return(
        <>
            <h1 className="my-4 grow-in">Contact</h1>
            <hr></hr>
            <div className="container justify-content-around">
                <div className="row justify-content-around">
                    <div className="col-12 col-lg-7 bg-c-light-brown perm-shadow text-light py-2 my-3 contact-container grow-in">
                        <form id='contact-form' className="my-3" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor='nameInput' className='label-text'>Name</label>
                                <input name="name" type="text" className="form-control" id="nameInput" placeholder="Name" onChange={handleFormChange} onBlur={validate} value={formState.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='emailInput' className='label-text'>Email</label>
                                <input name="email" type="email" className="form-control" id="emailInput" placeholder="Email" onChange={handleFormChange} onBlur={validate} value={formState.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='messageInput' className='label-text'>Message</label>
                                <textarea name="message" rows="5" className="form-control" id="messageInput" placeholder="Message" onChange={handleFormChange} onBlur={validate} value={formState.message}/>
                            </div>
                            <button className="btn btn-primary" type='submit'>Submit</button>
                        </form>
                    </div>    
                </div>
                {errorMessage && <p className='grow-in-modal'>{errorMessage}</p>}
            </div>

            
            
        </>
    );
}

export default Contact;