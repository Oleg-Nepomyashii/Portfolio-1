$(function() {
	$('.toggles button').click(function(){
		let get_id = this.id;
		let get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide();
		get_current.show();
	});

	$('#showall').click(function(){
		$('.post').show();
	});
});
