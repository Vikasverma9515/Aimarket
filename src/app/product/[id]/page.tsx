// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { 
//   Star, 
//   Download, 
//   Eye, 
//   Heart, 
//   Share2, 
//   ShoppingCart, 
//   Check, 
//   Play,
//   Code,
//   FileText,
//   Shield,
//   Award,
//   ChevronLeft
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// // Mock product data - in real app, fetch by ID
// const product = {
//   id: 1,
//   title: "Advanced RAG Implementation",
//   description: "Complete Retrieval-Augmented Generation system with vector search and chat interface built with Python and LangChain. This comprehensive implementation includes document processing, embedding generation, vector storage, and a user-friendly chat interface.",
//   price: 49,
//   originalPrice: 79,
//   category: "AI Code",
//   rating: 4.8,
//   totalRatings: 156,
//   downloads: 245,
//   views: 1240,
//   seller: {
//     name: "AIDevPro",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//     rating: 4.9,
//     totalSales: 1200,
//     verified: true
//   },
//   images: [
//     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
//   ],
//   tags: ["Python", "LangChain", "Vector DB", "OpenAI", "RAG", "AI"],
//   features: [
//     "Complete RAG implementation",
//     "Document processing pipeline",
//     "Vector database integration",
//     "Chat interface included",
//     "OpenAI API integration",
//     "Customizable components",
//     "Production-ready code",
//     "Comprehensive documentation"
//   ],
//   techStack: ["Python 3.8+", "LangChain", "ChromaDB", "OpenAI API", "Streamlit", "FastAPI"],
//   included: [
//     "Source code (Python)",
//     "Documentation",
//     "Setup instructions",
//     "Example datasets",
//     "Test cases",
//     "Requirements.txt"
//   ],
//   reviews: [
//     {
//       id: 1,
//       user: "DevMaster",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       date: "2024-01-15",
//       comment: "Excellent implementation! Saved me weeks of development time. The documentation is clear and the code is well-structured."
//     },
//     {
//       id: 2,
//       user: "AIEnthusiast",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c8?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       date: "2024-01-10",
//       comment: "Perfect for my startup project. Easy to integrate and customize. Worth every penny!"
//     },
//     {
//       id: 3,
//       user: "CodeNinja",
//       avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
//       rating: 4,
//       date: "2024-01-08",
//       comment: "Great quality code. Minor issues with setup but seller provided quick support."
//     }
//   ]
// }

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [isLiked, setIsLiked] = useState(false)
//   // Cart integration
//   // Lazy import to avoid SSR issues
//   const { addItem } = require("@/components/cart/cart-context") as typeof import("@/components/cart/cart-context")
//   const { useRouter } = require("next/navigation") as typeof import("next/navigation")
//   const router = useRouter()

//   const handleAddToCart = () => {
//     addItem({ id: product.id, title: product.title, price: product.price, image: product.images[0] }, 1)
//   }

//   const handleBuyNow = () => {
//     addItem({ id: product.id, title: product.title, price: product.price, image: product.images[0] }, 1)
//     router.push("/checkout")
//   }

//   return (
//     <div className="min-h-screen bg-gray-50/30">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
//         {/* Back Navigation */}
//         <div className="mb-6">
//           <Link 
//             href="/marketplace"
//             className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             <ChevronLeft className="w-4 h-4" />
//             Back to Marketplace
//           </Link>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           {/* Product Images */}
//           <div className="space-y-4">
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-white shadow-sm">
//               <Image
//                 src={product.images[selectedImage]}
//                 alt={product.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute top-4 left-4 flex gap-2">
//                 <Badge className="bg-blue-600 text-white">
//                   {product.category}
//                 </Badge>
//                 <Badge className="bg-orange-600 text-white">
//                   Featured
//                 </Badge>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-3 gap-3">
//               {product.images.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
//                     selectedImage === index ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <Image
//                     src={image}
//                     alt={`${product.title} ${index + 1}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
//               <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
//             </div>

