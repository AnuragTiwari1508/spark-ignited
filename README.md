# spark ignited
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPARK IGNITED</title>
    <link rel="stylesheet" href="sparkignited.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="2.png" alt="Logo" class="logo-img">
        <h1>Spark Ignited</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#welcome">home</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#groups">Groups</a></li>
                <li><a href="#photos">gallery</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#more">More</a></li>
            </ul>
        </nav>
        <div class="cart">
            <span class="notification-icon">&#128276;</span>
            <div class="search">
                <input type="text" class="search-box" placeholder="Search..." id="search-input">
                <span class="search-icon" onclick="searchFunction()">&#128269;</span>
            </div>
        </div>
    </header> 
   <section id="welcome">
        <div class ="welcome-text">
            <h2>WELCOME</h2>
            <p>Welcome visitors to your site with a short, engaging introduction. Double click to edit and add your own text.</p>
            <button onclick="startNow()">Start Now</button>
            <button onclick="scrollToSection('about-us')">Next</button>
            </div>
         
    </section>
    <section id="about-us">
        <div class="about-text">
            <h2>About Us</h2>
            <p>This is a space to tell users about yourself and your business. Let them know who you are, what you do, and what this website is all about. Double click to start editing.</p>
            <button onclick="learnMore()">Learn More</button>
            <button onclick="scrollToSection('EV-brochure')">Next</button>
            <button onclick="scrollToSection('welcome')">Previous</button>
        </div>
      
    </section>
    <section id="EV-brochure">
        <div class="EVbrochure-img">
            <h2>EV brochure</h2>
            <p>This is a space to tell users about market prize of electric vehical. Let them know about your vehical, what you do, and what this website is all about. Double click to start editing.</p>
            <button onclick="openbrochure()">open brochure</button>
            <button onclick="scrollToSection('photos')">Next</button>
        </div>
    </section>
    <section  id="photos" >
        <div  class="photos-img">
            <h1>gallery</h1>
            <img src="past photo1.jpg" alt ="photoA">
            <img src="pyp.jpg" alt ="photoA">
            <img src ="photo10.jpg" alt ="photoE">
            
            <img src ="WhatsApp Image 2024-06-01 at 15.33.05.jpeg" alt ="photoA">
            <img src ="photo11.jpg " alt ="photoE">
          
           
            <img src="etwdc.jpg" alt ="photoD">
            <img src ="IMG_20240218_172600.jpg" alt ="photoE">
            <img src="WhatsApp Image 2024-06-11 at 16.36.27.jpeg" alt ="photoD">
            <img src="scootyphoto.jpg" alt ="photoC">
            <img src ="photo9.jpg" alt ="photoE">
            <img src ="photo10.jpg" alt ="photoE">
            <img src ="photo2.jpg"  alt ="photoB">
            <img src="photo12.jpg" alt ="photoG">
            <img src="vidspark.jpg" alt ="videoA">
            <img src="photo13.jpeg" alt ="photoG">
            <img src="photo14.jpeg" alt ="photoG">
            
        <button onclick="toggleMorePhotos()" id="see-more-btn">See More</button>
        </div>
     
    </section>
       <section id="more">
        <h1></h1>
       </section>
       
    <script src="sparignited.js"></script>
</body>
</html>
