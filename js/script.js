/**
 * Created by Viktoryia Tsekhanovich on 09.01.2017.
 */
// Переключение экранов
function runEffect(hideScreen, showScreen) {
    // get effect type from
    // var selectedEffect = "slide";
    // Most effect types need no options passed by default
    // var options = {};
    // some effects have required parameters
    // if ( selectedEffect === "scale" ) {
    //     options = { percent: 50 };
    // } else if ( selectedEffect === "transfer" ) {
    //     options = { to: "#button", className: "ui-effects-transfer" };
    // } else if ( selectedEffect === "size" ) {
    //     options = { to: { width: 200, height: 60 } };
    // }
    // Run the effect
    // hideScreen.hide( selectedEffect, options, 500, callback(hideScreen, showScreen) );
    showScreen.show();
    $('html,body').animate({
        scrollTop: $(showScreen).offset().top}, 1000);
    return false;
}
// function callback(hideScreen, showScreen) {
//     setTimeout(function() {
//         // $( ".screen" ).removeAttr( "style" ).hide().fadeIn();
//         showScreen.show();
//         $('html, body').scrollTop(0);
//     }, 0 );
// }

// Маска для номера телефона
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
jQuery(function ($) {
    $('input[name=phone]').focus(function () {
        $(this).val('+380(');
        $(this).mask("+38(999)999-99-99");
    });
    $(document).ready(function () {
        $('input[name=phone]').keypress(function (e) {
            if (!(e.which == 8 || e.which == 44 || e.which == 45 || e.which == 46 || (e.which > 47 && e.which < 58))) return false;
        });
    });
});

//Экран 9 собирает все поля
function completeFields() {
    //Куда?
    var kuda = $('#screen3 input[type="radio"]:checked').val();
    $('#screen9 .otvetKuda').html(kuda);

    //Тип
    var tip = $('#screen4 input[type="radio"]:checked').val();
    $('#screen9 .otvetTip').html(tip);

    //Размеры
    var w = parseInt($('#screen5 #width').val().replace(/\D+/g,""));
    var h = parseInt($('#screen5 #height').val().replace(/\D+/g,""));
    var b = parseInt($('#screen5 #deep').val().replace(/\D+/g,""));
    $('#screen9 .otvetRazmer .w').html(w);
    $('#screen9 .otvetRazmer .h').html(h);
    $('#screen9 .otvetRazmer .b').html(b);

    //Для хранения
    $('#screen6 input[type="checkbox"]:checked').each(function () {
        $(".otvetContain").append($(this).val() + ", ");
    });
    if($(".otvetContain").text().length == 0){
        $(".otvetContain").text('Неизвестно');
    } else{
        var zap  = $(".otvetContain").text().slice(0,-2);
        $(".otvetContain").text(zap);
    }

    //Внешняя отделка
    $(".otvetOtdelka").text("");
    $('#screen7 input[type="checkbox"]:checked').each(function () {
        $(".otvetOtdelka").append($(this).val() + ", ");
    });
    if($(".otvetOtdelka").text().length == 0){
        $(".otvetOtdelka").text('Неизвестно');
    } else{
        var zap  = $(".otvetOtdelka").text().slice(0,-2);
        $(".otvetOtdelka").text(zap);
    }


    //Дополнительные условия
    $('#screen8 input[type="checkbox"]:checked').each(function () {
        $(".otvetDopolnitelno").append($(this).val() + ", ");
    });
    var zap  = $(".otvetDopolnitelno").text().slice(0,-2);
    $(".otvetDopolnitelno").text(zap);
}

//Рандомайзер
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//owl carousel
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
});

//tooltip
$(document).ready(function () {
   $('.toolTip').tooltip({
   });
});

//slider
$(document).ready(function () {
   $('#sliderH').slider({
       range: "min",
       min: 120,
       max: 400,
       value: 270,
       slide: function( event, ui ) {
           $('#screen5 #height').val( ui.value );
       }
   });
    $('#sliderW').slider({
        range: "min",
        min: 60,
        max: 1000,
        value: 250,
        slide: function( event, ui ) {
            $('#screen5 #width').val( ui.value );
        }
    });
    $('#sliderD').slider({
        range: "min",
        min: 20,
        max: 100,
        value: 60,
        slide: function( event, ui ) {
            $('#screen5 #deep').val( ui.value );
        }
    });
   $('#screen5 #height').val( $("#sliderH").slider("value"));
   $('#screen5 #width').val( $("#sliderW").slider( "value" ));
   $('#screen5 #deep').val( $("#sliderD").slider( "value" ));

    $( "#screen5 #height" ).on( "change", function() {
        $("#sliderH").slider( "value", $(this).val() );
    });
    $( "#screen5 #width" ).on( "change", function() {
        $("#sliderW").slider( "value", $(this).val() );
    });
    $( "#screen5 #deep" ).on( "change", function() {
        $("#sliderD").slider( "value", $(this).val() );
    });

});

