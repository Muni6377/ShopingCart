import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { CheckoutForm } from '../types';

interface OrderConfirmationProps {
  orderDetails: CheckoutForm;
  total: number;
  onClose: () => void;
}

export function OrderConfirmation({ orderDetails, total, onClose }: OrderConfirmationProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Order Confirmed!</h2>
        <p className="text-gray-600">
          Thank you for your purchase. We'll send you a confirmation email shortly.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-gray-600">Order Total:</span>{' '}
            <span className="font-semibold">${total.toFixed(2)}</span>
          </p>
          <p>
            <span className="text-gray-600">Shipping Address:</span>{' '}
            <span className="font-semibold">
              {orderDetails.address}, {orderDetails.city} {orderDetails.zipCode}
            </span>
          </p>
          <p>
            <span className="text-gray-600">Email:</span>{' '}
            <span className="font-semibold">{orderDetails.email}</span>
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
}