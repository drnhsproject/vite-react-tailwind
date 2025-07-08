import './App.css';

interface Store {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: 'Batik Bagus',
    description: 'The best quality batik, with the prettiest motifs',
    imageUrl:
      'https://images.unsplash.com/photo-1672716912554-c23ba8fac4ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Golden Threads',
    description: 'Fashion that shines with every step.',
    imageUrl:
      'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Sunshine Books',
    description: 'Brighten your mind with our collection.',
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Brick Factory',
    description: 'Best quality red bricks',
    imageUrl:
      'https://images.unsplash.com/photo-1632758822822-899ee7daaa15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Header: React.FC = () => (
  <header className="sticky top-0 backdrop-blur-sm bg-white/70 border-b border-blue-300 z-50">
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <div className="text-2xl font-extrabold text-blue-700">Usaha Rakjat</div>
      <ul className="flex space-x-6 text-blue-700 font-semibold">
        <li>
          <a href="#stores" className="hover:text-yellow-500 transition-colors duration-300">
            Stores
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-500 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-500 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const Hero: React.FC = () => (
  <section className="bg-gradient-to-r from-sky-500 to-amber-500 text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Discover Your Favorite Stores</h1>
      <p className="text-lg max-w-xl mx-auto mb-8 drop-shadow-md">
        Explore the best marketplace for diverse shops with unbeatable offers. Buy what you love,
        support your community.
      </p>
      <a
        href="#stores"
        className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-300 hover:text-blue-900 transition-colors duration-300"
      >
        Browse Stores
      </a>
    </div>
  </section>
);

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
    <img src={store.imageUrl} alt={store.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-blue-800 font-semibold text-xl mb-1">{store.name}</h3>
      <p className="text-gray-600">{store.description}</p>
    </div>
  </div>
);

const StoresList: React.FC = () => (
  <section id="stores" className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-extrabold text-blue-700 mb-10 text-center">Our Stores</h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} />
      ))}
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-amber-500 text-blue-700 py-8 mt-16">
    <div className="max-w-7xl mx-auto px-6 text-center text-sm">
      &copy; {new Date().getFullYear()} Usaha Rakjat. All rights reserved.
    </div>
  </footer>
);

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-gradient-to-b from-blue-50 to-yellow-50 text-gray-900 font-sans">
        <Header />
        <main>
          <Hero />
          <StoresList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