//ShkafParam Light
$(document).ready(function () {
    var shkafParamBlock = $('#screen5 .quest');
    $('#screen5 .quest >div').mouseenter(function () {
        if($(this).hasClass('deep')){
            shkafParamBlock.css('background-image', 'url(img/shkafRazmerDeep.png)');
        } else if($(this).hasClass('height')){
            shkafParamBlock.css('background-image', 'url(img/shkafRazmerHeight.png)');
        }  else if($(this).hasClass('width')){
            shkafParamBlock.css('background-image', 'url(img/shkafRazmerWidth.png)');
        }
    });
    $('#screen5 .quest >div').mouseleave(function () {
        shkafParamBlock.css('background-image', 'url(img/shkafRazmer.png)');
    });
});

//Куда поставить шкаф - активированный пункт
$(document).ready(function () {
    function checkPlace () {
        var elMass = $('#screen3 input[name="shkafPlace"]');
        $.each(elMass, function (i, val) {
            $(val).parent().parent().find('.imgBlock').removeClass("selected");
            $(val).parent().removeClass("selected");
            if($(val).prop("checked")){
                $(val).parent().parent().find('.imgBlock').addClass("selected");
                $(val).parent().addClass("selected");
            }
        });
    }
    checkPlace();
    $('#screen3 label').click(function (e) {
        e.preventDefault();
        $(this).find('input[name="shkafPlace"]').prop("checked", true);
        checkPlace();
    });
});

//Тип шкафа - активированный пункт
$(document).ready(function () {
    function checkType () {
        var elMass = $('#screen4 input[name="shkafType"]');
        $.each(elMass, function (i, val) {
            $(val).parent().parent().find('.imgBlock').removeClass("selected");
            $(val).parent().removeClass("selected");
            if($(val).prop("checked")){
                $(val).parent().parent().find('.imgBlock').addClass("selected");
                $(val).parent().addClass("selected");
            }
        });
    }
    checkType();
    $('#screen4 label').click(function (e) {
        e.preventDefault();
        $(this).find('input[name="shkafType"]').prop("checked", true);
        if($(this).parent().hasClass('dontKnow')){
            $('#screen4 .pseudoBtn').addClass("selected");
            var hideScreen = $(this).closest('.screen');
            var showScreen = hideScreen.next();
            runEffect(hideScreen, showScreen);

        } else {
            $('#screen4 .pseudoBtn').removeClass("selected");
        }
        checkType();
    });
});

//shkaf complete
function addItems(inp) {
    var id = $(inp).attr("id");
    var elMass = $('.shkafInside .shkafInsideContain img');
    if($(inp).prop( "checked" )){
        $(inp).parent().addClass("selected").find('img').addClass("selected");
        $.each(elMass, function (i, val) {
            if($(val).hasClass(id)){
                $(val).show("scale", { percent: 50 }, 500);
            }
        });
    }
    else{
        $(inp).parent().removeClass("selected").find('img').removeClass("selected");
        $.each(elMass, function (i, val) {
            if($(val).hasClass(id)){
                $(val).hide("scale", { percent: 50 }, 500);
            }
        });
    }
}
$(document).ready(function () {
    $('#screen6 .quest input[type="checkbox"]').change(function () {
        addItems($(this));
        // var id = $(this).attr("id");
        // var elMass = $('.shkafInside .shkafInsideContain img');
        // if($(this).prop( "checked" )){
        //     $(this).parent().addClass("selected").find('img').addClass("selected");
        //     $.each(elMass, function (i, val) {
        //         if($(val).hasClass(id)){
        //             $(val).show("scale", { percent: 50 }, 500);
        //         }
        //     });
        // }
        // else{
        //     $(this).parent().removeClass("selected").find('img').removeClass("selected");
        //     $.each(elMass, function (i, val) {
        //         if($(val).hasClass(id)){
        //             $(val).hide("scale", { percent: 50 }, 500);
        //         }
        //     });
        // }
    });
});

//name
$(document).ready(function () {
   $('#screen2 .next').click(function (e) {
       var personName = $('input[name="name"]').val();
       if (personName.length == 0){
           $('.personName').html("Аноним");
       } else{
           $('.personName').html(personName);
       }

   });
});

