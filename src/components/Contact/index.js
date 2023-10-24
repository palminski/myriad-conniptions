import {useState} from 'react';

import { useForm, ValidationError } from '@formspree/react';
function Contact() {
    



    

    const [state, handleSubmit] = useForm("maygvdwy")
    
    
    if (state.succeeded) {
        return (
            <>
            <div className="container my-5">
                <div className=" pt-2 about-me-container clearfix">
                    
                    <h1>Thank you so much for reaching out!</h1>
                    <h1>Your message has been sent!</h1>
                </div>
                
            </div>

            
            
        </>
        )
    }



    
    return(
        <>
            <h1 className="my-4 grow-in">Contact</h1>
            <hr></hr>
            <div className="container justify-content-around">
                <div className="row justify-content-around">
                    <div className="col-12 col-lg-7 bg-c-light-brown perm-shadow text-light py-2 my-3 contact-container grow-in">
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