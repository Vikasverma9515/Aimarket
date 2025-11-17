import Link from "next/link"
import Image from "next/image"
import { Star, Download, Eye, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AIQualityBadge } from "./ai-quality-badge"
import { sampleAIQualityData } from "./sample-ai-quality-data"
import { ComplianceChecker } from "./compliance-checker"
import { DynamicPricingCard, type DynamicPricingData } from "./dynamic-pricing-card"
import { CryptoPaymentButton } from "./crypto-payment-button"

interface EnhancedProduct {
    id: number
    title: string
    description: string
    price: number
    originalPrice?: number
    category: string
    rating: number
    downloads: number
    seller: string
    image: string
    tags: string[]
    featured: boolean
    // MVP Features
    aiQualityScore?: number
    hasDynamicPricing?: boolean
    complianceChecked?: boolean
    pricingData?: DynamicPricingData

}

interface EnhancedProductCardProps {
    product: EnhancedProduct
    viewMode: "grid" | "list"
}

export function EnhancedProductCard({ product, viewMode }: EnhancedProductCardProps) {
    const handleCryptoPayment = (txHash: string) => {
        console.log('Payment successful:', txHash)
        // Handle successful payment
    }

    if (viewMode === "list") {
        return (
            <Card className="overflow-hidden border-gray-200 bg-white hover:shadow-md transition-all group">
                <CardContent className="p-0">
                    <div className="flex">
                        <div className="relative w-48 h-32 flex-shrink-0">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                                <Badge className="bg-blue-600 text-white text-xs">
                                    {product.category}
                                </Badge>
                                {product.featured && (
                                    <Badge className="bg-orange-600 text-white text-xs">
                                        Featured
                                    </Badge>
                                )}
                            </div>

                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                                {product.aiQualityScore && (
                                    <AIQualityBadge
                                        qualityData={sampleAIQualityData.highQuality}

                                        size="md"
                                    />
                                )}
                                {product.hasDynamicPricing && (
                                    <DynamicPricingCard
                                        pricingData={product.pricingData} // Assuming product.pricingData is of type DynamicPricingData
                                        showFullDetails={false}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        {product.title}
                                    </Link>
                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                                </div>
                                <Button variant="ghost" size="sm">
                                    <Heart className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                                {product.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span>{product.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Download className="w-4 h-4" />
                                        <span>{product.downloads}</span>
                                    </div>
                                    <span>by {product.seller}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-gray-900">${product.price}</div>
                                        {product.originalPrice && (
                                            <div className="text-sm text-gray-500 line-through">
                                                ${product.originalPrice}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button size="sm" className="bg-black hover:bg-gray-700 text-white">
                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                            Buy Now
                                        </Button>
                                        <CryptoPaymentButton
                                            product={product}
                                            onPaymentSuccess={handleCryptoPayment}
                                            variant="outline"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* MVP Features Row */}
                            <div className="flex items-center gap-2 mt-3">
                                {product.complianceChecked && (
                                    <ComplianceChecker />
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }
    // Grid View
    return (
        <Card className="overflow-hidden border-gray-200 bg-white hover:shadow-lg transition-all group">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                    <Badge className="bg-blue-600 text-white text-xs">
                        {product.category}
                    </Badge>
                    {product.featured && (
                        <Badge className="bg-orange-600 text-white text-xs">
                            Featured
                        </Badge>
                    )}
                </div>
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-xs">{product.rating}</span>
                    </div>
                    {product.aiQualityScore && (
                        <AIQualityBadge
                            qualityData={sampleAIQualityData.highQuality}
                            size="md"
                        />
                    )}
                </div>

                {/* Dynamic Pricing Overlay */}
                {product.hasDynamicPricing && (
                    <div className="absolute bottom-2 left-2 right-2">
                        {/* <DynamicPricingCard productId={product.id} showFullDetails={false} /> */}
                        <DynamicPricingCard
                            pricingData={product.pricingData} // Assuming product.pricingData is of type DynamicPricingData
                            showFullDetails={false}
                        />
                    </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="rounded-full">
                            <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="rounded-full">
                            <Heart className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <CardContent className="p-4 space-y-4">
                <div>
                    <Link
                        href={`/product/${product.id}`}
                        className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors block mb-2"
                    >
                        {product.title}
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span>{product.downloads}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">${product.price}</div>
                        {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                        by {product.seller}
                    </div>
                    {product.complianceChecked && (
                        <ComplianceChecker />
                    )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 gap-2">
                    <Button size="sm" className="bg-black hover:bg-gray-700 text-white rounded-full">
                        Buy Now
                    </Button>
                    <CryptoPaymentButton
                        product={product}
                        onPaymentSuccess={handleCryptoPayment}
                        variant="outline"
                        className="rounded-full text-xs"
                    />
                </div>
            </CardContent>
        </Card>
    )
}