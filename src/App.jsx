import "./App.css";

function App() {
  const categories = [
    "🛒 Grocery",
    "🍔 Food Delivery",
    "🛍️ Shopping",
    "💊 Pharmacy",
    "🏠 Home Services",
    "🚴 Rider Booking",
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>QuickKart Super App</h1>
        <p>Everything Delivered to Your Doorstep</p>
      </header>

      <section className="hero">
        <h2>Welcome to QuickKart</h2>
        <p>Order groceries, food, medicines and book home services.</p>
        <button>Shop Now</button>
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <div className="grid">
          {categories.map((item, index) => (
            <div className="card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
