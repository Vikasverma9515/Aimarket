import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import AssetGrid from '@/components/marketplace/AssetGrid';
import { Asset } from '@/types';

// Mock data - replace with actual API calls
const mockAssets: Asset[] = [
  {
    id: '1',
    title: 'AI Code Generator',
    description: 'Generate Python code using advanced AI models',
    category: 'code',
    price: 29.99,
    tags: ['python', 'ai', 'automation'],
    licenseType: 'standard',
    sellerId: 'seller1',
    seller: { id: 'seller1', email: 'seller@example.com', username: 'CodeMaster', createdAt: '2024-01-01' },
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    rating: 4.8,
    reviewCount: 124
  },
  // Add more mock assets...
];

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The AI Asset Marketplace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Discover, buy, and sell AI-generated code, images, datasets, and prompts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
                onClick={() => router.push('/marketplace')}
              >
                Explore Marketplace
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
                onClick={() => router.push('/upload')}
              >
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AI Marketplace?
            </h2>
            <p className="text-lg text-gray-600">
              The premier destination for AI-generated digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Generated</h3>
              <p className="text-gray-600">
                Cutting-edge assets created by advanced AI models
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
              <p className="text-gray-600">
                Get your assets immediately after purchase
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Earnings</h3>
              <p className="text-gray-600">
                Sellers keep 90% of every sale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Assets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Assets</h2>
            <Link 
              href="/marketplace" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all →
            </Link>
          </div>
          
          <AssetGrid assets={mockAssets.slice(0, 4)} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of creators earning from their AI-generated assets
          </p>
          <Button
            size="lg"
            className="bg-white text-primary-600 hover:bg-gray-100"
            onClick={() => router.push('/auth/signup')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;