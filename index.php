<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>85 anos do Oscar</title>
		
		<style type="text/css" media="screen">
			/* animação */
			input, #aviso {
				-webkit-transition: all 1s;
				-moz-transition: all 1s;
				-ie-transition: all 1s;
				-o-transition: all 1s;
				transition: all 1s;
			}
			
			body {
				color: #facc74;
				background: black;
				font-family: "Helvetica Neue LT Std", Helvetica, Arial;
				font-weight: 100;
			}
			h1 {
				text-align: center;
				background-image: url(oscarlarge.jpg);
				background-repeat: no-repeat;
				background-position: -810px -2062px;
				width: 696px;
				height: 210px;
				margin: 30px auto;
				text-indent: -9999px;
				overflow: hidden;
			}
			header {
				position: relative;
			}
			header p { text-align: center; }
			ul {
				list-style: none;
			}
			ul li {
				float: left;
				width: 140px;
				height: 290px;
				margin: 30px 10px;
				position: relative;
			}
			ul li span.desisto {
				display: none;
				position: absolute;
				right: 3px;
				top: 3px;
				cursor: pointer;
				font-size: 11px;
				padding: 3px;
			}
				ul li:hover span.desisto {
					display: block;
				}
				ul li.desistiu:hover .desisto, ul li.acertou:hover .desisto {
					display: none;
				}
			ul li span.bg {
				background-image: url(oscarlarge.jpg);
				background-repeat: no-repeat;
				display: block;
				width: 140px;
				height: 210px;
			}
			ul li .ano {
				text-align: center;
				display: block;
				font-weight: 100;
				text-shadow: 1px 1px 0 rgba(255,255,255,.3);
				padding: 10px;
				font-size: 18px;
			}
			input, span.desistiu {
				padding: 5px 10px;
				width: 120px;
				font-size: 12px;
				background-color: #FFF;
				border: 0;
				border-radius: 5px;
				outline: 0 none;
				font-family: "Lucida Grande", Arial;
			}
				input.errou { background-color: red; color: white; }
				input.quasela { background-color: #facc74; color: black; }
				input.acertou { background-color: green; color: white; }
				span.desistiu { display: block; background-color: #555; color: #ccc; }
			
			
			#aviso {
				position: fixed;
				width: 560px;
				left: 50%;
				margin-left: -300px;
				top: -50px;
				height: 10px;
				background-color: #facc74;
				border: yellow;
				border-radius: 3px;
				color: black;
				padding: 20px;
				text-align: center;
				box-shadow: 1px 1px 5px rgba(0,0,0,.3);
				z-index: 999;
				opacity: 0;
			}
				#aviso.show {
					top: 0;
					opacity: 1;
				}
			
			#language {
				position: absolute;
				background-color: #facc74;
				padding: 10px 30px;
				right: 30px;
				top: -30px;
				color: black;
				border-bottom-left-radius: 5px;
				border-bottom-right-radius: 5px;
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<div id="aviso">
			<div id="avisoConteudo"></div>
			<div id="avisoVenda"></div>
			<div id="avisoSocial">
				<div id="avisoTwiter">
					<a href="https://twitter.com/share" class="twitter-share-button-template" style="display: none;" data-url="http://www.caetanoneto.com.br/oscar" data-via="caetano_n" data-lang="pt">Tweetar</a>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
					<div id="twitter-share-button-div"></div>
				</div>
			</div>
		</div>
		<header>
			<h1>85 anos do Oscar</h1>
			<p id="regras">Insira o nome dos vencedores do Oscar de melhor filme dos seguintes anos.</p>
			<a href="#" id="language">English</a>
		</header>
		<section>
			<ul>
			<?php 
				$j = 0;
				for($i = 0; $i < 84; $i++){
					echo "\n <li>";
					echo "\n <span class='desisto'>desisto</span>";
					$j++;
					if($i%10 == 0){
						$j = 0;
					}
					echo "\n	<span class='bg' style='background-position: -". (113+(140*$j)) ."px -".(93+(247*(floor($i/10))))."px '></span>";
					echo "\n  <p><span  class='ano'>" . (1929+$i) . "</span>";
					echo "\n	<input type='text' id='chute".$i."'></p>";
					echo "\n</li>";
				}?>
			</ul>
		</section>
	</body>
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-19818781-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
	<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="j.js" type="text/javascript" charset="utf-8"></script>
</html>