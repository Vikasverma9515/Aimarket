import React, { useState } from 'react';
import { Asset } from '@/types';
import { COMMISSION_RATE } from '@/utils/constants';
import Button from '../common/Button';
import Modal from '../common/Modal';

interface CheckoutFormProps {
  asset: Asset;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  asset,
  isOpen,
  onClose,
  onSuccess
}) => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  const platformFee = asset.price * COMMISSION_RATE;
  const sellerAmount = asset.price - platformFee;

  const handlePurchase = async () => {
    setLoading(true);
    
    try {
      // TODO: Implement Stripe payment processing
      // const { error } = await stripe.confirmCardPayment(clientSecret);
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Purchase">
      <div className="space-y-6">
        {/* Asset Summary */}
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded"></div>
            <div>
              <h3 className="font-medium text-gray-900">{asset.title}</h3>
              <p className="text-sm text-gray-600">by {asset.seller.username}</p>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Asset Price</span>
            <span className="text-gray-900">${asset.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Platform Fee</span>
            <span className="text-gray-900">${platformFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Seller Receives</span>
            <span className="text-gray-900">${sellerAmount.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${asset.price.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Payment Method
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Credit/Debit Card</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value as 'paypal')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">PayPal</span>
            </label>
          </div>
        </div>

        {/* Card Form */}
        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="secondary"
            onClick={onClose}
            className="flex-1"
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            onClick={handlePurchase}
            className="flex-1"
            loading={loading}
          >
            Purchase ${asset.price.toFixed(2)}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutForm;