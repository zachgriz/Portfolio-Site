import React, {useState, useRef} from "react";
import '../styles/contactForm.scss';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const form = useRef();
    
    const initialState = {
        company: '',
        name: '',
        email: '',
        message: '',
    };
    
    const [formData, setFormData] = useState(initialState);

    const [emailError, setEmailError] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            setEmailError(
              value.length > 0 && !isValidEmail(value)
                ? 'Please enter a valid email address'
                : ''
            );
          }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_8hecdqe', 'template_y3zjfmu', form.current, 'MyBPR77oz5GuC5-1h')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        setShowSuccessMessage(true);
        setFormData(initialState);
    }

    const isValidEmail = (email) => {
        // Simple email validation using regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
      };

    return (
        <form ref={form} className="form" onSubmit={handleSubmit} id="contact">
            <h1 className="subhead">Contact</h1>
            <div className="formGroup">
                <label htmlFor="company">Company</label>
                <input
                required
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                required
                type="message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                />
            </div>
            {showSuccessMessage && <div className="success-message">Thank you for reaching out! I will responsed to your message ASAP.</div>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm