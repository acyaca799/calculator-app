function hitung() {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    let operator = document.getElementById("operator").value;
    let hasilElement = document.getElementById("nilai-hasil");

    if (angka1.trim() === "" || angka2.trim() === "") {
        hasilElement.innerText = "*Harap masukkan angka yang benar";
        hasilElement.style.color = "red";
        return;
    }

    angka1 = parseFloat(angka1);
    angka2 = parseFloat(angka2);
    let hasil;

    switch (operator) {
        case "+": hasil = angka1 + angka2; break;
        case "-": hasil = angka1 - angka2; break;
        case "*": hasil = angka1 * angka2; break;
        case "/": 
            if (angka2 === 0) {
                hasilElement.innerText = "Tak Terdefinisi (Pembagian dengan nol)";
                hasilElement.style.color = "red";
                return;
            } 
            hasil = angka1 / angka2; 
            break;
    }

    hasilElement.innerText = hasil;
    hasilElement.style.color = "#333";
}

function bersihkan() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("nilai-hasil").innerText = "-";
    document.getElementById("nilai-hasil").style.color = "#333";
}
