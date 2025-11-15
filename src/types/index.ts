// export interface User {
//   id: string;
//   email: string;
//   username: string;
//   bio?: string;
//   profilePic?: string;
//   createdAt: string;
// }

// export interface Asset {
//   id: string;
//   title: string;
//   description: string;
//   category: 'code' | 'image' | 'dataset' | 'prompt';
//   price: number;
//   tags: string[];
//   licenseType: string;
//   fileUrl?: string;
//   previewUrl?: string;
//   thumbnail?: string;
//   sellerId: string;
//   seller: User;
//   createdAt: string;
//   updatedAt: string;
//   rating?: number;
//   reviewCount?: number;
// }

// export interface Review {
//   id: string;
//   assetId: string;
//   buyerId: string;
//   buyer: User;
//   rating: number;
//   comment: string;
//   createdAt: string;
// }

// export interface Order {
//   id: string;
//   assetId: string;
//   asset: Asset;
//   buyerId: string;
//   sellerId: string;
//   amount: number;
//   commission: number;
//   status: 'pending' | 'completed' | 'failed';
//   downloadUrl?: string;
//   createdAt: string;
// }

import { Database } from "./database"

export type User = Database['public']['Tables']['users']['Row']
export type Asset = Database['public']['Tables']['assets']['Row'] & {
  seller: User
}
export type Order = Database['public']['Tables']['orders']['Row'] & {
  asset: Asset
}
export type Review = Database['public']['Tables']['reviews']['Row'] & {
  buyer: User
}

export type AssetInsert = Database['public']['Tables']['assets']['Insert']
export type UserUpdate = Database['public']['Tables']['users']['Update']
export type OrderInsert = Database['public']['Tables']['orders']['Insert']
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert']