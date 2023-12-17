const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

text1.style.animation = 'typing 3s steps(1000, end) forwards';

setTimeout(() => {
  text2.style.display = 'block'; // Menampilkan teks kedua setelah teks pertama selesai
  text2.style.animation = 'typing 3s steps(1000, end) forwards';
}, 2000); // Delay untuk memulai teks kedua setelah teks pertama selesai
