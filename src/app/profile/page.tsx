"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
  Share2,
  Calendar,
  MapPin,
  Globe,
  Mail,
  Phone,
  Shield,
  Award,
  Trash2,
  Edit3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product/product-card"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

const userProfile = {
  name: "AIDevPro",
  username: "aidevpro",
  email: "dev@aidevpro.com",
  bio: "Full-stack AI developer specializing in RAG systems and machine learning implementations. Building the future of AI-powered applications.",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=300&fit=crop",
  location: "San Francisco, CA",
  website: "https://aidevpro.com",
  joinedDate: "January 2023",
  verified: true,
  socialLinks: {
    github: "https://github.com/aidevpro",
    twitter: "https://twitter.com/aidevpro",
    linkedin: "https://linkedin.com/in/aidevpro"
  }
}

const userStats = {
  totalSales: 1250,
  totalEarnings: 45670,
  totalDownloads: 3420,
  averageRating: 4.8,
  totalAssets: 24,
  followers: 892,
  following: 156,
  totalReviews: 248
}

const recentSales = [
  { 
    id: 1, 
    asset: "Advanced RAG Implementation", 
    buyer: "DevMaster", 
    amount: 49, 
    date: "2024-01-15",
    status: "completed"
  },
  { 
    id: 2, 
    asset: "Cyberpunk Art Collection", 
    buyer: "GameDev Studio", 
    amount: 29, 
    date: "2024-01-14",
    status: "completed"
  },
  { 
    id: 3, 
    asset: "Marketing Prompts", 
    buyer: "AIEnthusiast", 
    amount: 19, 
    date: "2024-01-13",
    status: "processing"
  },
  { 
    id: 4, 
    asset: "Neural Network Code", 
    buyer: "MLStartup", 
    amount: 69, 
    date: "2024-01-12",
    status: "completed"
  },
]

const userAssets = [
  {
    id: 1,
    title: "Advanced RAG Implementation",
    description: "Complete RAG system with vector search and chat interface.",
    price: 49,
    originalPrice: 79,
    category: "AI Code",
    rating: 4.8,
    downloads: 245,
    seller: "You",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    tags: ["Python", "LangChain", "Vector DB"],
    featured: true,
    status: "published",
    views: 1240
  },
  {
    id: 2,
    title: "Cyberpunk Art Collection",
    description: "50 high-quality AI-generated cyberpunk illustrations.",
    price: 29,
    originalPrice: 49,
    category: "AI Images",
    rating: 4.9,
    downloads: 1024,
    seller: "You",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    tags: ["Cyberpunk", "Game Art", "Sci-Fi"],
    featured: false,
    status: "published",
    views: 2100
  },
  {
    id: 3,
    title: "Neural Network Boilerplate",
    description: "Production-ready neural network template with PyTorch.",
    price: 69,
    originalPrice: 99,
    category: "AI Code",
    rating: 4.7,
    downloads: 156,
    seller: "You",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    tags: ["PyTorch", "Neural Network", "Production"],
    featured: true,
    status: "draft",
    views: 0
  }
]

