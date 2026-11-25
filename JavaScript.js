// Data Katalog 15 Destinasi Wisata Sumatera Utara
const destinations = [
    {
        id: 1,
        name: "Danau Toba & Pulau Samosir",
        location: "Kabupaten Samosir",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
        summary: "Danau vulkanik terbesar di dunia dengan panorama perbukitan hijau dan kekayaan budaya Batak Toba.",
        description: "Danau Toba menawarkan pemandangan kaldera raksasa yang memukau. Pengunjung dapat menyeberang ke Pulau Samosir untuk menikmati keindahan alam dari Bukit Holbung atau mengunjungi Desa Tomok.",
        hours: "24 Jam",
        price: "Gratis (Biaya penyeberangan feri mulai Rp15.000)"
    },
    {
        id: 2,
        name: "Air Terjun Sipiso-piso",
        location: "Tongging, Kabupaten Karo",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        summary: "Air terjun setinggi 120 meter yang mengalir deras di sisi utara kaldera Danau Toba.",
        description: "Dikelilingi hutan pinus yang sejuk di dataran tinggi Karo, Sipiso-piso merupakan salah satu air terjun tertinggi di Indonesia dengan gardu pandang menghadap langsung ke Danau Toba.",
        hours: "07.00 - 18.00 WIB",
        price: "Rp10.000 / orang"
    },
    {
        id: 3,
        name: "Istana Maimun",
        location: "Kota Medan",
        category: "budaya",
        categoryLabel: "Budaya & Sejarah",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
        summary: "Istana ikonik peninggalan Kesultanan Deli dengan perpaduan arsitektur Melayu, Islam, dan Eropa.",
        description: "Dibangun pada tahun 1888 oleh Sultan Ma'mun Al Rasyid Perkasa Alamsyah, istana berwarna kuning cerah ini menyimpan koleksi sejarah Kesultanan Deli serta penyewaan pakaian adat Melayu.",
        hours: "08.00 - 17.00 WIB",
        price: "Rp10.000 - Rp15.000"
    },
    {
        id: 4,
        name: "Bukit Lawang",
        location: "Bahorok, Kabupaten Langkat",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        summary: "Pintu gerbang Taman Nasional Gunung Leuser sekaligus pusat rehabilitasi Orangutan Sumatera.",
        description: "Cocok bagi pencinta ekowisata dan trekking hutan hujan tropis. Pengunjung bisa menyusuri sungai jernih dan melihat langsung orangutan di habitat aslinya bersama pemandu lokal.",
        hours: "08.00 - 17.00 WIB",
        price: "Rp15.000 (Domestik) / Rp150.000 (Mancanegara)"
    },
    {
        id: 5,
        name: "Desa Adat Bawömataluo",
        location: "Nias Selatan",
        category: "budaya",
        categoryLabel: "Budaya & Sejarah",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        summary: "Desa tradisional di atas bukit yang terkenal dengan rumah adat Omo Sebua dan tradisi Lompat Batu.",
        description: "Bawömataluo berarti 'Bukit Matahari'. Desa ini mempertahankan tata ruang megalitikum berusia ratusan tahun serta pertunjukan budaya Fahombo (Lompat Batu) yang legendaris.",
        hours: "08.00 - 18.00 WIB",
        price: "Rp20.000 / orang"
    },
    {
        id: 6,
        name: "Kesawan Square & Kuliner Medan",
        location: "Kota Medan",
        category: "kuliner",
        categoryLabel: "Kuliner & Kota",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        summary: "Kawasan kota tua bersejarah yang menjadi pusat wisata kuliner malam khas Kota Medan.",
        description: "Menikmati suasana gedung kolonial sembari mencicipi ragam kuliner legendaris mulai dari Bihun Bebek, Mie Gomak, Sate Memeng, hingga Durian Ucok.",
        hours: "17.00 - 23.30 WIB",
        price: "Gratis masuk (Makanan mulai Rp20.000)"
    },
    {
        id: 7,
        name: "Bukit Holbung",
        location: "Harian Boho, Kabupaten Samosir",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        summary: "Rangkaian perbukitan savana hijau yang dijuluki Bukit Teletubbies dengan pemandangan langsung ke Danau Toba.",
        description: "Spot favorit untuk berkemah dan menikmati matahari terbit maupun terbenam. Jalur pendakiannya cukup landai sehingga ramah bagi pendaki pemula maupun keluarga.",
        hours: "24 Jam",
        price: "Rp10.000 / orang"
    },
    {
        id: 8,
        name: "Tangkahan (The Hidden Paradise)",
        location: "Batang Serangan, Kabupaten Langkat",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        summary: "Kawasan ekowisata hutan tropis dengan pemandian air panas alami, air terjun, dan konservasi gajah.",
        description: "Terletak di perbatasan Taman Nasional Gunung Leuser, Tangkahan menawarkan pengalaman memandikan gajah Sumatera, river tubing di sungai jernih, dan jelajah gua.",
        hours: "08.00 - 17.00 WIB",
        price: "Rp10.000 - Rp50.000 (Tergantung aktivitas)"
    },
    {
        id: 9,
        name: "Masjid Raya Al-Mashun",
        location: "Kota Medan",
        category: "budaya",
        categoryLabel: "Budaya & Sejarah",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
        summary: "Masjid bersejarah peninggalan Kesultanan Deli dengan gaya arsitektur Timur Tengah, India, dan Spanyol.",
        description: "Berdiri megah sejak tahun 1909 di pusat Kota Medan, masjid ini memiliki bentuk segi delapan yang unik dengan kubah besar serta hiasan kaca patri yang menawan.",
        hours: "04.00 - 22.00 WIB",
        price: "Gratis"
    },
    {
        id: 10,
        name: "Taman Alam Lumbini",
        location: "Berastagi, Kabupaten Karo",
        category: "budaya",
        categoryLabel: "Budaya & Sejarah",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        summary: "Pagoda megah berlapis cat emas yang merupakan replika dari Pagoda Shwedagon di Myanmar.",
        description: "Dikelilingi taman bunga yang asri dan udara sejuk pegunungan Berastagi, pagoda tertinggi di Indonesia ini menjadi pusat wisata religi sekaligus destinasi foto yang populer.",
        hours: "09.00 - 17.00 WIB",
        price: "Gratis (Donasi sukarela)"
    },
    {
        id: 11,
        name: "Gunung Sibayak",
        location: "Berastagi, Kabupaten Karo",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        summary: "Gunung berapi aktif yang ramah didaki dengan kawah belerang berasap dan pemandangan matahari terbit.",
        description: "Dengan ketinggian 2.212 mdpl, puncak Gunung Sibayak dapat dicapai dalam waktu 2–3 jam pendakian. Setelah turun gunung, pengunjung biasa berendam di pemandian air panas Sidebuk-debuk.",
        hours: "24 Jam",
        price: "Rp10.000 / orang"
    },
    {
        id: 12,
        name: "Tjong A Fie Mansion",
        location: "Kesawan, Kota Medan",
        category: "budaya",
        categoryLabel: "Budaya & Sejarah",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        summary: "Rumah bersejarah dua lantai milik saudagar dermawan Tionghoa yang memadukan gaya Tionghoa, Melayu, dan Art Deco.",
        description: "Dibangun pada tahun 1895, museum rumah ini menyimpan perabotan asli, foto sejarah multikultural Kota Medan, serta ruang aula megah yang terawat dengan sangat baik.",
        hours: "09.00 - 17.00 WIB",
        price: "Rp35.000 / orang"
    },
    {
        id: 13,
        name: "Kawah Putih Tinggi Raja",
        location: "Dolok Marawa, Kabupaten Simalungun",
        category: "alam",
        categoryLabel: "Wisata Alam",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        summary: "Bukit kapur putih seperti salju dengan kolam air panas alami berwarna biru kehijauan.",
        description: "Terletak di kawasan cagar alam, fenomena geotermal ini membentuk terasering kapur bertingkat yang dialiri air panas alami di tengah rindangnya pepohonan hutan.",
        hours: "07.00 - 17.00 WIB",
        price: "Rp10.000 - Rp15.000"
    },
    {
        id: 14,
        name: "Pasar Buah Berastagi",
        location: "Berastagi, Kabupaten Karo",
        category: "kuliner",
        categoryLabel: "Kuliner & Kota",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
        summary: "Pusat oleh-oleh buah segar dataran tinggi seperti markisa, jeruk madu, stroberi, hingga kuliner jagung bakar.",
        description: "Pengunjung bisa berbelanja buah-buahan segar hasil panen petani lokal, bunga hias, suvenir khas Karo, serta mencoba sensasi naik sado (delman) mengelilingi kota Berastagi.",
        hours: "07.00 - 19.00 WIB",
        price: "Gratis masuk"
    },
    {
        id: 15,
        name: "Merdeka Walk",
        location: "Lapangan Merdeka, Kota Medan",
        category: "kuliner",
        categoryLabel: "Kuliner & Kota",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        summary: "Pusat kuliner dan tempat bersantai terbuka hijau di titik nol kilometer Kota Medan.",
        description: "Dikelilingi gedung-gedung bersejarah seperti Balai Kota Lama dan Kantor Pos Medan, tempat ini menyajikan puluhan gerai makanan lokal maupun modern dengan suasana rindang.",
        hours: "11.00 - 24.00 WIB",
        price: "Gratis masuk"
    }
];

// Seleksi Elemen DOM
const catalogGrid = document.getElementById("catalogGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const emptyMessage = document.getElementById("emptyMessage");

// Elemen Modal
const detailModal = document.getElementById("detailModal");
const closeModal = document.getElementById("closeModal");

let currentCategory = "semua";
let searchQuery = "";

// Fungsi Merender Kartu Katalog
function renderCatalog() {
    catalogGrid.innerHTML = "";

    const filtered = destinations.filter((item) => {
        const matchCategory = currentCategory === "semua" || item.category === currentCategory;
        const matchSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase());

        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        emptyMessage.classList.remove("hidden");
        return;
    }

    emptyMessage.classList.add("hidden");

    filtered.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="card-body">
                <span class="badge">${item.categoryLabel}</span>
                <h2>${item.name}</h2>
                <p class="location">📍 ${item.location}</p>
                <p class="summary">${item.summary}</p>
                <button class="detail-btn" data-id="${item.id}">Lihat Detail</button>
            </div>
        `;
        catalogGrid.appendChild(card);
    });
}

// Event Pencarian
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderCatalog();
});

// Event Filter Kategori
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderCatalog();
    });
});

// Event Klik Tombol Detail (Event Delegation)
catalogGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("detail-btn")) {
        const id = Number(e.target.dataset.id);
        const item = destinations.find((d) => d.id === id);
        if (item) openDetailModal(item);
    }
});

// Membuka Modal Detail
function openDetailModal(item) {
    document.getElementById("modalImg").src = item.image;
    document.getElementById("modalImg").alt = item.name;
    document.getElementById("modalCategory").textContent = item.categoryLabel;
    document.getElementById("modalTitle").textContent = item.name;
    document.getElementById("modalLocation").textContent = `📍 ${item.location}`;
    document.getElementById("modalDesc").textContent = item.description;
    document.getElementById("modalHours").textContent = item.hours;
    document.getElementById("modalPrice").textContent = item.price;

    detailModal.showModal();
}

// Menutup Modal
closeModal.addEventListener("click", () => detailModal.close());
detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) detailModal.close();
});

// Render Awal
renderCatalog();