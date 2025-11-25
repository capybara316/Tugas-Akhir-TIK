// Efek suara tombol (opsional)
const clickSound = new Audio("click.mp3");

function openPopup() {
    clickSound.play();
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    // Animasi popup
    const popup = document.getElementById("popupForm");
    popup.style.opacity = "0";
    popup.style.transform = "scale(0.8)";

    setTimeout(() => {
        popup.style.transition = "0.3s";
        popup.style.opacity = "1";
        popup.style.transform = "scale(1)";
    }, 50);
}

// Tutup popup dengan klik overlay
document.getElementById("overlay").addEventListener("click", (e) => {
    if (e.target.id === "overlay") {
        closePopup();
    }
});

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("successMsg").style.display = "none";
}

function submitForm() {
    clickSound.play();

    let lokasi = document.getElementById("lokasi").value.trim();
    let hp = document.getElementById("hp").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!lokasi || !hp || !email) {
        alert("Semua kolom wajib diisi!");
        return;
    }

    // Validasi HP hanya angka
    if (!/^[0-9]+$/.test(hp)) {
        alert("Nomor HP hanya boleh angka!");
        return;
    }

    // Validasi email standar
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email tidak valid!");
        return;
    }

    // Tampilkan sukses + animasi glow
    document.getElementById("popupForm").style.display = "none";
    const successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";
    successMsg.style.animation = "successGlow 0.6s ease infinite alternate";

    setTimeout(() => {
        closePopup();
        successMsg.style.animation = "none";

        // Reset input
        document.getElementById("lokasi").value = "";
        document.getElementById("hp").value = "";
        document.getElementById("email").value = "";
    }, 2000);
}
