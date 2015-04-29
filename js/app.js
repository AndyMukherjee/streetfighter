$(document) .ready(function(){

	function playHadouken () {
		$('#hadouken-sound') [0].volume=0.5;
		$('#hadouken-sound') [0].load();
		$('#hadouken-sound') [0].play();

	}

	function playTheme (){

		$('#theme') [0].volume=0.5;
		$('#theme') [0].load();
		$('#theme') [0].play();
	}

	playTheme();
	
	$('.ryu') .mouseenter(function(){
		
		$('.ryu-still') .hide();

		$('.ryu-ready') .show();

	});

	$('.ryu') .mouseleave(function(){

		$('.ryu-ready') .hide();

		$('.ryu-still') .show();
	})

	$('.ryu') .mousedown(function(){
		
		playHadouken();
		$('.ryu-ready') .hide();

		$('.ryu-throwing') .show();

		$('.hadouken') .finish() .show() .animate({
			'left':'1030px'},
			500,
			function(){
				$(this) .hide();

				$(this) .css('left', '530px');

			}
			);
		
	});



	$('.ryu') .mouseup(function(){
		
		$('.ryu-throwing').hide();

		$('.ryu-ready') .show();
	});


	$('body').keydown(function(e){

		if (e.keyCode == 88){

			$('.ryu-throwing').hide();

			$('.ryu-ready') .hide();

			$('.ryu-still') .hide();

			$('.ryu-cool') .show();}
		

	});

/*	$('.sf').show(10000, 'swing',
  function(){
            $(this).hide();
            $('.brought').show(10000, 'swing', function(){
                $(this).hide();

                $('.logo') .show(5000, 'linear', function(){
                	$(this) .hide(); 

                	$('.click') .show ();
                		
                	
                });
            });
    });*/

  $('.sf').fadeIn(5000, function() {
    $(this).fadeOut(2500, function() {
      $('.brought').fadeIn(2000, function() {
        $(this).fadeOut(2500, function() {
          $('.logo').fadeIn(2000, function() {
            $(this).fadeOut(2500, function() {
              $('.click').fadeIn(2500);
            });
          })
        })
      })
    })
  })


		
});

