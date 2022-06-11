import React, { useRef } from 'react';
import './Contact.css';
import contact from '../../../assets/images/contact.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="title">
                            <span>contact</span>
                            <h2>get in touch</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="c-img">
                                    <img src={contact} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="contact-info">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input className="i-text" type="text" name="user_name" placeholder="Enter Your Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="i-text" type="email" name="user_email" placeholder="Enter Yore Email" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea className="i-text" name="message" rows="5"
                                                    placeholder="Enter your Message"></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" name="submit">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;