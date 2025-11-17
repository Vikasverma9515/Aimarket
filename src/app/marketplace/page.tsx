
// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Filter, Grid, List, Star, Download, Eye, Code, ImageIcon, FileText, Database } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { ProductCard } from "@/components/product/product-card"
// import Image from "next/image"

// const categories = [
//   { name: "All", icon: <Grid className="w-4 h-4" />, count: 12500 },
//   { name: "AI Code", icon: <Code className="w-4 h-4" />, count: 1200 },
//   { name: "AI Images", icon: <ImageIcon className="w-4 h-4" />, count: 3500 },
//   { name: "Prompts", icon: <FileText className="w-4 h-4" />, count: 2800 },
//   { name: "Datasets", icon: <Database className="w-4 h-4" />, count: 890 },
// ]

// const products = [
//   {
//     id: 1,
//     title: "Advanced RAG Implementation",
//     description: "Complete RAG system with vector search and chat interface built with Python and LangChain.",
//     price: 49,
//     originalPrice: 79,
//     category: "AI Code",
//     rating: 4.8,
//     downloads: 245,
//     seller: "AIDevPro",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
//     tags: ["Python", "LangChain", "Vector DB"],
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Cyberpunk Art Collection",
//     description: "50 high-quality AI-generated cyberpunk illustrations perfect for games and digital media.",
//     price: 29,
//     originalPrice: 49,
//     category: "AI Images",
//     rating: 4.9,
//     downloads: 1024,
//     seller: "DigitalArtist",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
//     tags: ["Cyberpunk", "Game Art", "Sci-Fi"],
//     featured: false
//   },
//   {
//     id: 3,
//     title: "Marketing Copy Prompts",
//     description: "100+ proven prompts for marketing and copywriting that convert prospects into customers.",
//     price: 19,
//     originalPrice: 29,
//     category: "Prompts",
//     rating: 4.7,
//     downloads: 567,
//     seller: "PromptMaster",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
//     tags: ["Marketing", "Copywriting", "Sales"],
//     featured: true
//   },
//   {
//     id: 4,
//     title: "E-commerce Dataset",
//     description: "Comprehensive e-commerce dataset with 100k+ product listings for ML training.",
//     price: 39,
//     originalPrice: 59,
//     category: "Datasets",
//     rating: 4.6,
//     downloads: 89,
//     seller: "DataScientist",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
//     tags: ["E-commerce", "ML", "Training Data"],
//     featured: false
//   },
//   {
//     id: 5,
//     title: "Neural Network Boilerplate",
//     description: "Production-ready neural network template with PyTorch and deployment scripts.",
//     price: 69,
//     originalPrice: 99,
//     category: "AI Code",
//     rating: 4.8,
//     downloads: 156,
//     seller: "MLEngineer",
//     image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
//     tags: ["PyTorch", "Neural Network", "Production"],
//     featured: true
//   },
//   {
//     id: 6,
//     title: "Fantasy Character Pack",
//     description: "25 unique fantasy character designs created with advanced AI image generation.",
//     price: 24,
//     originalPrice: 39,
//     category: "AI Images",
//     rating: 4.5,
//     downloads: 432,
//     seller: "FantasyArtist",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
//     tags: ["Fantasy", "Characters", "RPG"],
//     featured: false
//   }
// ]

// export default function MarketplacePage() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
//   const [sortBy, setSortBy] = useState("popular")
//   const [searchQuery, setSearchQuery] = useState("")

//   const filteredProducts = products.filter(product => {
//     const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
//     const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
//     return matchesCategory && matchesSearch
//   })

//   return (
//     <div className="min-h-screen bg-gray-50/30">
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">AI Marketplace</h1>
//               <p className="text-gray-600 mt-1">Discover premium AI-generated assets from top creators</p>
//             </div>
            
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
//                 <Button
//                   variant={viewMode === "grid" ? "default" : "ghost"}
//                   size="sm"
//                   onClick={() => setViewMode("grid")}
//                   className="rounded-md"
//                 >
//                   <Grid className="w-4 h-4" />
//                 </Button>
//                 <Button
//                   variant={viewMode === "list" ? "default" : "ghost"}
//                   size="sm"
//                   onClick={() => setViewMode("list")}
//                   className="rounded-md"
//                 >
//                   <List className="w-4 h-4" />
//                 </Button>
//               </div>
              
//               <Select value={sortBy} onValueChange={setSortBy}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Sort by" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="popular">Most Popular</SelectItem>
//                   <SelectItem value="newest">Newest</SelectItem>
//                   <SelectItem value="price-low">Price: Low to High</SelectItem>
//                   <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   <SelectItem value="rating">Highest Rated</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
          
//           <div className="flex flex-col lg:flex-row gap-6">
//             <div className="w-full lg:w-64">
//               <Input
//                 placeholder="Search assets..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="mb-6"
//               />
              
