var GamesPage = (function () {
	
	init = function() {
		initGames();
		initExternal();
		initAddons();
	}

	initGames = function() {
		// Create game details
		var games = [
			{
				title: 'Steel System',
				short: 'The Steel System is a generic rpg that can be used for any rpg setting with little change.',
				image: './resources/games/steel-system.png',
				description: [
					'The Steel System is inspired by the Wushu System but a few things have been changed. I&apos;ve tried to keep the Player/GM retort that I liked about Wushu and added as much as possible to try and entice players into describing more. Task resolution is a bit more individual, making it similar to traditional rpg&apos;s. This has its pros and cons but the positives are that the barrier to entry is lowered and people can be eased into the idea of describing their actions more adventurous. The dice pool has changed from d6 to d10. This is simply because I&apos;m a massive Exalted fan and the more dice, the better.',
					'The steel system has been realised completely free under the <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> meaning that it can be modified or hacked as well as distributed through any means, be it commercial or open source. If you do choose to hack the Steel System please get in touch. I&apos;d love to read the outcome.'
				],
				links: [
					{ title: 'Rules', url: 'http://bit.ly/2b9GGxb' },
					{ title: 'Character Sheet (Spreadsheet)', url: 'https://docs.google.com/spreadsheets/d/1VrIXraE6wsWH2ieaofhanPIxB2ggyHG2DADCLSQOz_E/edit?usp=sharing' },
					{ title: 'Character Sheet (PDF)', url: 'https://drive.google.com/file/d/0B-f_pFUj5mdMVjR4MDVUQlBtT3M/view?usp=sharing' }
				]
			},
			{
				title: 'Kung Fu Panda',
				subTitle: 'The Bodacious rpg',
				short: 'Kung Fu bodacious ass kicking built with the Steel System. Skadoosh.',
				image: './resources/games/panda.png',
				description: [
					'Train at the Jade Palace and help Po defeat evil mmasterminds, protect the valley of peace from dangers and most of all help him get out of trouble.',
					'Kung Fu Panda takes place in a fictional alternate China populated entirely by anthropomorphic animals in an era where martial arts still play an integral role in people&apos;s daily lives. It centers around Po; a Panda, Kung Fu fan boy and also the Dragon Warrior. Awesome.',
					'His task, along with the Furious Five and Master Shifu is to keep the Valley of Peace safe from a never ending series of catastrophes that seems to hit this tranquil little town.',
					'The Steel System handles fast combat motivating your players to provide over the top descriptions to give you the kung fu feel of the cartoon. The book is a stand alone rpg giving you all the rules and advice to play with Po.'
				],
				links: [
					{ title: 'Rules', url: 'http://bit.ly/2acVJ5l' }
				],
				disclaimer: 'Kung Fu Panda &copy; is owned by DreamWorks Animation LLC. All Rights Reserved. I do not own any of the Kung Fu Panda intellectual property or claim to do so.'
			},
			{
				title: 'Hometime Adventures',
				short: 'Hometime Adventures is an rpg set about the house and players take on the roles of children&apos;s toys. They protect the house and sometimes the big bipedal animals that live there.',
				image: './resources/games/hometime-adventures.jpg',
				description: [
					'Characters are unique toys that can sometimes be a Frankenstein&apos;s monster of different toys. The skill system is based very much on the right tool for the job and stitching together different parts may help you overcome obstacles in your way. Although the game can be played with small children. It&apos;s the dark undertones that make the game special. The toys should explore the grim things that are always around children but maybe they don&apos;t see.',
					'This was my entry for <a href="http://halfmeme.com/">Paul Czege</a>&apos;s <small>(Author of <a href="http://halfmeme.com/clay.html" alt="Clay that woke">The Clay that Woke</a>)</small> #threeforged rpg challenge. The idea was to create an anonymous rpg that would be modified by three other contestants to create an rpg that was the combined sum of three rpg designers.',
					'Unfortunately I was one of the unlucky designers who&apos;s entry had no work done on it. Both designers who were assigned to work on my game for stage 2 and 3 did not hand in any changes. If you wish to try and improve my entry, the google doc below has comments switched and it would be much appreciated.'
				],
				links: [
					{ title: 'Rules', url: 'https://docs.google.com/document/d/13HdMIMUQ-34NXWd7MuNNGrN8qdZkFsMv8tvPs_NG4gE/edit?usp=sharing' },
					{ title: '#threeforged RPG challenge', url: 'http://halfmeme.com/threeforged.html' }
				]
			},
			{
				title: 'Demon Hamster Necromancers',
				subTitle: 'of the Abyss',
				short: 'Play as a demonic hamster backed with the power of Necromancy.',
				image: './resources/games/demon-hamster.jpg',
				description: [
					'This was my entry for <a href="http://schirduans.com/david/">David Schirduan</a>&apos;s <small>(Author of <a href="http://schirduans.com/david/my-creations/mythic-mortals" alt="Mythic Mortals">Mythic Mortals</a>, <a href="https://twitter.com/DavidSchirduan" alt="David Schirduan Twitter">@DavidSchirduan</a>)</small> 2016 200 word rpg challenge. The idea was to create a playable roleplaying game in 200 words or less.',
					'I created a game called <a href="https://docs.google.com/document/d/1sqLMDq7a_xWOCBTv8CrRa_27A6SeUiBaXLo7_TD-FF4/edit?usp=sharing" alt="Noughts and Crosses">Demon Hamster Necromancers of the Abyss</a> which is about <strike>rolling a metric ton of dice</strike> a group of necromancers roaming the world creating trouble. These demonic hamsters invade lands or rescue them from greater evil. Those that impose them become their faithful undead servants.',
					'Kill enemies, resurrect minions. Repeat.'
				],
				links: [
					{ title: 'Rules', url: 'https://docs.google.com/document/d/1sqLMDq7a_xWOCBTv8CrRa_27A6SeUiBaXLo7_TD-FF4/edit?usp=sharing' },
					{ title: '200 word RPG challenge', url: 'https://200wordrpg.github.io' }
				]
			},
			{
				title: 'Noughts and Crosses',
				short: 'Is the power they bring really worth having your body become a play thing?',
				image: './resources/games/noughts-and-crosses.png',
				description: [
					'This was my entry for <a href="http://schirduans.com/david/">David Schirduan</a>&apos;s <small>(Author of <a href="http://schirduans.com/david/my-creations/mythic-mortals" alt="Mythic Mortals">Mythic Mortals</a>, <a href="https://twitter.com/DavidSchirduan" alt="David Schirduan Twitter">@DavidSchirduan</a>)</small> 2015 200 word rpg challenge. The idea was to create a playable roleplaying game in 200 words or less.',
					'I created a game called <a href="http://schirduans.com/david/wp-content/uploads/2015/04/NoughtsAndCrosses.pdf" alt="Noughts and Crosses">Noughts and Crosses</a> which is all about conflicting interests and using power over your morals. In the game you play ordinary people who are in touch with another conscious. This could be anything from an ancestral spirit that has watched over your family for generation to something more sinister like a genetically engineered symbiote that a mad scientist injected into you.',
					'Whatever the reason, you hear voices in your head. Sometimes they help you with powers beyond your belief but nothing is free. They have goals of their own. Each time they help it becomes easier and easier for them to take control of your own body.'
				],
				links: [
					{ title: 'Rules', url: 'http://schirduans.com/david/wp-content/uploads/2015/04/NoughtsAndCrosses.pdf' },
					{ title: '200 word RPG challenge', url: 'https://200wordrpg.github.io' }
				]
			}
		];
	
		// Bind game details
		games.forEach(game => {
			appendGame(game);
		});
	}
	
	appendGame = function(game) {
		var container = buildGame(game);
		$('#container-games').append(container);
	}

	initExternal = function() {
		// Create game details
		var external = [
			{
				title: 'Mythic Mortals',
				image: './resources/addons/MythicMortals.jpg',
				short: 'Mythic Mortals is a Tabletop Role-Playing Game where you and your friends play as your real-world selves suddenly granted incredible powers. Created by <a href="" alt="David Schirduan">David Schirduan</a> the game focuses on providing short, satisfying play sessions filled with action-packed combat, it’s perfect for jumping right into the action!',
				description: [
					'Inspired by the work I was doing on my own Heavy Metal rpg <small>(Still work in progress, Metal Overtüre)</small> and the power of Rock/Metal music I was asked to create a playmat for the successful <a href="https://www.kickstarter.com/projects/464972563/mythic-mortals" >Kickstarter</a>.',
					'<h4 class="mt-4">The Metalhead</h4>',
					'The Metalhead focuses on crowd manipulation but also has enough force to headbutt someone through a wall.',
					'<blockquote class="blockquote"><p class="mb-0"><small>Okay, I LOVE the Metalhead! Normally IRL I prefer playing more dulcit tones, but I think I might have a lot of fun with this one. Bards are a great concept in any game, but this &apos;rock bard&apos; may be the best execution I&apos;ve seen ever!</small></p> <footer class="blockquote-footer">Eric Sheldahl, playtester for Mythic Mortals</footer></blockquote>',
					'You can grab this playmat now by picking up the <a href="http://www.drivethrurpg.com/browse/pub/6897/Technical-Grimoire-Games">Crowd Pleasers</a> expansion. Not only do you get the Metalhead but you also get The Gunfighter by <a href="http://lookrobot.co.uk/games/">Grant Howitt</a>, renowned for his fun loving game Goblin Quest and The Wrestler by <a href="https://ndpdesign.com/">Nathan Paoletta</a>, famous for the PbtA game World Wide Wrestling. You&apos;ll also get the adventure "4 Dangerous Bosses" that is being advertised as a serious challenge, even for veterans.'
				],
				links: [
					{ title: 'mythicmortals.com', url: 'http://mythicmortals.com/' },
					{ title: 'Drive Thru RPG', url: 'https://www.drivethrurpg.com/product/204945/Mythic-Mortals-Multiplied?manufacturers_id=6897' }
				]
			}
		];
	
		// Bind game details
		external.forEach(addon => {
			appendExternal(addon);
		});
	}
	
	appendExternal = function(addon) {
		var container = buildGame(addon);
		$('#container-other').append(container);
	}

	initAddons = function() {
		// Create game details
		var addons = [
			{
				title: 'Why are Slimes only found in caves?',
				subTitle: 'FATE Core Supplement',
				image: './resources/addons/gelatinous_blob.jpg',
				description: [
					'A <a href="http://fate-srd.com/" alt="FATE Core Standard">FATE core</a> supplement for building characters by gaining skills and stunts from fallen foes.',
					'Built as a supplement for 2016 200 word rpg challenge.'
				],
				links: [
					{ title: 'Rules', url: 'http://bit.ly/1T7vJYm' }
				]
			},
			{
				title: 'Jedi pre-gens',
				subTitle: 'Wushu RPG Supplement',
				image: './resources/addons/jedi-wushu.png',
				description: [
					'<a href="http://schirduans.com/david/my-creations/jedi-wushu" alt="David Schirduan">Jedi Wushu</a> is the star wars hack of the Wushu system. To get started follow the link to some pre-gen Jedi padawans and their masters.'
				],
				links: [
					{ title: 'Rules', url: 'http://bit.ly/1d8X6n9' }
				]
			},
			{
				title: 'Ninja addons & Apprentices',
				subTitle: 'Wu Xing: The ninja crusade Supplements',
				image: './resources/addons/wuxing-ninja-crusade-logo.jpg',
				description: [
					'A few supplements for <a href="http://thirdeyegames.net/wu-xing-the-ninja-crusade/">Wu Xing: The Ninja Crusade</a> including an apprentice system and various new Wushu'
				],
				links: [
					{ title: 'Apprentice system', url: 'http://bit.ly/1d8X6n9' },
					{ title: 'New Weapons', url: 'http://bit.ly/1LWBqpI' },
					{ title: 'New Way of Mirrors Path', url: 'http://bit.ly/1d8X6n9' },
					{ title: 'Custom Way of Survival Wushu', url: 'http://bit.ly/1d8X6n9' }
				]
			}
		];
	
		// Bind game details
		addons.forEach(addon => {
			appendAddon(addon);
		});
	}
	
	appendAddon = function(addon) {
		var container = buildGame(addon);
		$('#container-addons').append(container);
	}

	buildGame = function(game) {
		var imgContainer = `<div class="col-lg-4"><div class="img-container" ><img src="${game.image}" alt="${game.title}" /></div></div>`,
			detailContainer = `<div class="col-lg-8"><h2 class="mt-1" >${game.title} ${game.subTitle ? `<small>${game.subTitle}</small>` : ''}</h2> <p>${game.short ? game.short : ''}</p></div>`;

		var descriptionStr = "";
		game.description.forEach(desc => {
			descriptionStr += `<p>${desc}</p>`;
		});

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
	GamesPage.init();
});