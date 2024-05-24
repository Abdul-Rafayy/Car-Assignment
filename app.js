var count = 0;
var ref;
var car = document.getElementById("car");

function moveCar() {
    count += 5;
    car.style.left = count + "px";

    var carWidth = car.offsetWidth;
    var screenWidth = window.innerWidth;

    if (count > screenWidth) {
        count = -carWidth;
        car.style.left = count + "px";
    }
}

document.getElementById("redBtn").addEventListener("click", function() {
    clearInterval(ref);
    updateTrafficLight("red");
});

document.getElementById("yellowBtn").addEventListener("click", function() {
    clearInterval(ref);
    ref = null;
    updateTrafficLight("yellow");
});

document.getElementById("greenBtn").addEventListener("click", function() {
    if (!ref) {
        ref = setInterval(moveCar, 100);
    }
    updateTrafficLight("green");
});

function updateTrafficLight(color) {
    document.getElementById("redLight").classList.remove("active");
    document.getElementById("yellowLight").classList.remove("active");
    document.getElementById("greenLight").classList.remove("active");

    if (color === "red") {
        document.getElementById("redLight").classList.add("active");
    } else if (color === "yellow") {
        document.getElementById("yellowLight").classList.add("active");
    } else if (color === "green") {
        document.getElementById("greenLight").classList.add("active");
    }
}
