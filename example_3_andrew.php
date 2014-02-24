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
	width: 100%;
	margin: 0px auto;
	height: 85px;
	background-color: white;
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

#outerContainer {
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
}

#middleContainer {
    display: table-cell;
    vertical-align: middle;
}

#innerContainer {
    margin-left: auto;
    margin-right: auto;
    width: 70%; /*whatever width you want*/;
    /*height: 800px;*/
    overflow: auto;
}

/* IE7: add the following
#outerContainer {
    display: inline-block;
    top: 0;
}

#middleContainer {
    display: inline-block;
    top: 50%;
    position: relative;
}

#innerContainer {
    display: inline-block;
    top: -50%;
    position: relative;
}
*/

</style>

<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>

	<header></header>
	<div id="outerContainer">
		<div id="middleContainer">
			<div id="innerContainer">
				<h1 id="fittext1">
					<strong>Que faisons-nous?</strong>
				</h1>
				<h2 id="fittext2">
					Grâce au design, nous&nbsp;aidons les entreprises et les individus
					à se connecter.
					</h1>
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

	<script
		src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="js/jquery.fittext.js"></script>
	<script type="text/javascript">
		$("#fittext1").fitText(1.2, { minFontSize: '24px', maxFontSize: '72px' });
 		$("#fittext2").fitText(1.2, { minFontSize: '18px', maxFontSize: '48px' });
		$("#fittext3").fitText(2.4, { minFontSize: '12px', maxFontSize: '24px' });
		</script>

</body>
</html>
