(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

function handleAppointment(e) {
//   e.preventDefault(); // Prevent form submission and page reload

  const gname = document.getElementById("gname").value;
  const gmail = document.getElementById("gmail").value;
  const cname = document.getElementById("cname").value;
  const cage = document.getElementById("cage").value;
  const message = document.getElementById("message").value;

  if (
    gname.length >= 3 &&
    gmail.length >= 15 &&
    cname.length >= 10 &&
    cage.length >= 2 &&
    message.length >= 5
  ) {
    const formData = {
      name: gname,
      email: gmail,
      mobile: cname,
      age: cage,
      message,
    };

    // Make an HTTP POST request to the API endpoint
    fetch("https://63da550b2af48a60a7caedda.mockapi.io/table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API if needed
        console.log(data);
        document.getElementById("gname").value = "";
        document.getElementById("gmail").value = "";
        document.getElementById("cname").value = "";
        document.getElementById("cage").value = "";
        document.getElementById("message").value = "";
        alert("Thanks for your interest! We will contact you soon.");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  } else {
    alert("Please enter valid information");
  }
}