//Форма
$(document).ready(function () {

    completeFields();

    //Экран 7 переключение checkbox
    $('#screen7 #dontKnowCover').click(function () {
        if($(this).prop( "checked" )){
            $(this).parent().parent().find(".pseudoBtn").addClass("selected");
            $('#dsp, #zerkala, #peskostrui, #fotopechat, #ekokozha, #lakobel').prop( "checked", false );
            $('.coverImg ').removeClass('selected');
            var hideScreen = $(this).closest('.screen');
            var showScreen = hideScreen.next();
            runEffect(hideScreen, showScreen);

        } else {
            $(this).parent().parent().find(".pseudoBtn").removeClass("selected");
            $('#dsp').prop( "checked", true );
        }
    });
    $('#dsp, #zerkala, #peskostrui, #fotopechat, #ekokozha, #lakobel').click(function () {
        $('#screen7 #dontKnowCover').prop( "checked", false );
        $('#screen7 #dontKnowCover').parent().parent().find(".pseudoBtn").removeClass("selected");
        if ($(this).prop("checked")){
            $(this).parent().parent().find('.coverImg ').addClass('selected');
        } else {
            $(this).parent().parent().find('.coverImg ').removeClass('selected');
        }
    });

    //Экран 8 активация кнопки
    $('#screen8 .pseudoBtn').click(function () {
        $('#doprassr, #doprasgarant, #dopbelsplzamer, #doppodlestnica, #dopskidka').prop( "checked", true );
        $('#screen8 .coverImg').addClass("selected");
    });
    $('#screen8 ul li label').click(function () {
        if ($(this).find('input[type="checkbox"]').prop("checked")){
            $(this).find('.coverImg').addClass("selected");
        } else {
            $(this).find('.coverImg').removeClass("selected");
        }
    });

    //Экран-агрегатор
    $('#screen8 .next, #screen8 .openNextStep, #screen8 .steps').click(function () {
        completeFields();
    });
});

//Количество конфигураций
$(document).ready(function () {
   var configKolvo =  Math.round(getRandomArbitrary(63, 400));
   $('#screen8 .next, #screen8 .openNextStep, #screen8 .steps').click(function () {
       $('#screen9 .resultCount span').animate({ num: configKolvo /* - начало */ }, {
           duration: 5000,
           step: function (num){
               this.innerHTML = (num).toFixed(0);
           },
           complete: function() {
               $(this).addClass("blink");
               $('#screen9 .next').addClass("selected");
           }
       });
       var $target = $('#screen9 .quest li');
       var hold = 800;

       $.each($target,function(i,t){
           var $this = $(t);
           setTimeout(function(){ $this.show('normal'); },i*hold);
       });
   })
});

//Шары
$(document).ready(function () {
   $('#screen9 .next').click(function () {
        $('#screen10 .mBaloon').animate({"top": "-773px"}, 40000);
   }); 
});

//navigation
$(document).ready(function () {
    $('.showNext, .startQuest, .owl-item, .rightSide, .inpNext, .openNextStep, .navigation .steps').click(function () {
        var hideScreen = $(this).closest('.screen');
        var showScreen = hideScreen.next();
        runEffect(hideScreen, showScreen);
        return false;
    });

    $('#screen9').on('click', $('.resultCount span'), function () {
        var hideScreen = $(this).closest('.screen');
        var showScreen = hideScreen.next();
        runEffect(hideScreen, showScreen);
        return false;
    });

    $('.navigation .container>p').click(function () {
        var hideScreen = $(this).closest('.screen');
        if ($(this).hasClass("prev")){
            var showScreen = hideScreen.prev();
            runEffect(hideScreen, showScreen);
        } else if ($(this).hasClass("next")){
            var showScreen = hideScreen.next();
            if($(hideScreen).attr('id')=='screen2'){
                function callback2(){
                    setTimeout(function() {runEffect(hideScreen, showScreen);showScreen.scrollTop(0);}, 1500 );
                }
                if($('#screen2 .ld').hasClass('moveDoor')){
                    runEffect(hideScreen, showScreen);
                } else {
                    $('#screen2 .ld, #screen2 .rd').addClass("moveDoor", 1000, callback2());
                }

            }
            else{
                runEffect(hideScreen, showScreen);
            }
        }

        return false;
    })
});

//1 scren show sticker
$(document).ready(function () {
    setTimeout(function () {
            $('.rightSide').animate(
                {left: 0},
                {duration: 5000, easing: "easeInOutBack"}
            )}
            , 3000
    );
});

