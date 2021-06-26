// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase button')


// Moving Animation Event
container.addEventListener('mousemove', e => {
    // rotateY is based on the xAxis
    // rotateX is based on the yAxis
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

// Animate when mouse enters container
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    // Popout effect
    title.style.transform = 'translateZ(75px)'
    sneaker.style.transform = 'translateZ(130px) rotateZ(-40deg)';
    purchase.style.transform = 'translateZ(30px)';
    description.style.transform = 'translateZ(30px)';
    sizes.style.transform = 'translateZ(30px)'
})


// Animating when mouse leaves container (Resetting transform back to 0). 
container.addEventListener('mouseleave', e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    card.style.transition = "all 0.5s ease";
    // Popback
    title.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0) rotateZ(0)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)'
    
    
})