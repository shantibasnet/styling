import styles from "./home.module.css";

function Home() {
  return (
    <div className="home">
      <h2>NEW MOON</h2>
      <p>This is the main content area with different positional layouts.</p>

      <div className="relative-position">
        <h3>Relative Positioning</h3>
        <p>This is a relative-positioned element.</p>
      </div>

      <div>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Home;
