var JournalPage = (function () {
	
	init = function() {
		initCurrentGames();
		initCurrentCharacters();

		initPreviousGames();
		initPreviousCharacters();
	}

	initCurrentGames = function() {
		var games = [
			{
				title: 'Dullahan',
				system: 'Savage Worlds <small>(Adventure Edition)</small>',
				type: 'Table'
			}
		];

		var $container = $('#container-current-games');
		games.forEach(game => {
			appendGame($container, game);
		});
	}

	initCurrentCharacters = function() {
		var characters = [
			
		];

		var $container = $('#container-current-characters');
		characters.forEach(character => {
			appendCharacter($container, character);
		});
	}

	initPreviousGames = function() {
		var games = [
			{
				title: 'It&apos;s Always Sunny in Mudwater',
				system: 'Fistful of Darkness <small>(BitD)</small>',
				type: 'Table'
			},
			{
				title: 'He&apos;s Just Sleeping',
				system: 'Blades in the Dark',
				type: 'PbP'
			},
			{
				title: 'Panic on the streets of Doskvol',
				system: 'Blades in the Dark',
				type: 'Table'
			},
			{
				title: 'What lies beyond',
				system: 'Mindjammer <small>(FATE)</small>',
				type: 'Online'
			},
			{
				title: 'Eye of the storm',
				system: 'Apocalypse World',
				type: 'Table'
			},
			{
				title: 'In the morning',
				system: 'All Flesh Must Be Eaten',
				type: 'Table'
			},
			{
				title: '<a href="http://www.reddit.com/r/runnerhub" target="_blank">Reddit&apos;s Living Campaign</a>',
				system: 'Shadowrun <small>5e</small>',
				type: 'Online'
			},
			{
				title: 'KISS Saves Santa',
				system: 'Savage Worlds',
				type: 'Table'
			},
			{
				title: 'Way of the Ronin',
				system: 'Wu Xing ~ The Ninja Crusade',
				type: 'Online'
			}
		];
	
		var $container = $('#container-previous-games');
		games.forEach(game => {
			appendGame($container, game);
		});
	}

	initPreviousCharacters = function() {
		var characters = [
			{
				name: 'Cyclopes',
				role: 'One eyed technomancers with bird companions',
				title: 'Before the Storm',
				system: 'Legacy: Life among Ruins <small>2e (PbtA)</small>',
				type: 'Table'
			},
			{
				name: 'Radiant Justice',
				role: 'Necromancer popular girl super-hero',
				title: 'Hoodz',
				system: 'Masks <small>(PbtA)</small>',
				type: 'Table'
			},
			{
				name: 'Marella Lethe',
				role: 'Silver-tongue',
				title: 'Age of Adventure',
				system: 'Savage Worlds <small>Adventure Edition</small>',
				type: 'PbP'
			},
			{
				name: 'Flu',
				role: 'Mutated Influenza super-hero',
				title: 'Hoodz',
				system: 'Masks <small>(PbtA)</small>',
				type: 'Table'
			},
			{
				name: 'James "<i>Haze</i>" Paris Lee',
				role: 'Hound',
				title: 'Thieves in the Night',
				system: 'Blades in the Dark',
				type: 'PbP'
			},
			{
				name: 'Hexblade Sgt Dimble Tauren Nim, Claimer of No Man&apos;s Land, Seeker of Truth, Master of Mor&apos;ganes - The Shadow, Catcher of the Many Falling, Killer of Small Birds, Dark Destroyer of Goblins, Killer of Jaculi, Screaming Vengeance on All Velociraptors',
				role: 'Gnome Hexblade',
				title: 'Tomb of Annihilation',
				system: 'D&D <small>5e</small>',
				type: 'Online'
			},
			{
				name: 'Emerald Sole',
				role: 'Merchant <small>hounded by his Goddess of Trade wife</small>',
				title: 'Chosen by The Unconquered Sun',
				system: 'Exalted <small>3e</small>',
				type: 'Table'
			},
			{
				name: 'The SkyHigh Nests',
				role: 'The Cultivators of the New Flesh',
				title: 'One of the Tribe',
				system: 'Legacy: Life Among Ruins <small>2e</small>',
				type: 'PbP'
			},
			{
				name: 'Bentley <small>(Eon)</small>',
				role: 'Mlox Jack who Wears a sheen of Ice',
				title: 'Masons of Kala',
				system: 'Numenera',
				type: 'Table'
			},
			{
				name: 'Tillie Walker',
				role: 'RipperTech augmented Witch',
				title: 'Jack’s Back',
				system: 'Savage Worlds',
				type: 'Table'
			},
			{
				name: 'Thistle',
				role: 'Whisper',
				title: 'Bakers Dozen',
				system: 'Blades in the Dark',
				type: 'PbP'
			},
			{
				name: 'Greasy Joe',
				role: 'Grease O&apos;mancer',
				title: 'Students of Strange',
				system: 'Mage: The Awakening',
				type: 'Table'
			},
			{
				name: 'Lt Diya Chen',
				role: 'Squad Leader',
				title: 'Compendium – Jade Sky, Crystal Sun',
				system: 'Cortex',
				type: 'Table'
			},
			{
				name: 'Dwayne &apos;N0P&apos; Pipe',
				role: 'Stay at Home Hacker Dad',
				title: 'Beneath a Neon Sky',
				system: 'FATE',
				type: 'Table'
			},
			{
				name: 'Eldridh Holimion',
				role: 'Druid Ranger',
				title: 'Hoard of the Dragon Queen',
				system: 'D&D <small>5e</small>',
				type: 'Table'
			},
			{
				name: 'N/A',
				role: 'A new character made almost every game. 3 player deaths for every 10 npcs deaths.',
				title: 'Gangs of Necromunda',
				system: 'Modified BRP',
				type: 'Table'
			},
			{
				name: 'Yurei',
				role: 'Inari shinto exorcist',
				title: 'Shadows over London',
				system: 'Shadowrun <small>5e</small>',
				type: 'Online'
			},
			{
				name: 'Billy',
				role: 'Pokemon tamer',
				title: 'The Almanac of Insei',
				system: 'Pokemon <small>(FATE)</small>',
				type: 'Table'
			},
			{
				name: 'Buddy Red',
				role: 'Demonic blues player',
				title: 'Spirit of the Century',
				system: 'Spirit of the century <small>(FATE)</small>',
				type: 'Table'
			},
			{
				name: 'アナヤ中村',
				role: 'Monitor support',
				title: 'Devil Survivor 2',
				system: 'Mini 6',
				type: 'Table'
			},
			{
				name: 'Who',
				role: 'Gravekeeper',
				title: 'Numenera',
				system: 'Numenera',
				type: 'Table'
			},
			{
				name: 'Whisper in the Dark',
				role: 'Abyssal',
				title: 'Knights of Winter',
				system: 'Exalted <small>2.5e</small>',
				type: 'Table'
			},
			{
				name: 'Tag',
				role: 'Sniper <small>w/ Drone support</small>',
				title: 'Reddit&apos;s Living Campaign',
				system: 'Shadowrun <small>5e</small>',
				type: 'Online'
			}
		];

		var $container = $('#container-previous-characters');
		characters.forEach(character => {
			appendCharacter($container, character);
		});
	}

	appendGame = function($container, game) {
		$container.append(`<p><strong>${game.title}</strong> - ${game.system}</p>`)
	}

	appendCharacter = function($container, character) {
		var name = `<p class="mb-0"><strong>${character.name}</strong> - ${character.role}</p>`;
		var game = `<p>${character.title} - ${character.system}</p>`
		$container.append(`${name} ${game}`);
	}

	return {
		init: init
	};
})();

$( document ).ready(function() {
	JournalPage.init();
});
