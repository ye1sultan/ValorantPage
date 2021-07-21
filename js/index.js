(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let typeWriter = document.querySelector('.typing');

        let str = 'Welcome to <span class="valorant">valorant</span> <span class="last-word">data</span> ',
            i = 0,
            isTag,
            text;

        str += " ";

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

            if (i === str.length - 2) {
                setTimeout(() => {
                    document.querySelector('.title').style.animation = 'blink 1s step-end infinite';
                }, 500);
                return;
            }

            setTimeout(type, 75);
        }

        function setSlider() {
            const sliderProps = {
                type: 'loop',
                autoplay: true,
                direction: 'ttb',
                height: '500px',
                perPage: 3,
                perMove: 1,
                speed: 1000,
                interval: 2500,
                updateOnMove: true,
                focus: 'center',
                arrows: false,
                pagination: false
            }

            new Splide('.agent-slider', sliderProps).mount();
            new Splide('.map-slider', sliderProps).mount();
            new Splide('.weapon-slider', sliderProps).mount();
        }

        type();
        setSlider();
    })
}());