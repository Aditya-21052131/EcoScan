import React from 'react';
import { Leaf, Recycle, Award, Battery } from 'lucide-react';

interface ProductCardProps {
  product: {
    name: string;
    image: string;
    sustainability: number;
    recyclable: boolean;
    certifications: string[];
    energyRating: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          {product.sustainability}% Eco Score
        </div>
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {product.recyclable && (
          <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm">
            <Recycle className="w-4 h-4" />
            <span>Recyclable</span>
          </div>
        )}
        <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-sm">
          <Battery className="w-4 h-4" />
          <span>{product.energyRating}</span>
        </div>
        {product.certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm">
            <Award className="w-4 h-4" />
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
