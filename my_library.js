$(document).ready(function() {
    
var visited = Cookies.get('sugar')
    if (!visited){
        Cookies.set('sugar', 0)    
        Cookies.set('chocolate', 0)
        Cookies.set('lemon', 0)   
    }

    $('#sugar').click(function(){
        var sugarCookieCount = Cookies.get('sugar')
        sugarCookieCount++;
        Cookies.set('sugar', sugarCookieCount);
        $('#sugarHead').html(Cookies.get('sugar'));
    })

    $('#chocolate').click(function(){
        var chocCookieCount = Cookies.get('chocolate')
        chocCookieCount++;
        Cookies.set('chocolate', chocCookieCount);
        $('#chocHead').html(Cookies.get('chocolate'));
    })

    $('#lemon').click(function(){
        var lemonCookieCount = Cookies.get('lemon')
        lemonCookieCount++;
        Cookies.set('lemon', lemonCookieCount);
        $('#lemonHead').html(Cookies.get('lemon'));
    })


    $('#count').click(function(){
        alert('You have: ' + Cookies.get('sugar') + ' sugar cookies, ' + Cookies.get('chocolate') + ' chocolate chip cookies, and ' + Cookies.get('lemon') + ' lemon cookies!')     
    })

    $('#remove').click(function(){
        Cookies.set('sugar', 0);
        Cookies.set('chocolate', 0);
        Cookies.set('lemon', 0);
        $('#sugarHead').html(Cookies.get('sugar'));
        $('#chocHead').html(Cookies.get('chocolate'));
        $('#lemonHead').html(Cookies.get('lemon'));

        var monster = new Audio('nomnom.mp3');
        var screams = new Audio('screaming.mp3');
        monster.play();
        screams.play();

        $('#monster').css('visibility', 'visible');

        setTimeout(function(){
            $('#monster').css('visibility', 'hidden')
        }, 7000);
        setTimeout();
        
    })

})