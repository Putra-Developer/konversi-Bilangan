// MENDEVENISIKAN ID DAN TOMBOL YANG AKAN DIFUNGSIKAN
function konversiKeDesimal() {
    const angka = document.getElementById('angka').value.trim();
    const tipe = document.getElementById('tipe').value;
    const hasilDiv = document.getElementById('hasil');
    let desimal;


    if (!angka) {
        hasilDiv.innerHTML = "❌ Anda belum memasukkan bilangan.";
        hasilDiv.style.color = "red";
        return;
    }
    // Validasi dan konversi berdasarkan tipe
    if (tipe === 'biner') {
        if (!/^[01]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Input bukan bilangan biner yang valid (hanya 0 dan 1).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 2);
    } else if (tipe === 'oktal') {
        if (!/^[0-7]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Input bukan bilangan oktal yang valid (hanya 0-7).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 8);
    } else if (tipe === 'heksa') {
        if (!/^[0-9a-fA-F]+$/.test(angka)) {
            hasilDiv.textContent = "❌ Input bukan bilangan heksadesimal yang valid (0-9, A-F).";
            hasilDiv.style.color = "red";
            return;
        }
        desimal = parseInt(angka, 16);
    }

    // TAMPILAN JIKA ANGKA YANG DI INPUT SESUAI TIPE 
    hasilDiv.textContent = `✅ Nilai desimal dari ${angka.toUpperCase()} (${tipe}) adalah: ${desimal}`;
    hasilDiv.style.color = "lightgreen";
}