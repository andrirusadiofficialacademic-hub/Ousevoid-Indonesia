import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ousevoid Sonic Pods Pro (ANC + ENC)",
    category: "Earbuds",
    priceValue: 299000,
    price: "IDR 299.000",
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    specs: {
      deskripsi: "Earbuds nirkabel flagship Ousevoid dilengkapi fitur Active Noise Cancellation -35dB, Quad-Mic ENC panggilan jernih, latency ultralow 40ms untuk gaming, dan daya tahan baterai hingga 32 jam dengan charging case.",
      bluetooth: "Bluetooth 5.3 Dual-Channel",
      baterai: "8 jam (Single Play) + 24 jam (Case)",
      fitur: ["Active Noise Cancellation", "IPX5 Water Resistant", "Dual Device Pairing", "Smart Touch Control"]
    },
    variants: [
      { nama: "Midnight Black", harga: 299000 },
      { nama: "Pearl White", harga: 299000 },
      { nama: "Cyber Silver (Edition)", harga: 329000 }
    ]
  },
  {
    id: 2,
    name: "Ousevoid Air Buds Lite Touch",
    category: "Earbuds",
    priceValue: 179000,
    price: "IDR 179.000",
    img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    specs: {
      deskripsi: "Desain ergonomic semi-in-ear sangat ringan hanya 3.8g per earbud. Bass Boost Driver 13mm memberikan karakter suara hangat dan vokal yang jernih.",
      bluetooth: "Bluetooth 5.3",
      baterai: "6 jam play + 18 jam case",
      fitur: ["Ergonomic Semi-In-Ear", "13mm Dynamic Driver", "Type-C Fast Charge"]
    },
    variants: [
      { nama: "Matte Black", harga: 179000 },
      { nama: "Creamy White", harga: 179000 }
    ]
  },
  {
    id: 3,
    name: "Ousevoid Galaxy Smartphone Ultra 5G (8/256GB)",
    category: "Smartphone",
    priceValue: 2899000,
    price: "IDR 2.899.000",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    specs: {
      deskripsi: "Smartphone performa tinggi dengan Layar AMOLED 120Hz 6.67 inci, Kamera Utama 108MP OIS, Processor Octa-Core 5G, serta Baterai 5000mAh + 67W Fast Charging.",
      bluetooth: "Bluetooth 5.2 & NFC",
      baterai: "5000mAh Turbo Charge",
      fitur: ["108MP AI Camera", "Layar 120Hz AMOLED", "IP53 Splash Proof", "67W Fast Charger in-box"]
    },
    variants: [
      { nama: "Titanium Gray (8/256GB)", harga: 2899000 },
      { nama: "Aurora Green (12/256GB)", harga: 3299000 }
    ]
  },
  {
    id: 4,
    name: "Ousevoid Soundbar X1 Bass-Boost Bluetooth",
    category: "Speaker",
    priceValue: 450000,
    price: "IDR 450.000",
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    specs: {
      deskripsi: "Speaker soundbar portable dengan dual passive radiator untuk efek Deep Bass yang menggelegar. Dilengkapi koneksi Bluetooth, AUX 3.5mm, USB Playback, dan TF Card.",
      bluetooth: "Bluetooth 5.0 HD",
      baterai: "2400mAh (Playtime 8-10 Jam)",
      fitur: ["Dual Passive Radiator", "FM Radio", "Hands-free Call Mic", "Dynamic RGB Light Effect"]
    },
    variants: [
      { nama: "Stealth Black", harga: 450000 },
      { nama: "Gunmetal Gray", harga: 475000 }
    ]
  },
  {
    id: 5,
    name: "Ousevoid Pulse Portable Boombox RGB",
    category: "Speaker",
    priceValue: 320000,
    price: "IDR 320.000",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    specs: {
      deskripsi: "Speaker outdoor tahan cipratan air IPX6 dengan tali gantung bawaan. Suara 360 derajat surround dengan efek lampu LED mengikuti ritme musik.",
      bluetooth: "Bluetooth 5.3",
      baterai: "1800mAh",
      fitur: ["IPX6 Water Resistant", "360 Spatial Audio", "TWS Stereo Mode"]
    },
    variants: [
      { nama: "Army Green", harga: 320000 },
      { nama: "Obsidian Black", harga: 320000 }
    ]
  },
  {
    id: 6,
    name: "Ousevoid GaN Fast Charger 65W Triple Port",
    category: "Sparepart",
    priceValue: 145000,
    price: "IDR 145.000",
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    specs: {
      deskripsi: "Adapter pengisi daya berteknologi Gallium Nitride (GaN) III. Ukuran ringkas dengan 2x USB-C PD 65W & 1x USB-A QC 3.0. Aman mengisi laptop, HP, dan TWS sekaligus.",
      fitur: ["Teknologi GaN III", "Overheat Protection", "Dual USB-C + USB-A"]
    },
    variants: [
      { nama: "White GaN 65W", harga: 145000 },
      { nama: "Black GaN 65W", harga: 145000 }
    ]
  },
  {
    id: 7,
    name: "Ousevoid Braided Type-C to Type-C 100W Cable (1.5m)",
    category: "Sparepart",
    priceValue: 49000,
    price: "IDR 49.000",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    specs: {
      deskripsi: "Kabel data dan charging nylon braided ultra kuat tahan hingga 20.000+ kali tekukan. Mengakomodasi pengisian daya cepat hingga 100W Power Delivery.",
      fitur: ["100W PD Fast Charging", "E-Marker Smart Chip", "Nylon Braided 1.5M"]
    },
    variants: [
      { nama: "Black Nylon (1.5m)", harga: 49000 },
      { nama: "Gray Nylon (2m)", harga: 59000 }
    ]
  }
];
