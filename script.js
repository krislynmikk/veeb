function reveal() {
    var reveals = document.querySelectorAll(".row-experience, .row-timeline, .row-interests, .row-contact, .row-aboutme");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// function test() {
//     var testing = document.querySelectorAll(".progress-bar");
  
//     for (var i = 0; i < testing.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = testing[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         testing[i].classList.add("active");
//       } else {
//         testing[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", test);

