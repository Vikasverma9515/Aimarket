"use client"

import React, { createContext, useContext, useMemo, useState, ReactNode } from "react"

export type CartItem = {
  id: number
  title: string
  price: number
  image?: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void
  removeItem: (id: number) => void
  clear: () => void
  subtotal: number
  count: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem: CartContextValue["addItem"] = (item, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + qty } : i))
      }
      return [...prev, { ...item, quantity: qty }]
    })
  }

  const removeItem = (id: number) => setItems(prev => prev.filter(i => i.id !== id))
  const clear = () => setItems([])

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])
  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])

  const value = useMemo(() => ({ items, addItem, removeItem, clear, subtotal, count }), [items, subtotal, count])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}