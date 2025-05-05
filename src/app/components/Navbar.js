import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">EduVerse</h1>
      <nav className="nav-links">
        <a href="/">Home</a> 
        <a href="/subjects">Subjects</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}