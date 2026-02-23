export const COMPANY_INFO = {
    name: "ASKRA",
    fullName: "CV ADI SARANA KREASI",
    tagline: "Desain, Bangun, Renovasi",
    location: "Jakarta, Indonesia",
    philosophy:
        "Kami menciptakan ruang yang harmonis antara bentuk dan fungsi. Setiap proyek adalah bukti presisi, kualitas, dan desain yang dipikirkan dengan matang. Kami percaya bahwa arsitektur yang hebat bukan hanya tentang membangun struktur, tetapi tentang menciptakan lingkungan di mana kehidupan berkembang dengan indah.",
};

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    features: string[];
    gallery: string[];
}

export const SERVICES: ServiceItem[] = [
    {
        id: "kontraktor",
        title: "Kontraktor",
        description:
            "Wujudkan rumah impian Anda dengan desain modern dan konstruksi berkualitas tinggi",
        longDescription: "Kami menyediakan layanan pembangunan rumah dari nol dengan standar kualitas terbaik. Mulai dari perencanaan, desain, hingga konstruksi, tim profesional kami akan mendampingi setiap tahap pembangunan untuk memastikan rumah impian Anda menjadi kenyataan.",
        image: "/images/services/service-1.jpg",
        features: [
            "Konsultasi desain gratis",
            "Material berkualitas premium",
            "Tim konstruksi berpengalaman",
            "Garansi struktur bangunan",
            "Pengawasan proyek intensif",
            "Laporan progress berkala"
        ],
        gallery: [
            "/images/services/service-1.jpg",
            "/images/portfolio/residential/project-1.png",
            "/images/portfolio/residential/project-2.png",
        ],
    },
    {
        id: "interior",
        title: "Interior",
        description:
            "Transformasi ruang lama menjadi modern dengan sentuhan profesional",
        longDescription: "Layanan renovasi kami mengubah ruang lama menjadi hunian modern yang fungsional dan estetis. Dari renovasi minor hingga total makeover, kami menangani semua jenis proyek renovasi dengan presisi dan perhatian terhadap detail.",
        image: "/images/services/service-2.jpg",
        features: [
            "Evaluasi kondisi bangunan",
            "Desain renovasi custom",
            "Pengurusan izin renovasi",
            "Pengerjaan tepat waktu",
            "Minimalisir gangguan",
            "Hasil berkualitas tinggi"
        ],
        gallery: [
            "/images/services/service-2.png",
            "/images/portfolio/residential/project-3.png",
            "/images/portfolio/residential/project-4.png",
        ],
    },
    {
        id: "arsitek",
        title: "Jasa Arsitek",
        description:
            "Desain arsitektur inovatif yang menggabungkan estetika dan fungsi",
        longDescription: "Tim arsitek profesional kami menciptakan desain yang unik dan fungsional, disesuaikan dengan kebutuhan dan gaya hidup Anda. Kami menggabungkan kreativitas dengan kepraktisan untuk menghasilkan ruang yang indah dan nyaman dihuni.",
        image: "/images/services/service-3.jpg",
        features: [
            "Desain 2D & 3D rendering",
            "Konsultasi gaya arsitektur",
            "Perencanaan ruang optimal",
            "Desain interior terintegrasi",
            "RAB detail dan transparan",
            "Revisi desain fleksibel"
        ],
        gallery: [
            "/images/services/service-3.png",
            "/images/portfolio/commercial/project-1.png",
            "/images/portfolio/commercial/project-2.png",
        ],
    },
    // {
    //     id: "kontraktor",
    //     title: "Kontraktor",
    //     description:
    //         "Tim profesional yang menangani proyek Anda dari awal hingga selesai",
    //     longDescription: "Sebagai kontraktor berpengalaman, kami menangani seluruh aspek proyek konstruksi Anda. Dari perencanaan hingga penyelesaian, kami memastikan setiap detail dikerjakan dengan standar kualitas tertinggi dan tepat waktu.",
    //     image: "/images/services/service-4.png",
    //     features: [
    //         "Manajemen proyek profesional",
    //         "Tim kerja terlatih",
    //         "Peralatan modern",
    //         "Standar safety tinggi",
    //         "Kontrol kualitas ketat",
    //         "Harga kompetitif"
    //     ],
    //     gallery: [
    //         "/images/services/service-4.png",
    //         "/images/portfolio/commercial/project-3.png",
    //         "/images/portfolio/commercial/project-1.png",
    //     ],
    // },
];

