$(document).ready(function()
{				
  $(".navbar-collapse").addClass("in");

  //These functions will proc when the user clicks on a link
  $(".home").click(function()
  {
    $(".pageContent").load("pages/home.html");
    document.cookie = "page = home";
  });
  $(".prep").click(function()
  {
    $(".pageContent").load("pages/prep.html");
    document.cookie = "page = prep";
  });
  $(".payroll").click(function()
  {
    $(".pageContent").load("pages/construction.html");
    document.cookie = "page = construction";
  });
  $(".consulting").click(function()
  {
    $(".pageContent").load("pages/consulting.html");
    document.cookie = "page = consulting";
  });
  $(".book").click(function()
  {
    $(".pageContent").load("pages/construction.html");
    document.cookie = "page = construction";
  });
  $(".forms").click(function()
  {
    $(".pageContent").load("pages/forms.html");
    document.cookie = "page = forms";
  });
  $(".faq").click(function()
  {
    $(".pageContent").load("pages/faq.html");
    document.cookie = "page = faq";
  });
  $(".background").click(function()
  {
    $(".pageContent").load("pages/background.html");
    document.cookie = "page = background";
  });

  $(".collapseLinks li").click(function() {
    var cookie = document.cookie;
    var page = cookie.substring(5, cookie.length);

    if(page != "home") {
      $(".navbar-collapse").removeClass("in");
    }
  });

  //Timed interval to change the images on the main page
  setInterval("swapImages()", 5000);
});

function loadPage()
{
  //This function will proc when the user refreshes the page
  var cookie = document.cookie;
  var page = cookie.substring(5, cookie.length);

  if(page === "home")
  {
    $(".pageContent").load("pages/home.html");
  }
  else if(page === "prep")
  {
    $(".pageContent").load("pages/prep.html");
  }
  else if(page === "consulting")
  {
    $(".pageContent").load("pages/consulting.html");
  }
  else if(page === "construction")
  {
    $(".pageContent").load("pages/construction.html");
  }
  else if(page === "forms")
  {
    $(".pageContent").load("pages/forms.html");
  }
  else if(page === "faq")
  {
    $(".pageContent").load("pages/faq.html");
  }
  else if(page === "background")
  {
    $(".pageContent").load("pages/background.html");
  }
  else
  {
    $(".pageContent").load("pages/home.html");
  }
}

function swapImages()
{
  var x = Math.random() * (5-1) + 1;

  if (x < 2)
  {
    var $active = $("#banner1 .active");
    var $next = ($("#banner1 .active").next().length > 0) ? $("#banner1 .active").next() : $("#banner1 img:first");
    $active.fadeOut(function () {
      $active.removeClass("active");
      $next.fadeIn().addClass("active");
    });
  }
  else if (x >= 2 && x < 3)
  {
    $active = $("#banner2 .active");
    $next = ($("#banner2 .active").next().length > 0) ? $("#banner2 .active").next() : $("#banner2 img:first");
    $active.fadeOut(function () {
      $active.removeClass("active");
      $next.fadeIn().addClass("active");
    });
  }
  else if (x >= 3 && x < 4)
  {
    $active = $("#banner3 .active");
    $next = ($("#banner3 .active").next().length > 0) ? $("#banner3 .active").next() : $("#banner3 img:first");
    $active.fadeOut(function () {
      $active.removeClass("active");
      $next.fadeIn().addClass("active");
    });
  }
  else if (x >= 4)
  {
    $active = $("#banner4 .active");
    $next = ($("#banner4 .active").next().length > 0) ? $("#banner4 .active").next() : $("#banner4 img:first");
    $active.fadeOut(function () {
      $active.removeClass("active");
      $next.fadeIn().addClass("active");
    });
  }
}
