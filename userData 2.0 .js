// UserData 2.0 better version >:D
// 06.11.2023
// pooleli jäänud

// arrayd
let userData = [];
let fakeData = ['Kalle', 'Tõnu', 'FakeUser']; // hiljem teen siit edasi
let secretCoins = [];

// variables
let coin1 = 1;
let coin2 = 1;

// for loop
for (let i = 0; i < 3; i++) {
    sisend = prompt('Kirjuta siia 1 kord oma nimi, vanus, pikkus');
    userData.push(sisend);
}

// prompt küsimus
küsimus = prompt('Kirjuta (kõik), kui soovida kõike välja sisestada, (nimi), et nimi, (vanus), (pikkus)');

// pointless funktsiooni, mis teeb ilusioni, et on palju koodi
function userDataFunction() {
    if(küsimus === 'kõik') {
        return 'a';
    }
    else if (küsimus === 'nimi') {
        return 'b';
    }
    else if (küsimus === 'vanus') {
        return 'c';
    }
    else if (küsimus === 'pikkus') {
        return 'd';
    }
    else if (küsimus === 'secret') {
        return 'e';
    }
}

// funktsiooni caller
var tulemus = userDataFunction()


// if statementid
if (tulemus === 'a') {
    console.log('Kõik sinu info:', 'Nimi:' + userData[0], 'Vanus:' + userData[1], 'Pikkus:' + userData[2]);
}
else if (tulemus === 'b') {
    console.log('Sinu vanus:' + userData[0]);
}
else if (küsimus === 'c') {
    console.log('Pikkus:' + userData[1]);
}
else if (tulemus === 'd') {
    console.log('Pikkus:' + userData[2])
}


// CoinMaster script
else if (tulemus === 'e') {

    prompt('CoinMaster ma näen...');

    mistery1 = prompt('Kui palju on 1000 + 232323?');

    if (mistery1 !== '233323') {
        for (let i = 0; i < 3; i++) {
            mistery1 = prompt('Vale, proovi uuesti: Kui palju on 1000 + 232323?');
        }   
    }

    if (mistery1 == '233323') {
        secretCoins.push(coin1)
        console.log('Said enda esimese coini, coin1')
    }
}


