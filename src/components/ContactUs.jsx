// ContactForm.jsx
import { useState } from 'react';
import './ContactUs.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
    <div className='contact-background'>
        <div style={{textAlign:'center'}} className="contact-form">
            <h2 style={{margin:'1rem',padding:'0.5rem',fontSize:'3rem'}}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" style={{textAlign:'start',fontSize:'1.5rem',marginLeft:'1rem',marginBottom:'1rem'}}>Name*</label>
                    <input type="text" style={{maxWidth:'80%'}} id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email"style={{textAlign:'start',fontSize:'1.5rem',marginLeft:'1rem',marginBottom:'1rem'}}>Email*</label>
                    <input type="email" style={{maxWidth:'80%'}} id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone"style={{textAlign:'start',fontSize:'1.5rem',marginLeft:'1rem',marginBottom:'1rem'}}>Phone</label>
                    <input type="text" style={{maxWidth:'80%'}} id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message"style={{textAlign:'start',fontSize:'1.5rem',marginLeft:'1rem',marginBottom:'1rem'}}>Message</label>
                    <textarea id="message" style={{maxWidth:'80%'}} name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" style={{maxWidth:'80%'}}>Submit</button>
            </form>
        </div>
    </div>
    </>
  );
}

export default ContactForm;