//Отправка формы
$(document).ready(function () {
    $('#screen10 .itogBtn input[type="button"]').click(function () {
        if ($('#phone').val().replace(/\D+/g,"").length<10){
            $('#screen10 .phone .alert').show("slow").effect("shake", 500);
        }
        else{
            // $code = $('select[name="code"]').val();
            $phone = $('input[name="phone"]').val();
            $tel = $phone;
            $(this).prop( 'disabled', true ).val('Отправка...');
            $('#screen10 .phone .alert').hide();        
            
            $.ajax({
            url:     "send-calculator-form.php", //url страницы (action_ajax_form.php)
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#kalkulatorForm").serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
               // $("#calc-form").prop( 'disabled', false ).val('Заказать звонок'); 
                alert("Спасибо!!! Заявка отправлена!");
                dataLayer.push({'event': 'formsend'}); //подбор шкаф отправка формы

            },
            error: function(response) {    
            alert("Извините, заявка не отправлена! Попробуйте позже!");
            dataLayer.push({'event': 'formsend'}); //подбор шкаф отправка формы       
            }
        });
        }
    });
  /*  $("form").submit(function(e) {
        var ref = $(this).find("required");
        $(ref).each(function(){
            if ( $(this).val() == '' )
            {
                alert("Поле не должно быть пустое!");
                $(this).focus();
                e.preventDefault();
                return false;
            }
        });  return true;
    });*/
    $('#callForm').submit(function () {
        var but = $(this).find('input[type="submit"]');
        but.prop( 'disabled', true ).val('Отправка...');
        var form = $('#callForm');
        var phone = $('#callForm').find('input[name="phone"]');
        var form_data = form.serialize();

        if (phone.val().length < 10) {
            phone
                .animate({backgroundColor: "#ff0000", opacity: 0.8}, 300)
                .animate({backgroundColor: "#fff", opacity: 1}, 300);
            but.prop( 'disabled', false ).val('Заказать звонок');
        }

        else {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: form_data,
                cache: false,
                success: function () {                
                    form.fadeOut(300, function () {
                        form.trigger('reset');
                        $('.callWind .title').hide();
                        $(this).after("<div class='thankYou'>Спасибо за Ваш запрос. Менеджер свяжется с Вами в ближайшее время</div>");
                        dataLayer.push({'event': 'callsend'}); //подбор шкафа отправка формы
                    });
                    setTimeout(function () {
                        $('.callWind').hide();
                        $('.callWind .title').show();
                        $('.stickerCall').show('slow');
                        form.fadeIn(300).siblings('.thankYou').remove();
                        but.prop( 'disabled', false ).val('Заказать звонок');
                        
                    }, 10000);

                }

            });
        }
        return false;
    });
});

//Отмен нажатия по кнопке "назад"
$(document).ready(function () {
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
        history.go(1);
    };
});

//Плашка фиксация по центру
// $(document).ready(function () {
//     var plash = $('.plashka');
//     plash.each(function () {
//         var heig = $(this).closest('.screen').height();
//         var wid =  $(this).closest('.screen').width();
//         $(this).css({
//             position:'absolute',
//             left: (wid - $(this).outerWidth())/2,
//             top: (heig - $(this).outerHeight())/2
//         });
//     });
//
//     $(window).resize(function(){
//         plash.each(function () {
//             var heig = $(this).closest('.screen').height();
//             $(this).css({
//                 position:'absolute',
//                 top: (heig - $(this).outerHeight())/2
//             });
//         });
//
//     });
// });

//Вызов формы заказ звонка
$(document).ready(function () {
    $('.stickerCall').click(function () {
       $(this).hide();
       $('.callWind').show("slow");
    });
    $('.callWind .close').click(function () {
        $('.callWind').hide();
        $('.stickerCall').show("slow");
    });
});

//Появление стикера на втором экране
$(document).ready(function() {
    var distance_for_sticker = $('#screen3').offset().top - $(window).height(),
        $sticker = $('.stickerCall');

    $(window).scroll(function(){
        if  ($(window).scrollTop() > distance_for_sticker){
            $sticker.addClass('visible');
        }
        else {
            $sticker.removeClass('visible');
        }
    });

});

//Развернуть все экраны
$(document).ready(function () {
    $('.showAllBlocks').click(function () {
        $('#kalkulator').find('.screen').show();
    });
});
/* 
$(document).ready(function() {
$('#calc-form').click(function(){
            sendCalculatorForm('kalkulatorForm', '/send-calculator-form.php');
            return false;
        });

function sendCalculatorForm(ajax_form, url) {
        $.ajax({
            url:     url, //url страницы (action_ajax_form.php)
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                alert("Спасибо!!! Заявка отправлена!");
                dataLayer.push({'event': 'formsend'}); //подбор шкаф отправка формы

            },
            error: function(response) {    
            alert("Спасибо! Заявка отправлена!");
            dataLayer.push({'event': 'formsend'}); //подбор шкаф отправка формы       
            }
        });
    };
    });
    */
    