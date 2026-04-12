import ListGroup from 'react-bootstrap/ListGroup';

export default function NavBar() {
  return (
    <>
      <ListGroup bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
          <ListGroup.Item href="#home">Home</ListGroup.Item>
          <ListGroup.Item href="#home">About</ListGroup.Item>
      </ListGroup>
      </>
    );
}