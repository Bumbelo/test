/*global $*/
$('#wrapper').hide();
function main() {
    $('#wrapper').fadeIn(500);
    
    $('.shopping-list').hide();
    $('.shopping-button').on('click', function(){
        $(this).next().slideToggle(400);
        $(this).toggleClass('activebutton');
        if ($(this).text()==='Zobacz'){
            $(this).text('Ukryj');
        }
        else{
            $(this).text('Zobacz');
        }
    });
}
$(document).ready(main);
