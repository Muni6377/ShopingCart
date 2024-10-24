import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetails({ product, onClose, onAddToCart }: ProductDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}