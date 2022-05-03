import React, { useState } from "react";
import './secondPage.css';

import {initializeApp} from 'firebase/app'

import {
  collection,
  getFirestore, 
  addDoc,
}from 'firebase/firestore'

import{
  getAuth
}from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhF3hNDNlJt04tydJj5mzNqiw0MPswDw4",
  authDomain: "djsce-pp0.firebaseapp.com",
  projectId: "djsce-pp0",
  storageBucket: "djsce-pp0.appspot.com",
  messagingSenderId: "543072443264",
  appId: "1:543072443264:web:6948338da3bafb4c9bff65",
  measurementId: "G-SN9S4BB2Y0"
};

export default function SecondPage() {
  initializeApp(firebaseConfig)

  const db = getFirestore()
 const [firstName, setFirstName] = useState('');
 const [middleName, setMiddleName] = useState('');
 const [surname, setSurname] = useState('');
 const [motherName, setMotherName] = useState('');
 const [phoneNo, setPhoneNo] = useState('');
 const [emailID, setEmailID] = useState('');
 const [DOB, setDOB] = useState('');
 const [address, setAddress] = useState('');

 const [educationGap, seteducationGap] = useState('');
 const [tenthPercent, setTenthPercent] = useState('');
 const [twelfthPercent, setTwelfthPercent] = useState('');
 const [JEE, setJEE] = useState('')
 const [CET, setCET] = useState('')
 const [SEM1, setSEM1] = useState('')
 const [SEM2, setSEM2] = useState('')
 const [SEM3, setSEM3] = useState('')
 const [SEM4, setSEM4] = useState('')
 const [SEM5, setSEM5] = useState('')
 const [SEM6, setSEM6] = useState('')



 const handleFirstName = (e) => {
   setFirstName(e.target.value)
 }
 const handleMiddleName = (e)=>{
   
   setMiddleName(e.target.value)
 }

  const handleSurname = (e)=>{
    
       setSurname(e.target.value)
  }
  const handleMotherName = (e)=>{

       setMotherName(e.target.value)
  }

  const handlePhoneNo = (e)=>{

       setPhoneNo(e.target.value)
 }

 const handleEmailID = (e)=>{

      setEmailID(e.target.value)
 }

 const handleDOB = (e)=>{

      setDOB(e.target.value)
 }

 const handleAddress = (e)=>{

      setAddress(e.target.value)
 }

 const handleEducationGap = (e)=>{

      seteducationGap(e.target.value)
 }
 const handleTenthPercent = (e)=>{

      setTenthPercent(e.target.value)
 }

 const handleTwelfthPercent = (e) =>{

      setTwelfthPercent(e.target.value)
 }
 const handleJEE = (e)=>{

      setJEE(e.target.value)
 }
 const handleCET = (e)=>{

      setCET(e.target.value)
 }

 const handleSEM1 = (e)=>{

      setSEM1(e.target.value)
 }

 const handleSEM2 = (e) =>{

      setSEM2(e.target.value)
 }

 const handleSEM3 = (e)=>{

      setSEM3(e.target.value)
 }
 const handleSEM4 = (e) =>{
      setSEM4(e.target.value)
 }

 const handleSEM5 = (e) =>{

      setSEM5(e.target.value)
 }

 const handleSEM6 = (e) =>{

      setSEM6(e.target.value)
 }


const handleClick = async (e) => {
  try {
    const personal = collection(db , 'Personal Details')
    await  addDoc(personal , {
      firstName: firstName,
      middleNname : middleName,
     surname : surname,
     motherName : motherName,
     phoneNo : phoneNo,
     emailID : emailID,
     DOB : DOB,
     address : address

  })
  console.log("Input entered")
} catch (error) {
  console.log(error.message)
}
try {
  const education = collection(db , 'Education')
    await addDoc(education,{
      educationGap : educationGap,
      tenthPercent : tenthPercent,
      twelfthPercent : twelfthPercent,
      JEE : JEE,
      CET : CET,
      SEM1 : SEM1,
      SEM2 : SEM2,
      SEM3 : SEM3,
      SEM4 : SEM4,
      SEM5 : SEM5,
      SEM6 : SEM6
    })
    console.log("Input entered")
    
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <>
    <br />
      <hr />
      <div className="personal">
        <h3><br />PERSONAL DETAILS <br /> </h3>

        <label htmlFor="Firstname" id="Firstname" className="label">First Name : </label>
        <input type="text" name="" id="FirstnameIn" placeholder="First Name" className="labelIn" required onChange={handleFirstName} value={firstName}/><br />

        <label htmlFor="Middlename" id="Middlename" className="label">Middle Name : </label>
        <input type="text" name="" id="MiddlenameIn" placeholder="Middle Name" className="labelIn" required onChange={handleMiddleName} value={middleName}/><br />

        <label htmlFor="Surname" id="Surname" className="label">Surname : </label>
        <input type="text" name="" id="SurnameIn" placeholder="Surname" className="labelIn" required onChange={handleSurname} value={surname} /><br />

        <label htmlFor="Mothername" id="Mothername" className="label">Mother's Name : </label>
        <input type="text" name="" id="MothernameIn" placeholder="Mother's Name"  className="labelIn" required  onChange={handleMotherName} value={motherName}/><br />

        <label htmlFor="phoneNo" id="phoneNo" className="label">Phone No.: </label>
        <input type="text" name="" id="phoneNoIn" placeholder="Phone No." className="labelIn" required/><br onChange={handlePhoneNo} value={phoneNo}/>

        <label htmlFor="emailId" id="emailId" className="label">Email ID : </label>
        <input type="email" name="" id="emailIdIn" placeholder="Email ID" className="labelIn" required /><br onChange={handleEmailID} value={emailID}/>

        <label htmlFor="DOB" id="DOB" className="label">DOB :</label>
        <input type="date" name="" id="DOBIn" placeholder="DOB" className="labelIn"  required onChange={handleDOB} value={DOB}/><br />

        <label htmlFor="address" id="address" className="label">Address : </label><br />
        <textarea name="" id="addressIn" cols="60" rows="10" className="labelIn" required placeholder="Enter your Address here" onChange={handleAddress} value={address} ></textarea><br />

      </div>
      <hr />
      <div className="education">
        <h3>EDUCATION <br/> </h3>

        <label htmlFor="educationGap" id="educationGap" className="label">Education Gap : </label>
        <input type="text" name="" id="educationGapIn" placeholder="Education Gap?" className="labelIn" required onChange={handleEducationGap} value={educationGap}/><br />
        
        <label htmlFor="10th" id="10thpercentage" className="label">10th percentage : </label>
        <input type="text" name="" id="10thpercentageIn" placeholder="10th Percentage" className="labelIn" required onChange={handleTenthPercent} value={tenthPercent}/><br />

        <label htmlFor="12th" id="12thpercentage" className="label">12th percentage : </label>
        <input type="text" name="" id="12thpercentageIn" placeholder="12th Percentage" className="labelIn"  required  onChange={handleTwelfthPercent} value={twelfthPercent}/><br />
        
        <label htmlFor="JEE" id="JEEPercentile" className="label">JEE percentile : </label>
        <input type="text" name="" id="JEEpercentileIn" placeholder="JEE Percentile" className="labelIn" required onChange={handleJEE} value={JEE}/><br />
        
        <label htmlFor="CET" id="CETPercentile" className="label">CET percentile : </label>
        <input type="text" name="" id="CETpercentileIn" placeholder="CET Percentile"  className="labelIn" required onChange={handleCET} value={CET}/><br />
        
        <label htmlFor="SEM1" id="SEM1" className="label">SEM1 : </label>
        <input type="text" name="" id="SEM1In" placeholder="SEM1 Pointer" className="labelIn" required /><br onChange={handleSEM1} value={SEM1}/>

        <label htmlFor="SEM2" id="SEM2" className="label">SEM2 : </label>
        <input type="text" name="" id="SEM2In" placeholder="SEM2 Pointer" className="labelIn" onChange={handleSEM2} value={SEM2}/><br />

        <label htmlFor="SEM3" id="SEM3" className="label">SEM3 : </label>
        <input type="text" name="" id="SEM3In" placeholder="SEM3 Pointer" className="labelIn" required /><br onChange={handleSEM3} value={SEM3} />

        <label htmlFor="SEM4" id="SEM4" className="label">SEM4 : </label>
        <input type="text" name="" id="SEM4In" placeholder="SEM4 Pointer"  className="labelIn" required/><br  onChange={handleSEM4} value={SEM4}/>

        <label htmlFor="SEM5" id="SEM5" className="label">SEM5 : </label>
        <input type="text" name="" id="SEM5In" placeholder="SEM5 Pointer" className="labelIn" required /><br onChange={handleSEM5} value={SEM5}/>

        <label htmlFor="SEM6" id="SEM6" className="label">SEM6 : </label>
        <input type="text"  name="" id="SEM6In" placeholder="SEM6 Pointer" className="labelIn" required /><br onChange={handleSEM6} value={SEM6}/>
        
      </div>
      <button id="submitbtn" onClick={handleClick} >Submit</button>
    </>
  );
}
