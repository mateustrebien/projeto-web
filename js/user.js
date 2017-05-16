$(document).ready(function(){ 
    $("#btEnviar").click(function(){
		$(this).button('loading').delay(500).queue(function(){
            $(this).button('reset');
            $(this).dequeue();
        });        
    });
});
         

$('#itHome').click(function(){
    $('.nav li dropdown').removeClass('active');
    $('.nav li dropdown a').removeClass('active');
    $('.FREQUENCIA').css('display', 'none')
    $('.HOME').css('display', 'block')
    $('.nav li').removeClass('active');
    $('.NOTAS').css('display', 'none')
    $('.PROFESSOR').css('display', 'none')
	$('.nav-tabs a').tab('hide');
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.nav-tabs a[href="#P1"]').tab('hide')
    $('.CALENDARIO').css('display', 'none')
    $('.HORARIO').css('display', 'none')
    $('.CONTATO').css('display', 'none')
});
            
$('#p1').click(function(){
    $('.PROFESSOR').css('display', 'block')
    $('.FREQUENCIA').css('display', 'none')
    $('.NOTAS').css('display', 'none')
    $('.HOME').css('display', 'none')
    $('.nav-tabs a[href="#P1"]').tab('show')
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.CALENDARIO').css('display', 'none')
    $('.HORARIO').css('display', 'none')
    $('.CONTATO').css('display', 'none')
});
$('#p2').click(function(){
	$('.PROFESSOR').css('display', 'block')
	$('.NOTAS').css('display', 'none')
	$('.FREQUENCIA').css('display', 'none')
	$('.HOME').css('display', 'none')
	$('.nav-tabs a[href="#P2"]').tab('show')
	$('.nav-tabs a[href="#P1"]').tab('hide')
	$('.CALENDARIO').css('display', 'none')
	$('.HORARIO').css('display', 'none')
	$('.CONTATO').css('display', 'none')
});
            
$("#itNotas").click(function(){
    $('.nav li dropdown').removeClass('active');
    $('.nav li dropdown a').removeClass('active');
    $('.nav li').removeClass('active');
	$('.NOTAS').css('display', 'block')
	$('.FREQUENCIA').css('display', 'none')
	$('.PROFESSOR').css('display', 'none')
	$('.HOME').css('display', 'none')
	$('.HORARIO').css('display', 'none')
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.nav-tabs a[href="#P1"]').tab('hide')
	$('.nav-tabs a').tab('hide');
	$('.CALENDARIO').css('display', 'none')
	$('.CONTATO').css('display', 'none')
});
            
$("#itFreq").click(function(){
    $('.nav li dropdown').removeClass('active')
    $('.nav li').removeClass('active')
	$('.FREQUENCIA').css('display', 'block')
	$('.NOTAS').css('display', 'none')
	$('.PROFESSOR').css('display', 'none')
	$('.HOME').css('display', 'none')
	$('.HORARIO').css('display', 'none')
	$('.nav-tabs a').tab('hide');
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.nav-tabs a[href="#P1"]').tab('hide')
	$('.CALENDARIO').css('display', 'none')
	$('.CONTATO').css('display', 'none')
});

$("#itHor").click(function(){       
    $('.nav li dropdown').removeClass('active');
    $('.nav li').removeClass('active');
	$('.NOTAS').css('display', 'none');
	$('.FREQUENCIA').css('display', 'none');
	$('.HORARIO').css('display', 'block');
	$('.HOME').css('display', 'none');
	$('.PROFESSOR').css('display', 'none');
	$('.nav-tabs a').tab('hide');
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.nav-tabs a[href="#P1"]').tab('hide')
	$('.CALENDARIO').css('display', 'none');
	$('.CONTATO').css('display', 'none');
});

$("#itProf").click(function(){            
	$('.exibeNotas').css('display', 'none')
});

$("#itCont").click(function(){          
    $('.nav li dropdown').removeClass('active');
    $('.nav li').removeClass('active');
	$('.CONTATO').css('display', 'block')
	$('.FREQUENCIA').css('display', 'none')
	$('.HOME').css('display', 'none')
	$('.NOTAS').css('display', 'none')
	$('.PROFESSOR').css('display', 'none')
	$('.nav-tabs a').tab('hide');
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.nav-tabs a[href="#P1"]').tab('hide')
	$('.CALENDARIO').css('display', 'none')
	$('.HORARIO').css('display', 'none')
});

$("#itCal").click(function(){    
    $('.nav li dropdown').removeClass('active');
    $('.nav li dropdown a').removeClass('active');
    $('.nav li').removeClass('active');
	$('.PROFESSOR').css('display', 'none')
	$('.FREQUENCIA').css('display', 'none')
	$('.CONTATO').css('display', 'none')
	$('.NOTAS').css('display', 'none')
	$('.HOME').css('display', 'none')
	$('.HORARIO').css('display', 'none')
	$('.nav-tabs a').tab('hide');
    $('.nav-tabs a[href="#P2"]').tab('hide')
    $('.nav-tabs a[href="#P1"]').tab('hide')
	$('.CALENDARIO').css('display', 'block')    
});


$('#itSair').click(function() {
	 /* when the button in the form, display the entered values in the modal */
});

$('#submit').click(function(){
	 /* when the submit button in the modal is clicked, submit the form */
	/*alert('submitting');*/
	$('#formfield').submit();
	$(location).attr('href', '../index.html');
});


$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
	placement : 'top',
	template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div>'
		
	});     
});


$(document).ready(function(){ 
$('#letras').text('140 caracteres disponíveis');
$('#mensagem').keydown(function () {
	var max = 140;
	var len = $(this).val().length;
	if (len >= max) {
		$('#letras').text('Você atingiu o limite de caracteres');
		$('#letras').addClass('red');
		$('#btnSubmit').addClass('disabled');            
	} 
	else {
		var ch = max - len;
		$('#letras').text(ch + ' caracteres disponíveis');
		$('#btnSubmit').removeClass('disabled');
		$('#letras').removeClass('red');            
	}
});    
});



$( document ).ready(function() { // Circulos de Frequencias
	$("#idMatematica").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 75
	});
	
	$("#idPortugues").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 100
	});
	
	$("#idGeografia").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 95
	});
	
	$("#idHistoria").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 90
	});
	
	$("#idQuimica").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 100
	});
	
	$("#idFisica").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 99
	});
	
	$("#idIngles").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 92
	});
	
	$("#idBiologia").circliful({
	animationStep: 8,
	foregroundBorderWidth: 10,
	backgroundBorderWidth: 25,
	percentageY: 110,
	fontColor: '#FFF',
	percent: 94
	});
	
});


/* Funcoes para animacao de cada elemento com o foco do mouse ou usando TAB*/
$(".single").focusin(function(){
	$(this).css("background", "#243c4f");
	$(this).children(".icon-outer").css('background', '#243c4f');

});

$(".single").focusout(function(){
	$(this).css("background", "#c23c5a");
	$(this).children(".icon-outer").css('background', '#c23c5a');
});

$( ".single" ).mouseover(function() {
  $(this).css("background", "#243c4f");
	$(this).children(".icon-outer").css('background', '#243c4f');
});

$( ".single" ).mouseout(function() {
  $(this).css("background", "#c23c5a");
	$(this).children(".icon-outer").css('background', '#c23c5a');
});

$(function() {
	$(document).popover({
		selector: '[data-toggle=popover]',
		trigger: 'focus'
	});
});

$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});

$(".panel-heading").focusin(function(){
	$(this).css("background", "#15665e");

});

$(".panel-heading").focusout(function(){
	$(this).css("background", "#009688");
});