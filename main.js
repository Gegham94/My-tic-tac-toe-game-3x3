var arrID = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var startCount = false;
function userFu() {
    startCount = true;
    $('h3,.user,.pc').hide();
    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը</h3>');
}
function pcFu() {
    $('h3,.user,.pc').hide();
    $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3>');
    setTimeout(addRandomIcon, 1000);
}
function fu(getID) {
    if (startCount == true) {
        $('#' + getID).addClass('addKrestik');
        arrID.splice(arrID.indexOf(getID * 1), 1);
        $('h3').hide();
        $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3>');
        startCount = false;
        if($('#0').hasClass('addKrestik') && $('#1').hasClass('addKrestik') && $('#2').hasClass('addKrestik')) {
            $('#0').addClass("winner"), $('#1').addClass("winner"), $('#2').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#3').hasClass('addKrestik') && $('#4').hasClass('addKrestik') && $('#5').hasClass('addKrestik')) {
            $('#3').addClass("winner"), $('#4').addClass("winner"), $('#5').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#6').hasClass('addKrestik') && $('#7').hasClass('addKrestik') && $('#8').hasClass('addKrestik')) {
            $('#6').addClass("winner"), $('#7').addClass("winner"), $('#8').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#0').hasClass('addKrestik') && $('#3').hasClass('addKrestik') && $('#6').hasClass('addKrestik')) {
            $('#0').addClass("winner"), $('#3').addClass("winner"), $('#6').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#1').hasClass('addKrestik') && $('#4').hasClass('addKrestik') && $('#7').hasClass('addKrestik')) {
            $('#1').addClass("winner"), $('#4').addClass("winner"), $('#7').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#2').hasClass('addKrestik') && $('#5').hasClass('addKrestik') && $('#8').hasClass('addKrestik')) {
            $('#2').addClass("winner"), $('#5').addClass("winner"), $('#8').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#0').hasClass('addKrestik') && $('#4').hasClass('addKrestik') && $('#8').hasClass('addKrestik')) {
            $('#0').addClass("winner"), $('#4').addClass("winner"), $('#8').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if($('#2').hasClass('addKrestik') && $('#4').hasClass('addKrestik') && $('#6').hasClass('addKrestik')) {
            $('#2').addClass("winner"), $('#4').addClass("winner"), $('#6').addClass("winner");
            $('h3').hide();
            $('.buttons').html('<h2 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h2>');
        }else if(arrID.length==0){
            $('h3').hide();
            $('.buttons').html('<h1>ՈՉ ՈՔԻ...</h1>');
        }else{
            setTimeout(addRandomIcon, 1000);
        }
    }
};
function addRandomIcon() {
    var randID = Math.floor(Math.random() * arrID.length);
    $('#' + (arrID[randID])).addClass('addNolik');
    arrID.splice(randID, 1);
    $('h3').hide();
    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը</h3>');
    startCount = true;
    if($('#0').hasClass('addNolik') && $('#1').hasClass('addNolik') && $('#2').hasClass('addNolik')) {
        $('#0').addClass("louser"), $('#1').addClass("louser"), $('#2').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#3').hasClass('addNolik') && $('#4').hasClass('addNolik') && $('#5').hasClass('addNolik')) {
        $('#3').addClass("louser"), $('#4').addClass("louser"), $('#5').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#6').hasClass('addNolik') && $('#7').hasClass('addNolik') && $('#8').hasClass('addNolik')) {
        $('#6').addClass("louser"), $('#7').addClass("louser"), $('#8').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#0').hasClass('addNolik') && $('#3').hasClass('addNolik') && $('#6').hasClass('addNolik')) {
        $('#0').addClass("louser"), $('#3').addClass("louser"), $('#6').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#1').hasClass('addNolik') && $('#4').hasClass('addNolik') && $('#7').hasClass('addNolik')) {
        $('#1').addClass("louser"), $('#4').addClass("louser"), $('#7').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#2').hasClass('addNolik') && $('#5').hasClass('addNolik') && $('#8').hasClass('addNolik')) {
        $('#2').addClass("louser"), $('#5').addClass("louser"), $('#8').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#0').hasClass('addNolik') && $('#4').hasClass('addNolik') && $('#8').hasClass('addNolik')) {
        $('#0').addClass("louser"), $('#4').addClass("louser"), $('#8').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if($('#2').hasClass('addNolik') && $('#4').hasClass('addNolik') && $('#6').hasClass('addNolik')) {
        $('#2').addClass("louser"), $('#4').addClass("louser"), $('#6').addClass("louser");
        $('h3').hide();
        $('.buttons').html('<h2 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h2>');
    }else if(arrID.length==0){
        $('h3').hide();
        $('.buttons').html('<h1>ՈՉ ՈՔԻ...</h1>');
    }
};
