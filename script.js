document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(item => {
      const btn = item.querySelector(".accordion-btn");
      const content = item.querySelector(".accordion-content");
  
      btn.addEventListener("click", function() {
        content.classList.toggle("active");
        content.style.display = content.classList.contains("active") ? "block" : "none";
        btn.classList.toggle("active"); // Toggle the active class on the button
        
        // Toggle the max-height property to control accordion content visibility
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });