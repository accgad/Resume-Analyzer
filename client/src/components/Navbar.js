import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/upload" style={{ marginRight: '10px' }}>Upload</Link>
      <Link to="/results" style={{ marginRight: '10px' }}>Results</Link>
      <Link to="/how-it-works" style={{ marginRight: '10px' }}>How It Works</Link>
      <Link to="/about-contact" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
