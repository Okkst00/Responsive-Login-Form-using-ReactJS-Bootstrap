import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/aos/dist/aos';
import AOS from 'aos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import './App.css';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [passwordType, PwType] = useState("password");
  const [passwordInput, PwInput] = useState("");
  const PwChange =(evnt)=>{

      PwInput(evnt.target.value);

  }

  const togglePassword =()=>{

    if(passwordType==="password") {

     PwType("text")
     return;

    }

    PwType("password")
  }

  return (
    
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col className='col-lg-5 col-md-8 col-10 shadow py-lg-5 py-md-5 py-4 px-lg-5 px-md-5 px-4' data-aos='zoom-in' data-aos-delay='100'>
        <h3 className='mb-4 sign-title px-lg-4 px-md-4 px-4 pt-2 pb-lg-3 pm-md-3 pb-2 shadow-sm' data-aos='fade-down' data-aos-delay='100'>Sign In <i class="bi bi-person-fill"></i></h3>
          <Form className='pt-4' method='post'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <input type="email" placeholder="Enter email" className='form-control' required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <input type={passwordType} onChange={PwChange} value={passwordInput} name="password" className="form-control" placeholder="Password" required/>
                <div className="input-group-btn mt-2">
                  <div className="btn btn-pass" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                  </div> <span className='pw-text'>show and hide password</span>
               </div>
            </Form.Group>
            <h5 className='option-text text-center mb-3 pt-2'>Or sign in with</h5>
            <Row className='justify-content-center px-lg-0 px-md-2 px-2 bot-rows'>
                <div className='btn btn-option mb-2 col-lg-3 col-md-4 col-5 shadow-sm' data-aos='fade-right' data-aos-delay='600'><i class="bi bi-google"></i> google</div>
                <div className='btn btn-option mb-2 col-lg-3 col-md-4 col-5 ms-lg-2 ms-md-2 ms-2 shadow-sm' data-aos='zoom-in' data-aos-delay='600'><i class="bi bi-github"></i> github</div>
                <div className='btn btn-option mb-2 col-lg-3 col-md-4 col-5 ms-lg-2 ms-md-2 ms-0 shadow-sm' data-aos='fade-left' data-aos-delay='600'><i class="bi bi-facebook"></i> facebook</div>
            </Row>
            <button type="submit" className='btn main-btn w-100 mt-4 py-2'>
              Sign In <i class="bi bi-check-circle-fill"></i>
            </button>
            <h5 className='sign-up-txt mt-4'>don't have an account? <a href='{}'>sign up here</a></h5>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
