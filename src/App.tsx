import React, {useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';




function App() {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false)
  const generate = (d: any) => {
    alert(JSON.stringify(d));
    return false;
  }
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Generate TAMS Excel Sheet</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className='mt-4'>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Header><h4>Enter Request Details</h4></Card.Header>
              <Card.Body>
                <Form noValidate={true} className="needs-validation" onSubmit={handleSubmit(generate)}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="requestID">Request ID</span>
                    <input type="text" {...register("requestID", { required: true})} className={`form-control ${errors.requestID?'is-invalid':''}`} placeholder="Enter Request ID" aria-label="Request ID" aria-describedby="requestID" required={true}/>
                    <div className="invalid-feedback">Please enter valid Request ID.</div>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Requester Name</span>
                    <input type="text" {...register("requesterName", { required: "Requester Name is mandatory"})} className={`form-control ${errors.requesterName?'is-invalid':''}`} placeholder="Enter Requester Name" aria-label="Requester Name" />
                    <span className="input-group-text">BRID</span>
                    <input type="text" {...register("requesterBrid", { required: "Requester BRID is mandatory", pattern: { value: /[A-Z]{1}[0-9]{8}/, "message": "Invalid BRID Format"}})} className={`form-control ${errors.requesterBrid?'is-invalid':''}`} placeholder="Enter Requester BRID" aria-label="Requester Name" />
                    <div className="invalid-feedback">{[errors.requesterName?.message, errors.requesterBrid?.message].filter(Boolean).join(", ")}</div>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Recipient Name </span>
                    <input type="text" {...register("recipientName", { required: "Recipient Name is mandatory"})} className={`form-control ${errors.recipientName?'is-invalid':''}`} placeholder="Enter Recipient Name" aria-label="Recipient Name" />
                    <span className="input-group-text">BRID</span>
                    <input type="text" {...register("recipientBrid", { required: "Recipient BRID is mandatory", pattern: { value: /^[A-Z]{1}[0-9]{8}$/, "message": "Invalid BRID Format"}})} className={`form-control ${errors.recipientBrid?'is-invalid':''}`} placeholder="Enter Recipient BRID" aria-label="Recipient Name" />
                    <div className="invalid-feedback">{[errors.recipientName?.message, errors.recipientBrid?.message].filter(Boolean).join(", ")}</div>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">CPC</span>
                    <input type="text" className={`form-control ${errors.cpc?'is-invalid':''}`} {...register("cpc", { required: "CPC is mandatory", pattern: { value: /^[A-Z0-9]{3}$/, "message": "Invalid CPC Format"}})} placeholder="Enter CPC" aria-label="CPC" />
                    <span className="input-group-text">Campaign ID</span>
                    <input type="text" className={`form-control ${errors.campaign?'is-invalid':''}`} {...register("campaign", { required: "Campaign ID is mandatory", pattern: { value: /^[0-9]{4}$/, "message": "Invalid Campaign ID Format"}})} placeholder="Enter Campaign ID" aria-label="Campaign ID" />
                    <span className="input-group-text">Cell</span>
                    <input type="text" className={`form-control ${errors.cell?'is-invalid':''}`} {...register("cell", { required: "Cell Number is mandatory", pattern: { value: /^[0-9]{1,2}$/, "message": "Invalid Cell Number Format"}})} placeholder="Enter Cell Number" aria-label="Cell" />
                    <div className="invalid-feedback">{[errors.cpc?.message, errors.campaign?.message, errors.cell?.message].filter(Boolean).join(", ")}</div>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Number of Accounts Requested</span>
                    <select className="form-select" id="accounts" aria-label="Example select with button addon" {...register("accounts", { required: true})} >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-text">
                      <input className="form-check-input mt-0" type="checkbox" {...register("personDetails")} value="" aria-label="Checkbox for following text input" onChange={(e) => setIsChecked(e.target.checked)}/>
                    </div>
                    <span className={`input-group-text ${isChecked?'':'text-muted'}`}>First and last name</span>
                    <input type="text" aria-label="First name" {...register("firstName", { required: {value: isChecked, message: "First Name is mandatory"}})} className={`form-control ${errors.firstName?'is-invalid':''}`} disabled={!isChecked} />
                    <input type="text" aria-label="Last name" {...register("lastName", { required: {value: isChecked, message: "Last Name is mandatory"}})} className={`form-control ${errors.lastName?'is-invalid':''}`} disabled={!isChecked} />
                    <span className={`input-group-text ${isChecked?'':'text-muted'}`}>Short Name</span>
                    <input type="text" aria-label="Short Name" {...register("shortName", { required: {value: isChecked, message: "Short Name is mandatory"}})} className={`form-control ${errors.shortName?'is-invalid':''}`} disabled={!isChecked} />
                    <span className={`input-group-text ${isChecked?'':'text-muted'}`}>Department</span>
                    <input type="text" aria-label="Department" {...register("department", { required: {value: isChecked, message: "Department is mandatory"}})} className={`form-control ${errors.department?'is-invalid':''}`} disabled={!isChecked} />
                    <div className="invalid-feedback">{[errors.firstName?.message, errors.lastName?.message, errors.shortName?.message, errors.department?.message].filter(Boolean).join(", ")}</div>
                  </div>

                  <Button variant="primary" type="submit">
                    Generate Excel Sheet
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
