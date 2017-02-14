var filmes = ["Asas", "Melodia na Broadway", "Nada de Novo no Front", "Cimarron", "Grande Hotel", "Cavalgada", "Aconteceu Naquela Noite", "O Grande Motim", "Ziegfeld - O Criador de Estrelas", "Émile Zola", "Do Mundo Nada Se Leva", "...E o Vento Levou", "Rebecca - A Mulher Inesquecível", "Como Era Verde o Meu Vale", "Rosa de Esperança", "Casablanca", "O Bom Pastor", "Farrapo Humano", "Os Melhores Anos de Nossas Vidas", "A Luz É Para Todos", "Hamlet", "A Grande Ilusão", "A Malvada", "Sinfonia de Paris", "O Maior Espetáculo da Terra", "A Um Passo da Eternidade", "Sindicato de Ladrões", "Marty", "A Volta ao Mundo em 80 Dias", "A Ponte do Rio Kwai", "Gigi", "Ben-Hur", "Se Meu Apartamento Falasse", "Amor, Sublime Amor", "Lawrence da Arábia", "As Aventuras de Tom Jones", "Minha Bela Dama", "A Noviça Rebelde",  "O Homem Que Não Vendeu Sua Alma", "No Calor da Noite", "Oliver!", "Perdidos na Noite", "Patton, Rebelde ou Herói?", "Operação França", "O Poderoso Chefão", "Golpe de Mestre", "O Poderoso Chefão: Parte 2", "Um Estranho no Ninho", "Rocky, um Lutador",  "Noivo Neurótico, Noiva Nervosa", "O Franco-Atirador", "Kramer Versus Kramer", "Gente Como a Gente", "Carruagens de Fogo", "Gandhi", "Laços de Ternura", "Amadeus", "Entre Dois Amores", "Platoon", "O Último Imperador", "Rain Man", "Conduzindo Miss Daisy", "Dança com Lobos", "O Silêncio dos Inocentes", "Os Imperdoáveis", "A Lista de Schindler", "Forrest Gump - O Contador de Histórias", "Coração Valente", "O Paciente Inglês", "Titanic", "Shakespeare Apaixonado", "Beleza Americana", "Gladiador", "Uma Mente Brilhante", "Chicago", "O Senhor dos Anéis: O Retorno do Rei", "Menina de Ouro", "Crash - No Limite", "Os Infiltrados", "Onde os Fracos Não Têm Vez", "Quem Quer Ser Um Milionário?", "Guerra ao terror", "O Discurso do Rei", "O Artista"];

var movies = ["Wings", "The Broadway Melody", "All Quiet on the Western Front", "Cimarron", "Grand Hotel", "Cavalcade", "It Happened One Night", "Mutiny on the Bounty", "The Great Ziegfeld", "The Life of Emile Zola", "You Can't Take It with You", "Gone With the Wind", "Rebecca", "How Green Was My Valley", "Mrs. Miniver", "Casablanca", "Going My Way", "The Lost Weekend", "The best year of our lives", "Gentleman's Agreement", "Hamlet", "All the King's Men", "All About Eve", "An American in Paris", "The Greatest Show on Earth", "From Here to Eternity", "On The Waterfront", "Marty", "Around The World in 80 Days", "The Bridge on the River Kwai", "Gigi", "Ben-Hur", "The Apartment", "West Side Story", "Lawrence of Arabia", "Tom Jones", "My Fair Lady", "The Sound of Music",  "A Man for All Seasons", "In the Heat of the Night", "Oliver!", "Midnight Cowboy", "Patton", "The French Connection", "The Godfather", "The Sting", "The Godfather: Part II", "One Flew Over the Cuckoo's Nest", "Rocky",  "Annie Hall", "The Deer Hunt", "Kramer Vs. Kramer", "Ordinary People", "Chariots of Fire", "Gandhi", "Terms of Endearment", "Amadeus", "Out of Africa", "Platoon", "The Last Emperor", "Rain Man", "Driving Miss Daisy", "Dance with Wolves", "The Silence of the Lambs", "Unforgiven", "Schindler's List", "Forrest Gump", "Braveheart", "The English Patient", "Titanic", "Shakespeare in Love", "American Beauty", "Gladiator", "A Beautiful Mind", "Chicago", "The Lord of the Rings: The Return of the King", "Million Dollar Baby", "Crash", "The Departed", "No Country for Old Men", "Slumdog Milionaire", "The Hurt Locker", "The King's Speech", "The Artist"];
var time;
var isPortuguese = true;
var arAux = filmes;

