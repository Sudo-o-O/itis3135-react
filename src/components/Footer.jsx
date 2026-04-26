import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Footer links">
        <a href="https://sudo-o-o.github.io/">GitHub.io</a>
        <span className="sep">|</span>
        <Link to="/">ITIS3135</Link>
        <span className="sep">|</span>
        <a href="https://github.com/Sudo-o-O">GitHub</a>
        <span className="sep">|</span>
        <a href="https://webpages.charlotte.edu/mgibbs13">CLT Web</a>
        <span className="sep">|</span>
        <a href="https://www.freecodecamp.org/Glorious-Misfit">freeCodeCamp</a>
        <span className="sep">|</span>
        <a href="https://www.linkedin.com/in/gibbsrmatthew/">LinkedIn</a>
      </nav>

      <p>
        Page built by{" "}
        <Link to="/gloriousmisfitwebdesign">Glorious Misfit Web Design</Link>{" "}
        &copy; 2026
      </p>

      <p>
        Certified in{" "}
        <a href="https://www.freecodecamp.org/certification/glorious-misfit/responsive-web-design">
          Responsive Web Design
        </a>
      </p>

      <p>
        <a href="https://validator.w3.org/check?uri=referer">Validate HTML</a>
      </p>
    </footer>
  );
}
