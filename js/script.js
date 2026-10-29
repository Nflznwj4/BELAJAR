function scrollToContact() {
    document.getElementById("kontak").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk submit secara default
    // Tambahkan logika untuk mengirim form di sini
    document.getElementById("message").innerText = "Terima kasih telah menghubungi saya! Pesan Anda telah dikirim.";
    this.reset(); // Mengosongkan form setelah submit
});

// --- JAVASCRIPT UNTUK SLIDER HERO ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (slides.length === 0) return;
    
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[slideIndex].classList.add('active');
    if (dots[slideIndex]) {
    dots[slideIndex].classList.add('active');
    }
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Auto Slide setiap 4 detik (Foto bergeser otomatis)
if (slides.length > 0) {
    setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
    }, 5000);
}

// --- EFEK KETIK SEKALI JALAN (ONE-SHOT TYPING) ---
const textToTyping = "Hiking | Desainer | Gamers"; // Ganti teks sesuai keinginanmu
let charIndex = 0;

function typeOnce() {
    const targetElement = document.getElementById('typed-text');
    if (!targetElement) return;

    if (charIndex < textToTyping.length) {
        targetElement.innerHTML += textToTyping.charAt(charIndex);
        charIndex++;
        setTimeout(typeOnce, 100); // Kecepatan mengetik (milidetik)
    }
}

// Jalankan efek ketik saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
    typeOnce();
});