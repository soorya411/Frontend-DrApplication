import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
         <MDBFooter  className='text-center text-lg-start text-muted' style={{backgroundColor:'rgb(195,210,217)'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <div style={{display:'flex',flexDirection:'row'}}>
              <i class="fas fa-user-md lg">   </i>
              <h6 className='text-uppercase fw-bold mb-4 px-3'>
              Medicoz
              </h6>
              </div>
           
             
             
              <p>Medical Solutions</p>
              <p>
              ONLINE APPOINTMENT SCHEDULING PLATFORM
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>clinicalprocedures</h6>
              <p>
                <a href='#!' className='text-reset'>
                vaccination
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                nutritionpractice
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                videoconsultationpolicy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                compareplans                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Booking
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Others
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Book.com Startup warehouse, Infopark Rd, Kakkanad, Kochi, Kerala 682030              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@medicoz.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 9876543210
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 9867677654
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Medicoz.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer