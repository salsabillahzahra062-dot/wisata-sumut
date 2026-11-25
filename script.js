const dataWisata = [
    {
        id: 1,
        nama: "Danau Toba & Pulau Samosir",
        kategori: "alam",
        lokasi: "Kabupaten Samosir / Parapat",
        harga: "Gratis (Biaya penyeberangan kapal mulai Rp 15.000)",
        gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80",
        deskripsi: "Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya. Menawarkan pemandangan perbukitan hijau, udara sejuk, dan kekayaan budaya Batak Toba."
    },
    {
        id: 2,
        nama: "Istana Maimun",
        kategori: "budaya",
        lokasi: "Kota Medan",
        harga: "Tiket Masuk: Rp 10.000 / orang",
        gambar: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
        deskripsi: "Ikon bersejarah Kota Medan peninggalan Kesultanan Deli yang memadukan arsitektur Melayu, Islam, Spanyol, India, dan Italia."
    },
    {
        id: 3,
        nama: "Air Terjun Sipiso-piso",
        kategori: "alam",
        lokasi: "Tongging, Kabupaten Karo",
        harga: "Tiket Masuk: Rp 10.000 / orang",
        gambar: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
        deskripsi: "Salah satu air terjun tertinggi di Indonesia dengan ketinggian sekitar 120 meter yang mengalir langsung ke ujung utara Danau Toba."
    },
    {
        id: 4,
        nama: "Bukit Holbung",
        kategori: "alam",
        lokasi: "Harian Boho, Samosir",
        harga: "Tiket Masuk: Rp 10.000 / orang",
        gambar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        deskripsi: "Dikenal sebagai Bukit Teletubbies versi Sumatera Utara. Tempat terbaik untuk berkemah dan menikmati panorama Danau Toba dari ketinggian."
    },
    {
        id: 5,
        nama: "Tjong A Fie Mansion",
        kategori: "budaya",
        lokasi: "Kesawan, Kota Medan",
        harga: "Tiket Masuk: Rp 35.000 / orang",
        gambar: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=800&q=80",
        deskripsi: "Rumah bersejarah milik tokoh dermawan Tionghoa Medan yang dibangun pada tahun 1895 dengan arsitektur Tiongkok, Eropa, dan Melayu."
    },
    {
        id: 6,
        nama: "Taman Alam Lumbini",
        kategori: "edukasi",
        lokasi: "Berastagi, Kabupaten Karo",
        harga: "Gratis (Donasi sukarela)",
        gambar: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        deskripsi: "Replika Pagoda Shwedagon tertinggi di Indonesia yang dikelilingi taman bunga yang asri dan sejuk di dataran tinggi Berastagi."
    }
];

const container = document.getElementById("wisataContainer");
const searchInput = document.getElementById("searchInput");
let kategoriAktif = "semua";

function tampilkanWisata(list) {
    container.innerHTML = "";
    if (list.length === 0) {
        container.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>Destinasi wisata tidak ditemukan.</p>";
        return;
    }

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.gambar}" alt="${item.nama}">
            <div class="card-body">
                <div>
                    <span class="badge">${item.kategori}</span>
                    <h3>${item.nama}</h3>
                    <p class="lokasi">📍 ${item.lokasi}</p>
                </div>
                <button class="btn-detail" onclick="bukaModal(${item.id})">Lihat Detail</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterWisata(kategori) {
    kategoriAktif = kategori;
    
    // Update tombol aktif
    const buttons = document.querySelectorAll(".filter-buttons .btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    prosesFilter();
}

function prosesFilter() {
    const kataKunci = searchInput.value.toLowerCase();
    const hasil = dataWisata.filter(item => {
        const cocokKategori = kategoriAktif === "semua" || item.kategori === kategoriAktif;
        const cocokTeks = item.nama.toLowerCase().includes(kataKunci) || item.lokasi.toLowerCase().includes(kataKunci);
        return cocokKategori && cocokTeks;
    });
    tampilkanWisata(hasil);
}

searchInput.addEventListener("input", prosesFilter);

// Fungsi Modal
function bukaModal(id) {
    const item = dataWisata.find(w => w.id === id);
    if (!item) return;

    document.getElementById("modalImg").src = item.gambar;
    document.getElementById("modalTitle").innerText = item.nama;
    document.getElementById("modalLokasi").innerText = "📍 Lokasi: " + item.lokasi;
    document.getElementById("modalHarga").innerText = "🎟️ " + item.harga;
    document.getElementById("modalDesc").innerText = item.deskripsi;

    document.getElementById("detailModal").style.display = "flex";
}

function tutupModal() {
    document.getElementById("detailModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("detailModal");
    if (event.target === modal) {
        tutupModal();
    }
}

// Tampilkan semua data saat pertama kali dibuka
tampilkanWisata(dataWisata);