$(document).ready(function(){$('a.read-more').click(function(e){var l=$('a.read-more'),f=$('div.b_read_more');l.text(l.hasClass('act')?'Читать далее':'Скрыть');if(l.hasClass('act')){l.toggleClass('act');f.toggle('normal');}else{l.toggleClass('act');f.toggle('normal');}e.preventDefault();return false;});var options={offset:'#showHere',offsetSide:'top',classes:{clone:'header--clone',stick:'header--stick',unstick:'header--unstick'}};var header=new Headhesive('.header',options);$('.button-menu').click(function(e){$('.box-show-menu').addClass('open');e.stopPropagation();e.preventDefault();return false;});$('.close-menu').click(function(){$('.box-show-menu').removeClass('open');});$('header').click(function(e){e.stopPropagation();});$('body').click(function(){$('.box-show-menu').removeClass('open');});$('.main-menu a[href^="#"]').click(function(){var target=$(this).attr('href');$('html, body').animate({scrollTop:$(target).offset().top},300);return false;});$("#slider").slider({range:"min",animate:true,value:1,min:0,max:500,step:10,slide:function(event,ui){update(1,ui.value);}});$("#amount").val(0);$("#amount-label").text(0);update();$("#phone").mask("+7(999) 999-9999");$('.b_hide').hide();$a=$('.blog-new .read-more');$a.on('click',function(event){event.preventDefault();$a.not(this).next().slideUp(300);$(this).next().slideToggle(400);$(this).toggleClass('qus-open');$a.not(this).removeClass('qus-open');});$('input[placeholder], textarea[placeholder]').placeholder();});function up_t(a){var b=$(".tarif-packet > strong.name-packet"),c=$(".tarif-packet > span"),d=$(".list-packet-tarif .s > strong"),e=$(".list-packet-tarif .c > strong"),f=$(".list-packet-tarif .m > strong");20>=a?(b.html("\u0421\u0442\u0430\u0440\u0442"),c.html("299 \u0440.-"),d.html("\u0434\u043e 20"),e.html("\u0434\u043e 5"),f.html("\u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e")):50>=a?(b.html("XXS"),c.html("599 \u0440.-"),d.html("\u0434\u043e 50"),e.html("\u0434\u043e 10"),f.html("\u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e")):100>=a?(b.html("XS"),c.html("1 099 \u0440.-"),d.html("\u0434\u043e 100"),e.html("\u0434\u043e 20"),f.html("\u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e")):300>=a?(b.html("S"),c.html("2 999 \u0440.-"),d.html("\u0434\u043e 300"),e.html("\u0434\u043e 60"),f.html("\u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e")):500>a&&(b.html("M"),c.html("4 499 \u0440.-"),d.html("\u0434\u043e 500"),e.html("\u0434\u043e 100"),f.html("\u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e"))};function udt_inpt(val){var v=val;$("#slider").slider({range:"min",animate:true,value:v,min:0,max:500,step:10,});update(1,v);}function update(slider,val){var $amount=slider==1?val:$("#amount").val();if($amount>500){$('html, body').animate({scrollTop:$("#phoneresponse").offset().top},200);}else{var $duration=slider==2?val:$("#duration").val();$total="$"+($amount*$duration);$("#amount").val($amount);$("#amount-label").text($amount);$('#slider span').html('<label>'+$amount+'</label>');up_t($amount);}}