export interface PortfolioProject {
    id: number;
    slug: string;
    title: string;
    category: "residential" | "commercial";
    image: string;
    location: string;
    year: string;
    area: string;
    services: string;
    description: string;
    gallery: string[];
    beforeAfter?: {
        before: string;
        after: string;
        title?: string;
    }[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        id: 1,
        slug: "modern-villa-residence",
        title: "Modern Villa Residence",
        category: "residential",
        image: "/images/portfolio/residential/client-projects/modern-villa-jakarta-hero.png",
        location: "Jakarta Selatan",
        year: "2024",
        area: "450 sqm",
        services: "Jasa Bangun Rumah",
        description: "Sebuah hunian modern yang menggabungkan elemen kontemporer dengan sentuhan tropis. Villa ini dirancang untuk memaksimalkan pencahayaan alami dan ventilasi, menciptakan ruang hidup yang nyaman dan elegan.",
        gallery: [
            "/images/portfolio/residential/client-projects/modern-villa-jakarta-hero.png",
            "/images/portfolio/residential/project-2.png",
            "/images/portfolio/residential/project-3.png",
        ],
    },
    {
        id: 2,
        slug: "tropical-pool-house",
        title: "Tropical Pool House",
        category: "residential",
        image: "/images/portfolio/residential/project-2.png",
        location: "Bintaro",
        year: "2024",
        area: "380 sqm",
        services: "Jasa Arsitek",
        description: "Pool house dengan desain tropis yang menghadirkan suasana resort di rumah. Konsep open-living dengan kolam renang sebagai focal point menciptakan koneksi sempurna antara ruang dalam dan luar.",
        gallery: [
            "/images/portfolio/residential/project-2.png",
            "/images/portfolio/residential/project-1.png",
            "/images/portfolio/residential/project-4.png",
        ],
    },
    {
        id: 3,
        slug: "contemporary-family-home",
        title: "Contemporary Family Home",
        category: "residential",
        image: "/images/portfolio/residential/project-3.png",
        location: "BSD City",
        year: "2023",
        area: "520 sqm",
        services: "Jasa Bangun Rumah",
        description: "Rumah keluarga kontemporer yang dirancang untuk mengakomodasi kebutuhan keluarga modern. Ruang-ruang multifungsi dengan desain minimalis yang tetap hangat dan inviting.",
        gallery: [
            "/images/portfolio/residential/project-3.png",
            "/images/portfolio/residential/project-1.png",
            "/images/portfolio/residential/project-2.png",
        ],
    },
    {
        id: 4,
        slug: "luxury-interior-living",
        title: "Luxury Interior Living",
        category: "residential",
        image: "/images/portfolio/residential/project-4.png",
        location: "Tangerang",
        year: "2023",
        area: "280 sqm",
        services: "Renovasi",
        description: "Proyek renovasi interior yang mengubah ruang konvensional menjadi hunian mewah dengan material premium dan detail finishing yang presisi.",
        gallery: [
            "/images/portfolio/residential/project-4.png",
            "/images/portfolio/residential/project-1.png",
            "/images/portfolio/residential/project-3.png",
        ],
        beforeAfter: [
            {
                before: "/images/portfolio/residential/project-3.png",
                after: "/images/portfolio/residential/project-4.png",
                title: "Transformasi Ruang Tamu"
            },
            {
                before: "/images/portfolio/residential/project-2.png",
                after: "/images/portfolio/residential/project-1.png",
                title: "Renovasi Dapur Modern"
            }
        ],
    },
    {
        id: 5,
        slug: "corporate-office-building",
        title: "Corporate Office Building",
        category: "commercial",
        image: "/images/portfolio/commercial/project-1.png",
        location: "Jakarta Pusat",
        year: "2024",
        area: "1200 sqm",
        services: "Kontraktor",
        description: "Gedung perkantoran modern dengan desain yang mengutamakan produktivitas dan kenyamanan karyawan. Sistem pencahayaan dan HVAC yang efisien untuk lingkungan kerja optimal.",
        gallery: [
            "/images/portfolio/commercial/project-1.png",
            "/images/portfolio/commercial/project-2.png",
            "/images/portfolio/commercial/project-3.png",
        ],
    },
    {
        id: 6,
        slug: "modern-restaurant",
        title: "Modern Restaurant",
        category: "commercial",
        image: "/images/portfolio/commercial/project-2.png",
        location: "Kemang",
        year: "2023",
        area: "350 sqm",
        services: "Jasa Arsitek",
        description: "Restoran dengan konsep industrial-modern yang menciptakan atmosfer dining yang unik. Desain interior yang instagrammable dengan tetap mengutamakan flow operasional yang efisien.",
        gallery: [
            "/images/portfolio/commercial/project-2.png",
            "/images/portfolio/commercial/project-1.png",
            "/images/portfolio/commercial/project-3.png",
        ],
    },
    {
        id: 7,
        slug: "retail-space-design",
        title: "Retail Space Design",
        category: "commercial",
        image: "/images/portfolio/commercial/project-3.png",
        location: "Senayan",
        year: "2023",
        area: "200 sqm",
        services: "Renovasi",
        description: "Desain ruang retail yang memaksimalkan pengalaman pelanggan dengan layout yang intuitif dan visual merchandising yang menarik.",
        gallery: [
            "/images/portfolio/commercial/project-3.png",
            "/images/portfolio/commercial/project-1.png",
            "/images/portfolio/commercial/project-2.png",
        ],
    },
    {
        id: 8,
        slug: "space-design-bali",
        title: "Space Design",
        category: "commercial",
        image: "/images/portfolio/commercial/project-3.png",
        location: "Denpasar",
        year: "2024",
        area: "180 sqm",
        services: "Jasa Arsitek",
        description: "Konsep ruang komersial dengan sentuhan Bali modern. Menggabungkan elemen tradisional dengan desain kontemporer untuk menciptakan identitas brand yang kuat.",
        gallery: [
            "/images/portfolio/commercial/project-3.png",
            "/images/portfolio/commercial/project-2.png",
            "/images/portfolio/commercial/project-1.png",
        ],
    },
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Budi Santoso",
        role: "Pemilik Rumah",
        content:
            "ASKRA mengubah visi rumah impian kami menjadi kenyataan. Profesionalisme dan perhatian terhadap detail mereka sangat luar biasa.",
        image: "/images/testimonials/client-1.jpg",
        projectImage: "/images/portfolio/residential/project-1.png",
    },
    {
        id: 2,
        name: "Sarah Wijaya",
        role: "Pengembang Properti",
        content:
            "Kerjasama dengan ASKRA selalu memuaskan. Mereka selalu tepat waktu dan hasil pekerjaannya berkualitas tinggi.",
        image: "/images/testimonials/client-2.jpg",
        projectImage: "/images/portfolio/commercial/project-1.png",
    },
    {
        id: 3,
        name: "Andre Kusuma",
        role: "Pemilik Bisnis",
        content:
            "Renovasi kantor kami dikerjakan dengan sangat baik. Tim ASKRA sangat responsif dan hasilnya melebihi ekspektasi.",
        image: "/images/testimonials/client-3.jpg",
        projectImage: "/images/portfolio/commercial/project-2.png",
    },
];

export const CONTACT_INFO = {
    email: "info@askra.id",
    phone: "+62 812 3456 7890",
    whatsapp: "+6281234567890",
    address: "JL. Peta Barat No. 61, Jakarta, Indonesia",
    note: "Dengan perjanjian",
};
