const spans = document.querySelectorAll('.content span');
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`; // Stagger each letter by 0.1s
});

document.getElementById('logo-1').onclick = function() {
    window.location.href = "https://www.linkedin.com/in/pritam-anand-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
};

document.getElementById('logo-2').onclick = function() {
    window.location.href = "https://github.com/Pritam7847";
};

document.getElementById('logo-3').onclick = function() {
    window.location.href = "https://www.instagram.com/himanshu..singh_?igsh=djNyc2k1aGpuOXBo";
};

document.getElementById('btn-55').onclick= function() {
    window.location.href ='about.html'
};

const send = ()=> {
    var params = {
        name : document.getElementById("fullName").value,
        email_id :  document.getElementById("email_id").value,
        feedback : document.getElementById("feedbackk").value,
    }
    emailjs.send("service_2kwvwji" , "template_mjzvauj" , params);
}

document.getElementById('btn').addEventListener("click", function(e) {
    send();
    alert("Feedback submitted successfully!");
    e.preventDefault();
})

let menuLinks = document.getElementById("menu-links");

function toogleMenu(){
    menuLinks.classList.toggle("show-menu");
}