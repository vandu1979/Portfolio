import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'
// import db from '../firebase'



export default function Contact() {
  return (
    <section className="my-section P">
    <div className='contact'>Contact me
      <h1> vandana_kothari@yahoo.com </h1>
      <h2> Thank you </h2>
    </div>
   </section>
  )
}


// export default function Contact() {
//   // using state to update the name,email,message
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
// // adding a state to making sure user is submitting data and process is going on by adding data in db
//   const [loader, setLoader] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);


//   //connecting to db

//   db.collection("contacts")
//   .add({
//     name: name,
//     email: email,
//     message: message,
//   })
//   .then(() => {
//     alert("Message has been submitted");
//     setLoader(false);
//   })
//   .catch((error) => {
//     alert(error.message);
//     setLoader(false);
//   })
// // after putting value in form to stays the same 
// setName('');
// setEmail('');
// setMessage('');

// };
//   return (
//     <>
  
//     <section className="my-section">
//         <p> Welcome to my Contact Page </p>
//         <form className='form' onSubmit={handleSubmit}>
//           <h1>Contact form</h1>
//           <label>Name</label>
//           <input placeholder='Name' value={name}
//           onChange={(e) => setName(e.target.value)}/>

//           <label>Email</label>
//           <input placeholder='Email' value={email}
//           onChange={(e) => setEmail(e.target.value)} />

//           <label>Message</label>
//         <textarea placeholder='Message' value={message}
//           onChange={(e) => setMessage(e.target.value)}></textarea>

//         <button type='submit' style={{background : loader ? "#ccc" : "rgb(2, 2, 110)"}}>Submit</button>
//         </form> <br />
//         <Link to="/">Home</Link>
//       </section>

//     </>
//   )
// }
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import styled from 'styled-components';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_3c8eugl', 'service_3c8eugl', form.current, 'EBsxOIF95GvLApJLa')
//       .then((result) => {
//           console.log(result.text);
//           console.log('message sent');
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <StyledContactForm>
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </StyledContactForm>
//   );
// };
// export default Contact();

// // Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;