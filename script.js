function tambahData(){
    const inputNama = document.getElementById("nama");
    const inputNim = document.getElementById("nim");
    const inputKelas = document.getElementById("kelas");
    const inputJurusan = document.getElementById("jurusan");

    const nama = inputNama.value;
    const nim = inputNim.value;
    const kelas = inputKelas.value;
    const jurusan = inputJurusan.value;

    const tabelData = document.getElementById("data-table").getElementsByTagName('thead')[0];
    const barisBaru = document.createElement("tr");

    const nilai = [nama, nim, kelas, jurusan];

    for(let i = 0; i < nilai.length; i++){
        const sel = document.createElement("td");
        sel.textContent = nilai[i];
        barisBaru.appendChild(sel);
    }

    tabelData.appendChild(barisBaru)
    inputNama.value = "";
    inputNim.value = "";
    inputKelas.value = "";
    inputJurusan.value = "";

}