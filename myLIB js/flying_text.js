/*
USING:
	link this module and 'jquery.min.js' to your .html file and
	use function fly_text("text"[, "color"[, "id"]]);
	"text" is string to fly(could be a DOM container)
	"color" could be 'red', 'green' or '#fff'-style
*/
var fly_text_speed = 9;//скорость (шаг в миллисекундах)
var fly_text_height = 50;//вот столько пролетает
//летит всякая зараза у которой есть class='flying_text'
window.setInterval(function(){
	$('.flying_text').each(function(){
		$(this).css('top', ($(this).position().top-1)+'px');
		if($(this).attr('id').substr(5)-$(this).position().top > fly_text_height){
			//и дохнет пролетев сколько надо
			$(this).remove();
		}
	});
}, fly_text_speed);

function fly_text(text, color, id){
	if(color === undefined){
		color = '#000';
	}else if(color == 'red'){
		color = '#F00';
	}else if(color == 'green'){
		color = '#0F0';
	}
	if(id === undefined){
		id = 'body';	
	}else{
		id = '#'+id;
	}
	var top = $(id).position().top + $(id).height()/2;
	var left = $(id).position().left + $(id).width()/2;
	$('body').append(`
		<div class="flying_text" id="from_${top}" style="position:fixed; z-index:10; color:${color}; top:${top}px; left:${left}px">${text}</div>
		`);
}