//               <div className="space-y-2">
//                 <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
//                 {categories.map((category) => (
//                   <Button
//                     key={category.name}
//                     variant={selectedCategory === category.name ? "default" : "ghost"}
//                     className="w-full justify-between"
//                     onClick={() => setSelectedCategory(category.name)}
//                   >
//                     <div className="flex items-center gap-2">
//                       {category.icon}
//                       <span>{category.name}</span>
//                     </div>
//                     <span className="text-xs text-gray-500">{category.count}</span>
//                   </Button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="flex-1">
//               <div className="mb-4 flex items-center justify-between">
//                 <p className="text-sm text-gray-600">
//                   {filteredProducts.length} assets found
//                 </p>
//                 <Button variant="outline" size="sm">
//                   <Filter className="w-4 h-4 mr-2" />
//                   Filters
//                 </Button>
//               </div>
              
//               <motion.div 
//                 className={`grid gap-6 ${
//                   viewMode === "grid" 
//                     ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
//                     : "grid-cols-1"
//                 }`}
//                 layout
//               >
//                 {filteredProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} viewMode={viewMode} />
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Grid, List, Eye, Code, ImageIcon, FileText, Database, Zap, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EnhancedProductCard } from "@/components/enhanced-product-card"

const categories = [
  { name: "All", icon: <Grid className="w-4 h-4" />, count: 12500 },
  { name: "AI Code", icon: <Code className="w-4 h-4" />, count: 1200 },
  { name: "AI Images", icon: <ImageIcon className="w-4 h-4" />, count: 3500 },
  { name: "Prompts", icon: <FileText className="w-4 h-4" />, count: 2800 },
  { name: "Datasets", icon: <Database className="w-4 h-4" />, count: 890 },
]

const filters = [
  { name: "All Products", count: 12500 },
  { name: "AI Quality Verified", icon: <Shield className="w-4 h-4" />, count: 8900 },
  { name: "Dynamic Pricing", icon: <TrendingUp className="w-4 h-4" />, count: 2340 },
  { name: "Compliance Ready", icon: <Shield className="w-4 h-4" />, count: 5670 },
  { name: "Crypto Payment", icon: <Zap className="w-4 h-4" />, count: 11200 },
]

// Enhanced products with MVP features
const products = [
  {
    id: 1,
    title: "Advanced RAG Implementation",
    description: "Complete RAG system with vector search and chat interface built with Python and LangChain.",
    price: 67, // Dynamic pricing active
    originalPrice: 49,
    category: "AI Code",
    rating: 4.8,
    downloads: 245,
    seller: "AIDevPro",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    tags: ["Python", "LangChain", "Vector DB"],
    featured: true,
    // MVP Features
    aiQualityScore: 92,
    hasDynamicPricing: true,
    complianceChecked: true
  },
  {
    id: 2,
    title: "Cyberpunk Art Collection",
    description: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    price: 29,
    originalPrice: 49,
    category: "AI Images",
    rating: 4.9,
    downloads: 1024,
    seller: "DigitalArtist",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    tags: ["Cyberpunk", "Game Art", "Sci-Fi"],
    featured: false,
    // MVP Features
    aiQualityScore: 88,
    hasDynamicPricing: false,
    complianceChecked: true
  },
  {
    id: 3,
    title: "Marketing Copy Prompts",
    description: "100+ proven prompts for marketing and copywriting that convert prospects into customers.",
    price: 24, // Dynamic pricing increased from $19
    originalPrice: 19,
    category: "Prompts",
    rating: 4.7,
    downloads: 567,
    seller: "PromptMaster",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tags: ["Marketing", "Copywriting", "Sales"],
    featured: true,
    // MVP Features
    aiQualityScore: 85,
    hasDynamicPricing: true,
    complianceChecked: true
  },
  {
    id: 4,
    title: "E-commerce Dataset",
    description: "Comprehensive e-commerce dataset with 100k+ product listings for ML training.",
    price: 39,
    originalPrice: 59,
    category: "Datasets",
    rating: 4.6,
    downloads: 89,
    seller: "DataScientist",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    tags: ["E-commerce", "ML", "Training Data"],
    featured: false,
    // MVP Features
    aiQualityScore: 91,
    hasDynamicPricing: false,
    complianceChecked: true
  },
  {
    id: 5,
    title: "Neural Network Boilerplate",
    description: "Production-ready neural network template with PyTorch and deployment scripts.",
    price: 78, // Dynamic pricing active
    originalPrice: 69,
    category: "AI Code",
    rating: 4.8,
    downloads: 156,
    seller: "MLEngineer",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    tags: ["PyTorch", "Neural Network", "Production"],
    featured: true,
    // MVP Features
    aiQualityScore: 94,
    hasDynamicPricing: true,
    complianceChecked: true
  }
]

