function Hero() {
  return (
    <section
      style={{
        background: "#00a651",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1>Welcome to QuickKart</h1>
      <p>Groceries, Food, Pharmacy, Home Services & Rider Booking</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Start Shopping
      </button>
    </section>
  );
}

export default Hero;
