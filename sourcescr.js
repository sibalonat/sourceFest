function makeMarquee() {

    const title = 'FIFTY Music Festival — November 10–12, Desert Valley';

    // const marqueeText = ['lawrence', 'rik', 'milan', 'ryan', 'adam', 'krista', 1, false, true, {name: 'lawrence', location: 'melbourne'}];
    const marqueeText = new Array(50).fill(title).join('-');

    const marquee = document.querySelector('.marquee span');

    marquee.innerHTML = marqueeText;

    // console.log('everythin');
}

makeMarquee();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
    circle.animate([{
            transform: 'scale(1)'
        },
        {
            transform: 'scale(1.2)'
        },
        {
            transform: 'scale(1)'
        },
    ], {
        delay: 300 * index,
        duration: 3000,
        iterations: Infinity
    })
});

const squiggles = document.querySelectorAll('.squiggle');

squiggles.forEach((squiggle, index) => {
    // random(min, max)

    const randomNumber = random(0, 45);


    squiggle.animate([{
            transform: 'rotate(0deg)'
        },
        {
            transform: `rotate(${randomNumber}deg)`
        },
        {
            transform: 'rotate(0deg)'
        },
    ], {
        delay: 300 * index,
        duration: 5000,
        iterations: Infinity
    })
});

inView('.section')
.on('enter', section => {
    section.classList.add('in-viewport');
})
.on('exit', section => {
    section.classList.remove('in-viewport');
});

inView.threshold(0.2);


const sections = document.querySelectorAll('.section');
console.log(sections);

sections.forEach((section, index) => {
    const artists = section.querySelectorAll('.lineup li');
    const shapes = section.querySelectorAll('.shape');

    artists.forEach((artist, index) => {
        console.log(artist);
        const delay = index * 100;
        artist.style.transitionDelay = delay + 'ms'; 
    });
    
    shapes.forEach((shape, index) => {
        console.log(shape);
        const delay = (artists.length + index) * 100;
        shape.style.transitionDelay = delay + 'ms'; 
    })
});


const scrollLinks = document.querySelectorAll('.js-scroll');

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        document.querySelector('href').scrollIntoView({
            behavior: 'smooth'
        });

    })
});

