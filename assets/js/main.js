const modal = document.getElementById('myModal');
const imgs = document.getElementsByClassName('image');
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', myFunction, false);
}

function myFunction() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
console.log(window.location.href)