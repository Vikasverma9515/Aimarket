import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Asset } from '@/types';
import Rating from '../common/Rating';
import Button from '../common/Button';

interface AssetCardProps {
  asset: Asset;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      code: 'bg-blue-100 text-blue-800',
      image: 'bg-purple-100 text-purple-800',
      dataset: 'bg-green-100 text-green-800',
      prompt: 'bg-yellow-100 text-yellow-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-100">
        {asset.thumbnail ? (
          <Image
            src={asset.thumbnail}
            alt={asset.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-center">
              <div className="text-4xl mb-2">📄</div>
              <div className="text-sm">{asset.category.toUpperCase()}</div>
            </div>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(asset.category)}`}>
            {asset.category}
          </span>
        </div>
        {asset.price === 0 && (
          <div className="absolute top-2 right-2">
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded-full">
              FREE
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link 
            href={`/marketplace/${asset.id}`}
            className="font-semibold text-gray-900 hover:text-primary-600 line-clamp-2"
          >
            {asset.title}
          </Link>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {asset.description}
        </p>

        <div className="flex items-center mb-3">
          <Rating 
            rating={asset.rating || 0} 
            size="sm" 
            showCount 
            // count={asset.reviewCount || 0} 
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">
              {asset.seller.username}
            </span>
          </div>
          
          <div className="text-right">
            <div className="font-bold text-lg text-gray-900">
              {asset.price === 0 ? 'Free' : `$${asset.price}`}
            </div>
            <Button 
              size="sm" 
              className="mt-1"
              onClick={() => {/* Handle buy/download */}}
            >
              {asset.price === 0 ? 'Download' : 'Buy Now'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;