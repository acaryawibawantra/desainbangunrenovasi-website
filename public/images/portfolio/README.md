# 📁 Portfolio Images Organization Guide

## 📂 Struktur Folder

```
public/images/portfolio/
├── residential/              # Proyek Residential (Rumah Hunian)
│   ├── client-projects/     # ⭐ TARUH FOTO CLIENT DI SINI
│   └── project-1.png        # (existing placeholder)
│
├── commercial/              # Proyek Commercial (Bangunan Komersial)
│   ├── client-projects/     # ⭐ TARUH FOTO CLIENT DI SINI
│   └── project-1.png        # (existing placeholder)
│
└── README.md               # File ini
```

---

## 🎯 Cara Menaruh Foto Client

### **Option 1: Satu Proyek, Banyak Foto (RECOMMENDED)**

Buat folder per project dengan format nama yang jelas:

```
client-projects/
├── villa-bali-2024/
│   ├── hero.jpg              # Foto utama (1600x1200)
│   ├── gallery-1.jpg         # Foto gallery
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── before-living.jpg     # Before/After (jika renovasi)
│   └── after-living.jpg
│
├── rumah-jakarta-selatan/
│   ├── hero.jpg
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
│
└── cafe-bandung/
    ├── hero.jpg
    ├── gallery-1.jpg
    └── gallery-2.jpg
```

### **Option 2: Langsung Upload (Simple)**

Jika hanya sedikit foto, upload langsung dengan nama yang deskriptif:

```
client-projects/
├── villa-bali-hero.jpg
├── villa-bali-gallery-1.jpg
├── rumah-jakarta-hero.jpg
└── cafe-bandung-hero.jpg
```

---

## 📐 **Ukuran Gambar yang Dibutuhkan**

| Tipe Gambar | Ukuran Ideal | Aspect Ratio |
|-------------|--------------|--------------|
| **Hero Image** | 1600 x 1200px | 4:3 |
| **Portfolio Grid** | 1000 x 1250px | 4:5 |
| **Gallery (Pertama)** | 1920 x 1080px | 16:9 |
| **Gallery (Lainnya)** | 1200 x 900px | 4:3 |
| **Before/After** | 1600 x 1200px | 4:3 |

---

## ✅ **Naming Convention (Penamaan File)**

Gunakan format yang konsisten dan mudah dibaca:

### ✅ GOOD (Direkomendasikan):
- `villa-bali-2024-hero.jpg`
- `rumah-minimalis-jakarta-gallery-1.jpg`
- `cafe-bandung-before.jpg`
- `villa-seminyak-after.jpg`

### ❌ BAD (Hindari):
- `IMG_0123.jpg`
- `WhatsApp Image 2024.jpg`
- `photo.jpg`
- `new-1-final-FINAL.jpg`

---

## 🎨 **Format & Optimasi**

### Format File:
- ✅ **Gunakan**: `.jpg` atau `.webp`
- ⚠️ **Hindari**: `.png` (ukuran file terlalu besar untuk foto)

### Optimasi:
- **Target ukuran file**: 100-300 KB per gambar
- **Quality**: 80-85%
- **Tools**: [TinyPNG](https://tinypng.com) atau [Squoosh](https://squoosh.app)

---

## 📝 **Checklist Sebelum Upload**

- [ ] Gambar sudah di-resize ke ukuran yang tepat
- [ ] File sudah dikompresi (< 300 KB)
- [ ] Nama file jelas dan deskriptif
- [ ] Subjek utama foto di tengah frame
- [ ] Foto sudah dipilih yang terbaik dan paling representatif

---

## 🔗 **Cara Update di Code**

Setelah upload foto, update path di `lib/constants.ts`:

```typescript
{
  id: 1,
  slug: "villa-bali-2024",
  title: "Villa Minimalis Bali",
  image: "/images/portfolio/residential/client-projects/villa-bali-2024/hero.jpg",
  gallery: [
    "/images/portfolio/residential/client-projects/villa-bali-2024/gallery-1.jpg",
    "/images/portfolio/residential/client-projects/villa-bali-2024/gallery-2.jpg",
  ],
  // ... dst
}
```

---

## 💡 **Tips**

1. **Konsistensi adalah kunci**: Gunakan satu format naming untuk semua project
2. **Backup original**: Simpan foto asli di tempat lain sebelum di-resize/compress
3. **Test di mobile**: Pastikan foto terlihat bagus di layar kecil juga
4. **Watermark** (optional): Tambahkan logo subtle di pojok jika perlu

---

## 📞 Need Help?

Jika ada pertanyaan tentang:
- Ukuran gambar yang tepat
- Cara optimize foto
- Cara update di code

Silakan tanya! 🚀
