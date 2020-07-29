jQuery('document').ready(function () {
    // run code here

    // const p = document.querySelector('p');

    // p.style.display = 'none';

    // const paras = document.querySelectorAll('p');

    // paras.forEach(para => {
    //     para.style.display = 'none';
    // });

    // $('p').hide();

    // // id
    // $('#para1').hide();

    // // class
    // $('.para').hide();

    // // multiple elements
    // $('ul,header,main,.box,#list').hide();

    // css3
    // $('#list li:last-child').hide();

    // method - hide(), show(), toggle(), fadeIn(), fadeOut(), fadeToggle(), slideUp(), slideDown(), slideToggle(), stop(), animate()

    // events - click, doubleclick,

    $('.btn1').click(() => {
        $('ul').show(2000);
    });

    $('.btn2').click(() => {
        $('ul').hide(1000);
    })

    $('.btn3').click(() => {
        $('ul').toggle('slow');
    })

    $('.btn4').click(() => {
        // $('li').append('<h3>New Append</h3>');

        // $('li').prepend('<h3>New Append</h3>');

        // css
        // $('.para2').addClass('add');

        // css style
        // $('.para2').css('color', 'blue');
    });

    // animations
    // $('.box1').animate({ 'top': '300px'});
    // $('.box1').animate({ 'top': '0px'});

    $('.box1').hover(function () {
        // $('.box1').animate({ 'top': '300px' }, 1000);
        // $('.box1').animate({ 'top': '0px' }, 1000);

        // this keyword
        $(this).animate({ 'top': '300px' }, 1000);
        $(this).animate({ 'top': '0px' }, 1000);
    });

    // other methods - setInterval, clearInterval, setTimeout, clearTimeout, scrollTo, scrollTop, scrollX, scrollY

    // setTimeout(function() {
    //     alert('Hello');
    // }, 4000);

    // setInterval(() => {
    //     console.log('You won!!!!!!');
    // }, 3000);
});