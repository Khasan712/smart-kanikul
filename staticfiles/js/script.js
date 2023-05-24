$(document).ready(function () {
  $(function () {
    $("header .owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      nav: false,
      dots: true,
      loop: true,
      smartSpeed: 1000,
    });

    // $('header .call').click(function () {
    //     $('.modal').fadeIn()
    //     $('.modal').css('display' , 'flex')
    // })
    // $('.modal .close').click(function () {
    //     $('.modal').fadeOut()
    // })

    $("#my-form").submit(function (e) {
      e.preventDefault();
      $(".modal").fadeIn();
      $(".modal").css("display", "flex");

      var name = $("#name").val();
      var phone = $("#phone").val();
      $.ajax({
        url: "/",
        data: { name, phone , 'csrfmiddlewaretoken': $('meta[name="csrf-token"]').attr('content') },
        type : 'POST' ,

      });
    });

    $(".mentors .owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      nav: false,
      dots: true,
      loop: true,
      smartSpeed: 1000,
      margin: 30,

      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    AOS.init();

    $(function () {
      $(".bars").click(function () {
        $(".navbar").toggleClass("active");
        $(".bars .fa-bars").toggleClass("fa-xmark");
      });
    });

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop < 200) {
        $("header ul a").css("color", "white");
      }
      if (scrollTop >= 500) {
        $(".scrollTop").fadeIn();
        $(".scrollTop").css({ display: "flex" });
        $('.callPhone').fadeIn()
        $('.callPhone').css({display : 'flex'})
      } else {
        $(".scrollTop").fadeOut();
        $('.callPhone').fadeOut()
      }

      $("header ul a").each(function () {
        var id = $(this).attr("href");
        var href = $(id)?.offset()?.top - 120;
        if (scrollTop >= href) {
          $("header ul a").css("color", "white");
          $(this).css("color", "#30a8ff");
        }
      });



    });

    $(".scrollTop").click(function () {
      $("html , body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });


  $('.callPhone').click(function () {
      $('html , body').animate({
        scrollTop2: 0
      }, 1000)
  })


  
    $(".registerBtn").click(function () {
      var res = $("#register").offset().top;
      $("html , body").animate(
        {
          scrollTop: res,
        },
        1000
      );
    });

    $("header ul .link-nav").click(function (e) {
      e.preventDefault();
      $("header ul a").css("color", "#fff");
      var attr = $(this).css("color", "#30a8ff").attr("href");
      var offset = $(attr).offset().top - 70;

      $("html , body").animate(
        {
          scrollTop: offset,
        },
        1000
      );
    });
  });
});
// let phoneInp = document.querySelector(".phoneNumber")

// console.log(phoneInp)

// function isValid(p) {
//     var digits = p.replace(/\D/g, "");
//     return phoneRe.test(digits);
// }

// phoneInp.addEventListener('input' , function() {
//     var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
//     console.log(phoneRe.test(this.value))
// })

// var my_button = document.getElementById("my_button");
// console.log(my_button);
// my_button.addEventListener("click", function () {
// function validateForm() {
//   var name = document.forms["myForm"]["name"].value;
//   var phone = document.forms["myForm"]["phone"].value;
//   var phoneRegex = /^\d{9}$/;
//   if (name == "" || phone == "") {
//     alert("Ism va telefon raqami to'ldirilishi kerak");
//     return false;
//   }
//   if (!phone.match(phoneRegex)) {
//     alert("Telefon raqami 12 ta raqamdan iborat bo'lishi kerak");
//     return false;
//   }
// }
// validateForm();
// var name = document.getElementById("name").value;
// var phone = document.getElementById("phone").value;
// console.log("Name: " + name);
// console.log("Phone: " + phone);
// var data = {
//   first_name: name,
//   phone_number: "+998" + phone,
// };

// fetch("http://backend.notiqlik-markazi.uz/api/v1/register/", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .finally(() => {
//     document.getElementById("phone").value = "";
//     document.getElementById("name").value = "";
//   });
// });
// var phoneInput = document.getElementById("phone");
// phoneInput.addEventListener("input", function (event) {
// var currentValue = event.target.value;
// var formattedValue = currentValue.replace(/\D/g, "");
// event.target.value = formattedValue;
// });

// // register users ☝️
// let input = document.querySelector("#phone");
// console.log(input);
// let iti = intlTelInput(input);
// intlTelInputGlobals.loadUtils(
// "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.0.1/js/utils.js"
// );

// intlTelInput(input, {
// initialCountry: "uz",
// separateDialCode: true,
// nationalMode: false,
// onlyCountries: ["uz"],
// });
// let countryData = window.intlTelInputGlobals.getCountryData();
// // console.log(countryData);
// $("#phone").focusout(function (e, countryData) {
// let phone_number = $("#phone").val();
// phone_number = iti.getNumber(intlTelInputUtils.numberFormat.E164);
// // console.log(phone_number);
// });
