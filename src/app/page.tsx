"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Brain,
  Code,
  Image as ImageIcon,
  FileText,
  Database,
  Sparkles,
  TrendingUp,
  Award,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AIMarketplacePage() {
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "AI-Verified Quality",
      description: "Every asset is verified by advanced AI systems and human experts for authenticity and quality.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: "Smart Analytics", 
      description: "Track your asset performance with AI-powered insights and revenue optimization suggestions.",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      title: "Global Creator Network",
      description: "Connect with thousands of AI creators and buyers from around the world.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Blockchain Security",
      description: "Secure transactions and IP protection powered by blockchain technology.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate AI assets into your workflow with our comprehensive API.",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "24/7 AI Support",
      description: "Get instant help from our AI assistant and dedicated support team anytime.",
      icon: <Zap className="w-5 h-5" />,
    },
  ]

  const categories = [
    {
      name: "AI Code",
      description: "Neural networks, algorithms, ML models",
      icon: <Code className="w-6 h-6" />,
      count: "1.2k+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AI Images", 
      description: "Generated art, photos, designs",
      icon: <ImageIcon className="w-6 h-6" />,
      count: "3.5k+",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Prompts",
      description: "Optimized prompts for all AI models",
      icon: <FileText className="w-6 h-6" />,
      count: "2.8k+",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Datasets",
      description: "Training data for AI models",
      icon: <Database className="w-6 h-6" />,
      count: "890+",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
  
      

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                <Sparkles className="w-3 h-3 mr-1" />
                The Future of AI Commerce
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
                Where AI Meets Commerce
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover, buy, and sell cutting-edge AI-generated assets. From intelligent code to stunning visuals,
                join the revolution where artificial intelligence creates real value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base bg-black hover:bg-gray-700 text-white">
                  Browse AI Assets
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-gray-300 text-black hover:bg-gray-100">
                  Start Selling
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Quality verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Instant download</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>90% creator revenue</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <Image
                  src="/hero.png"
                  width={1280}
                  height={720}
                  alt="AI Marketplace dashboard"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-gray-200 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">12k+</div>
                <div className="text-sm text-gray-600">AI Creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">45k+</div>
                <div className="text-sm text-gray-600">Assets Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">$2.4M+</div>
                <div className="text-sm text-gray-600">Creator Earnings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                <Cpu className="w-3 h-3 mr-1" />
                AI Categories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Explore AI Asset Categories</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Discover high-quality AI-generated content across multiple categories, from code to creative assets.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {categories.map((category, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-gray-200 bg-white hover:shadow-md transition-all group cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900">{category.name}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">{category.count} assets</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32 bg-gray-50/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Why Choose AIMarket?</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                We&apos;re not just another marketplace—we&apos;re the future of AI commerce with cutting-edge features.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-gray-200 bg-white hover:shadow-md transition-all">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                                          <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Assets Section */}
        <section id="featured" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                <TrendingUp className="w-3 h-3 mr-1" />
                Featured Assets
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Premium AI Content</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Handpicked premium content from our top AI creators. These assets represent excellence in AI generation.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Advanced RAG Implementation",
                  description: "Complete RAG system with vector search and chat interface built with Python and LangChain.",
                  price: 49,
                  category: "Code",
                  rating: 4.8,
                  downloads: 245,
                  seller: "AIDevPro",
                  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
                },
                {
                  title: "Cyberpunk Art Collection",
                  description: "50 high-quality AI-generated cyberpunk illustrations perfect for games and digital media.",
                  price: 29,
                  category: "Images",
                  rating: 4.9,
                  downloads: 1024,
                  seller: "DigitalArtist",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
                },
                {
                  title: "Marketing Copy Prompts",
                  description: "100+ proven prompts for marketing and copywriting that convert prospects into customers.",
                  price: 19,
                  category: "Prompts",
                  rating: 4.7,
                  downloads: 567,
                  seller: "PromptMaster",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
                }
              ].map((asset, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-gray-200 bg-white hover:shadow-lg transition-all group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={asset.image}
                        alt={asset.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-blue-600 text-white">
                          {asset.category}
                        </Badge>
                      </div>
                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-xs">{asset.rating}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900">
                        {asset.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {asset.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-gray-900">${asset.price}</div>
                        <div className="text-sm text-gray-500">
                          {asset.downloads} downloads
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          by {asset.seller}
                        </div>
                        <Button size="sm" className="rounded-full bg-black hover:bg-gray-700 text-white">
                          Buy Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Spotlight */}
        <section id="creators" className="py-20 md:py-32 bg-gray-50/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                <Award className="w-3 h-3 mr-1" />
                Creator Spotlight
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Meet Our Top Creators</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Discover the talented minds behind our most popular AI assets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              {[
                {
                  name: "AIDevPro",
                  specialty: "Neural Networks & ML",
                  rating: 4.9,
                  sales: "10k+",
                  earnings: "$125k+",
                  badge: "Verified Pro"
                },
                {
                  name: "DigitalArtist",
                  specialty: "AI Art & Design",
                  rating: 4.8,
                  sales: "8.5k+",
                  earnings: "$98k+",
                  badge: "Top Seller"
                },
                {
                  name: "PromptMaster",
                  specialty: "Prompt Engineering",
                  rating: 4.7,
                  sales: "6.2k+",
                  earnings: "$76k+",
                  badge: "Rising Star"
                }
              ].map((creator, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <Card className="w-full overflow-hidden border-gray-200 bg-white hover:shadow-md transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-700 text-white text-2xl font-bold shadow-lg mx-auto">
                          {creator.name.slice(0, 2).toUpperCase()}
                        </div>
                        <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-blue-100 text-blue-700 border-blue-200">
                          {creator.badge}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-gray-900">{creator.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{creator.specialty}</p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-gray-900">{creator.rating}★</div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">{creator.sales}</div>
                          <div className="text-xs text-gray-500">Sales</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{creator.earnings}</div>
                          <div className="text-xs text-gray-500">Earned</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Start Selling Today</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Join thousands of creators earning from their AI expertise. Keep up to 90% of every sale.
              </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 lg:grid-cols-3">
                {[
                  {
                    name: "Free",
                    price: "$0",
                    description: "Perfect for getting started",
                    features: ["Upload up to 5 assets", "Basic analytics", "Community support", "70% revenue share"],
                    cta: "Start Free",
                    popular: false,
                  },
                  {
                    name: "Creator Pro",
                    price: "$29",
                    description: "For serious AI creators",
                    features: [
                      "Unlimited asset uploads",
                      "Advanced analytics",
                      "Priority support",
                      "85% revenue share",
                      "Featured placement",
                    ],
                    cta: "Go Pro",
                    popular: true,
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "For teams and organizations",
                    features: [
                      "Team collaboration",
                      "Custom branding",
                      "Dedicated support",
                      "90% revenue share",
                      "API access",
                      "White-label option",
                    ],
                    cta: "Contact Sales",
                    popular: false,
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${
                        plan.popular ? "border-blue-600 shadow-lg scale-105" : "border-gray-200"
                      } bg-white`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
                        </div>
                        <p className="text-gray-600 mt-2">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 w-4 h-4 text-blue-600" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full mt-auto rounded-full ${
                            plan.popular 
                              ? "bg-blue-600 hover:bg-blue-700 text-white" 
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-black text-white border-gray-800">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                Find answers to common questions about our AI marketplace.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do I verify the quality of AI assets?",
                    answer:
                      "Every asset undergoes our proprietary AI quality assessment combined with human expert review. We check for originality, functionality, and market value to ensure you get premium content.",
                  },
                  {
                    question: "What's the revenue split for creators?",
                    answer:
                      "We offer industry-leading revenue shares: 70% for free accounts, 85% for Creator Pro, and 90% for Enterprise accounts. This ensures creators keep most of their earnings.",
                  },
                  {
                    question: "Can I sell any type of AI-generated content?",
                    answer:
                      "Yes! We support code, images, prompts, datasets, and more. As long as it's AI-generated and valuable to others, it has a place on our marketplace.",
                  },
                  {
                    question: "How secure are transactions?",
                    answer:
                      "We use blockchain technology and bank-level encryption to secure all transactions. Your payments are protected, and IP rights are maintained through our smart contract system.",
                  },
                  {
                    question: "Do you provide API access?",
                    answer:
                      "Yes, Enterprise accounts get full API access to integrate our marketplace into their workflows. This includes asset management, sales analytics, and automated distribution.",
                  },
                  {
                    question: "What support do you offer creators?",
                    answer:
                      "We provide 24/7 AI-powered support, plus human experts for complex issues. Creator Pro and Enterprise accounts get priority support and dedicated success managers.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-gray-200 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline text-gray-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Join the AI Revolution?
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                               Join thousands of creators already earning from their AI expertise. Start your journey in the world&apos;s
                most advanced AI marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base bg-white text-blue-600 hover:bg-gray-100">
                  Start Selling Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  Browse Assets
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                Free to start. No credit card required. 90% revenue share available.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="w-full border-t border-gray-200 bg-white">
        <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-gray-900">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white">
                  <Brain className="w-4 h-4" />
                </div>
                <span>AIMarket</span>
              </div>
              <p className="text-sm text-gray-600">
                The premier marketplace for AI-generated assets. Buy and sell code, images, prompts, and datasets
                created with artificial intelligence.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900">Marketplace</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#categories" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Browse Assets
                  </Link>
                </li>
                <li>
                  <Link href="#featured" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Featured
                  </Link>
                </li>
                <li>
                  <Link href="/sell" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Start Selling
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Top Creators
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Creator Guides
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                    AI Blog
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-600 hover:text-gray-900 transition-colors">
                    API Access
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} AIMarket. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}