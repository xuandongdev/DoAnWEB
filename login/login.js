document.addEventListener("DOMContentLoaded", function() {
    var exploreBtn = document.getElementById("exploreBtn");
    if(exploreBtn) {
      exploreBtn.addEventListener("click", function() {
        window.location.href = "../product.html";
      });
    }
  });
  
  const title = document.querySelector('.title h1')
  const letter = 'Welcome!'
  var index = 0
  setInterval(() => {
    title.textContent += letter[index]
    index++
    if(index == letter.length){
        index = 0
        title.textContent = ''
    }
  }, 500)