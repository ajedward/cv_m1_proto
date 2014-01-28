<!DOCTYPE html>


<!-- TODO: set lang parameter of html attribute according to browser 
           language or selected language. -->           
<html lang='fr-ca'>


<head>
<!-- TODO: replace with this: <meta charset="utf-8"> -->
 <meta charset="utf-8">
 
 <!-- TODO: replace this with a real conditional for IE9, to include HTML5 shiv to the code.
            This is written by Remy Sharp and is documented in Practical CSS3 p.45 -->
 <!--  [if lt IE9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
 <![endif] -->

 <style>
 
  article, aside, audio, canvas, datalist, details, figcaption,
    figure, footer, header, hgroup, menu, nav, section, video {
    display: block;
 }
 
 </style>
 
 <!--  Blackbird logging framework -->
 <script type="text/javascript" src="blackbird/blackbird.js"></script>
 <link type="text/css" rel="Stylesheet" href="blackbird/blackbird.css"></link>

 <!--  JS that is specific to the Chez Valois web site -->
  <script src="js/chezvalois.js" type="text/javascript"></script>

 <link href="./css/style.css" rel="stylesheet" type="text/css"
	media="screen" />
 <title>Chez Valois</title>
</head>


<body class='loading' onload='cv_onLoad()'>
<div class='modal'>
</div>
<div id='page'>
	<div id='header'>
		<div id='logo_container'>
			<img src='img/cv.png'></img>
		</div>
		<div id='msg'>
			<font size='+1'><i>Chez Valois - prototype / preuve de concept : navigation d'images</i></font><br />
			<font size='+1'><i>Utilisez les flèches gauche et droite pour naviguer...</i></font>
		</div>
		<div id='nav'>
		</div>
	</div>
</div>
<div id='main'>
	<div id='gallery'>
		<ul class='clientList'>
			<li class='clientItem' id='client01'>
				<ul class='imageList' id='client01_images'>
					<li id='client01_image01'>
					<img id='client01_image01_img' class='img' src='img/client01_image01.jpg' /></li>
					<li id='client01_image02'>
					<img id='client01_image02_img' class='img' src='img/client01_image02.jpg' /></li>
					<li id='client01_image03'>
					<img id='client01_image03_img' class='img' src='img/client01_image03.jpg' /></li>
					<li id='client01_image01'>
					<img id='client01_image04_img' class='img' src='img/client01_image04.jpg' /></li>
					<li id='client01_image02'>
					<img id='client01_image05_img' class='img' src='img/client01_image05.jpg' /></li>
					<li id='client01_image03'>
					<img id='client01_image06_img' class='img' src='img/client01_image06.jpg' /></li>
					<li id='client01_image01'>
					<img id='client01_image07_img' class='img' src='img/client01_image07.jpg' /></li>
					<li id='client01_image02'>
					<img id='client01_image08_img' class='img' src='img/client01_image08.jpg' /></li>
				</ul>
			</li>
			<li id='client02'>
				<ul class='imageList' id='client02_images'>
					<li id='client02_image01'>
					<img id='client02_image01_img' class='img' src='img/client02_image01.jpg' /></li>
					<li id='client02_image02'>
					<img id='client02_image02_img' class='img' src='img/client02_image02.jpg' /></li>
					<li id='client02_image03'>
					<img id='client02_image03_img' class='img' src='img/client02_image03.jpg' /></li>
					<li id='client02_image04'>
					<img id='client02_image04_img' class='img' src='img/client02_image04.jpg' /></li>
					<li id='client02_image05'>
					<img id='client02_image05_img' class='img' src='img/client02_image05.jpg' /></li>
					<li id='client02_image06'>
					<img id='client02_image06_img' class='img' src='img/client02_image06.jpg' /></li>
					<li id='client02_image07'>
					<img id='client02_image07_img' class='img' src='img/client02_image07.jpg' /></li>
					<li id='client02_image08'>
					<img id='client02_image08_img' class='img' src='img/client02_image08.jpg' /></li>
					<li id='client02_image09'>
					<img id='client02_image09_img' class='img' src='img/client02_image09.jpg' /></li>
				</ul>
			</li>
			<li id='client03'>
				<ul class='imageList' id='client03_images'>
					<li id='client03_image01'>
					<img id='client03_image01_img' class='img' src='img/client03_image01.jpg' /></li>
					<li id='client03_image02'>
					<img id='client03_image02_img' class='img' src='img/client03_image02.jpg' /></li>
					<li id='client03_image03'>
					<img id='client03_image03_img' class='img' src='img/client03_image03.jpg' /></li>
					<li id='client03_image04'>
					<img id='client03_image04_img' class='img' src='img/client03_image04.jpg' /></li>
					<li id='client03_image05'>
					<img id='client03_image05_img' class='img' src='img/client03_image05.jpg' /></li>
					<li id='client03_image06'>
					<img id='client03_image06_img' class='img' src='img/client03_image06.jpg' /></li>
					<li id='client03_image07'>
					<img id='client03_image07_img' class='img' src='img/client03_image07.jpg' /></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
<div id='log'>
</div>

</body>
</html>
