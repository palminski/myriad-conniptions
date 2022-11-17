import {useState} from 'react';

function Contact() {
    
    

    return(
        <>
            <h1 className="my-4 grow-in">Contact</h1>
            <hr></hr>
            <div className="container justify-content-around">
                <div className="row justify-content-around">
                    <div className="col-7 bg-secondary text-light py-2 my-3 contact-container grow-in">
                        <form className="my-3" onSubmit={() => {
                            console.log('Form Submitted');
                        }}>
                            <div className="form-group">
                                <label htmlFor='nameInput' className='label-text'>Name</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor='emailInput' className='label-text'>Email</label>
                                <input type="email" className="form-control" id="emailInput" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor='messageInput' className='label-text'>Message</label>
                                <textarea rows="5" className="form-control" id="messageInput" placeholder="Message" />
                            </div>
                            <a className="btn btn-primary" type='submit'>Submit</a>
                        </form>
                    </div>
                </div>
            </div>

            
            
        </>
    );
}

export default Contact;