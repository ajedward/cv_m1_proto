<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

<!-- Blackbird logging library -->
 <script type="text/javascript" src="blackbird/blackbird.js"></script>
 <link type="text/css" rel="Stylesheet" href="blackbird/blackbird.css">

 <script type="text/javascript" src="css/backbone.js"></script>

 <!-- JQuery library -->
<!--  <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script> -->
<!--  <script src="js/jquery-1.10.2.min.js"></script> -->

 <!-- Chez Valois local JS library -->

 <link href="./css/style.css" rel="stylesheet" type="text/css"
  media="screen" />
  
 <!-- Make sure that html5-specific elements get shown as block elements 
      on old browsers -->
 <style>
   article, aside, audio, canvas, datalist, details, details, figcaption,
     figure, footer, header, hgroup, menu, nav, section, video {
     display: block;
   }
 </style>
 
 <!-- TODO: enable the 'if > IE9' conditional using JS/JQuery -->
 <!-- [if lt IE9]>
   <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js">
   </script>
 <![endif]-->

 <title>Chez Valois</title>
</head>

<body class='loading' onload='cv_onLoad()'>
 <div class='modal'>
 </div>
  <section id='page'>
    <header>
      <div id='logo_container'>
        <!-- TODO: localise the alt tag of the chez valois logo -->
        <img alt="Logo Chez Valois" src='img/cv.png' />
      </div>

<!--       <div id='msg'> -->
<!--         <i>Chez Valois - prototype / preuve de concept : navigation d'images</i> -->
<!--         <i>Utilisez les flèches gauche et droite pour naviguer...</i> -->
<!--       </div> -->
      
        <nav id='mainnav'>
          <ul>
            <li><a href='accueil'>Accueil</a></li>
            <li><a href='valeurs'>Nos valeurs</a></li>
            <li><a href='clients'>Nos clients</a></li>
          </ul>
        </nav>
        
      <div id='nav'>
      
      </div>
    </header>
    
    <script src="js/json2.js"></script>
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/underscore.js"></script>
    <script src="js/backbone.js"></script>
    <script src="js/backbone.localStorage.js"></script>
    <script src="js/portfolios.js"></script>

<script>

</script>

    <script src="js/chezvalois.js" type="text/javascript"></script>
    
    <section id='main'>
    
    <div id='portfolioDescContainer' class='left'>
    </div>
      <section id='portfolioContainer' class='portfolioContainer'>
      
        <section class='portfolio' id='client01_images'>
        
          <article id='client01_image01' class='portfolioElement left'>
          <img id='client01_image01_img' alt='img' class='img' src='img/pf/client01_image01.jpg' /></article>
          
          <article id='client01_image02' class='portfolioElement left'>
          <img id='client01_image02_img' alt='img' class='img' src='img/pf/client01_image02.jpg' /></article>
          
          <article id='client01_image03' class='portfolioElement left'>
          <img id='client01_image03_img' alt='img' class='img' src='img/pf/client01_image03.jpg' /></article>
          
          <article id='client01_image04' class='portfolioElement left'>
          <img id='client01_image04_img' alt='img' class='img' src='img/pf/client01_image04.jpg' /></article>
          
          <article id='client01_image05' class='portfolioElement left'>
          <img id='client01_image05_img' alt='img' class='img' src='img/pf/client01_image05.jpg' /></article>
          
          <article id='client01_image06' class='portfolioElement left'>
          <img id='client01_image06_img' alt='img' class='img' src='img/pf/client01_image06.jpg' /></article>
          
          </section>
          
        <section class='portfolio portfolioDisabled' id='client02_images'>
        
          <article id='client02_image01' class='portfolioElement left'>
          <img id='client02_image01_img' alt='img' class='img' src='img/pf/client02_image01.jpg' /></article>
          
          <article id='client02_image02' class='portfolioElement left'>
          <img id='client02_image02_img' alt='img' class='img' src='img/pf/client02_image02.jpg' /></article>
          
          <article id='client02_image03' class='portfolioElement left'>
          <img id='client02_image03_img' alt='img' class='img' src='img/pf/client02_image03.jpg' /></article>
          
          <article id='client02_image04' class='portfolioElement left'>
          <img id='client02_image04_img' alt='img' class='img' src='img/pf/client02_image04.jpg' /></article>
          
          <article id='client02_image05' class='portfolioElement left'>
          <img id='client02_image05_img' alt='img' class='img' src='img/pf/client02_image05.jpg' /></article>
          
          <article id='client02_image06' class='portfolioElement left'>
          <img id='client02_image06_img' alt='img' class='img' src='img/pf/client02_image06.jpg' /></article>
          
        </section> <!-- section class='portfolio' id='client01_images'  -->
          
       </section>  <!-- section class='portfolioContainer' -->
       
       <section id='portfolioInfo'>
        <nav id='portfolioNav'>
          <ul>
            <li><a id='pnPrevItem' href='#'><img src='img/leftArrow.png' /></a></li>
            <li><a id='pnNextItem' href='#'><img src='img/rightArrow.png' /></a></li>
            <!-- li><a id='pnPrevPortfolio' href='#'>Portfolio Précédent</a></li>
            <li><a id='pnNextPortfolio' href='#'>Portfolio Suivant</a></li -->
            </ul>
        </nav>
       </section>

       <section id='portfolioShortDescContainer'>
          <ul>
            <li id='portfolioShortDesc'></li>
          </ul>
       </section>

       <section id='portfolioInfoArea'>
          <ul>
            <li><img alt='status circle' src='img/nav_sketch_statusCircle.png' /></li>
          </ul>
       </section>

       <section id='portfolioInfoAreaIdxContainer'>
          <ul>
            <li id='portfolioInfoAreaIdx'></li>
          </ul>
       </section>