//             {/* Rating and Stats */}
//             <div className="flex items-center gap-6 text-sm text-gray-500">
//               <div className="flex items-center gap-2">
//                 <div className="flex">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star 
//                       key={star} 
//                       className={`w-4 h-4 ${
//                         star <= Math.floor(product.rating) 
//                           ? "text-yellow-400 fill-yellow-400" 
//                           : "text-gray-300"
//                       }`} 
//                     />
//                   ))}
//                 </div>
//                 <span className="font-medium">{product.rating}</span>
//                 <span>({product.totalRatings} reviews)</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Download className="w-4 h-4" />
//                 <span>{product.downloads} downloads</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Eye className="w-4 h-4" />
//                 <span>{product.views} views</span>
//               </div>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {product.tags.map((tag) => (
//                 <Badge key={tag} variant="secondary">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>

//             {/* Pricing */}
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <div className="flex items-baseline gap-3">
//                       <span className="text-3xl font-bold text-gray-900">${product.price}</span>
//                       {product.originalPrice && (
//                         <span className="text-xl text-gray-500 line-through">
//                           ${product.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-sm text-gray-600 mt-1">One-time purchase</p>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => setIsLiked(!isLiked)}
//                       className="rounded-full"
//                     >
//                       <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
//                     </Button>
//                     <Button variant="outline" size="sm" className="rounded-full">
//                       <Share2 className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>
                
//                 <div className="space-y-3">
//                   <Button className="w-full bg-black hover:bg-gray-700 text-white h-12 text-base" onClick={handleBuyNow}>
//                     <ShoppingCart className="w-5 h-5 mr-2" />
//                     Buy Now
//                   </Button>
//                   <Button variant="outline" className="w-full h-12 text-base" onClick={handleAddToCart}>
//                     Add to Cart
//                   </Button>
//                 </div>

//                 <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
//                   <Shield className="w-4 h-4" />
//                   <span>30-day money-back guarantee</span>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Seller Info */}
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center gap-4">
//                   <Avatar className="w-12 h-12">
//                     <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
//                     <AvatarFallback>{product.seller.name.slice(0, 2)}</AvatarFallback>
//                   </Avatar>
                  
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2">
//                       <h3 className="font-semibold text-gray-900">{product.seller.name}</h3>
//                       {product.seller.verified && (
//                         <Award className="w-4 h-4 text-blue-600" />
//                       )}
//                     </div>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                         <span>{product.seller.rating}</span>
//                       </div>
//                       <span>{product.seller.totalSales} sales</span>
//                     </div>
//                   </div>
                  
