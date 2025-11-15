export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string
          bio: string | null
          profile_pic: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          username: string
          bio?: string | null
          profile_pic?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          username?: string
          bio?: string | null
          profile_pic?: string | null
          updated_at?: string
        }
      }
      assets: {
        Row: {
          id: string
          title: string
          description: string
          category: 'code' | 'image' | 'dataset' | 'prompt'
          price: number
          tags: string[]
          license_type: string
          file_url: string | null
          preview_url: string | null
          thumbnail: string | null
          seller_id: string
          created_at: string
          updated_at: string
          rating: number | null
          review_count: number
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: 'code' | 'image' | 'dataset' | 'prompt'
          price: number
          tags: string[]
          license_type: string
          file_url?: string | null
          preview_url?: string | null
          thumbnail?: string | null
          seller_id: string
          created_at?: string
          updated_at?: string
          rating?: number | null
          review_count?: number
        }
        Update: {
          title?: string
          description?: string
          category?: 'code' | 'image' | 'dataset' | 'prompt'
          price?: number
          tags?: string[]
          license_type?: string
          file_url?: string | null
          preview_url?: string | null
          thumbnail?: string | null
          updated_at?: string
          rating?: number | null
                    review_count?: number
        }
      }
      orders: {
        Row: {
          id: string
          asset_id: string
          buyer_id: string
          seller_id: string
          amount: number
          commission: number
          status: 'pending' | 'completed' | 'failed'
          download_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          asset_id: string
          buyer_id: string
          seller_id: string
          amount: number
          commission: number
          status?: 'pending' | 'completed' | 'failed'
          download_url?: string | null
          created_at?: string
        }
        Update: {
          status?: 'pending' | 'completed' | 'failed'
          download_url?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          asset_id: string
          buyer_id: string
          rating: number
          comment: string
          created_at: string
        }
        Insert: {
          id?: string
          asset_id: string
          buyer_id: string
          rating: number
          comment: string
          created_at?: string
        }
        Update: {
          rating?: number
          comment?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}