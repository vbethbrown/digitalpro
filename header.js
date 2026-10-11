
// Fetch the external header file and inject it into the DOM
const header= document.querySelector('#header');

Window.addEventListener ('load, function () {
   this.document.head.insertAdjacentHTML ('beforeend')

 <link rel="stylesheet"= href "css/main.css"/>);
 header.className ='header';
 
header.innerHTML='
<p id = "header"/>
<nav>
 <div class="logo">
    <img src="img/logo1.jpg" alt="Digital Defense Limited logo">
    </div>
        <div >
          <span class="brand">DIGITAL PROTECTION LIMITED</span>
         </div>
        <ul class = "nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="pages/about.html">About Us</a></li>
        <li><a href="pages/services.html">Services</a></li>
        <li><a href="pages/faq.html">Frequently Asked Questions</a></li>
        <li><a href="pages/contact.html">Contact Us</a></li>
        <li><a href="pages/news.html">News</a></li>;
        </ul>>'
  </nav>

});

