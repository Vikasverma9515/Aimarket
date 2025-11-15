"use client"

import { useCart } from "@/components/cart/cart-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart()
  const [processing, setProcessing] = useState(false)

  const handlePay = async () => {
    setProcessing(true)
    // TODO: integrate Stripe/PayPal
    await new Promise(r => setTimeout(r, 1200))
    clear()
    window.location.href = "/orders/success"
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-10">
        <h1 className="text-2xl font-bold mb-2">Checkout</h1>
        <p className="text-gray-600 mb-6">Your cart is empty.</p>
        <Button asChild>
          <Link href="/marketplace">Back to Marketplace</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <Card className="border-gray-200 mb-6">
        <CardContent className="p-6 space-y-3">
          {items.map((i) => (
            <div key={i.id} className="flex justify-between text-sm">
              <span>{i.title} x{i.quantity}</span>
              <span>${(i.price * i.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-black text-white" onClick={handlePay} disabled={processing}>
        {processing ? "Processing..." : `Pay $${subtotal.toFixed(2)}`}
      </Button>
    </div>
  )
}