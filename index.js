// Kelas Pendaftar
class Pendaftar {
  constructor(nama, umur, uangSangu) {
    this.nama = nama;
    this.umur = umur;
    this.uangSangu = uangSangu;
  }
}

// List Pendaftar
const Listpendaftar = [];
const form = document.getElementById("regist");
const tabeldaftar = document.getElementById("tabeldaftar");
const pendaftar = document.getElementById("pendaftar");
const resume = document.getElementById("resume");

// Fungsi untuk menambahkan pendaftar ke Listpendaftar
function tambahPendaftar(nama, umur, uangSangu) {
  const pendaftarBaru = new Pendaftar(nama, umur, uangSangu);
  Listpendaftar.push(pendaftarBaru);
}

// Fungsi untuk menampilkan data pendaftar dalam tabel
function tampilkanDataPendaftar() {
  while (tabeldaftar.rows.length > 1) {
    tabeldaftar.deleteRow(1);
  }

  Listpendaftar.forEach((pendaftar) => {
    const row = tabeldaftar.insertRow();
    const tableNama = row.insertCell(0);
    const tableUmur = row.insertCell(1);
    const tableUangSangu = row.insertCell(2);

    tableNama.innerHTML = pendaftar.nama;
    tableUmur.innerHTML = pendaftar.umur;
    tableUangSangu.innerHTML = pendaftar.uangSangu;
  });
}

// Fungsi untuk menghitung rata-rata umur dan uang sangu
function hitungRataRata() {
  const totalUangSangu = Listpendaftar.reduce(
    (sum, pendaftar) => sum + pendaftar.uangSangu,
    0
  );
  const rataUangSangu = totalUangSangu / Listpendaftar.length;
  const totalUmur = Listpendaftar.reduce(
    (sum, pendaftar) => sum + pendaftar.umur,
    0
  );
  const rataRataUmur = totalUmur / Listpendaftar.length;

  return `Rata-rata pendaftar memiliki uang sangu sebesar ${rataUangSangu} dengan rata-rata umur ${rataRataUmur}`;
}

// Event listener untuk form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uangSangu = parseInt(document.getElementById("uangSangu").value);

  if (
    nama.length < 10 ||
    umur < 25 ||
    uangSangu < 100000 ||
    uangSangu > 1000000
  ) {
    alert("Data tidak memenuhi kriteria.");
    return;
  }

  tambahPendaftar(nama, umur, uangSangu);
  tampilkanDataPendaftar();
  form.reset();

  const resumeText = hitungRataRata();
  resume.innerHTML = resumeText;
});
