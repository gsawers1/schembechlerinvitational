$(document).ready(function() {

    $(window).scroll(function() {
      console.log('being called');
      var factsList = ['#flipability', '#agility', '#chugability', '#tolerance', '#stamina'];
      factsList.forEach(function(elem){
        if(isScrolledIntoView(elem)){
             $(elem).animate({'opacity':'1'}, 1000);
        }
      });
    });
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
