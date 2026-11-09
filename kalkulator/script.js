function dodaj(znak) {
    let ekran = document.getElementById("ekran");
    if (ekran.value === "Błąd") {
        ekran.value = "";
    }
    ekran.value += znak;
}

function wyczysc() {
    document.getElementById("ekran").value = "";
}

function oblicz() {
    let ekran = document.getElementById("ekran");
    try {
        let wynik = eval(ekran.value);
        if (wynik === undefined || !isFinite(wynik)) {
            ekran.value = "Błąd";
        } else {
            ekran.value = wynik;
        }
    } catch (e) {
        ekran.value = "Błąd";
    }
}
