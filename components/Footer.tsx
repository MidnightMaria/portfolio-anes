import React, { useRef, useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub, } from "react-icons/bs";
import emailjs from 'emailjs-com';


const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all fields.');
      return;
    }

    if (formRef.current) {
      emailjs.sendForm('service_4qe4p5f', 'template_r080652', formRef.current, '819XnIUSEpzram_r1')
        .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
        }, (error) => {
          console.log(error.text);
          setFormError('An error occurred. Please try again later.');
        });
    } else {
      console.error("Form ref is not yet attached");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <h1 className="heading">Let&apos;s
        <span className="text-purple"> Get In Touch</span>
      </h1>
      <div className="flex justify-between mx-10 flex-wrap">
        <div className='mt-4'>
          <div className='bg-agnes p-2 mt-4'>
              <MdOutlineMailOutline className='my-2 text-purple' size={25}/>
              <h4>Email</h4>
              <h5>agnesmarmarie@gmail.com</h5>
              <div className='flex items-center text-purple'>
                <a href='mailto:agnesmarmarie@gmail.com'>Send a message</a>
              </div>
            </div>
            <div className='bg-agnes p-2 mt-4'>
                <BsWhatsapp className='my-2 text-purple' size={25}/>
                <h4>WhatsApp</h4>
                <h5>0821-7430-7119</h5>
                <div className='flex items-center text-purple'>
                  <a href='https://wa.me/6282174307119'>Send a message</a>
                </div>
            </div>

            <div className='flex m-4'>  
              <a href='https://www.linkedin.com/in/agnes-maria-anggelina-12a4b8291/' target="_blank"><BsLinkedin size={25} className='text-purple' style={{ marginRight: '1.2rem' }}/></a>
              <a href='https://github.com/MidnightMaria' target="_blank"><BsGithub size={25} className='text-purple'/></a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="text-form flex flex-col w-full lg:w-2/4">
          <input
            className="mt-4 p-2 w-full bg-agnes"
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="mt-4 p-2 w-full bg-agnes"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="mt-4 p-2 w-full bg-agnes"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={7}
            required
          />
          <button className="form-button mt-4 p-2 text-purple" type="submit">Send Message</button>
          {formSubmitted && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          {formError && <p className="text-red-500 mt-2">{formError}</p>}
        </form>
      </div>

      {/* ... rest of footer */}
    </footer>
  );
};

export default Footer;
