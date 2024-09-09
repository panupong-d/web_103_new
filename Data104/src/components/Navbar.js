import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../assets/image/logo.jpg';

function MyNavbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  const handleRecommendationsClick = () => {
    window.scrollTo(0, 0);
    navigate('/recommended-food');
  };

  const handleImportantPlacesClick = () => {
    window.scrollTo(0, 0);
    navigate('/important-places');
  };

  const handleActivitiesClick = () => {
    window.scrollTo(0, 0);
    navigate('/activities'); // Navigate to Activities page
  };

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact-us');
  };

  const handleCheckCheckinSpots = () => {
    window.scrollTo(0, 0);
    navigate('/checkin-spots');
  };
  return (
    <Navbar className="navbar-custom" expand="lg" fixed="top">
      <Navbar.Brand onClick={handleLogoClick} className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <Nav.Link onClick={handleLogoClick}>ตลาดริมคลองเจริญกรุง 103</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleRecommendationsClick}>อาหารแนะนำ</Nav.Link>
          <Nav.Link onClick={handleImportantPlacesClick}>สถานที่ใกล้เคียง</Nav.Link>
          <Nav.Link onClick={handleCheckCheckinSpots}>จุดเช็คอิน</Nav.Link>
          <Nav.Link onClick={handleActivitiesClick}>กิจกรรม</Nav.Link> {/* New Link */}
          
        </Nav>
        <Nav className="ml-auto">
        <Nav.Link href="https://drive.google.com/drive/folders/1MDqdz653xq7Jm7wAC2u27Qmxewdph_B9?usp=drive_link" target="_blank">
            โหลดมาสคอต
          </Nav.Link>
          <Nav.Link onClick={handleContactClick}>ช่องทางติดต่อ</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
