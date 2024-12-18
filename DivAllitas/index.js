
let alapDiv = document.getElementById('alapDiv');
let szelesseg = document.getElementById('szelesseg');
let heightSlider = document.getElementById('magassag');
let szinValaszto = document.getElementById('szinValaszto');
let kerekito = document.getElementById('kerekito');
let keretSzin = document.getElementById('keretSzin');
let keretVastagsag = document.getElementById('keretVastagsag');


szelesseg.addEventListener('input', function() {
    alapDiv.style.width = szelesseg.value + 'px';
});

magassag.addEventListener('input', function() {
    alapDiv.style.height = magassag.value + 'px';
});

keretVastagsag.addEventListener('input', function() {
    alapDiv.style.borderWidth = keretVastagsag.value + 'px';
});


szinValaszto.addEventListener('input', function() {
    alapDiv.style.backgroundColor = szinValaszto.value;
});

keretSzin.addEventListener('input', function() {
    alapDiv.style.borderColor = keretSzin.value;
});

kerekito.addEventListener('input', function() {
    alapDiv.style.borderRadius = kerekito.value + '%';
});

