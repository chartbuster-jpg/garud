


// Smooth scroll
const elements = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});

// Form Submit
/*function sendToWhatsapp(){
  let number = "917697561186";
  let name = document.getElementById('name').value ;
  let email = document.getElementById('email').value ;
  let message = document.getElementById('message').value;
  var url = "https://wa.me/" + number + "?text="
  + "Name : " +name+ "%0a" 
  + "Email :" +email+ "%0a"
  + "Message :" + message+ "%0a%0a";
  window.open(url, '_blank').focus();

}
function sendToWhatsapp() {
    let number = "916797561186"; // Remove +, WhatsApp auto-detects country code if added manually
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let url = "https://wa.me/" + number + "?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Message: " + encodeURIComponent(message);

    window.open(url, "_blank").focus();
}
*/

