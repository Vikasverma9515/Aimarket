"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  TrendingUp,
  Clock,
  Zap,
  Info,
  ChevronUp,
  Timer
} from "lucide-react"

export interface DynamicPricingData {
  basePrice: number
  currentPrice: number
  demandMultiplier: number
  recentPurchases24h: number
  recentViews24h: number
  priceHistory: { time: string; price: number }[]
  nextPriceThreshold: number
  estimatedNextPrice: number
  timeUntilNextCheck: string
  demandLevel: 'low' | 'moderate' | 'high' | 'very-high'
}

interface DynamicPricingCardProps {
  pricingData?: DynamicPricingData
  onPurchase?: () => void
  showFullDetails?: boolean
}

const mockPricingData: DynamicPricingData = {
  basePrice: 49,
  currentPrice: 67,
  demandMultiplier: 1.37,
  recentPurchases24h: 24,
  recentViews24h: 340,
  priceHistory: [
    { time: '6 days ago', price: 49 },
    { time: '5 days ago', price: 52 },
    { time: '4 days ago', price: 58 },
    { time: '2 days ago', price: 63 },
    { time: 'Now', price: 67 }
  ],
  nextPriceThreshold: 6,
  estimatedNextPrice: 72,
  timeUntilNextCheck: '4 hours',
  demandLevel: 'high'
}

const getDemandColor = (level: string) => {
  switch (level) {
    case 'low': return 'bg-green-100 text-green-800 border-green-300'
    case 'moderate': return 'bg-blue-100 text-blue-800 border-blue-300'
    case 'high': return 'bg-orange-100 text-orange-800 border-orange-300'
    case 'very-high': return 'bg-red-100 text-red-800 border-red-300'
    default: return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

const getDemandIcon = (level: string) => {
  switch (level) {
    case 'low': return '🟢'
    case 'moderate': return '🔵'
    case 'high': return '🟠'
    case 'very-high': return '🔴'
    default: return '⚪'
  }
}

export function DynamicPricingCard({
  pricingData = mockPricingData,
  onPurchase,
  showFullDetails = false
}: DynamicPricingCardProps) {
  const priceIncrease = pricingData.currentPrice - pricingData.basePrice

  if (!showFullDetails) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Badge className={`${getDemandColor(pricingData.demandLevel)} cursor-pointer hover:scale-105 transition-transform flex items-center gap-1`}>
            <TrendingUp className="w-3 h-3" />
            Dynamic Pricing Active
          </Badge>
        </DialogTrigger>
        
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              Dynamic Pricing Details
              <Badge className="bg-orange-100 text-orange-700">Live</Badge>
            </DialogTitle>
          </DialogHeader>
          <DynamicPricingDetails pricingData={pricingData} onPurchase={onPurchase} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden">
      <DynamicPricingDetails pricingData={pricingData} onPurchase={onPurchase} />
    </Card>
  )
}

function DynamicPricingDetails({ pricingData, onPurchase }: { 
  pricingData: DynamicPricingData
  onPurchase?: () => void 
}) {
  const priceIncrease = pricingData.currentPrice - pricingData.basePrice
  const priceIncreasePercent = Math.round((priceIncrease / pricingData.basePrice) * 100)
  const conversionRate = ((pricingData.recentPurchases24h / pricingData.recentViews24h) * 100).toFixed(1)
  const progressToNextPrice = Math.min(((30 - pricingData.nextPriceThreshold) / 30) * 100, 100)

  return (
    <CardContent className="p-6 space-y-6">
      {/* Demand Level Indicator */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white/50 rounded-lg">
        <span className="text-2xl">{getDemandIcon(pricingData.demandLevel)}</span>
        <Badge className={getDemandColor(pricingData.demandLevel)}>
          {pricingData.demandLevel.replace('-', ' ').toUpperCase()} DEMAND
        </Badge>
        <Badge variant="outline" className="text-xs">
          <Timer className="w-3 h-3 mr-1" />
          Live Pricing
        </Badge>
      </div>

      {/* Current Price */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-4xl font-bold text-orange-700">
            ${pricingData.currentPrice}
          </span>
          {priceIncrease > 0 && (
            <div className="text-center">
              <div className="flex items-center gap-1 text-red-600">
                <ChevronUp className="w-4 h-4" />
                <span className="font-bold">+{priceIncreasePercent}%</span>
              </div>
              <div className="text-sm text-gray-500 line-through">
                was ${pricingData.basePrice}
              </div>
            </div>
          )}
        </div>
        <p className="text-sm text-orange-800">
          Price increased due to high demand ({pricingData.recentPurchases24h} purchases in 24h)
        </p>
      </div>

      {/* Demand Statistics */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-white/50 rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-orange-700">{pricingData.recentPurchases24h}</div>
          <div className="text-xs text-gray-600">Purchases (24h)</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-orange-700">{pricingData.recentViews24h}</div>
          <div className="text-xs text-gray-600">Views (24h)</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-orange-700">{conversionRate}%</div>
          <div className="text-xs text-gray-600">Conversion Rate</div>
        </div>
      </div>

      {/* Price Increase Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Until next price increase:</span>
          <span className="font-medium">{pricingData.nextPriceThreshold} more purchases</span>
        </div>
        <Progress value={progressToNextPrice} className="h-3" />
        <div className="flex justify-between text-xs text-gray-600">
          <span>Current: ${pricingData.currentPrice}</span>
          <span>Next: ${pricingData.estimatedNextPrice}</span>
        </div>
      </div>

      {/* Price History */}
      <div className="space-y-3">
        <h4 className="font-medium text-sm">7-Day Price Trend</h4>
        <div className="space-y-2">
          {pricingData.priceHistory.map((entry, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{entry.time}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">${entry.price}</span>
                {index > 0 && (
                  <span className={`text-xs ${
                    entry.price > pricingData.priceHistory[index - 1]?.price 
                      ? 'text-red-600' 
                      : 'text-green-600'
                  }`}>
                    {entry.price > pricingData.priceHistory[index - 1]?.price ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          onClick={onPurchase}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          size="lg"
        >
          <Zap className="w-4 h-4 mr-2" />
          Buy Now - Lock Current Price
        </Button>
        
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            📊 View Full History
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            🔔 Price Alert
          </Button>
        </div>
      </div>

      {/* Info Box */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <strong>How it works:</strong> Our AI analyzes demand patterns, purchase velocity, 
            and market trends to adjust prices dynamically. Early buyers get better prices!
          </div>
        </div>
      </div>

      {/* Next Price Check Timer */}
      <div className="text-center p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="text-sm text-yellow-800">
          <Clock className="w-4 h-4 inline mr-1" />
          Next price check in: <strong>{pricingData.timeUntilNextCheck}</strong>
        </div>
      </div>
    </CardContent>
  )
}