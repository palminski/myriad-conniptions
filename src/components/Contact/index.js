import {useState} from 'react';

import { useForm, ValidationError } from '@formspree/react';
function Contact() {
    



    

    const [state, handleSubmit] = useForm("maygvdwy")
    
    
    if (state.succeeded) {
        return (
            <>
            <h1 className="my-4 grow-in">Contact</h1>
            <div className="container ">
                <div className=" p-4 about-me-container bg-c-light-brown clearfix">
                    
                    <h2>Thank you so much for reaching out!</h2>
                    <br/>
                    <h2>Your message has been sent!</h2>
                </div>
                
            </div>

            
            
        </>
        )
    }



    
    return(
        <>
            <h1 className="my-4 grow-in">Contact</h1>
            
            <div className="container justify-content-around">
                <div className="row justify-content-around px-2">
                    <div className="col-12 col-lg-7 bg-c-light-brown perm-shadow text-light py-2 mb-3 contact-container grow-in">
                        <form id='contact-form' className="my-3" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='name' className='label-text'>Name</label>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email' className='label-text'>Email</label>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email" />
                                <ValidationError prefix='Email' field='email' errors={state.errors}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='message' className='label-text'>Message</label>
                                <textarea name="message" rows="5" className="form-control" id="message" placeholder="Message" />
                                <ValidationError prefix='Message' field='message' errors={state.errors}/>
                            </div>
                            <button className="btn btn-primary" type='submit' disabled={state.submitting}>Submit</button>
                        </form>
                    </div>    
                </div>
                
            </div>

            
            
        </>
    );
}

export default Contact;