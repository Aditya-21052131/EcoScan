import React from 'react';
import { Scan, X } from 'lucide-react';

interface ScannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Scanner({ isOpen, onClose }: ScannerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Scan Product</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 border-2 border-green-500/50 rounded-lg"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-500/50 animate-pulse"></div>
            <Scan className="w-12 h-12 text-green-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <p className="text-sm text-center text-gray-600">Position barcode within the frame</p>
      </div>
    </div>
  );
}
