import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
export default function SignUp()
{
//validate Password
const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(String(password));
}
//validate Email
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\.[0-1]\d{1,2}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//validate First Name
const validateFirstName = (firstName) => {
  const re = /^[A-Za-z]+$/;
  return re.test(String(firstName));
}
//validate Last Name
const validateLastName = (lastName) => {
  const re = /^[A-Za-z]+$/;
  return re.test(String(lastName));
}
//validate Phone Number
const validatePhoneNumber = (phoneNumber) => {
  const re = /^\d{10}$/;
  return re.test(String(phoneNumber));
}
//validate Address
const validateAddress = (address) => {
  const re = /^[0-9a-zA-Z\s,.'-]{3,}$/;
  return re.test(String(address));
}
//validate City
const validateCity = (city) => {
  const re = /^[a-zA-Z\s,.'-]{3,}$/;
  return re.test(String(city));
}
//validate State
const validateState = (state) => {
  const re = /^[a-zA-Z\s,.'-]{3,}$/;
  return re.test(String(state));
}
//validate Zip Code
const validateZipCode = (zipCode) => {
  const re = /^\d{5}$/;
  return re.test(String(zipCode));
}
//validate Country
const validateCountry = (country) => {
  const re = /^[a-zA-Z\s,.'-]{3,}$/;
  return re.test(String(country));
}
//validate Date of Birth
const validateDateOfBirth = (dateOfBirth) => {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(String(dateOfBirth));
}
//check to see if the email is valid
const handleSubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zipCode").value;
  const country = document.getElementById("country").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (validateEmail(email) && validateFirstName(firstName) && validateLastName(lastName) && validatePhoneNumber(phoneNumber) && validateAddress(address) && validateCity(city) && validateState(state) && validateZipCode(zipCode) && validateCountry(country) && validateDateOfBirth(dateOfBirth) && validatePassword(password) && password === confirmPassword) {
    alert("Success");
  }
  else {
    alert("Error");
  }
}
return ( 
  <div className={styles.container}>
    <Head>
      <title>Sign Up</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter first name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter last name" required/>
        </div>
        <div className="form-group"> 
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" required/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter address" required/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter city" required/>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" className="form-control" id="state" placeholder="Enter state" required/>
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" className="form-control" id="zipCode" placeholder="Enter zip code" required/>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" className="form-control" id="country" placeholder="Enter country" required/>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input type="date" className="form-control" id="dateOfBirth" placeholder="Enter date of birth" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" required/>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </main>
      <Link legacyBehavior href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
  </div>
)}
