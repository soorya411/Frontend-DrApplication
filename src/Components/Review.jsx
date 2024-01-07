import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';

  import Rating from '@mui/material/Rating';
 
function Review({rw}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
    <div>
        <MDBBtn className='my-4' onClick={toggleOpen}>Reviews</MDBBtn>
      <MDBCollapse open={isOpen}>
      <div style={{display:'flex',flexDirection:'column'}}>
        {
          rw?.map(item=>(

            <div  >
                  
            <strong>{item.patient_name}</strong> <br />
            <p style={{fontSize:'13px'}}>{item.date}</p>
            
            
          
              <p style={{fontSize:'14px'}} className='text-align-justify'>{item.comments}</p>
              <Rating name="half-rating" defaultValue={item.rating} precision={0.5} readOnly /><hr />
           
           
          </div>
          ))
        }
        </div>
        </MDBCollapse>

      
        
       
    </div>
  )
}

export default Review