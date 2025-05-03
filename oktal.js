function konversiKeOktal() {
    const angka = document.getElementById('angka').value.trim();
    const tipe = document.getElementById('tipe').value;
    const hasilDiv = document.getElementById('hasil');
    let desimal;

    // JIKA USER BELUM MENGINPUTKAN SESUATU
    if (!angka) {
        hasilDiv.innerHTML = "❌ Anda belum memasukkan bilangan.";
        hasilDiv.style.color = "red";
        return;
    }
    // Validasi input berdasarkan tipe bilangan
    if (tipe === 'desimal') {
        if (!/^[0-9]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Yang kamu masukkan bukan bilangan desimal yang valid (hanya angka 0-9).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 10);

    } else if (tipe === 'heksa') {
        if (!/^[0-9a-fA-F]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Input bukan bilangan heksadesimal yang valid (hanya 0-9, A-F).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 16);

    } else if (tipe === 'biner') {
        if (!/^[01]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Input bukan bilangan biner yang valid (hanya 0 dan 1).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 2);
    }

    // Konversi ke oktal
    const oktal = desimal.toString(8);
    hasilDiv.textContent = `✅ Bilangan oktal dari ${angka.toUpperCase()} (${tipe}) adalah: ${oktal}`;
    hasilDiv.style.color = "white";
    hasilDiv.style.fontWeight = "bold"
}
