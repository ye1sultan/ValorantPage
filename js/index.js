(function() {
    document.addEventListener('DOMContentLoaded', () => {
        let typeWriter = document.querySelector('.typing');

        let str = 'Welcome to <span class="valorant">valorant</span> data ',
            i = 0,
            isTag,
            text;

        function type() {
            text = str.slice(0, ++i);

            if (text === str) {
                return;
            }

            typeWriter.innerHTML = text;

            let char = text.slice(-1);

            if (char === '<') {
                isTag = true;
            }

            if (char === '>') {
                isTag = false;
            }

            if (isTag) {
                return type();
            }

            if(i === 54) {
                setTimeout(() => {
                    document.querySelector('.title').style.animation = 'blink 1s step-end infinite';
                }, 500);
            }

            setTimeout(type, 75);
        }

        type();

        // Slider
        new Splide( '.agent-slider', {
            autoplay: true,
            type: 'loop',
            perPage: 3,
            perMove: 1,
            direction: 'ttb',
            height: '500px',
            arrows: false,
            pagination: false,
            speed: 1000,
            interval: 2500,
            updateOnMove: true,
            focus: 'center'
        }).mount();

        new Splide( '.map-slider', {
            autoplay: true,
            type: 'loop',
            perPage: 3,
            perMove: 1,
            direction: 'ttb',
            height: '500px',
            arrows: false,
            pagination: false,
            speed: 1000,
            interval: 2500,
            updateOnMove: true,
            focus: 'center'
        }).mount();

        new Splide( '.weapon-slider', {
            autoplay: true,
            type: 'loop',
            perPage: 3,
            perMove: 1,
            direction: 'ttb',
            height: '500px',
            arrows: false,
            pagination: false,
            speed: 1000,
            interval: 2500,
            updateOnMove: true,
            focus: 'center'
        }).mount();
        // Slider
    })
}());