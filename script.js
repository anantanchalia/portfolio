// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    sidebar.classList.toggle("collapsed");

    // Hide the list items when collapsed and adjust margin-left of the content
    const listItems = sidebar.querySelectorAll("ul li");
    if (sidebar.classList.contains("collapsed")) {
        listItems.forEach(item => item.style.display = "none");
        content.style.marginLeft = "90px"; // Adjust margin-left when collapsed
    } else {
        listItems.forEach(item => item.style.display = "block");
        content.style.marginLeft = "290px"; // Reset margin-left to original
    }
}

// Function to collapse sidebar when an item is clicked
function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    // Add the collapsed class if not already collapsed
    if (!sidebar.classList.contains("collapsed")) {
        sidebar.classList.add("collapsed");

        // Hide the list items and adjust content margin
        const listItems = sidebar.querySelectorAll("ul li");
        listItems.forEach(item => item.style.display = "none");
        content.style.marginLeft = "90px"; // Adjust margin-left when collapsed
    }
}

// Function to set sidebar collapsed by default on page load
function setSidebarCollapsedByDefault() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    sidebar.classList.add("collapsed"); // Add 'collapsed' class by default
    const listItems = sidebar.querySelectorAll("ul li");

    // Initially hide the list items and adjust content margin-left
    listItems.forEach(item => item.style.display = "none");
    content.style.marginLeft = "90px"; // Set default margin-left when collapsed
}

// Function to attach event listeners to sidebar items
function attachSidebarItemListeners() {
    const sidebarLinks = document.querySelectorAll("#sidebar ul li a");

    // Add event listener to each sidebar item
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function() {
            closeSidebar(); // Call the function to close the sidebar
        });
    });
}

// Run the function to collapse the sidebar by default on page load and attach listeners
window.onload = function() {
    setSidebarCollapsedByDefault(); // Collapse sidebar on page load
    attachSidebarItemListeners();   // Attach listeners to sidebar items
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}