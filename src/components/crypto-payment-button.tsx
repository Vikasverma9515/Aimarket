"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Zap } from "lucide-react"
import { CryptoPaymentModal } from "./crypto-payment-modal"

interface CryptoPaymentButtonProps {
  product: {
    id: number
    title: string
    price: number
  }
  onPaymentSuccess?: (transactionHash: string) => void
  variant?: "default" | "outline"
  className?: string
}

export function CryptoPaymentButton({ 
  product, 
  onPaymentSuccess, 
  variant = "default",
  className = ""
}: CryptoPaymentButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePaymentSuccess = (txHash: string) => {
    setIsModalOpen(false)
    onPaymentSuccess?.(txHash)
  }

  return (
    <>
      <Button 
        variant={variant}
        className={`relative group ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Wallet className="w-4 h-4 mr-2" />
        Pay with Crypto
        <Badge className="ml-2 bg-green-100 text-green-700 text-xs group-hover:bg-green-200">
          <Zap className="w-2 h-2 mr-1" />
          5% off
        </Badge>
      </Button>

      <CryptoPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  )
}