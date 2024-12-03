
// READ MORE READ LESS

function myFunction(dotsID, moreID, myBtnID) {
    var dots = document.getElementById(dotsID);
    var moreText = document.getElementById(moreID);
    var btnText = document.getElementById(myBtnID);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Részletek";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Vissza";
      moreText.style.display = "inline";
    }
  }

// QUIZ

document.getElementById('mybutton').onclick = function () {
    let pontok = 0;

    //az összes rádiógomb, ami be lett jelölve
    const valaszok = document.querySelectorAll('input[type="radio"]:checked');

    //minden kérdés meg lett válaszolva??
    if (valaszok.length < 6) {
        alert('Kérlek válaszolj minden kérdésre!');
        return;
    }

    // Összegyűjtjük a pontokat
    valaszok.forEach(function (valasz) {
        pontok += parseInt(valasz.value); // A rádiógomb értéke lesz a pont
        //legyenek színesek
        valasz.parentElement.style.color = '#34c339'; 
    });

    // Film kiválasztása
    let filmRecommendation = '';
    if (pontok >= 1 && pontok <= 8) {
        filmRecommendation = 'Chungking Express';
    } else if (pontok >= 9 && pontok <= 14) {
        filmRecommendation = 'In the Mood for Love';
    } else if (pontok >= 15 && pontok <= 20) {
        filmRecommendation = 'Fallen Angels';
    } else if (pontok >= 21 && pontok <= 24) {
        filmRecommendation = 'Happy Together';
    }

    // Az eredmény megjelenítése
        custom_alert('A film, amit ajánlok neked: <br>' + filmRecommendation +'<br> De tudok egy jobbat! <br>Meg akarod ismerni a film világát?');
}

// ALERT

 function custom_alert(msg) {
    const alertBox = document.getElementById('alert_box');
    const messageElement = alertBox.querySelector('.message');
    const okButton = alertBox.querySelector('.ok');
    const nemButton = alertBox.querySelector('.nem');

    messageElement.innerHTML = msg;

    alertBox.style.display = 'flex';


    //ha igen, lemegy a formhoz
    okButton.onclick = function () {
        alertBox.style.display = 'none';
        const formSection = document.querySelector('.qform');
        formSection.scrollIntoView({ behavior: 'smooth' });
    };

    //ha nem, eltűnik
    nemButton.onclick = function () {
        alertBox.style.display = 'none';
    };
        
    };

