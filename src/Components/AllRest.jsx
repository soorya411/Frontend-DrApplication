import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col,Row } from 'react-bootstrap'
import RestCard from './RestCard'
function AllRest() {
  const base_url='https://drs-application-backend.onrender.com/doctors'
  const [AllRestData , setAllRestData]=useState([])
  const fetchData=async()=>{
    const result=await axios.get(base_url)
    console.log(result);
    setAllRestData(result.data)
  }
  console.log(AllRestData);
  useEffect( ()=>{
    fetchData()},[])
  
  return (
    <div>

<Row>
  {
    AllRestData.map(item=>(
      
      <Col sm={12} md={6} lg={4} xl={3}>
      <RestCard doctors={item}/>
      </Col>
    ))
  }
 
</Row>

    </div>
  )
}

export default AllRest