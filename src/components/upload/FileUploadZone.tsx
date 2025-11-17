import React, { useCallback, useState } from 'react';
import { CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FileUploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes?: string;
  maxFiles?: number;
  maxSizeInMB?: number;
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  onFilesSelected,
  acceptedTypes = '*/*',
  maxFiles = 5,
  maxSizeInMB = 10
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleFiles = useCallback((files: File[]) => {
    const validFiles = files.filter(file => {
      if (file.size > maxSizeInMB * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is ${maxSizeInMB}MB.`);
        return false;
      }
      return true;
    }).slice(0, maxFiles);

    setSelectedFiles(validFiles);
    onFilesSelected(validFiles);
  }, [maxSizeInMB, maxFiles, onFilesSelected]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, [handleFiles]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50 transition-colors ${
          dragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple={maxFiles > 1}
          accept={acceptedTypes}
          onChange={handleInputChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <p className="text-lg font-medium text-gray-900">
            Drop files here, or click to browse
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Maximum {maxFiles} file{maxFiles > 1 ? 's' : ''}, up to {maxSizeInMB}MB each
          </p>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Selected Files:</h4>
          {selectedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-gray-500">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;