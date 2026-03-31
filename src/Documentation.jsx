export default function Documentation() {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <h2>Glorious Misfit Handbook</h2>

      <p>
        This handbook explains how the Glorious Misfit Guild builds pages that
        stay consistent, validate cleanly, and pass basic accessibility checks.
        It’s the “rules of the road” for shipping work without chaos taking
        over.
      </p>

      <div className="doc-layout">
        <nav className="doc-nav" aria-label="Documentation navigation">
          <h3>Handbook Sections</h3>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("guild_rules")}
              >
                Guild Rules
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("page_structure")}
              >
                Page Structure
              </button>
            </li>
            <li>
              <button type="button" onClick={() => scrollToSection("includes")}>
                Header/Footer Includes
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("navigation")}
              >
                Navigation Setup
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("accessibility")}
              >
                Accessibility Basics
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("validation")}
              >
                Validation Checklist
              </button>
            </li>
          </ul>
        </nav>

        <section className="doc-content" aria-label="Documentation content">
          <section id="guild_rules">
            <h3>Guild Rules</h3>
            <ul>
              <li>Use semantic HTML: header, main, footer.</li>
              <li>One H1 per page. H2 is the page title inside main.</li>
              <li>Keep headers/footers consistent using includes.</li>
              <li>Fix contrast and labels before turning work in.</li>
            </ul>
          </section>

          <section id="page_structure">
            <h3>Page Structure</h3>
            <p>Every ITIS page should follow this basic structure:</p>
            <pre>
              <code>{`<div data-include="components/header.html"></div>
<main>
  <h2>Page Title</h2>
  <!-- page content -->
</main>
<div data-include="components/footer.html"></div>
<script src="scripts/htmlinclude.js"></script>`}</code>
            </pre>
          </section>

          <section id="includes">
            <h3>Header/Footer Includes</h3>
            <p>
              Using shared components prevents you from fixing the same bug on
              five pages. Update the header once and every page inherits the
              change.
            </p>
          </section>

          <section id="navigation">
            <h3>Navigation Setup</h3>
            <p>You need two navbars:</p>
          </section>

          <section id="accessibility">
            <h3>Accessibility Basics</h3>
            <ul>
              <li>All links must be readable.</li>
              <li>Form inputs must have labels.</li>
              <li>Alt text must be descriptive.</li>
              <li>Headings should be in order.</li>
            </ul>
          </section>

          <section id="validation">
            <h3>Validation Checklist</h3>
            <ul>
              <li>HTML passes Accumulus.</li>
              <li>CSS passes cleanly.</li>
              <li>No contrast errors.</li>
              <li>All internal links work.</li>
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}
