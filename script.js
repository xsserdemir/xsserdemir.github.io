function changeColor() {
    var demoElement = document.getElementById("demo");
    var currentColor = demoElement.style.color;

    // Rastgele renk oluştur
    var randomColor = getRandomColor();

    // Mevcut renkle aynı olmamaya dikkat edin
    while (randomColor === currentColor) {
        randomColor = getRandomColor();
    }

    // Metin rengini değiştir
    demoElement.style.color = randomColor;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
