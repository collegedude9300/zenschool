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
      <Link legacyBehavior href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
    </form>
    </div>
    )
  }