let [img1, img2, img3] = [document.querySelector('#img1'), document.querySelector('#img2'), document.querySelector('#img3')];
let [text1, text2, text3] = [document.querySelector('.text1'), document.querySelector('.text2'), document.querySelector('.text3')];

img1.addEventListener('click', text1Act);

img2.addEventListener('click', text2Act);

img3.addEventListener('click', text3Act);


function text1Act() {
    text1.hidden = false;
    text2.hidden = true;
    text3.hidden = true;
    img1.src = "img/Ellipse7.png";
    img2.src = "img/Ellipse8.png";
    img3.src = "img/Ellipse8.png";
}

function text2Act() {
    text1.hidden = true;
    text2.hidden = false;
    text3.hidden = true;
    img1.src = "img/Ellipse8.png";
    img2.src = "img/Ellipse7.png";
    img3.src = "img/Ellipse8.png";
}

function text3Act() {
    text1.hidden = true;
    text2.hidden = true;
    text3.hidden = false;
    img1.src = "img/Ellipse8.png";
    img2.src = "img/Ellipse8.png";
    img3.src = "img/Ellipse7.png";
}

document.querySelector('.menu-button').addEventListener('click', function() {
    menu.hidden = false;
})
toClose.addEventListener('click', function() {
    menu.hidden = true;
})