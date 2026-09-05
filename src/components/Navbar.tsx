import { Link } from 'react-router-dom';

interface NavbarProps {
  companyName?: string;
}

export default function Navbar({ companyName = 'Allverze Corporation' }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="logo">{companyName}</div>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </ul>
    </nav>
  );
}