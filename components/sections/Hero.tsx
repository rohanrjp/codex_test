export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__headline">
        <p className="kicker">Sunday Edition • Remote • Open for Work</p>
        <h1>
          Avery Brooks
          <span>Product Designer & Front-End Engineer</span>
        </h1>
        <p className="hero__lede">
          I craft thoughtful digital products with a newsroom mindset—clear hierarchy,
          sharp typography, and stories that move people to action.
        </p>
      </div>
      <div className="hero__details">
        <div>
          <h2>Quick Facts</h2>
          <ul>
            <li>8+ years building design systems</li>
            <li>Lead designer at Northwind Studio</li>
            <li>Based in Portland, OR</li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>avery@studio.news</li>
            <li>linkedin.com/in/averybrooks</li>
            <li>github.com/averybrooks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
