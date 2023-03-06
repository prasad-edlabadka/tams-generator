import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import writeXlsxFile from 'write-excel-file'

function App() {
  const { register, formState: { errors }, handleSubmit, getValues, setValue } = useForm();
  const [isChecked, setIsChecked] = useState(false)
  const generate = (d: any) => {
    const headers = ["Request Ticket Number", "Application Name", "Ticket Overall Status", "Ticket Recipient Overall Status", "Ticket Recipient Status", "Ticket Raised", "Ticket Updated", "Turnaround Time - Provisioning (days)", "SLA Breached", "Requester", "Recipient", "Recipient Application Account", "Recipient Application Account Status", "Request Ticket Type", "Requester Region", "Requester Country", "Requester City", "Requester Business Area 1", "Requester Business Area 2", "Requester Business Area 3", "Requester Business Area 4", "Requester Business Area 5", "Requester Business Area 6", "Requester Business Area 7", "Requester Business Area 8", "Requester Business Area 9", "Requester Business Area 10", "Requester Org Unit", "Requester Cost Center", "Recipient Region", "Recipient Country", "Recipient City", "Recipient Business Area 1", "Recipient Business Area 2", "Recipient Business Area 3", "Recipient Business Area 4", "Recipient Business Area 5", "Recipient Business Area 6", "Recipient Business Area 7", "Recipient Business Area 8", "Recipient Business Area 9", "Recipient Business Area 10", "Recipient Org Unit", "Recipient Cost Center", "Current Task Stage", "Current Task Name", "Current Provisioning Type", "Current Task Created", "Current Task Updated", "Current Task Status", "Current Task Assigned Group", "Group Members", "Current Pending/Completed By", "Product Code", "Is this request for a mover? (This box is for GTA use only. Users should ignore this option)", "Is it for V Region or P Region?", "Project Number", "Project Description", "Consumer / Business Request", "How long you want to keep the accounts?", "Business Justification", "Campaign ID", "CPC", "Other CPC", "Cell Number", "Product Code", "Decision Path", "Primary Address", "Number of Accounts required", "Do you need more combination?", "Campaign ID", "CPC", "Other CPC", "Cell Number", "Product Code", "Product Code", "Is it for Internal or External?", "Decision Path", "Primary Address", "Number of Accounts required", "Do you need more combination?", "Campaign ID", "CPC", "Other CPC", "Cell Number", "Product Code", "Decision Path", "Primary Address", "Number of Accounts required", "Do you need more combination?", "Campaign ID", "CPC", "Other CPC", "Cell Number", "Product Code", "Confirm that you have read Barclays Test Account Agreement", "Decision Path", "Primary Address", "Number of Accounts required", "Internal Agreement", "External Agreement", "Date of Birth", "Please select Agree if you want to fill all form", "Project Number", "Project Description", "Consumer / Business Request", "Are you testing the Apply Process only or need Account Info?", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Product Code", "No of Accounts for Full application/Instant Credit  - Approve", "No of Accounts for Full application/Instant Credit  - Decline", "No of Accounts for Instant Prescreen/Instant Credit - Approve", "No of Accounts for Instant Prescreen/Instant Credit - Decline", "Business Justification", "Do you need to request accounts for other partner?", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Product Code", "No of Accounts for Full application/Instant Credit  - Approve", "No of Accounts for Full application/Instant Credit  - Decline", "No of Accounts for Instant Prescreen/Instant Credit - Approve", "No of Accounts for Instant Prescreen/Instant Credit - Decline", "Business Justification", "Do you need to request accounts for other partner?", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Product Code", "No of Accounts for Full application/Instant Credit  - Approve", "No of Accounts for Full application/Instant Credit  - Decline", "No of Accounts for Instant Prescreen/Instant Credit - Approve", "No of Accounts for Instant Prescreen/Instant Credit - Decline", "Business Justification", "Do you need to request accounts for other partner?", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Product Code", "No of Accounts for Full application/Instant Credit  - Approve", "No of Accounts for Full application/Instant Credit  - Decline", "No of Accounts for Instant Prescreen/Instant Credit - Approve", "No of Accounts for Instant Prescreen/Instant Credit - Decline", "Business Justification", "Do you need to request accounts for other partner?", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Product Code", "No of Accounts for Full application/Instant Credit  - Approve", "No of Accounts for Full application/Instant Credit  - Decline", "No of Accounts for Instant Prescreen/Instant Credit - Approve", "No of Accounts for Instant Prescreen/Instant Credit - Decline", "Business Justification", "Do you need to request accounts for other partner?", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Product Code", "No of Accounts for Full application/Instant Credit  - Approve", "No of Accounts for Full application/Instant Credit  - Decline", "No of Accounts for Instant Prescreen/Instant Credit - Approve", "No of Accounts for Instant Prescreen/Instant Credit - Decline", "Business Justification", "Do you need to request accounts for other partner?", "How long you want to keep the accounts?", "Cost Center", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Has Annual Mbrshp Fee", "Product Code", "Type of Testing", "Num of Accounts required", "Business Justification", "Business Justification", "Do you need to request accounts for other partner?", "How long you want to keep the accounts?", "Cost Center", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Has Annual Mbrshp Fee", "Cell Number", "Product Code", "Type of Testing", "Num of Accounts required", "Business Justification", "Do you need to request accounts for other partner?", "How long you want to keep the accounts?", "Cost Center", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Has Annual Mbrshp Fee", "Cell Number", "Product Code", "Type of Testing", "Num of Accounts required", "Business Justification", "Do you need to request accounts for other partner?", "How long you want to keep the accounts?", "Cost Center", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Has Annual Mbrshp Fee", "Cell Number", "Product Code", "Type of Testing", "Num of Accounts required", "Business Justification", "Do you need to request accounts for other partner?", "How long you want to keep the accounts?", "Cost Center", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Cell Number", "Has Annual Mbrshp Fee", "Product Code", "Type of Testing", "Num of Accounts required", "Business  Justification", "Do you need to request accounts for other partner?", "How long you want to keep the accounts?", "Cost Center", "Partner", "Partner", "Other Partner", "CPC", "CPC", "Other CPC", "Product Type (TPC)", "Other TPC", "Campaign Id", "Has Annual Mbrshp Fee", "Cell Number", "Product Code", "Type of Testing", "Num of Accounts required", "Business Justification", "Do you need to request accounts for other partner?", "Business Justification", "Business Justification", "Short Name", "First Name", "Last Name", "Department"]
      .map(v=>{return {value:v, fontSize: 8, backgroundColor: "#618DCF", color: "#ffffff"}});
    const data = [`${d.requestID}-${d.requestIDSuffix}`, "PVT Actor (BCUS)", "Closed", "", "", "2020-10-12 15:46:51.0", "2020-10-14 17:30:49.0", "", "", `${d.requesterName}(${d.requesterBrid})`, `${d.recipientName}(${d.recipientBrid})`, d.recipientBrid, "Enabled", "New", "AMER", "US", "Wilmington", "Barclays International", "Consumer, Cards & Payments", "Cards and Payments", "Barclays US Consumer Bank", "Partnerships", "", "", "", "", "", "Partnerships", "Partnership Marketin", "AMER", "US", "Wilmington", "Barclays International", "Consumer, Cards & Payments", "Cards and Payments", "Barclays US Consumer Bank", "Partnerships", "", "", "", "", "", "Partnerships", "Partnership Marketin", "Provisioning", "create account", "manual", "2020-10-13 17:01:00.0", "2020-10-14 17:30:49.0", "Completed ", "E_BCUS_PVT_UAR", "Stewart Conway (G44682151);Sheela Bhat (G01266387);Sunil Mathai (G01281389)", "Stewart Conway (G44682151)", "", "", "", "", "", "Consumer", "", "", "", d.cpc, "", "", "", "", "", d.accounts, "No", "", "", "", "Consumer", "Need Account Information", "Internal", "Internal", "Yes", "", d.accounts, "", "", "", "", "", "Need Account Information", "", "", "", "", "", "", "", "", "", "Yes", "", "", "", "Agree", "", "", "", "", "Spend trarcker for Acquisition bonus", "consumer", "Need Account Information", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "No", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", d.campaign, d.cell, "", "1", "", "", "", "", "", "", "", "", "", "", "", "", d.cpc, d.cpc, "", "", d.campaign, d.campaign, d.cell, "", "", "Website", d.accounts, " testing", "testing", "No", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", d.shortName, d.firstName, d.lastName, d.department]
    .map(v=>{return {value:v, fontSize: 8}});
    const sheetArray = [
      [{ value: "Request Ticket History", fontSize: 20}],
      [{value: "Ticket and task history for Request. Searchable by requested item (application/service), requester, recipient, authorizer/approver, and provisioner/fulfillment team.", fontSize: 8}],
      [{value: "Report Generated on 2020-10-19 16:54:44", fontSize: 8}, {value:"Permalink", fontSize: 8}],
      headers,
      data
   ];
    writeXlsxFile(sheetArray, {fileName: `GMR${formatDate(new Date())} need acct ${d.requesterName} - ${d.requestID}-${d.requestIDSuffix}.xlsx`, fontFamily: "Arial" })
    return false;
  }

  const formatDate = (d: Date) => {
    return d.toISOString().slice(0,10).replace(/-/g,"");
  }

  const copyRequester = () => {
    setValue("recipientName", getValues("requesterName"));
    setValue("recipientBrid", getValues("requesterBrid"));
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
                    <input type="text" {...register("requestID", { required: true })} className={`form-control ${errors.requestID ? 'is-invalid' : ''}`} placeholder="Enter Request ID" aria-label="Request ID" aria-describedby="requestID" required={true} />
                    <span className="input-group-text" id="requestID">-</span>
                    <input type="text" {...register("requestIDSuffix", { required: true })} className={`form-control ${errors.requestIDSuffix ? 'is-invalid' : ''}`} placeholder="Enter Request ID" defaultValue={"101"} aria-label="Request ID Suffix" aria-describedby="requestIDSuffix" required={true} />
                    <div className="invalid-feedback">Please enter valid Request ID.</div>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">Requester Name</span>
                    <input type="text" {...register("requesterName", { required: "Requester Name is mandatory" })} className={`form-control ${errors.requesterName ? 'is-invalid' : ''}`} placeholder="Enter Requester Name" aria-label="Requester Name" />
                    <span className="input-group-text">BRID</span>
                    <input type="text" {...register("requesterBrid", { required: "Requester BRID is mandatory", pattern: { value: /[A-Z]{1}[0-9]{8}/, "message": "Invalid BRID Format" } })} className={`form-control ${errors.requesterBrid ? 'is-invalid' : ''}`} placeholder="Enter Requester BRID" aria-label="Requester Name" />
                    <div className="invalid-feedback">{[errors.requesterName?.message, errors.requesterBrid?.message].filter(Boolean).join(", ")}</div>
                  </div>
                  <div className="input-group mb-3">
                    <button className="btn btn-outline-primary" type="button" id="button-addon1" onClick={()=>{copyRequester()}}>Copy</button>
                    <span className="input-group-text">Recipient Name </span>
                    <input type="text" {...register("recipientName", { required: "Recipient Name is mandatory" })} className={`form-control ${errors.recipientName ? 'is-invalid' : ''}`} placeholder="Enter Recipient Name" aria-label="Recipient Name" />
                    <span className="input-group-text">BRID</span>
                    <input type="text" {...register("recipientBrid", { required: "Recipient BRID is mandatory", pattern: { value: /^[A-Z]{1}[0-9]{8}$/, "message": "Invalid BRID Format" } })} className={`form-control ${errors.recipientBrid ? 'is-invalid' : ''}`} placeholder="Enter Recipient BRID" aria-label="Recipient Name" />
                    <div className="invalid-feedback">{[errors.recipientName?.message, errors.recipientBrid?.message].filter(Boolean).join(", ")}</div>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">CPC</span>
                    <input type="text" className={`form-control ${errors.cpc ? 'is-invalid' : ''}`} {...register("cpc", { required: "CPC is mandatory", pattern: { value: /^[A-Z0-9]{3}$/, "message": "Invalid CPC Format" } })} placeholder="Enter CPC" aria-label="CPC" />
                    <span className="input-group-text">Campaign ID</span>
                    <input type="text" className={`form-control ${errors.campaign ? 'is-invalid' : ''}`} {...register("campaign", { required: false, pattern: { value: /^[A-Z0-9]*$/, "message": "Invalid Campaign ID Format" } })} placeholder="Enter Campaign ID" aria-label="Campaign ID" />
                    <span className="input-group-text">Cell</span>
                    <input type="text" className={`form-control ${errors.cell ? 'is-invalid' : ''}`} {...register("cell", { required: false, pattern: { value: /^[0-9]{1,2}$/, "message": "Invalid Cell Number Format" } })} placeholder="Enter Cell Number" aria-label="Cell" />
                    <div className="invalid-feedback">{[errors.cpc?.message, errors.campaign?.message, errors.cell?.message].filter(Boolean).join(", ")}</div>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Number of Accounts Requested</span>
                    <select className="form-select" id="accounts" aria-label="Example select with button addon" {...register("accounts", { required: true })} >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-text">
                      <input className="form-check-input mt-0" type="checkbox" {...register("personDetails")} value="" aria-label="Checkbox for following text input" onChange={(e) => setIsChecked(e.target.checked)} />
                    </div>
                    <span className={`input-group-text ${isChecked ? '' : 'text-muted'}`}>First and last name</span>
                    <input type="text" aria-label="First name" {...register("firstName", { required: { value: isChecked, message: "First Name is mandatory" } })} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} disabled={!isChecked} />
                    <input type="text" aria-label="Last name" {...register("lastName", { required: { value: isChecked, message: "Last Name is mandatory" } })} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} disabled={!isChecked} />
                    <span className={`input-group-text ${isChecked ? '' : 'text-muted'}`}>Short Name</span>
                    <input type="text" aria-label="Short Name" {...register("shortName", { required: { value: isChecked, message: "Short Name is mandatory" } })} className={`form-control ${errors.shortName ? 'is-invalid' : ''}`} disabled={!isChecked} />
                    <span className={`input-group-text ${isChecked ? '' : 'text-muted'}`}>Department</span>
                    <input type="text" aria-label="Department" {...register("department", { required: { value: isChecked, message: "Department is mandatory" } })} className={`form-control ${errors.department ? 'is-invalid' : ''}`} disabled={!isChecked} />
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