export default function EnhancedMarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFilter, setSelectedFilter] = useState("All Products")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    // MVP Feature Filters
    let matchesFilter = true
    switch (selectedFilter) {
      case "AI Quality Verified":
        matchesFilter = product.aiQualityScore !== undefined && product.aiQualityScore >= 80
        break
      case "Dynamic Pricing":
        matchesFilter = product.hasDynamicPricing === true
        break
      case "Compliance Ready":
        matchesFilter = product.complianceChecked === true
        break
      case "Crypto Payment":
        matchesFilter = true // All products support crypto
        break
      default:
        matchesFilter = true
    }
    
    return matchesCategory && matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Hero Banner with MVP Features */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Next-Gen AI Marketplace
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              The only marketplace with AI quality assurance, dynamic pricing, and crypto payments
            </p>
            
            {/* MVP Features Highlight */}
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                AI Quality Verified
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Dynamic Pricing
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                5% Crypto Discount
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Global Compliance
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Marketplace</h1>
              <p className="text-gray-600 mt-1">Discover premium AI-generated assets from top creators</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-md"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-md"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="ai-quality">AI Quality Score</SelectItem>
                  <SelectItem value="trending">Trending (Dynamic Pricing)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Enhanced Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              <Input
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              {/* Categories */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={selectedCategory === category.name ? "default" : "ghost"}
                      className="w-full justify-between"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span>{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{category.count}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* MVP Feature Filters */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Smart Filters
                  <Badge className="bg-blue-100 text-blue-700 text-xs">New</Badge>
                </h3>
                <div className="space-y-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter.name}
                      variant={selectedFilter === filter.name ? "default" : "ghost"}
                      className="w-full justify-between text-left"
                      onClick={() => setSelectedFilter(filter.name)}
                    >
                      <div className="flex items-center gap-2">
                        {filter.icon && filter.icon}
                        <span className="text-sm">{filter.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{filter.count}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Input placeholder="Min" type="number" className="text-sm" />
                      <span className="text-gray-500">-</span>
                      <Input placeholder="Max" type="number" className="text-sm" />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Apply Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Banner */}
              <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <h4 className="font-medium text-orange-800 mb-1">Dynamic Pricing Active</h4>
                  <p className="text-sm text-orange-700 mb-3">
                    {filteredProducts.filter(p => p.hasDynamicPricing).length} assets with live pricing
                  </p>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                    View Trending
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-600">
                    {filteredProducts.length} assets found
                  </p>
                  {selectedFilter !== "All Products" && (
                    <Badge variant="outline" className="text-xs">
                      {selectedFilter} filter active
                    </Badge>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>

              {/* Results */}
              <motion.div 
                className={`grid gap-6 ${
                  viewMode === "grid" 
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                    : "grid-cols-1"
                }`}
                layout
              >
                {filteredProducts.map((product) => (
                  <EnhancedProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </motion.div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <Card className="text-center py-16">
                  <CardContent>
                    <div className="max-w-md mx-auto">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No assets found</h3>
                      <p className="text-gray-600 mb-6">
                        Try adjusting your filters or search query to find what you&apos;re looking for.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <Button variant="outline" onClick={() => setSelectedCategory("All")}>
                          Clear Category
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedFilter("All Products")}>
                          Clear Filters
                        </Button>
                        <Button variant="outline" onClick={() => setSearchQuery("")}>
                          Clear Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Load More */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Assets
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">
                    Showing {filteredProducts.length} of {products.length} assets
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our Marketplace?</h2>
            <p className="text-gray-600">Advanced features that set us apart from traditional marketplaces</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-blue-200 bg-blue-50/50">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-lg mb-2">AI Quality Score</h3>
              <p className="text-sm text-gray-600">
                Every asset is analyzed by AI for quality, functionality, and market fit
              </p>
              <Badge className="mt-3 bg-blue-100 text-blue-700">
                {products.filter(p => p.aiQualityScore && p.aiQualityScore >= 80).length}+ verified
              </Badge>
            </Card>
            
            <Card className="text-center p-6 border-orange-200 bg-orange-50/50">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="font-bold text-lg mb-2">Dynamic Pricing</h3>
              <p className="text-sm text-gray-600">
                Smart pricing based on demand, quality, and market trends
              </p>
              <Badge className="mt-3 bg-orange-100 text-orange-700">
                {products.filter(p => p.hasDynamicPricing).length}+ live pricing
              </Badge>
            </Card>
            
            <Card className="text-center p-6 border-green-200 bg-green-50/50">
              <Zap className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-lg mb-2">Crypto Payments</h3>
              <p className="text-sm text-gray-600">
                Pay with cryptocurrency and get 5% discount on all purchases
              </p>
              <Badge className="mt-3 bg-green-100 text-green-700">
                5% discount
              </Badge>
            </Card>
            
            <Card className="text-center p-6 border-purple-200 bg-purple-50/50">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-bold text-lg mb-2">Global Compliance</h3>
              <p className="text-sm text-gray-600">
                Pre-verified for GDPR, CCPA, and other global regulations
              </p>
              <Badge className="mt-3 bg-purple-100 text-purple-700">
                {products.filter(p => p.complianceChecked).length}+ compliant
              </Badge>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}