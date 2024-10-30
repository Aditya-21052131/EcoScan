import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import SearchBar from './components/SearchBar';
import Scanner from './components/Scanner';
import ProductCard from './components/ProductCard';

const DEMO_PRODUCTS = [
  {
    name: "Eco-Friendly Water Bottle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    sustainability: 95,
    recyclable: true,
    certifications: ["BPA Free", "Fair Trade"],
    energyRating: "A+"
  },
  {
    name: "Bamboo Cutlery Set",
    image: "https://images.unsplash.com/photo-1584346133934-a3bd1c5de257?auto=format&fit=crop&w=600&q=80",
    sustainability: 90,
    recyclable: true,
    certifications: ["FSC"],
    energyRating: "A"
  },
  {
    name: "Organic Cotton T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    sustainability: 85,
    recyclable: true,
    certifications: ["GOTS", "Fair Trade"],
    energyRating: "A"
  }
];

function App() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-500" />
              <h1 className="text-xl font-semibold text-gray-900">EcoScan</h1>
            </div>
            <nav className="flex gap-4">
              <button className="text-gray-600 hover:text-gray-900">About</button>
              <button className="text-gray-600 hover:text-gray-900">Help</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Make Sustainable Choices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Scan products to instantly view their environmental impact, certifications,
            and sustainable alternatives.
          </p>
          <SearchBar onScan={() => setIsScannerOpen(true)} />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {DEMO_PRODUCTS.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>

      {/* Scanner Modal */}
      <Scanner isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />
    </div>
  );
}

export default App;
