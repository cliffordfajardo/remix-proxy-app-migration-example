export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/faq" rel="noreferrer">
            FAQ{"  "}
          </a>
          <span>
            (this route doest actually exist in the remix app, it exists in the
            express app)
          </span>
        </li>
        <li>
          <a href="/about" rel="noreferrer">
            About{"  "}
          </a>
          <span>
            (this route doest actually exist in the remix app, it exists in the
            express app)
          </span>
        </li>
      </ul>
    </div>
  );
}
