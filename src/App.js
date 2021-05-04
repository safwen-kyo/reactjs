import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Col,Form,FormControl,Button,Nav,Table } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">KOORA-Tv</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#live">Live</Nav.Link> 
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<div >
<Form>
<Form.Row>
<Col>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
</Col>
    <Col>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Col>
  </Form.Row>
<Button variant="primary" type="submit">
    Submit
  </Button>
</Form></div>
<div>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Tous Les Matchs</th>
      <th>Watch en direct</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MAN CITY vs PSG </td>
      <td> <Button href="#">LIVE</Button> 
      </td> 
    </tr>
    <tr>
      <td>OLYMPIQUE HZAG vs ATHLETIC NAFTA</td>
      <td>  <Button href="#">LIVE</Button> 
      </td>
    </tr>
    <tr>
      <td>OULED SLAMA vs OULED WHIBA</td>
      <td> <Button href="#">LIVE</Button> 
      </td>
    </tr>
    <tr>
      <td>OLYMPIQUE GATAA REBAT vs CHED TAW NJIK FOOTBALL</td>
      <td> <Button href="#">LIVE</Button> 
      </td>
    </tr>
    <tr>
      <td>AKEEK SPORTIVE VS CLUB NAGHARA</td>
      <td> <Button href="#">LIVE</Button> 
      </td>
    </tr>
  </tbody>
</Table>
</div>
    </div>
  );
}

export default App;
