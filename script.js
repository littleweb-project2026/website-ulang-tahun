function tampilkanfunctionHalaman(id) {
document.querySelectorAll(".layar").forEach(function(halaman) {
halaman.classList.remove("aktif");
});

document.getElementById(id).classList.add("aktif");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

function cekPassword() {
const angka = document.getElementById("password").value;
const tombolFoto = document.getElementById("tombolBukaFoto");

if (angka === "16") {
    tombolFoto.style.display = "block";
    document.getElementById("pesan").textContent =
        "Password benar! Kejutan sudah menunggu 💗";
} else {
    tombolFoto.style.display = "none";
    document.getElementById("pesan").textContent =
        "Belum tepat, coba lagi ya! 💕";
}

}

function bukaFoto() {
const music = document.getElementById("music");

music.play().catch(function() {
    console.log("Musik gagal diputar");
});

tampilkanHalaman("halamanFoto");

}

function bukaBirthday() {
tampilkanHalaman("halamanHBD");
}

function bukaKado() {
    tampilkanHalaman("halamanUtama");
}

function bukaSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.classList.toggle("hidden");

    if (!surprise.classList.contains("hidden")) {
        surprise.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function putarMusik() {
    const music = document.getElementById("music");

    music.play().catch(function() {
        alert("Tekan tombol putar sekali lagi ya.");
    });
}

function jedaMusik() {
    const music = document.getElementById("music");
    music.pause();
}
