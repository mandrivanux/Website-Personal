// Kode JavaScript untuk kalkulator
// Anda dapat menambahkan fungsi dan logika lainnya sesuai keinginan Anda

// Mendeklarasikan variabel untuk menyimpan elemen-elemen kalkulator
var layar = document.getElementById("layar"); // elemen input untuk menampilkan hasil
var tombol = document.getElementsByTagName("input"); // elemen-elemen input untuk tombol kalkulator

// Membuat fungsi untuk menghitung hasil dari ekspresi aritmatika
function hitung() {
  try {
    // Menggunakan fungsi eval untuk menghitung hasil dari ekspresi aritmatika
    layar.value = eval(layar.value);
  } catch (error) {
    // Menampilkan pesan error jika ekspresi aritmatika tidak valid
    alert("Ekspresi tidak valid");
  }
}

// Membuat fungsi untuk menghapus isi layar
function hapus() {
  // Mengosongkan nilai layar
  layar.value = "";
}

// Membuat perulangan untuk menambahkan event listener pada setiap tombol
for (var i = 0; i < tombol.length; i++) {
  // Menambahkan event listener pada tombol "="
  if (tombol[i].value == "=") {
    tombol[i].addEventListener("click", hitung);
  }
  // Menambahkan event listener pada tombol "C"
  else if (tombol[i].value == "C") {
    tombol[i].addEventListener("click", hapus);
  }
  // Menambahkan event listener pada tombol lainnya
  else {
    tombol[i].addEventListener("click", function () {
      // Menambahkan nilai tombol ke layar
      layar.value += this.value;
    });
  }
}
