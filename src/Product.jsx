import { Link } from "react-router";

export default function Product() {
  return (
    <>
      <h2>Glorious Misfit Starter Package</h2>

      <section className="hero">
        <h3>Build It Clean. Ship It Bold.</h3>
        <p>
          The Glorious Misfit Starter Package is designed for creators,
          students, and small teams who want a strong foundation without
          unnecessary complexity. Clean structure. Strong contrast. Real
          results.
        </p>

        <Link className="cta-button" to="/survey">
          Request the Starter Package
        </Link>
      </section>

      <section>
        <h3>What You Get</h3>
        <ul>
          <li>One fully responsive landing page</li>
          <li>Accessible color contrast &amp; readable typography</li>
          <li>Reusable header and footer components</li>
          <li>Basic SEO + performance cleanup</li>
          <li>Validation-ready HTML structure</li>
        </ul>
      </section>

      <section className="pricing">
        <h3>Choose Your Tier</h3>

        <div className="pricing-layout">
          <div className="price-card">
            <h4>Basic</h4>
            <p className="price">$99</p>
            <ul>
              <li>Single page</li>
              <li>Style polish</li>
              <li>Clean structure</li>
            </ul>
          </div>

          <div className="price-card featured">
            <h4>Plus</h4>
            <p className="price">$199</p>
            <ul>
              <li>Multi-page site</li>
              <li>Reusable components</li>
              <li>Accessibility fixes</li>
            </ul>
          </div>

          <div className="price-card">
            <h4>Pro</h4>
            <p className="price">$399</p>
            <ul>
              <li>Full site build</li>
              <li>Advanced cleanup</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>Why Glorious Misfit?</h3>
        <p>
          We don’t over-engineer. We don’t over-promise. We build solid,
          accessible foundations that grow with you. Clean code first. Chaos
          optional.
        </p>
      </section>
    </>
  );
}
