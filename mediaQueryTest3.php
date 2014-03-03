<!DOCTYPE html>

<html lang='en-us'>

<!-- *** head *** section -->
<head>
<meta charset='utf-8'>
<title>Chez Valois Content pages demo</title>
<link type="text/css" rel="Stylesheet" href="css/reset.css">

<!-- ensure that all html5 elements are recognised as 'block' -->
<style>
article,aside,audio,canvas,datalist,details,figcaption,figure,footer,header,hgroup,menu,nav,section,video
	{
	display: block;
}

body {
	background: #d4ded6;
	font: 16px/1 sans-serif;
	margin: 0px auto;
	padding: 0px;
}

.outerContainer {
	display: table;
	position: absolute;
	height: 100%;
	width: 100%;
}

.middleContainer {
	display: table-cell;
	vertical-align: middle;
}

.innerContainer {
	margin-left: auto;
	margin-right: auto;
	width: 70%; /*whatever width you want*/;
	/*height: 800px;*/
	overflow: auto;
	max-width: 1200px;
}

header {
	display: block;
	height: 70px;
	background: white;
}

#logo {
	height: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

#menuIcon {
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-top: 18px;
}

.innerCenter {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

#leftHdrArea {
	width: 14%;
	height: 100%;
/* 	border: 1px solid black; */
	float: left;
	white-space: nowrap;
	overflow: hidden;
}

#mainHdrArea {
	width: 70%;
	height: 100%;
/* 	border: 1px solid green; */
	float: left;
	white-space: nowrap;
	overflow: hidden;
}

#rightHdrArea {
	width: 14%;
	height: 100%;
/* 	border: 1px solid red; */
	float: left;
	white-space: nowrap;
	overflow: hidden;
}
</style>

<!-- TODO: add fall-back for IE versions 6-8 (see Practical CSS3 p.45 -->
</head>


<!-- *** body *** section -->
<body>
	<header>
		<div id='leftHdrArea'>
			<img id='logo' src='img/demo/cv_logo_medium.png' />
		</div>
		<div id='mainHdrArea'>Main area</div>
		<div id='rightHdrArea'>
			<img id='menuIcon' src='img/demo/cv_menu_smallest.png' />
		</div>
	</header>
	<section id='main'>This is the body content</section>
</body>

</html>