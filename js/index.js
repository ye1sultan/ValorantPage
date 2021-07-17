let typeWriter = document.querySelector('.typing');
let str = 'Welcome to <span class="valorant">valorant</span> data ',
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    typeWriter.innerHTML = text;

    var char = text.slice(-1);

    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 75);
}());








