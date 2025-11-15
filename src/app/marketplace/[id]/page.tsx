import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PageProps {
  params: { id: string }
}

export default function AssetDetailPage({ params }: PageProps) {
  const { id } = params
  // TODO: fetch from Supabase: select * from assets where id = params.id
  const asset = {
    id,
    title: "Sample Asset",
    description: "Detailed description of the asset.",
    category: "code",
    price: 29,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/marketplace" className="text-sm text-gray-600 hover:underline">← Back to Marketplace</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900">{asset.title}</h1>
          <div className="mt-2"><Badge variant="secondary" className="capitalize">{asset.category}</Badge></div>
          <p className="text-gray-700 mt-4">{asset.description}</p>
        </div>
        <div className="lg:col-span-1">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">
              {asset.price === 0 ? "Free" : `$${asset.price}`}
            </div>
            <Button className="w-full mt-4">{asset.price === 0 ? "Download" : "Buy Now"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}