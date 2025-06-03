import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const categories = [
  { id: 1, name: 'Electronics', icon: '📱' },
  { id: 2, name: 'Fashion', icon: '👗' },
  { id: 3, name: 'Home & Garden', icon: '🏡' },
  { id: 4, name: 'Sports', icon: '⚽' },
  { id: 5, name: 'Toys', icon: '🧸' },
  { id: 6, name: 'Books', icon: '📚' },
];

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Batik',
    price: 99.99,
    imageUrl:
      'https://images.unsplash.com/photo-1672716912554-c23ba8fac4ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Cigarettes',
    price: 79.99,
    imageUrl:
      'https://images.unsplash.com/photo-1491882661351-12b9183f0588?q=80&w=2903&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.0,
  },
  {
    id: 3,
    name: 'Vegetable Seeds',
    price: 199.99,
    imageUrl:
      'https://images.unsplash.com/photo-1701161794752-f187d6711a78?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Brick Oven',
    price: 49.99,
    imageUrl:
      'https://images.unsplash.com/photo-1632758822822-899ee7daaa15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.1,
  },
];

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-sky-600">Usaha Rakjat</div>
            <nav className="space-x-4 hidden md:flex">
              <a href="#" className="text-gray-600 hover:text-sky-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search products..."
                className="hidden md:block px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button className="text-sky-600 hover:text-sky-800 md:hidden" aria-label="Open menu">
                {/* Hamburger icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-amber-500 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Discover Amazing Products at Unbeatable Prices
            </h1>
            <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
              Your one-stop marketplace for everything you need.
            </p>
            <a
              href="#products"
              className="inline-block bg-white text-sky-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <div className="text-gray-700 font-medium">{cat.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-12 container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-t-lg object-cover h-48 w-full"
                  loading="lazy"
                />
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
                    <div className="text-sky-600 font-bold text-xl mb-2">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          className={`w-5 h-5 ${
                            idx < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'
                          }`}
                          viewBox="0 0 20 20"
                          fill={idx < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          stroke="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.044 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                        </svg>
                      ))}
                      <span className="text-gray-600 ml-2">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <button className="mt-4 bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>© 2025 Usaha Rakjat. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
