import { TrackingInfo } from '../types';

export const SAMPLE_TRACKING_DATABASE: Record<string, TrackingInfo> = {
  "2026/OUSE/84920": {
    resi: "2026/OUSE/84920",
    namaPenerima: "Budi Santoso",
    alamatPenerima: "Jl. Sudirman No. 45, Gambir, Jakarta Pusat",
    kurir: "Gamoon e-Package Sameday Priority",
    estimasiTiba: "Hari Ini, 22 Juli 2026 (Maksimal 8 Jam)",
    statusTerakhir: "Dalam Pengiriman Kurir Logistik",
    lokasiTerakhir: "Kurir Masuk Area Tujuan (Jakarta Pusat Hub)",
    waktuTerakhir: "22 Juli 2026, 09:42 WIB",
    timeline: [
      {
        title: "Registrasi Pesanan Terverifikasi",
        description: "Data transaksi dan pembayaran berhasil terverifikasi oleh OJK Gateway.",
        timestamp: "22 Juli 2026, 07:15 WIB",
        status: "completed",
        location: "System Portal Ousevoid"
      },
      {
        title: "Tahap Pengemasan & Quality Control",
        description: "Paket Ousevoid Sonic Pods Pro telah lolos uji mutu dan dikemas rapi dengan lapisan bubble wrap tebal.",
        timestamp: "22 Juli 2026, 08:00 WIB",
        status: "completed",
        location: "Gudang Pusat Ousevoid Gambir"
      },
      {
        title: "Diserahkan ke Kurir Logistik",
        description: "Paket diserahkan ke Kurir Gamoon e-Package (Driver ID: GMN-8849).",
        timestamp: "22 Juli 2026, 08:45 WIB",
        status: "completed",
        location: "Hub Transit Central Jakarta"
      },
      {
        title: "Dalam Pengiriman ke Alamat Tujuan",
        description: "Kurir sedang dalam perjalanan menuju alamat Anda. Paket diproyeksikan tiba dalam 30-45 menit.",
        timestamp: "22 Juli 2026, 09:42 WIB",
        status: "active",
        location: "Area Gambir - Duri Pulo"
      },
      {
        title: "Pesanan Selesai / Serah Terima",
        description: "Tanda terima foto dan konfirmasi penerima paket.",
        timestamp: "Estimasi 10:30 WIB",
        status: "pending"
      }
    ]
  },
  "2026/OUSE/10294": {
    resi: "2026/OUSE/10294",
    namaPenerima: "Siti Rahmawati",
    alamatPenerima: "Jl. Margonda Raya No. 120, Beji, Depok",
    kurir: "J&T Express Super Fast",
    estimasiTiba: "Besok, 23 Juli 2026",
    statusTerakhir: "Transit di Gateway Logistik Pusat",
    lokasiTerakhir: "Sorting Center Jakarta Selatan",
    waktuTerakhir: "22 Juli 2026, 08:15 WIB",
    timeline: [
      {
        title: "Registrasi Pesanan",
        description: "Nomor resi dibuat oleh penjual PT Gerbang Masa Depan.",
        timestamp: "21 Juli 2026, 20:10 WIB",
        status: "completed"
      },
      {
        title: "Paket Diterima Drop Point",
        description: "Paket telah diterima di Drop Point Gambir.",
        timestamp: "21 Juli 2026, 22:30 WIB",
        status: "completed",
        location: "Drop Point Gambir"
      },
      {
        title: "Transit di Gateway Pusat",
        description: "Paket sedang disortir untuk pengiriman ke Depok Hub.",
        timestamp: "22 Juli 2026, 08:15 WIB",
        status: "active",
        location: "Sorting Center Jakarta Selatan"
      },
      {
        title: "Selesai",
        description: "Diterima oleh penerima.",
        timestamp: "Estimasi 23 Juli 2026",
        status: "pending"
      }
    ]
  }
};

export function getTrackingInfoByResi(inputResi: string): TrackingInfo {
  const clean = inputResi.trim().toUpperCase();
  if (SAMPLE_TRACKING_DATABASE[clean]) {
    return SAMPLE_TRACKING_DATABASE[clean];
  }

  // Generate a dynamic realistic tracking info for any other input code!
  const todayStr = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return {
    resi: clean || "2026/OUSE/" + Math.floor(10000 + Math.random() * 90000),
    namaPenerima: "Pelanggan Setia Ousevoid",
    alamatPenerima: "Alamat Pengiriman Terdaftar pada Sistem",
    kurir: "Gamoon e-Package Sameday Priority",
    estimasiTiba: `${todayStr} (Pengiriman Sameday 8 Jam)`,
    statusTerakhir: "Dalam Pengiriman oleh Kurir Logistik",
    lokasiTerakhir: "Transit Hub Jakarta Central / Wilayah Tujuan",
    waktuTerakhir: `${todayStr}, ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB`,
    timeline: [
      {
        title: "Registrasi Pesanan",
        description: "Data transaksi telah terverifikasi resmi oleh sistem keuangan PT Gerbang Masa Depan.",
        timestamp: `${todayStr}, 08:00 WIB`,
        status: "completed",
        location: "System Portal Ousevoid"
      },
      {
        title: "Tahap Pengemasan",
        description: "Logistik barang sedang dipersiapkan dan melewati uji mutu (Quality Control).",
        timestamp: `${todayStr}, 08:40 WIB`,
        status: "completed",
        location: "Gudang Utama Gambir"
      },
      {
        title: "Dalam Pengiriman Kurir",
        description: "Kurir bertugas Gamoon e-Package sedang mengantar paket langsung ke alamat tujuan.",
        timestamp: `${todayStr}, 09:30 WIB`,
        status: "active",
        location: "Hub Wilayah Tujuan"
      },
      {
        title: "Serah Terima / Selesai",
        description: "Paket diserahterimakan kepada penerima.",
        timestamp: "Estimasi Segera Tiba",
        status: "pending"
      }
    ]
  };
}
