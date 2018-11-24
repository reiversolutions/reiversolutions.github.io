var SettingsPage = (function () {
	
	init = function() {
		initSettings();
	}

	initSettings = function() {
		// Create game details
		var settings = [
			{
				title: '灰色の領域',
				subTitle: 'Haiiro no ryōiki',
				short: 'Tokyo.<br/> 2358 anno domini. 1 post-primum contactum.<br/> First contact with an alien species.',
				image: './resources/settings/greyarea.jpg',
				description: [
					'Mankind looked to the stars for its first contact. It had evolved so much. Genetic modifications, nanotechnology and a more enlightened look at faith had unlocked the human brain. Instead they found something more sinister. It revealed itself here on earth, coming from another plane of existence. Demons had started to roam the world.',
					'After the collapse people looked to various ideologies to help guide them or bring meaning to their life. People found faith, others buried themselves in the pursuit of technology or science and some chose to live in symbiosis with the demons.',
					'Jump into the sci fi fantasy of futristic Japan in this over the top anime rpg. Powered by the <a href="/index.html">Steel System</a> it pushes players to describe over the top action and lets them take down oppents much larger than themselves using the special scene rules.'
				],
				links: [
					{ title: 'Setting', url: 'http://bit.ly/2a29AyO' }
				]
			},
			{
				title: 'Paranoia: Britannia Edition',
				short: 'A british take on the classic Paranoia setting.',
				image: './resources/settings/great-british-flag.jpg',
				links: [
					{ title: 'Setting', url: 'http://bit.ly/1dApKhl' }
				],
				disclaimer: 'I recommend using no rules and keeping players on their toes when running Paranoia.'
			},
			{
				title: 'Pokéfly',
				short: 'The Firefly setting where the teraforming process created a new form of life, Pokémon.',
				image: './resources/settings/pokefly.jpg',
				description: [
					'I prefer to think of Pokéfly as an alternative setting for Firefly rather than Pokémon. It takes elements from each franchise to make training monsters a realistic possibility in space where you are barely getting by and doing what you must.',
					'The setting takes what you expect from the Firefly universe but explains that during the terraforming process a new kind of life was created. Unlike the tv series these animals are incredibly feral and dangerous. They cause more of a problem due to the fact the pokéball does not exist. All pokémon in the setting are treat as animals and trained to become loyal companions.',
					'I have put a suggested ruleset section at the bottom of the page but I recommend focusing on space travel and interact with pokémon on a more freeform basis. Because of this I would choose any ruleset you are comfortable with or any rules that are specific to space venturing like the <a href="https://www.drivethrurpg.com/product/128012/Firefly-RolePlaying-Game-Corebook">Firefly core book</a>, <a href="http://eclipsephase.com/">Eclipse Phase</a>, <a href="http://www.mongoosepublishing.com/rpgs/traveller.html">Traveller</a> or <a href="http://www.drivethrurpg.com/product/86467/Stars-Without-Number-Free-Edition">Stars Without Number</a> are a perfect fit.',
					'<blockquote class="blockquote"><p class="mb-0">I support any game based on Firefly, and any game where the first response to a Mr. Mime is heavy gunfire.</p><footer class="blockquote-footer">DrStraightLord, PTU forums</footer></blockquote>'
				],
				links: [
					{ title: 'Setting', url: 'http://bit.ly/1WfZZ8h' },
					{ title: 'Pokémon Tabletop United', url: 'http://pokemontabletop.com' },
					{ title: 'Firefly', url: 'https://www.drivethrurpg.com/product/128012/Firefly-RolePlaying-Game-Corebook' },
					{ title: 'GURPS Pokémon', url: 'https://www.reddit.com/r/rpg/comments/3diokd/ive_been_running_a_gurps_campaign_based_in_a' },
					{ title: 'Pokéthulhu', url: 'https://www.drivethrurpg.com/product/203219/Pokethulhu-Adventure-Game-3rd-Edition' }
				]
			}
		];
	
		// Bind game details
		settings.forEach(setting => {
			appendSetting(setting);
		});
	}
	
	appendSetting = function(setting) {
		var container = buildGame(setting);
		$('#container-settings').append(container);
	}

	buildGame = function(game) {
		var imgContainer = `<div class="col-lg-4"><div class="img-container" ><img src="${game.image}" alt="${game.title}" /></div></div>`,
			detailContainer = `<div class="col-lg-8"><h2 class="mt-1" >${game.title} ${game.subTitle ? `<small>${game.subTitle}</small>` : ''}</h2> <p>${game.short ? game.short : ''}</p></div>`;

		var descriptionStr = "";
		if (game.description) {
			game.description.forEach(desc => {
				descriptionStr += `<p>${desc}</p>`;
			});
		}

		var linksStr = "";
		game.links.forEach(link => {
			linksStr += `<a href="${link.url}" class="link-game" >${link.title}</a>`
		});
		linksStr = `<div class="text-center">${linksStr}</div>`

		var	baseContainer = `<div class="row">${imgContainer} ${detailContainer}</div>`,
			descriptionContainer = `<div class="row"><div class="col-lg-12">${descriptionStr}</div></div>`,
			footerContainer = `<div class="row"><div class="col-lg-12">${linksStr} ${game.disclaimer ? `<p class="text-center"><small class="disclaimer">${game.disclaimer}</small></p>` : ''}</div></div>`,
			container = `<div class="row"><div class="col-lg-12">${baseContainer} ${descriptionContainer} ${footerContainer} <hr/></div></div>`;

		return container;
	}

	return {
		init: init
	};
})();

$( document ).ready(function() {
	SettingsPage.init();
});