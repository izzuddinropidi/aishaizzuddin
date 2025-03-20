
//javascript sections

  //timer countdown
  var wedding = new Date("Jan 25, 2025 9:00:00").getTime();
  
  // countdown
  let timer = setInterval(function() {
  
    // get today's date
    const today = new Date().getTime();
  
    // get the difference
      diff = wedding - today;
    
  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);


  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
    <div class=\"numbers\">" + days + "</div>days</div> \
    <div class=\"hours\"> \
    <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
    <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
    <div class=\"numbers\">" + seconds + "</div>seconds</div> \
    </div>";

    }, 1000);

  // // Change style of navbar on scroll
  // window.onscroll = function() {myFunction()};
  // function myFunction() {
  //     var navbar = document.getElementById("myNavbar");
  //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //         navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  //     } else {
  //         navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
  //     }
  // }

  
  // // Used to toggle the menu on small screens when clicking on the menu button
  // function toggleFunction() {
  //     var x = document.getElementById("navDemo");
  //     if (x.className.indexOf("w3-show") == -1) {
  //         x.className += " w3-show";
  //     } else {
  //         x.className = x.className.replace(" w3-show", "");
  //     }
  // }

  // Observe the elements position at center
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  const fillElements = document.querySelectorAll('.fill');
  fillElements.forEach((el) => observer.observe(el));
  const dropElements = document.querySelectorAll('.drop');
  dropElements.forEach((el) => observer.observe(el));
  const riseElements = document.querySelectorAll('.rise');
  riseElements.forEach((el) => observer.observe(el));
  const slideElements = document.querySelectorAll('.slide');
  slideElements.forEach((el) => observer.observe(el));
  const swishElements = document.querySelectorAll('.swish');
  swishElements.forEach((el) => observer.observe(el));

//music autoplay
  var audio = document.getElementById("music");
  audio.autoplay = true;
  audio.load();

//from submit
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxtV3kpSDd-Xq_Ad-N53bOtbK-2zxhcGIxTAL0SElOpgGwe314NC9bG48RuCTfzgtARZA/exec'
  const form = document.forms['rsvp-form']
  const submitButton = form.querySelector('input[type="submit"]');

  form.addEventListener('submit', e => {
    
    e.preventDefault()

    submitButton.disabled = true; // Disable immediately
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thank you! Form is submitted");
            window.location.reload();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("An error occurred. Please try again.");
            submitButton.disabled = false; // Re-enable on error
        })
        .finally(() => {
          submitButton.disabled = false; //re-enable the button.
        });
  })

//transition page
  const exitButton = document.getElementById('exitButton');
  const transitionElement = document.getElementById('transitionElement');
  const homeDiv = document.getElementById('home');
  const majlisDiv = document.getElementById('majlis');
  const infoDiv = document.getElementById('itinerary');
  const contactDiv = document.getElementById('contact');
  const respondDiv = document.getElementById('respond');


  exitButton.addEventListener('click', () => {
    transitionElement.classList.add('exiting');
    // Optional: Remove the element from the DOM after the transition completes
    setTimeout(() => {
        transitionElement.style.display = 'none'; // or transitionElement.remove();
        homeDiv.classList.add('hidden');
        majlisDiv.classList.remove('hidden');
        infoDiv.classList.remove('hidden');
        contactDiv.classList.remove('hidden');
        respondDiv.classList.remove('hidden');
    }, 1500); // Match the transition duration (1.5s)
  });

//modal page
  const modal = document.getElementById('rsvp');
  const btn = document.getElementById('respond');
  const span = document.querySelector('.close');

  btn.onclick = function() {
      modal.style.display = 'block';
  }

  if (span) { //checks if the close button exists
    span.onclick = function() {
        modal.style.display = 'none';
    }
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }