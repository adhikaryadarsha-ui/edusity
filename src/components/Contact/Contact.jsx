import React from 'react'
import './Contact.css';
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import msg_icon from "../../assets/msg-icon.png";

const Contact = () => {

 const [result, setResult] = React.useState("");

 const onSubmit = async (event) => {
   event.preventDefault();
   setResult("Sending....");
   const formData = new FormData(event.target);

   formData.append("access_key", "ebad3cec-78cd-4d9b-bb96-68f931eacb99");

   const response = await fetch("https://api.web3forms.com/submit", {
     method: "POST",
     body: formData,
   });

   const data = await response.json();

   if (data.success) {
     setResult("Form Submitted Successfully");
     event.target.reset();
   } else {
     console.log("Error", data);
     setResult(data.message);
   }
 };



  return (
    <div>
      <div className="contact">
        <div className="contact-left">
          <h2>
            Send us a message <img src={msg_icon} className="envelop" />
          </h2>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
            <ul className="contact-address">
              <li>
                <img src={mail_icon} />
                Contact@GreatStack.dev
              </li>
              <li>
                <img src={phone_icon} />
                +1 123-456-7890
              </li>
              <li>
                <img src={location_icon} />
                77 Massachusetts Ave, Cambridge MA 02139, United States
              </li>
            </ul>
          </p>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required=""
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required=""
            />
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              required=""
            />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required=""
              data-sr-no-text="true"
            ></textarea>
            <button type="submit" className="btn">
              Submit Now
            </button>
          </form>
          <span className="success">{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact
