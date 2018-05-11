//copying mail
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// button event
$(document).ready(function() {
  $("#menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });

  $('.slide').on("click", function() {
    $("nav ul").removeClass("showing");
  });

  //scroll nav
  var navHigh = $('nav').outerHeight(); //86.4
  $('.slide').click(function(e) {

    console.log(navHigh);

    var linkHref = $(this).attr('href');
    console.log(linkHref);
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - 86.4
    }, 1000);
    console.log($(linkHref).offset().top);
    e.preventDefault();
  });

});

//nav color change
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }

})
