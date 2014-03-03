<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>FitText</title>

<style type="text/css">
body {
	background: #d4ded6;
	font: 16px/1 sans-serif;
	margin: 0px auto;
	padding: 0px;
}

header {
	position: relative;
	width: 100%;
	margin: 0px auto;
	height: 70px;
	background: white;
	width: 100%;
}

h1 {
	text-align: left;
	color: rgba(0, 0, 0, .9);
	font: 60px/1 "Helvetica";
	text-transform: uppercase;
	display: block;
}

h2 {
	text-align: left;
	color: rgba(0, 0, 0, .9);
	font: 16px/1.66 "Helvetica";
	display: block;
	line-height: normal;
}

.definition {
	font-weight: normal;
}

#mainWrap {
	position: relative;
}

#logo {
	width: 15%;
	content:url(http://placehold.it/350x150);
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

#innerContainerHdr {
	width: 100%;
}

header {
	padding-top: 15px;
}

.menuIcon {
	visibility: hidden;
}

.menuMainText {
	visibility: visible;
}

.menuLangText {
	visibility: visible;
}

@media screen and (max-width: 620px) {
	.menuIcon {
		visibility: visible;
	}
	.menuMainText {
		visibility: hidden;
	}
	.menuLangText {
		visibility: hidden;
	}
	#innerContainerHdr {
		width: 100%;
	}
	.menuMainText {
		left: 100px;
	}
}

.right {
	float: right;
}

.left {
	float: left;
}

/* IE7: add the following
.outerContainer {
    display: inline-block;
    top: 0;
}

.middleContainer {
    display: inline-block;
    top: 50%;
    position: relative;
}

.innerContainer {
    display: inline-block;
    top: -50%;
    position: relative;
}
*/
</style>

<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>

	<header>
<!-- 		<div class="outerContainer"> -->
<!-- 			<div class="middleContainer"> -->
				<div id='innerContainerHdr' class="innerContainer">
					<img id='logo' class='logo left'
						src='img/demo/cv_logo_smallest.png' /> <img id='menuIcon'
						class='menuIcon right' src='img/demo/cv_menu_smallest.png' />
					<div id='menuMainText' class='menuMainText left'>
						<div class='menuTextItem left'>Our Mindset</div>
						<div class='menuTextItem left'>About us</div>
						<div class='menuTextItem left'>Our work</div>
						<div class='menuTextItem left'>Contact us</div>
						<div class='menuTextItem left'>What the FAQ's</div>
					</div>
					<div id='menuLangText' class='menuLangText right'>
						<div class='menuTextItem left'>Fr</div>
					</div>
<!-- 				</div> -->
<!-- 			</div> -->
		</div>
	</header>
	<section id='mainWrap'>
		<div class="outerContainer">
			<div class="middleContainer">
				<div class="innerContainer">
					<h2 id="fittext2">
						<strong>Que faisons-nous?</strong>
					</h2>
					<h1 id="fittext1">Grâce au design, nous&nbsp;aidons les entreprises
						et les individus à se connecter.</h1>
					<h3 id="fittext3" class="definition">
						<strong>Le design</strong>. Pour nous, c’est l’intangible devenant
						tangible... c’est « l’imagination constructive »… C’est l’idée
						avec dextérité... À l’origine, le mot « design » signifiait «
						dessein et dessin », mais avec le temps, le mot s’est vu utilisé à
						tort et à travers et son sens, uniquement réduit à « esthétisme ».
						Malheureusement, l’esthétisme ne peut servir à lui seul les
						entreprises d’aujourd’hui, qui ont bien plus besoin de profondeur
						que de maquillage de surface. Bien qu’ouverts d’esprit, nous
						devons admettre notre parti pris pour la définition originale du
						mot... Puristes peut-être ? Mais pour nous, le design est
						innovation, solution, changement… et surtout, une façon de penser
						et de développer des produits et des services, de bâtir des
						marques et de développer des entreprises. Pour nous le design est
						indissociable de la stratégie.
					</h3>

				</div>
			</div>
		</div>
	</section>

	<script
		src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="js/jquery.fittext.js"></script>
	<script type="text/javascript">
// 		$("#fittext1").fitText(1.2, { minFontSize: '24px', maxFontSize: '72px' });
//  		$("#fittext2").fitText(1.2, { minFontSize: '18px', maxFontSize: '36px' });
// 		$("#fittext3").fitText(2.4, { minFontSize: '12px', maxFontSize: '24px' });
		</script>

</body>
</html>
