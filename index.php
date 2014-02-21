<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

<?php

$portfolio01 = array('portfolioId' => '1',
		             'portfolioName' => 'Point G');

$portfolio01 = json_encode($portfolio01);
?>
<!-- Blackbird logging library -->
 <script type="text/javascript" src="blackbird/blackbird.js"></script>
 <link type="text/css" rel="Stylesheet" href="blackbird/blackbird.css">

 <!-- script type="text/javascript" src="js/backbone.js"></script> -->

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
var portfolios = ([
                 	{   "id":1,
                     	"domId": 'client01_image01',
                     	"name":"Point G",
                     	"description":"Point G est un magasin spécialisé dans les produits fins.",
                     	items : [{'id':1, 'name':'Point G - Item 1', 'description':'',
                         	      'src' : 'img/client01_image01.jpg',
                         	      'domId' : 'client01_image01'},
                     	         {'id':2, 'name':'Point G - Item 2', 'description':'',
                             	  'src' : 'img/client01_image02.jpg',
                         	      'domId' : 'client01_image02'},
                     	         {'id':3, 'name':'Point G - Item 3', 'description':'',
                                  'src' : 'img/client01_image03.jpg',
                         	      'domId' : 'client01_image03'},
                     	         {'id':4, 'name':'Point G - Item 4', 'description':'',
                                  'src' : 'img/client01_image04.jpg',
                         	      'domId' : 'client01_image04'},
                     	         {'id':5, 'name':'Point G - Item 5', 'description':'',
                                  'src' : 'img/client01_image05.jpg',
                         	      'domId' : 'client01_image05'},
                      	         {'id':5, 'name':'Point G - Item 6', 'description':'',
                                  'src' : 'img/client01_image06.jpg',
                             	  'domId' : 'client01_image06'}]

        	         },
                 	{   "id":2,
                      	"domId": 'client01_image01',
                 	    "name":"Hedda",
                        "description":"Hedda fait toute sorte de produits pour les cheveux, etc.",
	                  	items : [{'id':1, 'name':'Point G - Item 1', 'description':'',
                   	              'src' : 'img/client02_image01.jpg',
                         	      'domId' : 'client02_image01'},
	                 	         {'id':2, 'name':'Point G - Item 2', 'description':'',
                       	          'src' : 'img/client02_image02.jpg',
                         	      'domId' : 'client02_image02'},
	                 	         {'id':3, 'name':'Point G - Item 3', 'description':'',
                           	      'src' : 'img/client02_image03.jpg',
                         	      'domId' : 'client02_image03'},
	                 	         {'id':4, 'name':'Point G - Item 4', 'description':'',
                               	  'src' : 'img/client02_image04.jpg',
                         	      'domId' : 'client02_image04'},
	                 	         {'id':5, 'name':'Point G - Item 5', 'description':'',
                                  'src' : 'img/client02_image05.jpg',
                         	      'domId' : 'client02_image05'},
	                 	         {'id':6, 'name':'Point G - Item 6', 'description':'',
                                  'src' : 'img/client02_image06.jpg',
                         	      'domId' : 'client02_image06'}]}
         	         ]);
</script>

    <script src="js/chezvalois.js" type="text/javascript"></script>

    <section id='main'>

      <section id='portfolioContainer' class='portfolioContainer'>

        
          <article id='client01_image01' class='portfolioElement left'>
          <img id='client01_image01_img' alt='img' class='img' src='img/client01_image01.jpg' /></article>
          
          <article id='client01_image02' class='portfolioElement left'>
          <img id='client01_image02_img' alt='img' class='img' src='img/client01_image02.jpg' /></article>
          
          <article id='client01_image03' class='portfolioElement left'>
          <img id='client01_image03_img' alt='img' class='img' src='img/client01_image03.jpg' /></article>
          
          <article id='client01_image04' class='portfolioElement left'>
          <img id='client01_image04_img' alt='img' class='img' src='img/client01_image04.jpg' /></article>
          
          <article id='client01_image05' class='portfolioElement left'>
          <img id='client01_image05_img' alt='img' class='img' src='img/client01_image05.jpg' /></article>
          
          <article id='client01_image06' class='portfolioElement left'>
          <img id='client01_image06_img' alt='img' class='img' src='img/client01_image06.jpg' /></article>
          
          </section>
          
        <section class='portfolio' id='client02_images'>
        
          <article id='client02_image01' class='portfolioElement left'>
          <img id='client02_image01_img' alt='img' class='img' src='img/client02_image01.jpg' /></article>
          
          <article id='client02_image02' class='portfolioElement left'>
          <img id='client02_image02_img' alt='img' class='img' src='img/client02_image02.jpg' /></article>
          
          <article id='client02_image03' class='portfolioElement left'>
          <img id='client02_image03_img' alt='img' class='img' src='img/client02_image03.jpg' /></article>
          
          <article id='client02_image04' class='portfolioElement left'>
          <img id='client02_image04_img' alt='img' class='img' src='img/client02_image04.jpg' /></article>
          
          <article id='client02_image05' class='portfolioElement left'>
          <img id='client02_image05_img' alt='img' class='img' src='img/client02_image05.jpg' /></article>
          
          <article id='client02_image06' class='portfolioElement left'>
          <img id='client02_image06_img' alt='img' class='img' src='img/client02_image06.jpg' /></article>
 
        </section> <!-- section class='portfolio' id='client01_images'  -->
          
      </section>  <!-- section id='portfolioContainer' class='portfolioContainer' -->

    </section>

  </section>

  <div id='log'>
  </div>

</body>
</html>
