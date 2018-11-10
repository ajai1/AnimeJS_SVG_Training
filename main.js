

var btn1 = document.getElementById('cta');
var btn2 = document.getElementById('cta2');

btn1.onclick = function(){
    var morphing = anime({
        targets: '.polymorph',
        points: [
        { value: '1279,681 -1,681 -1,-3 269,-3 412,438'},
        { value: '1279,681 -1,681 -1,-3 -1,-3 320,519'}
        ],
        easing: 'easeOutQuad',
        duration: 1000,
    });

    anime({
        targets: '#backText',
        opacity: 1,
        duration: 1000,
        translateY: 150
    });
}

btn2.onclick = function(){
    var morphing = anime({
        targets: '.polymorph',
        points: [
        { value: '1279,681 -1,681 -1,-3 -1,-3 320,519'},
        { value: '1279,681 -1,681 -1,-3 269,-3 412,438'},
        { value: '1279,681 -1,681 -1,-3 414,-3 1279,-3'}
        ],
        easing: 'easeOutQuad',
        duration: 1000,
    });

    anime({
        targets: '#backText',
        opacity: 0,
        duration: 1000,
        translateY: -150
    });
}