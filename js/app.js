let slideContent = document.querySelector('.capture');
let slideTitle = document.querySelector('.title h1');
let slideText = document.querySelector('.title p');
let next = document.querySelector('.btn1');
let prev = document.querySelector('.btn2');
let deviseWidth = window.innerHeight;
let desktop = true;

let img1 = desktop ? "./images/desktop-image-hero-1.jpg" : "./images/mobile-image-hero-1.jpg";
let img2 = desktop ? "./images/desktop-image-hero-2.jpg" : "./images/mobile-image-hero-2.jpg";
let img3 = desktop ? "./images/desktop-image-hero-3.jpg" : "./images/mobile-image-hero-3.jpg";

let slideArr = [
    {
        img: img1,
        title: "Discover innovation ways to decorate",
        text: "We provide unmatched quality comfort and style for property awners across the country. Our experts combine form and function in bruging you v    ision to life. Create a room in your own style with our collection and make your propety a reflection of you and what you love"
    },
    {
        img: img2,
        title: "We are available all across the globle",
        text: "With stores all over the world.It's easy for you to find furniture for your home or place of busines. Locally we're in most major cities throughout the contry. Find the brack neach nearest you using our store locator.Any questions? Don't hesitate to contact us today. "
    },
    {
        img: img3,
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a hidh level of quality.Our company has invested in advanced technology to ansure that every product is made as pefect and as consistent as possible Whith three decades of experience in this industry we understand what cursomers want frotheir home and office"
    },
];


let count = 0;

window.onload = () => {
    slideContent.style.backgroundImage = `url(${slideArr[0].img})`;
    slideTitle.innerHTML = slideArr[0].title;
};



function slideNext() {
    if (count < slideArr.length - 1) {
        count++;
    } else {
        count = 0;
    }
    slideContent.style.backgroundImage = `url(${slideArr[count].img})`;
    slideTitle.innerHTML = slideArr[count].title;
    slideText.innerHTML = slideArr[count].text;
    console.log('asdasdasdasd')
}

function slidePrev() {
    if (count > 0) {
        count--;
    } else {
        count = slideArr.length - 1;
    }
    slideContent.style.backgroundImage = `url(${slideArr[count].img})`;
    slideTitle.innerHTML = slideArr[count].title;
    slideText.innerHTML = slideArr[count].text
}

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") {
        slideNext()
    } else if (e.code === "ArrowLeft") {
        slidePrev()
    }
});



next.addEventListener('click', slideNext);

prev.addEventListener('click', slidePrev);

