/*
 * This is the static list of all items existing in the game.
 */

// TODO: check if items need their own ids
// TODO: store should not be a magic number

window.itemsC = { // it is called itemsC for backwards compatibility
    /* Schoolwear */
	schoolMale : {
		id: "schoolMale",
		name: "School shirt, tie and pants",
		Outerwear: true,
		info: true,
		school: true,
		daringRec: 0,
		store: 7,
		cost: 0,
		image: "school_male.jpg"
	},
	schoolFemale : {
		id: "schoolFemale",
		name: "School dress",
		Outerwear: true,
		info: true,
		female: true,
		disabled: true,
		daringRec: 0,
		school: true,
		skirt: true,
		store: 4,
		cost: 90,
		image: "school_female_00.jpg"
	},
	sluttyschoolFemale : {
		id: "sluttyschoolFemale",
		name: "Slutty school dress",
		Outerwear: true,
		info: true,
		female: true,
		slutty: true,
		disabled: true,
		daringRec: 8,
		school: true,
		skirt: true,
		store: 4,
		cost: 0,
		image: "slutty_school_female.jpg"
	},
	rookieUniform : {
		id: "rookieUniform",
		name: "Cheerleader uniform",
		Outerwear: true,
		info: true,
		female: true,
		disabled: true,
		daringRec: 0,
		school: true,
		cheer: true,
		shorts: true,
		store: 4,
		cost: 0,
		image: "rookie_uniform.jpg"
	},
	cheerDress : {
		id: "cheerDress",
		name: "Cheerleader uniform",
		Outerwear: true,
		info: true,
		female: true,
		disabled: true,
		daringRec: 0,
		school: true,
		cheer: true,
		store: 4,
		cost: 0,
		image: "cheer_dress.jpg"
	},
	retroCheer : {
		id: "retroCheer",
		name: "Retro cheerleader uniform",
		Outerwear: true,
		info: true,
		female: true,
		disabled: true,
		daringRec: 0,
		store: 4,
		cost: 0,
		image: "retro_uniform.jpg"
	},
	sluttyCheer : {
		id: "sluttyCheer",
		name: "Slutty cheerleader uniform",
		Outerwear: true,
		info: true,
		female: true,
		slutty: true,
		disabled: true,
		daringRec: 0,
		skirt: true,
		store: 4,
		cost: 0,
		image: "slutty_cheer_00.jpg"
	},	
    /* Female Underwear */
    /* Bras */
	bra: {
		id: "bra",
		name: "Bra",
		Bras: true,
		female: true,
		school: true,
		daringRec: 3,
		cost: 10,
		image: "bra_00.jpg"
	},
	braSexy: {
		id: "braSexy",
		name: "Lacy bra",
		store: 5,
		Bras: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 4,
		cost: 40,
		image: "bra_sexy_00.jpg"
	},
	braLatex: {
		id: "braLatex",
		name: "Latex bra",
		store: 5,
		Bras: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 6,
		cost: 150,
		image: "bra_latex_00.jpg"
	},
    /* Adult Toys */
    /* Chastity Devices */
	chastityDevice: {
		id: "chastityDevice",
		name: "CB-6000 chastity device",
		Chastity: true,
		store: 3,
		cost: 50,
		daringRec: 4,
		female: true,
		image: "chastity_cb6000.jpg"
	},
    /* Anal Plugs */
	buttPlugHeart: {
		id: "buttPlugHeart",
		name: "Butt-plug with jeweled heart",
		AnalPlug: true,
		store: 3,
		cost: 40,
		daringRec: 4,
		female: true,
		image: "buttplug_heart.jpg"
	},
	buttPlugDildo: {
		id: "buttPlugDildo",
		name: "Butt-plug dildo",
		AnalPlug: true,
		store: 3,
		cost: 80,
		daringRec: 6,
		female: true,
		image: "buttplug_dildo.jpg"
	},
	buttPlugVibro: {
		id: "buttPlugVibro",
		name: "Vibro butt-plug",
		AnalPlug: true,
		cost: 200,
		daringRec: 10,
		female: true,
		image: "buttplug_vibro.jpg"
	},
	buttPlugInflate: {
		id: "buttPlugInflate",
		name: "Inflatable butt-plug",
		AnalPlug: true,
		cost: 200,
		daringRec: 10,
		female: true,
		image: "buttplug_inflate_00.jpg"
	},
	remotePlugs: {
		id: "remotePlugs",
		name: "Remote controlled butt-plug",
		NotClothing: true,
		store: 3,
		cost: 0,
		daringRec: 4,
		disabled: true,
		female: true,
		image: "buttplug_vibro.jpg"
	},
    
/// automatically converted after this line ///
	pyjamasMale : {
		id : "pyjamasMale",
		name: "Comfy pajamas",
		Outerwear: true,
		sleepWear: true,
		daringRec: 0,
		store: 7,
		cost: 20,
		image: "male_pyjamas_00.jpg"
	},
	silkyTeddy: {
		id: "silkyTeddy",
		name: "Nightie",
		store: 5,
		Outerwear: true,
		female: true,
		sleepWear: true,
		daringRec: 5,
		cost: 65,
		image: "nightie_00.jpg"
	},
	casualMale : {
		id: "casualMale",
		name: "T-shirt and jeans",
		Outerwear: true,
		daringRec: 0,
		store: 7,
		cost: 0,
		image: "tshirt_jeans_00.jpg"
	},
	skirtTop : {
		id: "skirtTop",
		name: "Skirt and top",
		Outerwear: true,
		female: true,
		store: 4,
		skirt: true,
		daringRec: 5,
		cost: 60,
		image: "skirt_top_00.jpg"
	},
	summerDress: {
		id: "summerDress",
		name: "Light summer dress",
		Outerwear: true,
		female: true,
		store: 4,
		daringRec: 5,
		cost: 50,
		image: "dress_casual_00.jpg"
	},
	sluttyDress : {
		id: "sluttyDress",
		name: "Slutty dress",
		Outerwear: true,
		female: true,
		slutty: true,
		store: 4,
		daringRec: 7,
		cost: 160,
		alts: 3,
		image: "dress_slutty_00.jpg"
	},
	maidOutfit : {
		id: "maidOutfit",
		name: "Maid outfit",
		Outerwear: true,
		female: true,
		slutty: true,
		store: -1,
		daringRec: 13,
		cost: 0,
		image: "maid_outfit_00.jpg"
	},
	cosplayOutfit : {
		id: "cosplayOutfit",
		name: "Cosplay outfit",
		Outerwear: true,
		female: true,
		store: -1,
		daringRec: 5,
		cost: 0,
		image: "cosplay_outfit_00.jpg"
	},
	jocksLucky : {
		id: "jocksLucky",
		name: "Boxers",
		Underwear: true,
		school: true,
		daringRec: 0,
		store: 7,
		cost: 10,
		image: "lucky_jocks_00.jpg"
	},

	corset: {
		id: "corset",
		name: "Corset",
		Bras: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 6,
		cost: 150,
		image: "corset_00.jpg"
	},
	pantiesCotton: {
		id: "pantiesCotton",
		name: "Panties",
		store: 5,
		Underwear: true,
		female: true,
		school: true,
		daringRec: 3,
		cost: 15,
		image: "panties_cotton_00.jpg"
	},
	gString: {
		id: "gString",
		name: "Lacy panties",
		store: 5,
		Underwear: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 3,
		cost: 55,
		image: "panties_sexy_00.jpg"
	},
	pantiesLatex: {
		id: "pantiesLatex",
		name: "Latex panties",
		store: 5,
		Underwear: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 5,
		cost: 80,
		image: "panties_latex_00.jpg"
	},
	cheerBriefs: {
		id: "cheerBriefs",
		name: "Cheer briefs",
		store: 5,
		Underwear: true,
		female: true,
		school: true,
		cheer: true,
		daringRec: 0,
		disabled: true,
		cost: 0,
		image: "cheer_briefs.jpg"
	},
	socks: {
		id: "socks",
		name: "Socks",
		store: 5,
		Stockings: true,
		female: true,
		school: true,
		cheer: true,
		daringRec: 3,
		cost: 20,
		schoolAlt: 2,
		image: "socks_00.jpg"
	},
	stockings: {
		id: "stockings",
		name: "Stockings",
		store: 5,
		Stockings: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 4,
		cost: 50,
		schoolAlt: 5,
		image: "stockings_00.jpg"
	},
	stockingsLatex: {
		id: "stockingsLatex",
		name: "Latex stockings",
		store: 5,
		Stockings: true,
		female: true,
		slutty: true,
		school: true,
		daringRec: 6,
		cost: 200,
		schoolAlt: 0,
		image: "stockings_latex_00.jpg"
	},
	hairband: {
		id: "hairband",
		name: "Hairband",
		Hairband: true,
		store: 4,
		cost: 20,
		daringRec: 6,
		female: true,
		schoolAlt: 4,
		image: "hairband_00.jpg"
	},
	hairbow: {
		id: "hairbow",
		name: "Hairbow",
		Hairband: true,
		store: 4,
		cost: 10,
		daringRec: 5,
		female: true,
		cheer: true,
		schoolAlt: 0,
		image: "hairbow_00.jpg"
	},
	choker: {
		id: "choker",
		name: "Choker",
		Collar: true,
		store: 4,
		cost: 30,
		daringRec: 5,
		female: true,
		image: "choker_00.jpg"
	},
	collar: {
		id: "collar",
		name: "Collar",
		Collar: true,
		store: 3,
		cost: 50,
		slutty: true,
		daringRec: 6,
		female: true,
		image: "collar_00.jpg"
	},
	collarSissy: {
		id: "collarSissy",
		name: "Sissy collar",
		Collar: true,
		store: 3,
		cost: 50,
		slutty: true,
		daringRec: 9,
		female: true,
		image: "collar_sissy_00.jpg"
	},
	collarBitch: {
		id: "collarBitch",
		name: "Bitch collar",
		Collar: true,
		store: 3,
		cost: 50,
		slutty: true,
		daringRec: 8,
		female: true,
		image: "collar_bitch.jpg"
	},
	collarSteel: {
		id: "collarSteel",
		name: "Steel collar",
		Collar: true,
		store: 3,
		cost: 50,
		slutty: true,
		daringRec: 8,
		female: true,
		image: "collar_steel.jpg"
	},
	sunglasses: {
		id: "sunglasses",
		name: "Sunglasses",
		Extra: true,
		store: 4,
		cost: 20,
		daringRec: 0,
		image: "sunglasses_00.jpg"
	},
	glasses: {
		id: "glasses",
		name: "Decorative glasses",
		Extra: true,
		store: 4,
		cost: 20,
		daringRec: 0,
		image: "glasses_00.jpg"
	},
	blindfold: {
		id: "blindfold",
		name: "Blindfold",
		Extra: true,
		store: -1,
		cost: 20,
		daringRec: 0,
		image: "blindfold_00.jpg"
	},
	gag: {
		id: "gag",
		name: "Gag",
		Extra: true,
		store: -1,
		cost: 20,
		daringRec: 0,
		image: "gag_00.jpg"
	},
	diamondStuds: {
		id: "diamondStuds",
		name: "Casual earrings",
		Earrings: true,
		store: 4,
		cost: 50,
		daringRec: 6,
		female: true,
		image: "earrings_casual_00.jpg"
	},
	rubyEarrings: {
		id: "rubyEarrings",
		name: "Classy earrings",
		Earrings: true,
		store: 4,
		cost: 200,
		daringRec: 6,
		female: true,
		image: "earrings_classy_00.jpg"
	},
	hoopsEarrings: {
		id: "hoopsEarrings",
		name: "Flashy earrings",
		Earrings: true,
		store: 4,
		cost: 100,
		slutty: true,
		daringRec: 6,
		female: true,
		image: "earrings_flashy_00.jpg"
	},
	plasticEarrings: {
		id: "plasticEarrings",
		name: "Plastic earrings",
		Earrings: true,
		store: 4,
		cost: 20,
		slutty: true,
		daringRec: 6,
		female: true,
		image: "earrings_plastic_00.jpg"
	},
	sneakers: {
		id: "sneakers",
		name: "Sneakers",
		Shoes: true,
		daringRec: 0,
		store: 7,
		cost: 40,
		image: "sneakers_00.jpg"
	},
	schoolShoes: {
		id: "schoolShoes",
		name: "School shoes",
		Shoes: true,
		school: true,
		daringRec: 0,
		store: 7,
		cost: 40,
		image: "black_shoes_00.jpg"
	},
	flats: {
		id: "flats",
		name: "Flats",
		Shoes: true,
		female: true,
		school: true,
		store: 6,
		daringRec: 5,
		cost: 40,
		schoolAlt: 9,
		image: "flats_00.jpg"
	},
	girlsneakers: {
		id: "girlsneakers",
		name: "Girls' sneakers",
		Shoes: true,
		female: true,
		store: 6,
		daringRec: 5,
		cost: 60,
		image: "girlsneakers_00.jpg"
	},
	cheerSneakers: {
		id: "cheerSneakers",
		name: "Cheer sneakers",
		Shoes: true,
		female: true,
		school: true,
		cheer: true,
		store: 6,
		daringRec: 0,
		disabled: true,
		cost: 0,
		image: "cheer_sneakers.jpg"
	},
	heeledCheer: {
		id: "heeledCheer",
		name: "Heeled cheer sneakers",
		Shoes: true,
		female: true,
		slutty: true,
		heels: true,
		store: 6,
		daringRec: 7,
		disabled: true,
		cost: 0,
		image: "heeled_cheer_sneakers.jpg"
	},
	boots: {
		id: "boots",
		name: "Women's boots",
		Shoes: true,
		female: true,
		school: true,
		store: 6,
		daringRec: 5,
		cost: 80,
		schoolAlt: 5,
		image: "boots_00.jpg"
	},
	heeledBoots: {
		id: "heeledBoots",
		name: "High-heeled boots",
		Shoes: true,
		female: true,
		slutty: true,
		school: true,
		heels: true,
		store: 6,
		daringRec: 5,
		cost: 120,
		schoolAlt: 12,
		image: "boots_heeled_00.jpg"
	},
	highBoots: {
		id: "highBoots",
		name: "Thigh-high heeled boots",
		Shoes: true,
		female: true,
		slutty: true,
		heels: true,
		store: 6,
		daringRec: 7,
		cost: 200,
		image: "boots_high_00.jpg"
	},
	highHeel3: {
		id: "highHeel3",
		name: "High heels",
		Shoes: true,
		female: true,
		slutty: true,
		school: true,
		heels: true,
		store: 6,
		daringRec: 5,
		cost: 100,
		schoolAlt: 9,
		image: "heels_00.jpg"
	},
	stilettoHeels: {
		id: "stilettoHeels",
		name: "Stripper heels",
		Shoes: true,
		female: true,
		slutty: true,
		heels: true,
		store: 6,
		daringRec: 7,
		cost: 300,
		image: "heels_stripper_00.jpg"
	},
	balletHeels: {
		id: "balletHeels",
		name: "Ballet heels",
		Shoes: true,
		female: true,
		slutty: true,
		heels: true,
		store: -1,
		daringRec: 13,
		cost: 300,
		image: "heels_ballet_00.jpg"
	},
	alarmClock: {
		id: "alarmClock",
		name: "Alarm clock",
		store: 0,
		NotClothing: true,
		daringRec: 0,
		image: "alarm_clock.jpg",
		cost: 15
	},
	batteries: {
		id: "batteries",
		name: "Batteries (Generic Brand)",
		store: 0,
		NotClothing: true,
		daringRec: 0,
		image: "battery.jpg",
		cost: 5
	},
	batteriesQuality: {
		id: "batteriesQuality",
		name: "Batteries (Name Brand)",
		store: 0,
		NotClothing: true,
		disabled: true,
		daringRec: 0,
		image: "battery_quality.jpg",
		cost: 10
	},
	spyCamera: {
		id: "spyCamera",
		name: "Wifi spy camera",
		store: 0,
		NotClothing: true,
		daringRec: 0,
		image: "spy_camera.jpg",
		cost: 30
	},
	camera: {
		id: "camera",
		name: "Camera",
		store: 0,
		NotClothing: true,
		daringRec: 0,
		image: "camera.jpg",
		cost: 0
	},
	stunGun: {
		id: "stunGun",
		name: "Stun gun",
		store: 0,
		NotClothing: true,
		disabled: true,
		daringRec: 8,
		image: "stun_gun.jpg",
		cost: 200
	},
	roomGamer: {
		id: "roomGamer",
		name: "Video games themed decorations",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "room_gamer.jpg",
		cost: 100
	},
	roomPunk: {
		id: "roomPunk",
		name: "Various punky decorations",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "room_punk.jpg",
		cost: 80
	},
	roomGeek: {
		id: "roomGeek",
		name: "Fantasy themed decorations",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "room_geek.jpg",
		cost: 120
	},
	roomSport: {
		id: "roomSport",
		name: "Sport themed decorations",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "room_sport.jpg",
		cost: 90
	},
	roomGirly: {
		id: "roomGirly",
		name: "Girly girl room decorations",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "room_girly_girl.jpg",
		cost: 0
	},
	lampClassic: {
		id: "lampClassic",
		name: "Classic lamp",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "lamp_classic.jpg",
		cost: 20
	},
	lampPurple: {
		id: "lampPurple",
		name: "Purple lamp",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "lamp_purple.jpg",
		cost: 35
	},
	lampTube: {
		id: "lampTube",
		name: "Multicolor lamp",
		store: 1,
		NotClothing: true,
		daringRec: 0,
		image: "lamp_tube.jpg",
		cost: 25
	},
	vibrator: {
		id: "vibrator",
		name: "Vibrator",
		store: 3,
		NotClothing: true,
		cost: 60,
		daringRec: 4,
		female: true,
		image: "vibrator.jpg"
	},
	massageOil: {
		id: "massageOil",
		name: "Sensuous massage oil",
		store: 3,
		NotClothing: true,
		cost: 20,
		daringRec: 1,
		female: true,
		image: "massage_oil.jpg"
	},
	playgirlMagazine: {
		id: "playgirlMagazine",
		name: "Playgirl magazine",
		store: -1,
		NotClothing: true,
		cost: 15,
		daringRec: 0,
		image: "playgirl_magazine.jpg",
		female: true
	},
	nailPolish: {
		id: "nailPolish",
		name: "Nail polish",
		store: 4,
		NotClothing: true,
		cost: 10,
		daringRec: 0,
		disabled: true,
		female: true,
		image: "nail_polish.jpg"
	},
	Depilatory: {
		id: "Depilatory",
		name: "Depilatory",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 6,
		cost: 30,
		image: "hr_depilatory.jpg"
	},
	Waxing: {
		id: "Waxing",
		name: "Waxing",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 5,
		cost: 20,
		image: "hr_waxing.jpg"
	},
	LaserHairRemoval: {
		id: "LaserHairRemoval",
		name: "Laser hair removal",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 7,
		cost: 200,
		image: "hr_laser.jpg"
	},
	Manicure: {
		id: "Manicure",
		name: "Manicure",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 7,
		cost: 20,
		image: "manicure.jpg"
	},
	GarishManicure: {
		id: "GarishManicure",
		name: "Garish manicure",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 9,
		cost: 200,
		image: "manicure_garish.jpg"
	},
	PermanentManicure: {
		id: "PermanentManicure",
		name: "Garish manicure",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 9,
		cost: 200,
		image: "catalysator.jpg"
	},
	HairShort: {
		id: "HairShort",
		name: "Short haircut",
		store: 2,
		NotClothing: true,
		surgery: true,
		daringRec: 5,
		cost: 20,
		image: "hair_short_brown.jpg"
	},
	HairMedium: {
		id: "HairMedium",
		name: "Medium haircut",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 30,
		image: "hair_medium_brown.jpg"
	},
	HairLong: {
		id: "HairLong",
		name: "Long haircut",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 50,
		image: "hair_long_brown.jpg"
	},
	HairPigtails: {
		id: "HairPigtails",
		name: "Pigtails",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 30,
		image: "hair_pigtails_brown.jpg"
	},
	HairCurly: {
		id: "HairCurly",
		name: "Curly hair",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 40,
		image: "hair_curly_brown.jpg"
	},
	SubtleMakeup: {
		id: "SubtleMakeup",
		name: "Subtle makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 5,
		cost: 10,
		image: "makeup_subtle.jpg"
	},
	NormalMakeup: {
		id: "NormalMakeup",
		name: "Professional makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 7,
		cost: 30,
		image: "makeup_normal.jpg"
	},
	BimboMakeup: {
		id: "BimboMakeup",
		name: "Bimbo makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 7,
		cost: 50,
		image: "makeup_bimbo.jpg"
	},
	HeavyMakeup: {
		id: "HeavyMakeup",
		name: "Heavy makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 8,
		cost: 15,
		image: "makeup_heavy.jpg"
	},
	PermanentSubtleMakeup: {
		id: "PermanentSubtleMakeup",
		name: "Permanent subtle makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		cost: 100,
		image: "makeup_subtle.jpg"
	},
	PermanentNormalMakeup: {
		id: "PermanentNormalMakeup",
		name: "Permanent makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		cost: 200,
		image: "makeup_normal.jpg"
	},
	PermanentBimboMakeup: {
		id: "PermanentBimboMakeup",
		name: "Permanent bimbo makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		cost: 300,
		image: "makeup_bimbo.jpg"
	},
	PermanentHeavyMakeup: {
		id: "PermanentHeavyMakeup",
		name: "Permanent heavy makeup",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 10,
		cost: 200,
		image: "makeup_heavy.jpg"
	},
	tattooSissy: {
		id: "tattooSissy",
		name: "Sissy tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 8,
		cost: 10,
		image: "tattoo_sissy.jpg"
	},
	tattooSlut: {
		id: "tattooSlut",
		name: "Slut tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 8,
		cost: 60,
		image: "tattoo_slut.jpg"
	},
	tattooStupidWhore: {
		id: "tattooStupidWhore",
		name: "Stupid whore tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 8,
		cost: 40,
		image: "tattoo_stupidwhore.jpg"
	},
	tattooStockings: {
		id: "tattooStockings",
		name: "Stockings tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 80,
		image: "tattoo_stockings.jpg"
	},
	tattooHeart: {
		id: "tattooHeart",
		name: "Heart tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 8,
		cost: 15,
		image: "tattoo_heart.jpg"
	},
	tattooBunny: {
		id: "tattooBunny",
		name: "Bunny tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 20,
		image: "tattoo_bunny.jpg"
	},
	tattooButterfly: {
		id: "tattooButterfly",
		name: "Butterfly tattoo",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 100,
		image: "tattoo_butterfly.jpg"
	},
	beautyMark: {
		id: "beautyMark",
		name: "Beauty mark",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 10,
		image: "beauty_mark.jpg"
	},
	LipsEnhancing: {
		id: "LipsEnhancing",
		name: "Lips enhancing",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 7,
		cost: 30,
		image: "bm_lips.gif"
	},
	LipsEnhancingXL: {
		id: "LipsEnhancingXL",
		name: "Lips enhancing extra",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 8,
		cost: 100,
		image: "bm_lips_xl.gif"
	},
	LipsPermanent: {
		id: "LipsPermanent",
		name: "Lips permanent catalysator",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		disabled: true,
		cost: 500,
		image: "catalysator.jpg"
	},
	AssEnhancing: {
		id: "AssEnhancing",
		name: "Ass enhancing",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 7,
		cost: 30,
		image: "bm_ass.gif"
	},
	AssEnhancingXL: {
		id: "AssEnhancingXL",
		name: "Ass enhancing extra",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 8,
		cost: 100,
		image: "bm_ass_xl.gif"
	},
	AssPermanent: {
		id: "AssPermanent",
		name: "Ass permanent catalysator",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		disabled: true,
		cost: 500,
		image: "catalysator.jpg"
	},
	PenisShrinking: {
		id: "PenisShrinking",
		name: "Penis shrinking",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		disabled: true,
		cost: 20,
		image: "small_penis.jpg"
	},
	PiercingEars: {
		id: "PiercingEars",
		name: "Ears piercing",
		NotClothing: true,
		store: 2,
		daringRec: 6,
		cost: 30,
		image: "piercing_ears.jpg"
	},
	PiercingLips: {
		id: "PiercingLips",
		name: "Lip piercing",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 20,
		image: "piercing_lips.jpg"
	},
	PiercingNose: {
		id: "PiercingNose",
		name: "Nose piercing",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 40,
		image: "piercing_nose.jpg"
	},
	PiercingBelly: {
		id: "PiercingBelly",
		name: "Belly piercing",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 50,
		image: "piercing_belly.jpg"
	},
	PiercingTongue: {
		id: "PiercingTongue",
		name: "Tongue piercing",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 30,
		image: "piercing_tongue.jpg"
	},
	PiercingNipples: {
		id: "PiercingNipples",
		name: "Nipples piercing",
		NotClothing: true,
		store: 2,
		daringRec: 7,
		cost: 80,
		image: "piercing_nipples.jpg"
	},
	breastImplantsA: {
		id: "breastImplantsA",
		name: "Breast implants - small",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 50,
		image: "breast_implants_stage1.gif"
	},
	breastImplantsB: {
		id: "breastImplantsB",
		name: "Breast implants - average",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 100,
		image: "breast_implants_stage2.gif"
	},
	breastImplantsC: {
		id: "breastImplantsC",
		name: "Breast implants - big",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 7,
		cost: 200,
		image: "breast_implants_stage3.gif"
	},
	breastImplantsDD: {
		id: "breastImplantsDD",
		name: "Breast implants - massive",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 8,
		cost: 400,
		image: "breast_implants_stage4.gif"
	},
	breastPermanent: {
		id: "breastPermanent",
		name: "Breast permanent catalysator",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		disabled: true,
		cost: 1000,
		image: "catalysator.jpg"
	},
	analSmoothing1: {
		id: "analSmoothing1",
		name: "Anal smoothing",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 8,
		cost: 50,
		image: "ass_smoothening_1.jpg"
	},
	analSmoothing2: {
		id: "analSmoothing2",
		name: "Anal smoothing plus",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 9,
		cost: 100,
		image: "ass_smoothening_2.jpg"
	},
	analSmoothing3: {
		id: "analSmoothing3",
		name: "Anal smoothing extra",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 10,
		cost: 150,
		image: "ass_smoothening_3.jpg"
	},
	softeningFacial: {
		id: "softeningFacial",
		name: "Facial softening",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 7,
		cost: 100,
		image: "facial_softening.jpg"
	},
	surgeryFacial: {
		id: "surgeryFacial",
		name: "Facial softening extra",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 8,
		cost: 300,
		image: "facial_surgery.jpg"
	},
	noseClassic: {
		id: "noseClassic",
		name: "Classic nose",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 100,
		image: "nose_classic.jpg"
	},
	noseButton: {
		id: "noseButton",
		name: "Button nose",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 200,
		image: "nose_button.jpg"
	},
	nosePiggy: {
		id: "nosePiggy",
		name: "Piggy nose",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 6,
		cost: 20,
		image: "nose_piggy.jpg"
	},
	surgerySexualReassignment: {
		id: "surgerySexualReassignment",
		name: "Female sexual reassignment surgery",
		NotClothing: true,
		store: 2,
		surgery: true,
		daringRec: 10,
		cost: 2000,
		image: "sexual_reassignment.jpg"
	},
	token : {
		id: "token",
		name: "token",
		NotClothing: true,
		daringRec: 0,
		store: -1,
		cost: 0,
		image: "sexual_reassignment.jpg"
	}
};