//                   <Button variant="outline" size="sm">
//                     View Profile
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Product Details Tabs */}
//         <Tabs defaultValue="overview" className="w-full">
//           <TabsList className="grid w-full grid-cols-4">
//             <TabsTrigger value="overview">Overview</TabsTrigger>
//             <TabsTrigger value="features">Features</TabsTrigger>
//             <TabsTrigger value="reviews">Reviews</TabsTrigger>
//             <TabsTrigger value="support">Support</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="overview" className="mt-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Code className="w-5 h-5" />
//                     Tech Stack
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {product.techStack.map((tech) => (
//                       <Badge key={tech} variant="outline">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <FileText className="w-5 h-5" />
//                     What&apos;s Included
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     {product.included.map((item) => (
//                       <li key={item} className="flex items-center gap-2 text-sm">
//                         <Check className="w-4 h-4 text-green-600" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="features" className="mt-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Key Features</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {product.features.map((feature) => (
//                     <div key={feature} className="flex items-center gap-2">
//                       <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
//                       <span className="text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
          
//           <TabsContent value="reviews" className="mt-6">
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-semibold">Customer Reviews</h3>
//                 <Button variant="outline">Write a Review</Button>
//               </div>
              
//               <div className="space-y-4">
//                 {product.reviews.map((review) => (
//                   <Card key={review.id}>
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <Avatar>
//                           <AvatarImage src={review.avatar} alt={review.user} />
//                           <AvatarFallback>{review.user.slice(0, 2)}</AvatarFallback>
//                         </Avatar>
                        
//                         <div className="flex-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <div>
//                               <h4 className="font-semibold">{review.user}</h4>
//                               <div className="flex items-center gap-2">
//                                 <div className="flex">
//                                   {[1, 2, 3, 4, 5].map((star) => (
//                                     <Star 
//                                       key={star} 
//                                       className={`w-3 h-3 ${
//                                         star <= review.rating 
//                                           ? "text-yellow-400 fill-yellow-400" 
//                                           : "text-gray-300"
//                                       }`} 
//                                     />
//                                   ))}
//                                 </div>
//                                 <span className="text-sm text-gray-500">{review.date}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <p className="text-gray-700">{review.comment}</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="support" className="mt-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Support & Documentation</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
//                   <div>
//                     <h4 className="font-medium">Need help with setup?</h4>
//                     <p className="text-sm text-gray-600">Get personalized support from the creator</p>
//                   </div>
//                   <Button>Contact Seller</Button>
//                 </div>
                
//                 <div className="grid md:grid-cols-3 gap-4">
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
//                     <h4 className="font-medium">Documentation</h4>
//                     <p className="text-sm text-gray-600">Comprehensive setup guide</p>
//                   </div>
//                   <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <Play className="w-8 h-8 mx-auto mb-2 text-green-600" />
//                     <h4 className="font-medium">Video Tutorial</h4>
//                     <p className="text-sm text-gray-600">Step-by-step walkthrough</p>
//                   </div>
//                                     <div className="text-center p-4 bg-gray-50 rounded-lg">
//                     <Shield className="w-8 h-8 mx-auto mb-2 text-purple-600" />
//                     <h4 className="font-medium">Support</h4>
//                     <p className="text-sm text-gray-600">Direct seller support</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Star, 
  Download, 
  Eye, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Check, 
  Play,
  Code,
  FileText,
  Shield,
  Award,
  ChevronLeft
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Import MVP Components
import { AIQualityBadge } from "@/components/ai-quality-badge"
import { sampleAIQualityData } from "@/components/sample-ai-quality-data"
import { ComplianceChecker } from "@/components/compliance-checker"
import { CryptoPaymentButton } from "@/components/crypto-payment-button"


// Enhanced product data with MVP features
const product = {
  id: 1,
  title: "Advanced RAG Implementation",
  description: "Complete Retrieval-Augmented Generation system with vector search and chat interface built with Python and LangChain. This comprehensive implementation includes document processing, embedding generation, vector storage, and a user-friendly chat interface.",
  price: 67, // Dynamic pricing in effect
  originalPrice: 49,
  category: "AI Code",
  rating: 4.8,
  totalRatings: 156,
  downloads: 245,
  views: 1240,
  
  
  seller: {
    name: "AIDevPro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 4.9,
    totalSales: 1200,
    verified: true
  },
  images: [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  ],
  tags: ["Python", "LangChain", "Vector DB", "OpenAI", "RAG", "AI"],
  features: [
    "Complete RAG implementation",
    "Document processing pipeline",
    "Vector database integration",
    "Chat interface included",
    "OpenAI API integration",
    "Customizable components",
    "Production-ready code",
    "Comprehensive documentation"
  ],
  techStack: ["Python 3.8+", "LangChain", "ChromaDB", "OpenAI API", "Streamlit", "FastAPI"],
  included: [
    "Source code (Python)",
    "Documentation",
    "Setup instructions",
    "Example datasets",
    "Test cases",
    "Requirements.txt"
  ],
  // MVP Features
  aiQualityData: {
    overallScore: 92,
    metrics: {
      codeQuality: 94,
      functionality: 95,
      originality: 91,
      documentation: 89,
      marketFit: 87
    },
    analysis: "Excellent implementation with high-quality, well-documented code. Follows best practices and includes comprehensive error handling. The RAG implementation is production-ready and highly customizable. Minor improvements could be made in market positioning documentation.",
    confidence: 94,
    lastAnalyzed: "2024-01-15"
  },
  hasDynamicPricing: true,
  hasComplianceCheck: true,
  reviews: [
    {
      id: 1,
      user: "DevMaster",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent implementation! The AI quality score was spot-on. Saved me weeks of development time."
    },
    {
      id: 2,
      user: "AIEnthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c8?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2024-01-10",
      comment: "Worth every penny even with the dynamic pricing. The compliance checker gave me confidence for enterprise use."
    }
  ]
}

export default function EnhancedProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleCryptoPayment = (txHash: string) => {
    console.log('Crypto payment successful:', txHash)
    // Handle successful crypto payment
  }

  const handleRegularPurchase = () => {
    console.log('Regular purchase initiated')
    // Handle regular payment
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link 
            href="/marketplace"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Marketplace
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-white shadow-sm">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-blue-600 text-white">
                  {product.category}
                </Badge>
                <Badge className="bg-orange-600 text-white">
                  Featured
                </Badge>
              </div>
              
              {/* MVP Features Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
               <AIQualityBadge 
  qualityData={sampleAIQualityData.highQuality}
  productType="code"
  size="md"
/>
                {/* {product.hasDynamicPricing && (
                  <DynamicPricingCard 
  productId={product.id} 
  pricingData={product.pricingData?.} // Assuming product.pricingData is of type DynamicPricingData
  showFullDetails={false} 
/>
                )} */}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Rating and Stats */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${
                        star <= Math.floor(product.rating) 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span>({product.totalRatings} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{product.downloads} downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{product.views} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Dynamic Pricing Section */}
            {/* {product.hasDynamicPricing && (
              <DynamicPricingCard 
                productId={product.id} 
                showFullDetails={true}
                onPurchase={handleRegularPurchase}
              />
            )} */}

            {/* Regular Pricing (when no dynamic pricing) */}
            {!product.hasDynamicPricing && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xl text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">One-time purchase</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsLiked(!isLiked)}
                        className="rounded-full"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={handleRegularPurchase}
                      className="w-full bg-black hover:bg-gray-700 text-white h-12 text-base"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now
                    </Button>
                    <CryptoPaymentButton 
                      product={product}
                      onPaymentSuccess={handleCryptoPayment}
                      variant="outline"
                      className="w-full h-12 text-base"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Seller Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                    <AvatarFallback>{product.seller.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{product.seller.name}</h3>
                      {product.seller.verified && (
                        <Award className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span>{product.seller.rating}</span>
                      </div>
                      <span>{product.seller.totalSales} sales</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

                        {/* Compliance Checker */}
            {product.hasComplianceCheck && (
              <ComplianceChecker
                size="lg"
              />
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="quality">AI Quality</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Tech Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    What&apos;s Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.included.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="quality" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* AI Quality Analysis */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white">
                      AI Quality Analysis
                    </Badge>
                    <Badge variant="outline" className="text-xs">Beta Feature</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AIQualityBadge 
  qualityData={sampleAIQualityData.highQuality}
  productType="code"
  size="md"
/>

                </CardContent>
              </Card>
              
              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Download Success Rate</span>
                    <span className="font-bold">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Setup Success Rate</span>
                    <span className="font-bold">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">User Satisfaction</span>
                    <span className="font-bold">4.8/5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Support Response</span>
                    <span className="font-bold">&lt; 2 hours</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quality Assurance */}
              <Card>
                <CardHeader>
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">AI-powered code analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Human expert review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Functionality testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Security scan completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Documentation review</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Customer Reviews</h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.user} />
                          <AvatarFallback>{review.user.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.user}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                      key={star} 
                                      className={`w-3 h-3 ${
                                        star <= review.rating 
                                          ? "text-yellow-400 fill-yellow-400" 
                                          : "text-gray-300"
                                      }`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="support" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Support & Documentation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Need help with setup?</h4>
                      <p className="text-sm text-gray-600">Get personalized support from the creator</p>
                    </div>
                    <Button>Contact Seller</Button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-medium">Documentation</h4>
                      <p className="text-sm text-gray-600">Comprehensive setup guide</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Play className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <h4 className="font-medium">Video Tutorial</h4>
                      <p className="text-sm text-gray-600">Step-by-step walkthrough</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <h4 className="font-medium">Support</h4>
                      <p className="text-sm text-gray-600">Direct seller support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Purchase Confidence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">✅ Quality Guaranteed</h4>
                    <p className="text-sm text-green-700">
                      This asset has been verified by our AI quality system and human experts.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">🔒 Secure Payments</h4>
                    <p className="text-sm text-blue-700">
                      Pay securely with traditional methods or get 5% off with cryptocurrency.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">📋 Compliance Ready</h4>
                    <p className="text-sm text-purple-700">
                      Pre-checked for global compliance including GDPR, CCPA, and more.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}