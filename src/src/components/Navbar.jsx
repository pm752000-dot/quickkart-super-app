function Navbar() {
  return (
    <nav
      style={{
        background: "#00a651",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>QuickKart</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Home</span>
        <span style={{ marginRight: "20px" }}>Categories</span>
        <span style={{ marginRight: "20px" }}>Cart</span>
        <span>Login</span>
      </div>
    </nav>
  );
}

export default Navbar;
