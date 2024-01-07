import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar style={{backgroundColor:'rgb(195,210,217)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/find-doctor-2907548-2414675.png'
              height='60'
              alt=''
              loading='lazy'
            />
           Medicoz      

           </MDBNavbarBrand>
          
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header