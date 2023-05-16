const words = ["front <br>end developer.", "web <br>designer.", "diligent <br>developer

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % words.length;
  const nextTitle = `Hey, I'm a <span class="fade-text">${words[currentIndex]}</span>`;
  $('#job-title').find('.fade-text').fadeOut(500, function() {
    $(this).html(words[currentIndex]).fadeIn(500);
  });
}, 3000);

const progressBars = document.querySelectorAll('.progress-bar');

function handleScroll() {
  progressBars.forEach(progressBar => {
    const progressBarDistanceFromTop = progressBar.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight * 1.0;

    if (progressBarDistanceFromTop < threshold) {
      progressBar.classList.add('show');
    }
  });

  if (document.querySelectorAll('.progress-bar.show').length === progressBars.length) {
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

const myDiv = document.getElementById("hallofheat-redirect");
  myDiv.addEventListener("click", function() {
    window.location.href = "https://hallofheat.com/";
  });
