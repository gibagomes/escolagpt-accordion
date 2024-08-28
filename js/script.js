document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Check if the content is currently visible
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        // Hide all content elements
        document.querySelectorAll(".accordion-content").forEach((item) => {
          item.style.display = "none";
        });

        // Show the clicked content element
        content.style.display = "block";
      }
    });
  });
});
