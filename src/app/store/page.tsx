'use client';

import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { SCHOOL_STORE_PRODUCTS } from '@/lib/constants';

export default function StorePage() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [showCart, setShowCart] = useState(false);

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) - 1),
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, qty]) => {
      const product = SCHOOL_STORE_PRODUCTS.find(
        (p) => p.id === parseInt(productId)
      );
      return sum + (product?.price || 0) * qty;
    }, 0);
  };

  const categories = Array.from(
    new Set(SCHOOL_STORE_PRODUCTS.map((p) => p.category))
  );

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">School Store</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Order uniforms, bags, stationery, and other school essentials online
          </p>
        </div>
      </section>

      {/* Store Section */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Cart */}
            <div className="lg:col-span-1">
              <div className="card-premium-lg sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Shopping Cart</h3>
                  <ShoppingCart size={24} className="text-primary-purple" />
                </div>

                {getTotalItems() > 0 ? (
                  <>
                    <div className="space-y-3 mb-6 pb-6 border-b border-purple-100">
                      {Object.entries(cart).map(([productId, qty]) => {
                        const product = SCHOOL_STORE_PRODUCTS.find(
                          (p) => p.id === parseInt(productId)
                        );
                        if (!product) return null;
                        return (
                          <div key={productId} className="text-sm">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-gray-900">
                                {product.name}
                              </span>
                              <span className="text-accent-gold font-bold">
                                ₹{(product.price * qty).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => removeFromCart(parseInt(productId))}
                                className="p-1 hover:bg-purple-100 rounded"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-6 text-center">{qty}</span>
                              <button
                                onClick={() => addToCart(parseInt(productId))}
                                className="p-1 hover:bg-purple-100 rounded"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Total Items:</span>
                        <span className="text-lg font-bold text-gray-900">
                          {getTotalItems()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total Price:</span>
                        <span className="text-2xl font-bold text-accent-gold">
                          ₹{getTotalPrice().toLocaleString()}
                        </span>
                      </div>
                      <button className="w-full px-4 py-2 rounded-lg font-semibold bg-primary-purple text-white hover:bg-purple-800 transition-all">
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600 text-center py-4">Cart is empty</p>
                )}

                <button
                  onClick={() => setShowCart(!showCart)}
                  className="w-full mt-4 px-4 py-2 rounded-lg font-semibold border-2 border-primary-purple text-primary-purple hover:bg-purple-50 transition-all"
                >
                  {showCart ? 'Hide Cart' : 'View Cart'}
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              {categories.map((category) => (
                <div key={category} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {category}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SCHOOL_STORE_PRODUCTS.filter((p) => p.category === category).map(
                      (product) => (
                        <div key={product.id} className="card-premium group">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-purple transition-colors">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-6 pt-4 border-t border-purple-100">
                            <span className="text-3xl font-bold text-accent-gold">
                              ₹{product.price}
                            </span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => removeFromCart(product.id)}
                                className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
                              >
                                <Minus size={20} className="text-gray-600" />
                              </button>
                              <span className="w-8 flex items-center justify-center font-bold text-gray-900">
                                {cart[product.id] || 0}
                              </span>
                              <button
                                onClick={() => addToCart(product.id)}
                                className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
                              >
                                <Plus size={20} className="text-primary-purple" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-cream-light rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ✈️ Fast Delivery
              </h3>
              <p className="text-sm text-gray-600">
                Home delivery available within city limits
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                💳 Easy Payment
              </h3>
              <p className="text-sm text-gray-600">
                Multiple payment options available
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ❓ Support
              </h3>
              <p className="text-sm text-gray-600">
                Contact us for any ordering assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
