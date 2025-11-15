"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/components/cart/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ArrowLeft, Check } from "lucide-react"
import { useState } from "react"

export default function CartPage() {
  const { items, removeItem, clear, subtotal } = useCart()
  const [checkingOut, setCheckingOut] = useState(false)

  const handleCheckout = async () => {
    setCheckingOut(true)
    // TODO: Integrate real checkout or navigate to /checkout
    await new Promise(r => setTimeout(r, 800))
    window.location.href = "/checkout"
  }

  if (items.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <Link href="/marketplace" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-1" /> Continue shopping
        </Link>
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Browse the marketplace and add items to your cart.</p>
          <Button asChild className="bg-black text-white">
            <Link href="/marketplace">Go to Marketplace</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <Link href="/marketplace" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-1" /> Continue shopping
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="border-gray-200">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="relative w-24 h-16 bg-gray-100 rounded overflow-hidden">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                  <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between">
            <Button variant="outline" onClick={clear}>Clear Cart</Button>
          </div>
        </div>

        <div>
          <Card className="border-gray-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500">Taxes are calculated at checkout.</p>
              <Button className="w-full bg-black text-white" onClick={handleCheckout} disabled={checkingOut}>
                {checkingOut ? "Processing..." : "Proceed to Checkout"}
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Check className="w-4 h-4" /> Secure checkout
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}