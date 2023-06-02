// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkjjgbw");
  if (state.succeeded) {
      return <p className='w-screen h-screen justify-center items-center flex'>Message sent!</p>;
  }
  return (
      <div className='w-screen h-screen flex justify-center items-center'>
          <form action="https://formspree.io/f/mwkjjgbw" method='POST' onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder='Message'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
