import React from 'react'
import './RestCard.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
   
  } from 'mdb-react-ui-kit';
  import { MDBBtn } from 'mdb-react-ui-kit';
  import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom';

function RestCard({doctors}) {
  console.log(doctors);
  return (
    <div>
     
     
      <MDBCard className='text-center  my-4 mx-3 ' style={{backgroundColor:'rgb(195,210,217)'}}>
      <MDBCardBody>
        <MDBCardTitle>{doctors.hospital}</MDBCardTitle>
        <MDBCardSubTitle>{doctors.name}</MDBCardSubTitle>
        <MDBCardText>Specialty:
         {doctors.specialty}
        </MDBCardText>
        <MDBCardText>Phone:
         {doctors.phone}
        </MDBCardText>
        <MDBCardText>
        <Rating name="half-rating" defaultValue={doctors.rating} precision={0.5} readOnly />
         
        </MDBCardText>
        <Link to={`view/${doctors.id}`}>
        <MDBBtn className="text-uppercase">More Details</MDBBtn>
       
        </Link>
      </MDBCardBody>
    </MDBCard>
   
    </div>
  )
}

export default RestCard