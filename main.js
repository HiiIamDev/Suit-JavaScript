function func() {
    let user = prompt("Masukan salah satu gunting, kertas atau batu : ");

    let AI = Math.random();

    if ( AI < 0.34 ) {
        AI = "gunting";
    } else if ( AI >= 0.34 && AI < 0.67 ) {
        AI = "kertas";
    } else {
        AI = "batu";
    }

    var hasil;

    if ( user == AI ) {
        hasil = 'Seri';
    } else if ( user == "gunting" ) {
        if ( AI == "kertas" ) {
            hasil = 'Menang';
        } else {
            hasil = 'Kalah';
        }
    } else if ( user == "kertas" ) {
        if ( AI == "gunting" ) {
            hasil = 'Kalah';
        } else {
            hasil = 'Menang';
        }
    } else if ( user == "batu" ) {
        if ( AI == "gunting" ) {
            hasil = 'Menang';
        } else {
            hasil = 'Kalah';
        }
    } else {
        alert("Masukin gunting, kertas atau batu masukan dengan benar");
    }

    document.getElementById("demo").innerHTML = `${user} Lawan ${AI}, Kamu ${hasil}`;
}