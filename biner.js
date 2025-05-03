// MENDEVENISIKAN ID DAN TOMBOL YANG AKAN DIFUNGSIKAN
function konversiKeBiner() {
    const angka = document.getElementById('angka').value.trim();
    const tipe = document.getElementById('tipe').value;
    const hasilDiv = document.getElementById('hasil');
    let desimal;

    // Validasi input berdasarkan tipe bilangan
    if (tipe === 'desimal') {
        // SISTEM INI SELURUHNYA MENGGUNAKAN REGEX
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

    } else if (tipe === 'oktal') {
        if (!/^[0-7]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Input bukan bilangan oktal yang valid (hanya 0-7).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 8);
    }

    // Konversi ke biner
    const biner = desimal.toString(2);
    hasilDiv.textContent = `✅ Bilangan biner dari ${angka.toUpperCase()} (${tipe}) adalah: ${biner}`;
    hasilDiv.style.color = "white";
}
