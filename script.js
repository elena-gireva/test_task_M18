const btnPlay = document.querySelector('#btnPlay');
const btnarrows = document.querySelector('.arrows');
const arrows_comlect = document.querySelector('.arrows-complect');
const subscribe = document.querySelector('#subscribe');
const shipped = document.querySelector('.shipped');
const form_registarion = document.querySelector('.form_registarion');
const action = document.querySelector('.action');

const next = document.querySelector('#next');
const back = document.querySelector('#back');
const photos = ["images/1.png","images/2.png","images/3.png"];

btnPlay.addEventListener("click", function() {
    if (player.paused && myVideo.paused ){
        player.play();
    }
    else {
        player.pause();
    }
})

btnPlay.addEventListener("mouseover", () => {
    document.querySelector("#image-play").src = "images/playhover.svg";
})

btnPlay.addEventListener("mouseout", () => {
    document.querySelector("#image-play").src = "images/play.svg";
})

arrows_comlect.addEventListener("mouseover", () => {
    btnarrows.style.backgroundImage = "url('images/arrowshover.svg')";
})

arrows_comlect.addEventListener("mouseout", () => {
    btnarrows.style.backgroundImage = "url('images/arrows.svg')";
})

arrows_comlect.addEventListener("click", () => {
    const height = window.innerHeight;
    window.scrollTo({
        top: 4300,
        behavior: "smooth",
    })
})

subscribe.addEventListener("click", () => {
    shipped.style.visibility = "visible";
    form_registarion.style.visibility = "hidden";
    action.style.visibility = "hidden";
})

let i = 0;

next.addEventListener("click", () => {
    i++;
    
    if (i > photos.length-1) {
        i = 0;
        document.querySelector("#image-slider1").src = photos[0];
        document.querySelector("#image-slider2").src = photos[1];
        document.querySelector("#image-slider3").src = photos[2];
        document.querySelector("#caption").textContent = "Кафельная плитка в ванной комнате в скандинавском стиле"
    }

    else if ( i === 1) {
        document.querySelector("#image-slider1").src = photos[1];
        document.querySelector("#image-slider2").src = photos[2];
        document.querySelector("#image-slider3").src = photos[0];
        document.querySelector("#caption").textContent = "Гостинная в классическом стиле"
    }

    else if ( i === 2) {
        document.querySelector("#image-slider1").src = photos[2];
        document.querySelector("#image-slider2").src = photos[0];
        document.querySelector("#image-slider3").src = photos[1];
        document.querySelector("#caption").textContent = "Кухня в эко-стиле"
    }

});

back.addEventListener("click", () => {
    i--;
    
    if (i < 0) {
        i = photos.length-1;
        document.querySelector("#image-slider1").src = photos[2]
        document.querySelector("#image-slider2").src = photos[0]
        document.querySelector("#image-slider3").src = photos[1]
        

    }

    else if ( i === 0) {
        document.querySelector("#image-slider1").src = photos[0]
        document.querySelector("#image-slider2").src = photos[1]
        document.querySelector("#image-slider3").src = photos[2]
    }

    else if ( i === 1) {
        document.querySelector("#image-slider1").src = photos[1]
        document.querySelector("#image-slider2").src = photos[2]
        document.querySelector("#image-slider3").src = photos[0]
    }

});