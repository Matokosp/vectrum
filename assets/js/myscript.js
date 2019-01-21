// MENU

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#hamburger').toggleClass('hamburguer-slide');
	}

	// function esconder (e){		
	// 	$('.menu-hide').removeClass('show');
	// 	$('#hamburger').removeClass('hamburguer-slide');
	// }

	$('#hamburger').on('click', function(e){		
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');
		console.log(menuHideShow)
	})
	
   
	window.addEventListener('click', function(e){
		// var menuHide = $('.menu-hide');
		if (menuHideShow === true && e.target.className != 'menu-hide show') {
			desplazar();			
		}		
		console.log(e.target)
	})

// SCROLL

	var first = 'quienes_somos';
	var second = 'solucion';
	var third = 'quienes_somos';
	var fourth = 'suministros';
	var fifth = 'contacto';

	function scrollToAnchor(aid){
	    var aTag = $("a[id='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#firstSect").click(function() {
	   scrollToAnchor(first);
	});
	$("#secondSect").click(function() {
	   scrollToAnchor(second);
	});
	$("#thirdSect").click(function() {
	   scrollToAnchor(third);
	});
	$("#fourthSect").click(function() {
	   scrollToAnchor(fourth);
	});
	$("#fifthSect").click(function() {
	   scrollToAnchor(fifth);
	});