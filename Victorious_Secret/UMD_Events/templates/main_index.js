$("#login-button").click(function(event){
		event.preventDefault();

	/////////CHECK CREDENTIALS
	var usernameInput = $("#username").val();
	var passwordInput = $("#masterkey").val();

	if((usernameInput === "") || (passwordInput === "")) {
		alert('You must enter your credentials to log in.');
	} else if(usernameInput === "student" && passwordInput === "password") {
		//alert('Correct credentials');

		/////////ANIMATION
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		
		window.setTimeout(function(){
			$('.container').fadeOut(500);
		}, 600);
			window.setTimeout(function(){
			window.location.href = "./cal_index.html";
		}, 500);
	} else {
		alert("Do you even lift?");
	}
});