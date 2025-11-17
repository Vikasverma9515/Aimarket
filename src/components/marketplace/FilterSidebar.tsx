import React from 'react';
import { ASSET_CATEGORIES } from '@/utils/constants';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ''}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">All Categories</span>
          </label>
          {ASSET_CATEGORIES.map((category) => (
            <label key={category.value} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                {rating}+ stars
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onCategoryChange('');
        }}
        className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium"
      >
        Clear all filters
      </button>
    </div>
  );
};

export default FilterSidebar;