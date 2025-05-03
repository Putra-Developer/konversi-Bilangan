// MENDEVENISIKAN ID DAN TOMBOL YANG AKAN DIFUNGSIKAN
function konversi() {
  const angka = document.getElementById('input').value.trim();
  const tipe = document.getElementById('tipe').value;
  const hasilDiv = document.getElementById('hasil');
  let desimal;

  // Validasi input kosong
  if (!angka) {
    hasilDiv.innerHTML = "❌ Anda belum memasukkan bilangan.";
    hasilDiv.style.color = "red";
    return;
  }

  // Validasi dan konversi ke desimal
  if (tipe === 'biner') {
    if (!/^[01]+$/.test(angka)) {
      hasilDiv.innerHTML = "❌ Bukan bilangan biner yang valid (hanya 0 dan 1).";
      hasilDiv.style.color = "red";
      return;
    }
    desimal = parseInt(angka, 2);
  } else if (tipe === 'oktal') {
    if (!/^[0-7]+$/.test(angka)) {
      hasilDiv.innerHTML = "❌ Bukan bilangan oktal yang valid (hanya 0-7).";
      hasilDiv.style.color = "red";
      return;
    }
    desimal = parseInt(angka, 8);
  } else if (tipe === 'desimal') {
    if (!/^\d+$/.test(angka)) {
      hasilDiv.innerHTML = "❌ Bukan bilangan desimal yang valid.";
      hasilDiv.style.color = "red";
      return;
    }
    desimal = parseInt(angka, 10);
  }

  // Konversi ke heksadesimal
  const heksadesimal = desimal.toString(16).toUpperCase();
  hasilDiv.innerHTML = `✅ Hasil konversi: <b>${angka}</b> (${tipe}) = <span style="color: #007bff;"><b>${heksadesimal}</b></span> (heksadesimal)`;
  hasilDiv.style.color = "aqua";
}