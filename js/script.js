$(window).resize(function(event){
	binary();
});

function binary(){
	var h = $(window).outerHeight();
	$('.binary').css('min-height', h);
}
binary();

$('.filter__item').click(function(event){
	var i = $(this).data('filter');
	if(i==1){
		$('.item1').show();
	}
	else{
		$('.item1').css('display', "none");
		$('.item1.f_' + i).css('display', "block");
		// $('.item1.f_' + i).css('marginBottom', "block");
	}

	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});



function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validate() {
  var email = $(".mail").val();
  if (validateEmail(email)) {
    $(".input.mail").css("borderTop", "1px solid green");
  } else {
  	$(".input.mail").css("borderTop", "1px solid red");
  }
  return false;
}
$(".mail").bind("keyup", validate);