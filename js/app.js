/* Making the galllery Lighthouse */

// Add the overlay

var $overlay = $('<div id="overlay"></div>');

//Adding images to overlay
var $image = $('<img>');
$overlay.append($image);

// Adding caption to images
var $caption = $('<p></p>');
$overlay.append($caption);

$("body").append($overlay);

// Capture the click event on the link of the image

$("#gallery a").click(function(event)
{
	//Disable the usual broweser behaviour of opening the link as another webpage
	event.preventDefault();
	
	var $href = $(this).attr("href");
	//console.log(href);

	$image.attr('src',$href );	// Update overlay with the image location

	//show the overlay
	$overlay.show();

	// Show caption of the image from alt attribute
	var $captionText  = $(this).children("img").attr('alt');
	$caption.text($captionText);	


});

$overlay.click(function(){

	$overlay.hide();	
});



