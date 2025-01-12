 import Facebook from "./images/footer/Facebook.png";
 import Github from "./images/footer/Github.png";
 import Instagram from "./images/footer/Instagram.png";
 import LinkedIN from "./images/footer/LinkedIN.png";
 import M from "./images/footer/M.png";
 import PIS from "./images/footer/PIS.png";
 import stack from "./images/footer/stack.png";
 import twitter from "./images/footer/twitter.png";
 import React, { useState } from "react";
 import emailjs from "emailjs-com";
 
 function Footer() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        const {name, email, message} = formData;

        emailjs 
            .send(
                "service_icc6jnq",
                "template_d2b4wn3",
                {
                    name,
                    email,
                    message,
                },
                "56bWBusgahRBQnhQU"
            )

            .then(
                (response) => {
                    console.log("Email sent successfully", response);
                    alert("your message has been sent!")
                    setFormData({name: "", email: "", message: ""})
                },
           

                (error) => {
                    console.log("Error sending email", error);
                    alert("there is an issue. please try again")
                }
            );
    }

    return (
        <footer>
            <div className="text">
                <h3>Interested in collaborating?</h3>
                <p>If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help you with it.</p>
            </div>
            <div className="containers">
                <form  onSubmit={handleSubmit}>
                    <div className="input">
                        <input
                         type="text"
                         name="name"
                         value={formData.name} 
                         placeholder="Full name*"
                         onChange={handleChange}
                         required 
                           />
                        <input 
                        type="text"
                        name="email"
                        value={formData.email} 
                        placeholder="Email*" 
                        onChange={handleChange}
                        required />
                    </div>
                    <textarea
                     className="mm" 
                     type="message" 
                     name="message"
                     value={formData.message} 
                     placeholder="Message*" 
                     onChange={handleChange}
                     required></textarea>
                    <button type="submit">Get in touch</button>
                </form>
                <p>etsegenetelias13@gmail.com</p>
                <div className="footer-img">
                    <a href="https://github.com/EtsegenetE"> <img src={Github} alt="img1" width="27px" height="27px" /> </a> 
                    <a><img src={twitter} alt="img1" width="27px" height="27px" /></a>  
                    <a> <img src={LinkedIN} alt="img1" width="27px" height="27px" /></a> 
                    <a><img src={PIS} alt="img1" width="27px" height="27px" /></a>
                    <a> <img src={M} alt="img1" width="27px" height="27px" /></a> 
                    <a> <img src={stack} alt="img1" width="27px" height="27px" /></a> 
                    <a><img src={Facebook} alt="img1" width="27px" height="27px" /></a> 
                    <a href="https://www.instagram.com/etsegenetelias/" > <img src={Instagram} alt="img1" width="27px" height="27px" /></a> 
                </div>
                <p>&copy; 2025</p>
            </div>
        </footer>
    );
 }

 export default Footer;