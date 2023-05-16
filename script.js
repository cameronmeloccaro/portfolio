const words = ["front <br>end developer.", "web <br>designer.", "diligent <br>developer."];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % words.length;
  const nextTitle = `Hey, I'm a <span class="fade-text">${words[currentIndex]}</span>`;
  $('#job-title').find('.fade-text').fadeOut(500, function() {
    $(this).html(words[currentIndex]).fadeIn(500);
  });
}, 3000);

// Get all elements with the progress-bar class
const progressBars = document.querySelectorAll('.progress-bar');

// Function to handle the scroll event
function handleScroll() {
  // Loop through all the progress-bar elements and check if they are within the threshold distance from the top of the viewport
  progressBars.forEach(progressBar => {
    // Get the distance between the top of the document and the top of the progress-bar element
    const progressBarDistanceFromTop = progressBar.getBoundingClientRect().top;

    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Calculate the threshold value based on the height of the viewport
    const threshold = viewportHeight * 1.0;

    // If the progress-bar element is within the threshold distance from the top of the viewport
    if (progressBarDistanceFromTop < threshold) {
      // Add the 'show' class to the progress-bar element
      progressBar.classList.add('show');
    }
  });

  // Remove the scroll event listener if all the progress-bar elements have already been animated
  if (document.querySelectorAll('.progress-bar.show').length === progressBars.length) {
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);
