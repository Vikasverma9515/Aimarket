"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  User, 
  Settings, 
  Star, 
  Download, 
  DollarSign, 
  TrendingUp, 
  Edit,
  Plus,
  MoreHorizontal,
  Eye,
  Heart,
  Share2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product/product-card"

const userStats = {
  totalSales: 1250,
  totalEarnings: 45670,
  totalDownloads: 3420,
  averageRating: 4.8,
  totalAssets: 24,
  followers: 892
}

const recentSales = [
  { id: 1, asset: "Advanced RAG Implementation", buyer: "DevMaster", amount: 49, date: "2024-01-15" },
  { id: 2, asset: "Cyberpunk Art Collection", buyer: "GameDev Studio", amount: 29, date: "2024-01-14" },
  { id: 3, asset: "Marketing Prompts", buyer: "AIEnthusiast", amount: 19, date: "2024-01-13" },
  { id: 4, asset: "Neural Network Code", buyer: "MLStartup", amount: 69, date: "2024-01-12" },
]

const userAssets = [
  {
    id: 1,
    title: "Advanced RAG Implementation",
    description: "Complete RAG system with vector search and chat interface.",
    price: 49,
    category: "AI Code",
    rating: 4.8,
    downloads: 245,
    seller: "You",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    tags: ["Python", "LangChain", "Vector DB"],
    featured: true,
    status: "published"
  },
  {
    id: 2,
    title: "Cyberpunk Art Collection",
    description: "50 high-quality AI-generated cyberpunk illustrations.",
    price: 29,
    category: "AI Images",
    rating: 4.9,
    downloads: 1024,
    seller: "You",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    tags: ["Cyberpunk", "Game Art", "Sci-Fi"],
    featured: false,
    status: "published"
  }
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">AIDevPro</h1>
                  <Badge className="bg-blue-100 text-blue-700">Verified Creator</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Full-stack AI developer specializing in RAG systems and machine learning implementations. 
                  Building the future of AI-powered applications.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{userStats.averageRating} rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{userStats.totalDownloads} downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{userStats.followers} followers</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">${userStats.totalEarnings.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Total Earnings</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.totalSales}</div>
              <div className="text-sm text-gray-500">Total Sales</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.totalDownloads}</div>
              <div className="text-sm text-gray-500">Downloads</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.averageRating}</div>
              <div className="text-sm text-gray-500">Avg Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assets">My Assets</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Sales */}
                            <Card>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{sale.asset}</div>
                          <div className="text-sm text-gray-500">by {sale.buyer}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">${sale.amount}</div>
                          <div className="text-xs text-gray-500">{sale.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Assets */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userAssets.slice(0, 3).map((asset, index) => (
                      <div key={asset.id} className="flex items-center gap-4">
                        <div className="w-12 h-12 relative rounded overflow-hidden">
                          <Image
                            src={asset.image}
                            alt={asset.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{asset.title}</div>
                          <div className="text-sm text-gray-500">{asset.downloads} downloads</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">${asset.price}</div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                            {asset.rating}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="assets" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">My Assets ({userAssets.length})</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Upload New Asset
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userAssets.map((asset) => (
                <div key={asset.id} className="relative">
                  <ProductCard product={asset} viewMode="grid" />
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sales" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Asset</th>
                        <th className="text-left p-4">Buyer</th>
                        <th className="text-left p-4">Amount</th>
                        <th className="text-left p-4">Date</th>
                        <th className="text-left p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSales.map((sale) => (
                        <tr key={sale.id} className="border-b">
                          <td className="p-4 font-medium">{sale.asset}</td>
                          <td className="p-4">{sale.buyer}</td>
                          <td className="p-4 font-bold text-green-600">${sale.amount}</td>
                          <td className="p-4 text-gray-500">{sale.date}</td>
                          <td className="p-4">
                            <Badge className="bg-green-100 text-green-700">Completed</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Chart</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                    <p>Revenue analytics coming soon</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Asset Performance</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Star className="w-12 h-12 mx-auto mb-2" />
                    <p>Performance metrics coming soon</p>
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