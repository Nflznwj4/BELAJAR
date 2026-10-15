function scrollToContact() {
    document.getElementById("kontak").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk submit secara default
    // Tambahkan logika untuk mengirim form di sini
    document.getElementById("message").innerText = "Terima kasih telah menghubungi saya! Pesan Anda telah dikirim.";
    this.reset(); // Mengosongkan form setelah submit
});