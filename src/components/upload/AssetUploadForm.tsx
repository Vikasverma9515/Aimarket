import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ASSET_CATEGORIES, LICENSE_TYPES } from '@/utils/constants';
import Button from '../common/Button';
import FileUploadZone from './FileUploadZone';

const AssetUploadForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'code',
    price: '',
    tags: '',
    licenseType: 'standard',
    files: [] as File[],
    previewImage: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFilesSelected = (files: File[]) => {
    setFormData({ ...formData, files });
  };

  const handlePreviewSelected = (file: File) => {
    setFormData({ ...formData, previewImage: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement file upload and asset creation with Supabase
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Asset</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Asset Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="input-field"
              placeholder="Enter a descriptive title for your asset"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="input-field"
              placeholder="Describe what your asset does and how it can be used"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                className="input-field"
                value={formData.category}
                onChange={handleChange}
              >
                {ASSET_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (USD) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                min="0"
                step="0.01"
                required
                className="input-field"
                placeholder="0.00 for free"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              className="input-field"
              placeholder="machine learning, python, automation (comma separated)"
              value={formData.tags}
              onChange={handleChange}
            />
            <p className="mt-1 text-sm text-gray-500">
              Add relevant tags to help users find your asset
            </p>
          </div>

          <div>
            <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">
              License Type *
            </label>
            <select
              id="licenseType"
              name="licenseType"
              required
              className="input-field"
              value={formData.licenseType}
              onChange={handleChange}
            >
              {LICENSE_TYPES.map((license) => (
                <option key={license.value} value={license.value}>
                  {license.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Asset Files *
            </label>
            <FileUploadZone
              onFilesSelected={handleFilesSelected}
              acceptedTypes={formData.category === 'image' ? 'image/*' : '*/*'}
              maxFiles={formData.category === 'code' ? 1 : 10}
            />
          </div>

          {(formData.category === 'code' || formData.category === 'dataset') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preview Image (Optional)
              </label>
              <FileUploadZone
                onFilesSelected={(files) => handlePreviewSelected(files[0])}
                acceptedTypes="image/*"
                maxFiles={1}
              />
            </div>
          )}

          <div className="flex justify-end space-x-4">
            <Button
              variant="secondary"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              loading={loading}
            >
              Upload Asset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetUploadForm;