import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router';






function Register() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : ""
  });
  
  // handle input
  
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;
  
    setUser({...user, [name]:value});
  }

  //handle submit
  const handleSubmit = async (event)=>{
    event.preventDefault();

    const {username, email, password} = user;

    try {
       //it is submitted on port 3000 by default
       //which is front end but we need to 
       //submit it on backend which is on port 3001
       //so we need proxy.
      const res = await fetch('/register', {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          username, email, password
        })
      })

      if(res.status === 400 || !res){
        window.alert("Already used Details")
      }else{
        window.alert("Registered Succcesfully");
        navigate.push('/login')
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-10" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <p
                classNAme="text-center h1  mb-5 mx-1 mx-md-4 mt-4"
                style={{ fontSize: "xx-large", fontWeight: "bolder" }}>
                Sign up
              </p>

              {/* // handle submit */}
              <form onSubmit={handleSubmit} method="POST">

              <div className="d-flex flex-row align-items-center mb-4 pt-6">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Your Email"
                 id="form2"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                   />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password"
                 id="form3"
                  type="password" 
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  />
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div> */}

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="fa-solid fa-mobile me-3" size="lg" />
                <MDBInput label="Your Mobile No." id="form5" type="Number" />
              </div> */}

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn type="submit" className="mb-4" size="lg">
                Register
              </MDBBtn>
              </form>
            </MDBCol>
            

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    
  );
}

export default Register;
