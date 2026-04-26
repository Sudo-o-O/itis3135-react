import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Matthew R. Gibbs | ITIS 3135</h1>
      <p className="tagline">Glorious Misfit</p>

      <nav aria-label="Primary navigation">
        <Link to="/">Home</Link>
        <Link to="/contract">Contract</Link>
        <Link to="/survey">Survey</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/documentation">Documentation</Link>
        <Link to="/product">Product</Link>
        <Link to="/highlight">Highlight</Link>
        <Link to="/intro_form">Intro Form</Link>
        <Link to="/slideshow">Slideshow</Link>
      </nav>

      <nav className="secondary-nav" aria-label="Secondary navigation">
        <Link to="/stuff/crap-page">Crappy Page</Link>
        <Link to="/hobby">Hobby</Link>
      </nav>
    </header>
  );
}