const analyticsData = {
  monthlyEarnings: [
    { month: "Jan", amount: 3200 },
    { month: "Feb", amount: 4100 },
    { month: "Mar", amount: 3800 },
    { month: "Apr", amount: 5200 },
    { month: "May", amount: 4900 },
    { month: "Jun", amount: 6100 }
  ],
  topAssets: [
    { name: "RAG Implementation", earnings: 12250, downloads: 245 },
    { name: "Cyberpunk Collection", earnings: 8900, downloads: 1024 },
    { name: "Marketing Prompts", earnings: 5670, downloads: 567 }
  ]
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <Image
          src={userProfile.coverImage}
          alt="Cover"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Edit Cover Button */}
        <Button 
          variant="secondary" 
          size="sm"
          className="absolute top-4 right-4 bg-white/90 hover:bg-white"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Cover
        </Button>
      </div>

      <div className="max-w-7xl pt-20 mx-auto px-4 md:px-6 -mt-16 relative z-10">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                {/* Avatar */}
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                    <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                    <AvatarFallback className="text-2xl">{userProfile.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700"
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                    {userProfile.verified && (
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified Creator
                      </Badge>
                    )}
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                      <Award className="w-3 h-3 mr-1" />
                      Top Seller
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {userProfile.bio}
                  </p>
                  
                  {/* Profile Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{userProfile.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {userProfile.joinedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <Link href={userProfile.website} className="text-blue-600 hover:underline">
                        aidevpro.com
                      </Link>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="font-bold text-gray-900">{userStats.followers}</span>
                      <span className="text-gray-500 ml-1">followers</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">{userStats.following}</span>
                      <span className="text-gray-500 ml-1">following</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-bold text-gray-900">{userStats.averageRating}</span>
                      <span className="text-gray-500">({userStats.totalReviews} reviews)</span>
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
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">
                ${userStats.totalEarnings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Total Earnings</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.totalSales}</div>
              <div className="text-sm text-gray-500">Total Sales</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Download className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.totalDownloads}</div>
              <div className="text-sm text-gray-500">Downloads</div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.averageRating}</div>
              <div className="text-sm text-gray-500">Avg Rating</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Eye className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">
                {userAssets.reduce((total, asset) => total + asset.views, 0)}
              </div>
              <div className="text-sm text-gray-500">Total Views</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Plus className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900">{userStats.totalAssets}</div>
              <div className="text-sm text-gray-500">Assets</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assets">My Assets</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentSales.map((sale) => (
                        <div key={sale.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium text-sm">{sale.asset}</div>
                            <div className="text-sm text-gray-500">Sold to {sale.buyer}</div>
                          </div>
                          <div className="text-right mr-4">
                            <div className="font-bold text-green-600">${sale.amount}</div>
                            <div className="text-xs text-gray-500">{sale.date}</div>
                          </div>
                          <Badge 
                            variant={sale.status === 'completed' ? 'default' : 'secondary'}
                            className={sale.status === 'completed' ? 'bg-green-100 text-green-700' : ''}
                          >
                            {sale.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        View All Sales
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.monthlyEarnings.map((data, index) => (
                        <div key={data.month} className="flex items-center gap-4">
                          <div className="w-12 text-sm font-medium">{data.month}</div>
                          <div className="flex-1">
                            <Progress 
                              value={(data.amount / 6500) * 100} 
                              className="h-3"
                            />
                          </div>
                          <div className="w-20 text-right text-sm font-bold">
                            ${data.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Top Performing Assets */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.topAssets.map((asset, index) => (
                        <div key={asset.name} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">{asset.name}</div>
                            <div className="text-xs text-gray-500">{asset.downloads} downloads</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-sm">${asset.earnings}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/upload">
                      <Button className="w-full justify-start">
                        <Plus className="w-4 h-4 mr-2" />
                        Upload New Asset
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Account Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Payout Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="assets" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">My Assets ({userAssets.length})</h2>
                <p className="text-gray-600">Manage your uploaded AI assets</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-md"
                  >
                    <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                      <div className="bg-current rounded-sm"></div>
                    </div>
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-md"
                  >
                    <div className="flex flex-col gap-1 w-4 h-4">
                                            <div className="bg-current h-0.5 rounded-sm"></div>
                      <div className="bg-current h-0.5 rounded-sm"></div>
                      <div className="bg-current h-0.5 rounded-sm"></div>
                      <div className="bg-current h-0.5 rounded-sm"></div>
                    </div>
                  </Button>
                </div>
                <Link href="/upload">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Upload New Asset
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {userAssets.map((asset) => (
                <div key={asset.id} className="relative group">
                  <ProductCard product={asset} viewMode={viewMode} />
                  
                  {/* Asset Actions Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute top-2 right-2 bg-white/90 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Asset
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {asset.status === 'draft' ? (
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Publish
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Unpublish
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Status Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge 
                      variant={asset.status === 'published' ? 'default' : 'secondary'}
                      className={`text-xs ${
                        asset.status === 'published' 
                          ? 'bg-green-100 text-green-700 border-green-200' 
                          : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                      }`}
                    >
                      {asset.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {userAssets.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No assets yet</h3>
                    <p className="text-gray-600 mb-6">
                      Start building your portfolio by uploading your first AI asset.
                    </p>
                    <Link href="/upload">
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Upload Your First Asset
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="sales" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Sales History</h2>
                <p className="text-gray-600">Track all your sales and earnings</p>
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-medium">Asset</th>
                        <th className="text-left p-4 font-medium">Buyer</th>
                        <th className="text-left p-4 font-medium">Amount</th>
                        <th className="text-left p-4 font-medium">Date</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSales.map((sale) => (
                        <tr key={sale.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="font-medium">{sale.asset}</div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="text-xs">
                                  {sale.buyer.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              {sale.buyer}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-green-600">${sale.amount}</span>
                          </td>
                          <td className="p-4 text-gray-500">{sale.date}</td>
                          <td className="p-4">
                            <Badge 
                              variant={sale.status === 'completed' ? 'default' : 'secondary'}
                              className={sale.status === 'completed' ? 'bg-green-100 text-green-700' : ''}
                            >
                              {sale.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Invoice
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="w-4 h-4 mr-2" />
                                  Contact Buyer
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t">
                  <div className="text-sm text-gray-500">
                    Showing 1-{recentSales.length} of {userStats.totalSales} sales
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
              <p className="text-gray-600">Detailed insights into your performance</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="font-medium mb-2">Revenue Analytics</h3>
                      <p className="text-sm">Interactive charts coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Downloads Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Download Activity</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <Download className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="font-medium mb-2">Download Metrics</h3>
                      <p className="text-sm">Interactive charts coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Asset Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userAssets.filter(asset => asset.status === 'published').map((asset) => (
                      <div key={asset.id} className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{asset.title}</div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{asset.downloads} downloads</span>
                            <span>•</span>
                            <span>{asset.views} views</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-sm">${asset.price * asset.downloads}</div>
                          <div className="text-xs text-gray-500">
                            {((asset.downloads / asset.views) * 100).toFixed(1)}% conversion
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['AI Code', 'AI Images', 'Prompts'].map((category) => {
                      const categoryAssets = userAssets.filter(asset => asset.category === category)
                      const totalEarnings = categoryAssets.reduce((sum, asset) => sum + (asset.price * asset.downloads), 0)
                      const percentage = ((categoryAssets.length / userAssets.length) * 100).toFixed(0)
                      
                      return (
                        <div key={category} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{category}</span>
                            <span>${totalEarnings}</span>
                          </div>
                          <Progress value={parseInt(percentage)} className="h-2" />
                          <div className="text-xs text-gray-500">
                            {categoryAssets.length} assets ({percentage}%)
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">New sale</span>
                        <div className="text-gray-500">RAG Implementation - $49</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">Asset viewed</span>
                        <div className="text-gray-500">Cyberpunk Collection - 24 views</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">New follower</span>
                        <div className="text-gray-500">AIEnthusiast started following you</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="text-sm">
                        <span className="font-medium">Review received</span>
                        <div className="text-gray-500">5-star review on Neural Network Code</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
              <p className="text-gray-600">Manage your account preferences and settings</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue={userProfile.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Username</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue={userProfile.username}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md" 
                      defaultValue={userProfile.email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea 
                      className="w-full p-2 border rounded-md" 
                      rows={3}
                      defaultValue={userProfile.bio}
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-500">Receive email updates about your account</div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Sales Notifications</div>
                      <div className="text-sm text-gray-500">Get notified when someone purchases your assets</div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Marketing Emails</div>
                      <div className="text-sm text-gray-500">Receive tips and promotional content</div>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Weekly Reports</div>
                      <div className="text-sm text-gray-500">Get weekly performance summaries</div>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </CardContent>
              </Card>

              {/* Payout Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Payout Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Payout Method</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>PayPal</option>
                      <option>Bank Transfer</option>
                      <option>Stripe</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">PayPal Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md" 
                      placeholder="your-paypal@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Minimum Payout</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>$50</option>
                      <option>$100</option>
                      <option>$200</option>
                    </select>
                  </div>
                  <Button>Update Payout Settings</Button>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Enable 2FA
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}