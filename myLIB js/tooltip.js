/*
USING:
	add this module and 'jquery.min.js' to your .html file
	and add 'hint' attribute with text to be displayed as a hint
*/
//module init
//creating and setup 'hint' div
//and adding onmousemove() to 'body'
$(document).ready(function() {
	$('body').attr('onmousemove', 'showTooltip(event)');
	$('body').append('<div id="hint"></div>');
	$('#hint').css({
		position: 'absolute',
		visibility: 'hidden',
		background: '#ffc'
	});
});
function showTooltip(event){
	$('#hint').html(event.target.getAttribute('hint'));
	$('#hint').css({
		top: (event.clientY+20)+'px',
		left: event.clientX+'px',
		visibility: 'visible'
	});
}
