function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Pobieranie elementów, które powinny zmieniać kolor w trybie ciemnym
  document.querySelector(".naglowek").classList.toggle("dark-mode");
  document.querySelectorAll(".plan").forEach(plan => plan.classList.toggle("dark-mode"));
  document.querySelectorAll("button").forEach(button => button.classList.toggle("dark-mode"));
}
let slideIndex = 0;
        let slides = document.querySelectorAll(".slide");
        let dots = document.querySelectorAll(".dot");
        
        function showSlide(n) {
            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;
            
            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove("active"));
            
            slides[slideIndex].style.display = "block";
            dots[slideIndex].classList.add("active");
        }
        
        function changeSlide(n) {
            slideIndex += n;
            showSlide(slideIndex);
        }
        
        function setSlide(n) {
            slideIndex = n;
            showSlide(slideIndex);
        }
        
        function autoSlide() {
            slideIndex++;
            showSlide(slideIndex);
            setTimeout(autoSlide, 3000);
        }
        
        showSlide(slideIndex);
        setTimeout(autoSlide, 3000);