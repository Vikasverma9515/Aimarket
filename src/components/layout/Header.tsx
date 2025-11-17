'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon,
  PlusIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Button from '../common/Button';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false); // TODO: Replace with auth state

  const navigation = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Categories', href: '/marketplace?category=all' },
    { name: 'How it works', href: '/how-it-works' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-primary-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                AI
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">Marketplace</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search AI assets..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => router.push('/upload')}
                  className="hidden md:flex items-center"
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Sell Asset
                </Button>
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <UserCircleIcon className="h-8 w-8" />
                </button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => router.push('/login')}
                >
                  Login
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => router.push('/signup')}
                >
                  Sign Up
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-2 space-y-1">
                  <button 
                    className="bg-primary-600 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => { setIsMenuOpen(false); router.push('/upload'); }}
                  >
                    Sell Asset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;