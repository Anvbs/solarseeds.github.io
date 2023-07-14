$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });

  var btn = document.querySelector("#back-to-top");

  btn.addEventListener("click", function() {
      window.scrollTo(0, 0);
  });