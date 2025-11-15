"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronRight, Brain, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
      isScrolled ? "bg-white/90 shadow-sm border-b border-gray-200" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white">
            <Brain className="w-4 h-4" />
          </div>
          <span>AIMarket</span>
        </Link>
        
        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search AI assets..." 
              className="pl-10 rounded-full border-gray-300"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/marketplace" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Marketplace
          </Link>
          <Link href="/upload" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sell
          </Link>
          <Link href="/profile" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <User className="w-4 h-4" />
          </Link>
          <Link href="/cart" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </nav>
        
        <div className="hidden md:flex gap-4 items-center">

          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sign In
          </Link>
          <Button className="rounded-full bg-black hover:bg-gray-600 text-white">
            Start Selling
            <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-lg border-b border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search AI assets..." 
                className="pl-10 rounded-full border-gray-300"
              />
            </div>
            <Link href="/marketplace" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Marketplace
            </Link>
            <Link href="/upload" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Sell
            </Link>
            <Link href="/profile" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Profile
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <Link href="/login" className="py-2 text-sm font-medium text-gray-700">
                Sign In
              </Link>
              <Button className="rounded-full bg-black hover:bg-gray-700 text-white">
                Start Selling
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