<!--     <ul class='clientList'> -->
<!--       <li class='clientItem' id='client01'> -->
<!--         <ul class='imageList' id='client01_images'> -->
<!--           <li id='client01_image01'> -->
<!--           <img id='client01_image01_img' alt='img' class='img' src='img/pf/client01_image01.jpg' /></li> -->
<!--           <li id='client01_image02'> -->
<!--           <img id='client01_image02_img' alt='img' class='img' src='img/pf/client01_image02.jpg' /></li> -->
<!--           <li id='client01_image03'> -->
<!--           <img id='client01_image03_img' alt='img' class='img' src='img/pf/client01_image03.jpg' /></li> -->
<!--           <li id='client01_image04'> -->
<!--           <img id='client01_image04_img' alt='img' class='img' src='img/pf/client01_image04.jpg' /></li> -->
<!--           <li id='client01_image05'> -->
<!--           <img id='client01_image05_img' alt='img' class='img' src='img/pf/client01_image05.jpg' /></li> -->
<!--           <li id='client01_image06'> -->
<!--           <img id='client01_image06_img' alt='img' class='img' src='img/pf/client01_image06.jpg' /></li> -->
<!--           <li id='client01_image07'> -->
<!--           <img id='client01_image07_img' alt='img' class='img' src='img/pf/client01_image07.jpg' /></li> -->
<!--           <li id='client01_image08'> -->
<!--           <img id='client01_image08_img' alt='img' class='img' src='img/pf/client01_image08.jpg' /></li> -->
<!--         </ul> -->
<!--       </li> -->
<!--       <li id='client02'> -->
<!--         <ul class='imageList' id='client02_images'> -->
<!--           <li id='client02_image01'> -->
<!--           <img id='client02_image01_img' alt='img' class='img' src='img/pf/client02_image01.jpg' /></li> -->
<!--           <li id='client02_image02'> -->
<!--           <img id='client02_image02_img' alt='img' class='img' src='img/pf/client02_image02.jpg' /></li> -->
<!--           <li id='client02_image03'> -->
<!--           <img id='client02_image03_img' alt='img' class='img' src='img/pf/client02_image03.jpg' /></li> -->
<!--           <li id='client02_image04'> -->
<!--           <img id='client02_image04_img' alt='img' class='img' src='img/pf/client02_image04.jpg' /></li> -->
<!--           <li id='client02_image05'> -->
<!--           <img id='client02_image05_img' alt='img' class='img' src='img/pf/client02_image05.jpg' /></li> -->
<!--           <li id='client02_image07'> -->
<!--           <img id='client02_image08_img' alt='img' class='img' src='img/pf/client02_image08.jpg' /></li> -->
<!--           <li id='client02_image08'> -->
<!--           <img id='client02_image06_img' alt='img' class='img' src='img/pf/client02_image06.jpg' /></li> -->
<!--           <li id='client02_image09'> -->
<!--           <img id='client02_image07_img' alt='img' class='img' src='img/pf/client02_image07.jpg' /></li> -->
<!--           <li id='client02_image10'> -->
<!--           <img id='client02_image09_img' alt='img' class='img' src='img/pf/client02_image09.jpg' /></li> -->
<!--         </ul> -->
<!--       </li> -->
<!--       <li id='client03'>  -->
<!--         <ul class='imageList' id='client03_images'> -->
<!--           <li id='client03_image01'> -->
<!--           <img id='client03_image01_img' alt='img' class='img' src='img/pf/client03_image01.jpg' /></li> -->
<!--           <li id='client03_image02'> -->
<!--           <img id='client03_image02_img' alt='img' class='img' src='img/pf/client03_image02.jpg' /></li> -->
<!--           <li id='client03_image03'> -->
<!--           <img id='client03_image03_img' alt='img' class='img' src='img/pf/client03_image03.jpg' /></li> -->
<!--           <li id='client03_image04'> -->
<!--           <img id='client03_image04_img' alt='img' class='img' src='img/pf/client03_image04.jpg' /></li> -->
<!--           <li id='client03_image05'> -->
<!--           <img id='client03_image05_img' alt='img' class='img' src='img/pf/client03_image05.jpg' /></li> -->
<!--           <li id='client03_image06'> -->
<!--           <img id='client03_image06_img' alt='img' class='img' src='img/pf/client03_image06.jpg' /></li> -->
<!--           <li id='client03_image07'> -->
<!--           <img id='client03_image07_img' alt='img' class='img' src='img/pf/client03_image07.jpg' /></li> -->
<!--         </ul> -->
<!--       </li> -->
<!--     </ul> -->
  
  
    </section>
  
  </section>
  
  <div id='log'>
  </div>

</body>
</html>
