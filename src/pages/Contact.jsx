import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import FormFields from "../components/inputfileds/Contactinputfield";

 // Adjust the path as needed

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setContactData({ ...contactData, [field]: value });
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let errorMsg = '';

    switch (field) {
      case 'name':
        if (!value) {
          errorMsg = 'Name is required.';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMsg = 'Name should only contain alphabets and spaces.';
        } else if (value.length < 2 || value.length > 50) {
          errorMsg = 'Name should be between 2 and 50 characters long.';
        }
        break;
      case 'email':
        if (!value) {
          errorMsg = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = 'Email is invalid.';
        }
        break;
      case 'phone':
        if (!value) {
          errorMsg = 'Phone number is required.';
        } else if (!/^\+?\d{10,15}$/.test(value)) {
          errorMsg = 'Phone number is invalid. It should be between 10 and 15 digits.';
        }
        break;
      case 'message':
        if (!value) {
          errorMsg = 'Message is required.';
        } else if (value.length < 10 || value.length > 500) {
          errorMsg = 'Message should be between 10 and 500 characters long.';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(contactData).forEach((field) => {
      validateField(field, contactData[field]);
    });

    if (Object.values(errors).every((error) => !error)) {
      // Handle form submission logic here
      console.log('Contact Data Submitted:', contactData);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-6xl w-full p-12 space-y-12">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-gray-500 mb-12">
          Get in Touch
        </h1>

        {/* Contact Information in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-center text-gray-500 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 text-5xl hover:animate-bounce" />
            </div>
            <h2 className="text-xl font-bold">Email Us</h2>
            <p className="mt-2">info@myjobgator.com</p>
            <p>support@bytelevel.com</p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-center text-gray-500 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faLocationArrow} className="text-gray-500 text-5xl hover:animate-bounce" />
            </div>
            <h2 className="text-xl font-bold">Visit Us</h2>
            <p className="mt-2">101 Morgan Avenue</p>
            <p>Brooklyn, NY 11237, USA</p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-lg rounded-xl p-6 text-center text-gray-500 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500 text-5xl hover:animate-bounce" />
            </div>
            <h2 className="text-xl font-bold">Call Us</h2>
            <p className="mt-2">USA +1 715 725 0005</p>
            <p>NGN +234 813 553 1603</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Drop us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <FormFields
              fields={['name', 'email', 'phone', 'subject', 'message']}
              values={contactData}
              onChange={handleInputChange}
              errors={errors}
            />
            <button
              type="submit"
              className="w-50% bg-blue-300 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-indigo-300 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