$(function(){
	
	$('#language').click(function(e){
		e.preventDefault();
		
		if(isPortuguese){
			isPortuguese = false;
			jQuery(this).text('Português');
			arAux = movies;
			$('#regras').html('Insert the Best Movie Oscar Winner Title for each year');
			$('.desisto').text('give up');
		} else {
			isPortuguese = true;
			jQuery(this).text('English');
			arAux = filmes;
			$('#regras').html('Insira o nome dos vencedores do Oscar de melhor filme dos seguintes anos.');
			$('.desisto').text('desisto');
		}
	});
	
	$('input').blur(function(){
		if($(this).val() == ''){
			$(this).removeClass('errou quasela');
		}
	}).keyup(function(){
		var index = $(this).parent().parent('li').index();
		
		if($(this).val().toLowerCase() == filmes[index].toLowerCase() || $(this).val().toLowerCase() == movies[index].toLowerCase()){
		
			$(this).removeClass('errou quasela').addClass('acertou');
			$(this).parent().parent('li').addClass('acertou');
			
			// Número de acertos
			var total = $('input.acertou').length;
			acertou(total);
		
		} else if( ($(this).val().toLowerCase() == filmes[index].toLowerCase().substr(0, $(this).val().length) ||  $(this).val().toLowerCase() == movies[index].toLowerCase().substr(0, $(this).val().length)) && $(this).val() != ''){
		
			$(this).removeClass('acertou errou').addClass('quasela');
		
		}	else if($(this).val() != '') {
		
			$(this).removeClass('acertou quasela').addClass('errou');
		
		}
		
	}).each(function(){
		var index = $(this).parent().parent('li').index();
		
		if($(this).val().toLowerCase() == filmes[index].toLowerCase() || $(this).val().toLowerCase() == movies[index].toLowerCase()){
		
			$(this).removeClass('errou quasela').addClass('acertou');
		
		} else if( ($(this).val().toLowerCase() == filmes[index].toLowerCase().substr(0, $(this).val().length) || $(this).val().toLowerCase() == movies[index].toLowerCase().substr(0, $(this).val().length)) && $(this).val() != ''){
		
				$(this).removeClass('acertou errou').addClass('quasela');
		
		}	else if($(this).val() != '') {
		
			$(this).removeClass('acertou quasela').addClass('errou');
		
		}
	});
	
	// desisto
	$('.desisto').click(function(){
		var pai = $(this).parent('li');
		var index = pai.index();
		
		pai.addClass('desistiu').find('input').val('').hide()
		pai.children('p').append('<span class="desistiu">'+arAux[index]+'</span>');
		pai.find('.bg').css({'opacity' : '.5'});
		
		var total = $('input.acertou').length;
		desistiu(arAux[index], total);
	});
	
});

function acertou(total){
	clearTimeout(time);
	if(finalizou()){
		
		fim(total);
		
	} else {
		if(isPortuguese){
			preencherAviso('Você acertou <strong>' + total + '</strong> de 84 filmes', 'Eu acertei ' + total + ' de 84 filmes vencedores do oscar. E você?');
		} else {
			preencherAviso('You guessed <strong>' + total + '</strong> of 84 movies', 'I guessed ' + total + ' of 84 Best Movie Oscar Winner. And You?');
		}
		
		
		
		time = setTimeout(function(){
			$('#aviso').removeClass('show');
		}, 5000);
	}
	
}

function desistiu(titulo, total){
	clearTimeout(time);
	if(finalizou()){
		fim(total)
	} else {
		if(isPortuguese){
			preencherAviso('Você desistiu de acertar o título: <strong>' + titulo + '</strong>', '');
		} else {
			preencherAviso('You gave up to guess the title: <strong>' + titulo + '</strong>', '');
		}
		time = setTimeout(function(){
			$('#aviso').removeClass('show');
		}, 5000);
	}
}

function preencherAviso(texto, textoTwitter){
	
	$('#avisoConteudo').html(texto);
	$('#avisoTweet').attr('data-text', texto);
	
	// remove any previous clone
	$('#twitter-share-button-div').empty();
	
	if(textoTwitter != ""){
		// create a clone of the twitter share button template
		var clone = $('.twitter-share-button-template').clone()

		// fix up our clone
		clone.removeAttr("style"); // unhide the clone
		clone.attr("data-text", textoTwitter);
		clone.attr("class", "twitter-share-button"); 

		// copy cloned button into div that we can clear later
		$('#twitter-share-button-div').append(clone);

		// reload twitter scripts to force them to run, converting a to iframe
		$.getScript("http://platform.twitter.com/widgets.js");
		
		$('#aviso').addClass('show').height(60);
		$('#avisoConteudo').css({'margin-bottom' : '17px'});	
	} else {
		$('#aviso').addClass('show').height(10);
		$('#avisoConteudo').css({'margin-bottom' : '0'});
	}
}

function finalizou(){
	var total = $('li.acertou').length + $('li.desistiu').length;
	if(total >= 84){
		return true;
	} else {
		return false;
	}
}

function fim(total){
	if(total < 20){
		if(isPortuguese){
			preencherAviso('Você pode fazer melhor!!! Você acertou <strong>' + total + '</strong> de 84 filmes', 'Eu acertei ' + total + ' de 84 filmes vencedores do oscar. E você?');
		} else {
			preencherAviso('You can do it better!!! You guessed <strong>' + total + '</strong> of 84 movies', 'I guessed ' + total + ' de 84 Best Movie Oscar Winner. And You?');
		}
	} else if( total > 56 ){
		if(isPortuguese){
			preencherAviso('Excelente!!! Você acertou <strong>' + total + '</strong> de 84 filmes', 'Eu acertei ' + total + ' de 84 filmes vencedores do oscar. E você?');
		} else {
			preencherAviso('Excelent!!! You guessed <strong>' + total + '</strong> of 84 movies', 'I guessed ' + total + ' de 84 Best Movie Oscar Winner. And You?');
		}
		
	} else {
		if(isPortuguese){
			preencherAviso('Parabéns!!! Você acertou <strong>' + total + '</strong> de 84 filmes', 'Eu acertei ' + total + ' de 84 filmes vencedores do oscar. E você?');
		} else {
			preencherAviso('Congratulations!!! You guessed <strong>' + total + '</strong> of 84 movies', 'I guessed ' + total + ' de 84 Best Movie Oscar Winner. And You?');
		}
	}
}