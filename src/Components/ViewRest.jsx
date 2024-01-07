import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ViewRest.css'
import Review from './Review';

function ViewRest() {
  const [restDetails,setRestDetails]=useState({})
  //destructure
const {id} =useParams()
console.log(id);
const base_url='https://drs-application-backend.onrender.com/doctors'

const fetchRest=async()=>{
  const result = await axios.get(`${base_url}/${id}`)
  console.log(result.data);
  setRestDetails(result.data)
}
useEffect(()=>{
fetchRest()
},[])
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
     <Container className='my-5 mx-5 text-center py-5 px-5 w-75 color' >
      <Row>
        <Col>
        <div className='text-center  py-3 px-2 w-100 bg'>
        <h3>{restDetails.hospital}</h3>
        <h4>{restDetails.name}({
         restDetails.specialty})</h4>
        
   <p>{restDetails.email}</p>
        </div>
        </Col>
        <Col>
       
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col></Col>
        </Row>
        <div className='text-center  py-5 px-4 w-100'>
          <h3>{restDetails.hospital}</h3>
        <h5>Address: {restDetails.address}</h5>
        <h5>Available Time: {restDetails.available_hours}</h5>
        <h5>Contact No.: {restDetails.phone}</h5>
 
        <h5>Email: {restDetails.email}</h5><hr />
     <h5><strong>Available Days:</strong></h5>
<div >
  {restDetails.available_days && restDetails.available_days.map((item)=>(
  <strong>{item} | </strong>
  ))
}
</div>

       {/* <h5>{restDetails.available_days}</h5> */}
       <strong><Review rw={restDetails.reviews}/></strong>
        </div>
   
   
    </Container> 

    </div>
  )
}

export default ViewRest