export interface ProductVariant {
  nama: string;
  harga: number;
}

export interface ProductSpecs {
  deskripsi: string;
  bluetooth?: string;
  baterai?: string;
  fitur?: string[];
}

export interface Product {
  id: number;
  name: string;
  category: 'Earbuds' | 'Smartphone' | 'Speaker' | 'Sparepart';
  priceValue: number;
  price: string;
  img: string;
  specs: ProductSpecs;
  variants?: ProductVariant[];
  rating?: number;
}

export interface CartItem {
  id?: number;
  name: string;
  price: number;
  qty: number;
  img: string;
  variantName?: string;
}

export interface TrackingStep {
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'active' | 'pending';
  location?: string;
}

export interface TrackingInfo {
  resi: string;
  namaPenerima: string;
  alamatPenerima: string;
  kurir: string;
  estimasiTiba: string;
  statusTerakhir: string;
  lokasiTerakhir: string;
  waktuTerakhir: string;
  timeline: TrackingStep[];
}

export interface ChatMessage {
  id: string;
  sender: 'admin' | 'user';
  text: string;
  timestamp: string;
}

export interface UserSession {
  isLoggedIn: boolean;
  username: string;
  role: 'buyer' | 'admin';
}
