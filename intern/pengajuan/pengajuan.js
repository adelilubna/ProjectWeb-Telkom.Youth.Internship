function hitungDurasi() {
  if (!tanggalMulai.value || !tanggalSelesai.value) {
    durasiMagang.textContent = "Durasi magang akan dihitung otomatis";
    return;
  }

  const start = new Date(tanggalMulai.value);
  const end = new Date(tanggalSelesai.value);

  if (end < start) {
    durasiMagang.textContent = "Tanggal tidak valid";
    return;
  }

  const selisihHari =
    Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

  const bulan = Math.floor(selisihHari / 30);
  const hari = selisihHari % 30;

  let hasil = '';
  if (bulan > 0) hasil += `${bulan} bulan `;
  if (hari > 0) hasil += `${hari} hari`;

  durasiMagang.textContent = `Durasi Magang: ${hasil.trim()}`;
}
