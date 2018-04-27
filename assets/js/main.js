const modal = document.getElementById("myModal");
const imgs = document.getElementsByClassName("image");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", modalPop, false);
}

function modalPop() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

/// Handle form submit
/////////////////////////

$("#contact-form").submit(function(e) {
  let name = document.getElementById("name");
  let email = document.getElementById("mail");
  let msg = document.getElementById("message");

  if (!name.value || !email.value || !msg.value) {
    alert("Please complete all feilds");
  } else {
    $.ajax({
      url: "https://formspree.io/cshaner@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alert("Message sent");
  }
});
