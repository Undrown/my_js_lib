/*
USE:
	Link this file and jquery.min.js to page. Make a div with id='login_div' on page.
	phpFile will be requested with $_POST['username'] & $_POST['userpass'] 
	and it must return 'OK' string on success
*/
var phpFile = 'login.php';	
var localStorage;
var user;
$(document).ready(function() {
	if(localStorage = window.localStorage){
		user = localStorage.getItem("user");

		if(user !== null){
			$("#login_div").append(`<img id="user" src="${user}.png">`);
			$("#login_div").append(`<a id="user_button" href="#" onclick="logout()">${user}</a>`);
			$("#user_button").text(user);
			$("#user").attr("src", "/img/"+user+".png");
		}else{
			$("#login_div").append(`<input type='text' placeholder='LOGIN' name='username'></input>`);
			$("#login_div").append(`<input type='text' placeholder='PASS' name='userpass'></input>`);
			$("#login_div").append(`<button onClick='login()'>LOGIN</button>`);
		}
	}else{
	    alert("Sorry, your browser do not support local storage.");
	}
});

function login() {
	var username = $("[name=username]").val();
	var userpass = $("[name=userpass]").val();
	$.post(phpFile, {'username':username, 'userpass':userpass}, function(data, textStatus, xhr) {
		if(data == 'OK'){
			localStorage.setItem("user", username);
			localStorage.setItem("pass", userpass);
			window.location.href='/';
		}
	});
}

function logout() {
	exit = confirm("Выйти?");
	if(exit){
		localStorage.removeItem("user");
		localStorage.removeItem("pass");
	//localStorage.setItem("pass", "DEFAULT");
	document.location.href = "/index.php?page=user";
	}
}