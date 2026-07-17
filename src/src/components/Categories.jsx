function Categories() {
  const items = [
    "🛒 Grocery",
    "🍔 Food",
    "💊 Pharmacy",
    "🏠 Home Services",
    "🚴 Rider Booking",
    "🛍️ Fashion",
    "📱 Electronics",
    "🥛 Dairy"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Categories</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))",
          gap: "15px"
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,.1)"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
