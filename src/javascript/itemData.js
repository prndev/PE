/*
 * This is the static list of all items existing in the game.
 * 
 * Do not access this directly. Use the functions provided in inventoryCode instead.
 */

// TODO: store should not be a magic number

let baseItemData = [
  {
    "id": "schoolMale",
    "name": "School shirt, tie and pants",
    "Outerwear": true,
    "info": true,
    "school": true,
    "daringRec": 0,
    "store": 7,
    "cost": 0,
    "image": "school_male.jpg"
  },
  {
    "id": "schoolFemale",
    "name": "School dress",
    "Outerwear": true,
    "info": true,
    "female": true,
    "disabled": true,
    "daringRec": 0,
    "school": true,
    "skirt": true,
    "store": 4,
    "cost": 90,
    "image": "school_female_"
  },
  {
    "id": "sluttyschoolFemale",
    "name": "Slutty school dress",
    "Outerwear": true,
    "info": true,
    "female": true,
    "slutty": true,
    "disabled": true,
    "daringRec": 8,
    "school": true,
    "skirt": true,
    "store": 4,
    "cost": 0,
    "image": "slutty_school_female.jpg"
  },
  {
    "id": "rookieUniform",
    "name": "Cheerleader uniform",
    "Outerwear": true,
    "info": true,
    "female": true,
    "disabled": true,
    "daringRec": 0,
    "school": true,
    "cheer": true,
    "shorts": true,
    "store": 4,
    "cost": 0,
    "image": "rookie_uniform.jpg"
  },
  {
    "id": "cheerDress",
    "name": "Cheerleader uniform",
    "Outerwear": true,
    "info": true,
    "female": true,
    "disabled": true,
    "daringRec": 0,
    "school": true,
    "cheer": true,
    "store": 4,
    "cost": 0,
    "image": "cheer_dress.jpg"
  },
  {
    "id": "retroCheer",
    "name": "Retro cheerleader uniform",
    "Outerwear": true,
    "info": true,
    "female": true,
    "disabled": true,
    "daringRec": 0,
    "store": 4,
    "cost": 0,
    "image": "retro_uniform.jpg"
  },
  {
    "id": "sluttyCheer",
    "name": "Slutty cheerleader uniform",
    "Outerwear": true,
    "info": true,
    "female": true,
    "slutty": true,
    "disabled": true,
    "daringRec": 0,
    "skirt": true,
    "store": 4,
    "cost": 0,
    "image": "slutty_cheer_"
  },
  {
    "id": "bra",
    "name": "Bra",
    "Bras": true,
    "female": true,
    "school": true,
    "daringRec": 3,
    "cost": 10,
    "image": "bra_"
  },
  {
    "id": "braSexy",
    "name": "Lacy bra",
    "store": 5,
    "Bras": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 4,
    "cost": 40,
    "image": "bra_sexy_"
  },
  {
    "id": "braLatex",
    "name": "Latex bra",
    "store": 5,
    "Bras": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 6,
    "cost": 150,
    "image": "bra_latex_"
  },
  {
    "id": "chastityDevice",
    "name": "CB-6000 chastity device",
    "Chastity": true,
    "store": 3,
    "cost": 50,
    "daringRec": 4,
    "female": true,
    "image": "chastity_cb6000.jpg"
  },
  {
    "id": "buttPlugHeart",
    "name": "Butt-plug with jeweled heart",
    "AnalPlug": true,
    "store": 3,
    "cost": 40,
    "daringRec": 4,
    "female": true,
    "image": "buttplug_heart.jpg"
  },
  {
    "id": "buttPlugDildo",
    "name": "Butt-plug dildo",
    "AnalPlug": true,
    "store": 3,
    "cost": 80,
    "daringRec": 6,
    "female": true,
    "image": "buttplug_dildo.jpg"
  },
  {
    "id": "buttPlugVibro",
    "name": "Vibro butt-plug",
    "AnalPlug": true,
    "cost": 200,
    "daringRec": 10,
    "female": true,
    "image": "buttplug_vibro.jpg"
  },
  {
    "id": "buttPlugInflate",
    "name": "Inflatable butt-plug",
    "AnalPlug": true,
    "cost": 200,
    "daringRec": 10,
    "female": true,
    "image": "buttplug_inflate_"
  },
  {
    "id": "remotePlugs",
    "name": "Remote controlled butt-plug",
    "NotClothing": true,
    "store": 3,
    "cost": 0,
    "daringRec": 4,
    "disabled": true,
    "female": true,
    "image": "buttplug_vibro.jpg"
  },
  {
    "id": "pyjamasMale",
    "name": "Comfy pajamas",
    "Outerwear": true,
    "sleepWear": true,
    "daringRec": 0,
    "store": 7,
    "cost": 20,
    "image": "male_pyjamas_"
  },
  {
    "id": "silkyTeddy",
    "name": "Nightie",
    "store": 5,
    "Outerwear": true,
    "female": true,
    "sleepWear": true,
    "daringRec": 5,
    "cost": 65,
    "image": "nightie_"
  },
  {
    "id": "casualMale",
    "name": "T-shirt and jeans",
    "Outerwear": true,
    "daringRec": 0,
    "store": 7,
    "cost": 0,
    "image": "tshirt_jeans_"
  },
  {
    "id": "skirtTop",
    "name": "Skirt and top",
    "Outerwear": true,
    "female": true,
    "store": 4,
    "skirt": true,
    "daringRec": 5,
    "cost": 60,
    "image": "skirt_top_"
  },
  {
    "id": "summerDress",
    "name": "Light summer dress",
    "Outerwear": true,
    "female": true,
    "store": 4,
    "daringRec": 5,
    "cost": 50,
    "image": "dress_casual_"
  },
  {
    "id": "sluttyDress",
    "name": "Slutty dress",
    "Outerwear": true,
    "female": true,
    "slutty": true,
    "store": 4,
    "daringRec": 7,
    "cost": 160,
    "alts": 3,
    "image": "dress_slutty_"
  },
  {
    "id": "maidOutfit",
    "name": "Maid outfit",
    "Outerwear": true,
    "female": true,
    "slutty": true,
    "store": -1,
    "daringRec": 13,
    "cost": 0,
    "image": "maid_outfit_"
  },
  {
    "id": "cosplayOutfit",
    "name": "Cosplay outfit",
    "Outerwear": true,
    "female": true,
    "store": -1,
    "daringRec": 5,
    "cost": 0,
    "image": "cosplay_outfit_"
  },
  {
    "id": "jocksLucky",
    "name": "Boxers",
    "Underwear": true,
    "school": true,
    "daringRec": 0,
    "store": 7,
    "cost": 10,
    "image": "lucky_jocks_"
  },
  {
    "id": "corset",
    "name": "Corset",
    "Bras": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 6,
    "cost": 150,
    "image": "corset_"
  },
  {
    "id": "pantiesCotton",
    "name": "Panties",
    "store": 5,
    "Underwear": true,
    "female": true,
    "school": true,
    "daringRec": 3,
    "cost": 15,
    "image": "panties_cotton_"
  },
  {
    "id": "gString",
    "name": "Lacy panties",
    "store": 5,
    "Underwear": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 3,
    "cost": 55,
    "image": "panties_sexy_"
  },
  {
    "id": "pantiesLatex",
    "name": "Latex panties",
    "store": 5,
    "Underwear": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 5,
    "cost": 80,
    "image": "panties_latex_"
  },
  {
    "id": "cheerBriefs",
    "name": "Cheer briefs",
    "store": 5,
    "Underwear": true,
    "female": true,
    "school": true,
    "cheer": true,
    "daringRec": 0,
    "disabled": true,
    "cost": 0,
    "image": "cheer_briefs.jpg"
  },
  {
    "id": "socks",
    "name": "Socks",
    "store": 5,
    "Stockings": true,
    "female": true,
    "school": true,
    "cheer": true,
    "daringRec": 3,
    "cost": 20,
    "schoolAlt": 2,
    "image": "socks_"
  },
  {
    "id": "stockings",
    "name": "Stockings",
    "store": 5,
    "Stockings": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 4,
    "cost": 50,
    "schoolAlt": 5,
    "image": "stockings_"
  },
  {
    "id": "stockingsLatex",
    "name": "Latex stockings",
    "store": 5,
    "Stockings": true,
    "female": true,
    "slutty": true,
    "school": true,
    "daringRec": 6,
    "cost": 200,
    "schoolAlt": 0,
    "image": "stockings_latex_"
  },
  {
    "id": "hairband",
    "name": "Hairband",
    "Hairband": true,
    "store": 4,
    "cost": 20,
    "daringRec": 6,
    "female": true,
    "schoolAlt": 4,
    "image": "hairband_"
  },
  {
    "id": "hairbow",
    "name": "Hairbow",
    "Hairband": true,
    "store": 4,
    "cost": 10,
    "daringRec": 5,
    "female": true,
    "cheer": true,
    "schoolAlt": 0,
    "image": "hairbow_"
  },
  {
    "id": "choker",
    "name": "Choker",
    "Collar": true,
    "store": 4,
    "cost": 30,
    "daringRec": 5,
    "female": true,
    "image": "choker_"
  },
  {
    "id": "collar",
    "name": "Collar",
    "Collar": true,
    "store": 3,
    "cost": 50,
    "slutty": true,
    "daringRec": 6,
    "female": true,
    "image": "collar_"
  },
  {
    "id": "collarSissy",
    "name": "Sissy collar",
    "Collar": true,
    "store": 3,
    "cost": 50,
    "slutty": true,
    "daringRec": 9,
    "female": true,
    "image": "collar_sissy_"
  },
  {
    "id": "collarBitch",
    "name": "Bitch collar",
    "Collar": true,
    "store": 3,
    "cost": 50,
    "slutty": true,
    "daringRec": 8,
    "female": true,
    "image": "collar_bitch.jpg"
  },
  {
    "id": "collarSteel",
    "name": "Steel collar",
    "Collar": true,
    "store": 3,
    "cost": 50,
    "slutty": true,
    "daringRec": 8,
    "female": true,
    "image": "collar_steel.jpg"
  },
  {
    "id": "sunglasses",
    "name": "Sunglasses",
    "Extra": true,
    "store": 4,
    "cost": 20,
    "daringRec": 0,
    "image": "sunglasses_"
  },
  {
    "id": "glasses",
    "name": "Decorative glasses",
    "Extra": true,
    "store": 4,
    "cost": 20,
    "daringRec": 0,
    "image": "glasses_"
  },
  {
    "id": "blindfold",
    "name": "Blindfold",
    "Extra": true,
    "store": -1,
    "cost": 20,
    "daringRec": 0,
    "image": "blindfold_"
  },
  {
    "id": "gag",
    "name": "Gag",
    "Extra": true,
    "store": -1,
    "cost": 20,
    "daringRec": 0,
    "image": "gag_"
  },
  {
    "id": "diamondStuds",
    "name": "Casual earrings",
    "Earrings": true,
    "store": 4,
    "cost": 50,
    "daringRec": 6,
    "female": true,
    "image": "earrings_casual_"
  },
  {
    "id": "rubyEarrings",
    "name": "Classy earrings",
    "Earrings": true,
    "store": 4,
    "cost": 200,
    "daringRec": 6,
    "female": true,
    "image": "earrings_classy_"
  },
  {
    "id": "hoopsEarrings",
    "name": "Flashy earrings",
    "Earrings": true,
    "store": 4,
    "cost": 100,
    "slutty": true,
    "daringRec": 6,
    "female": true,
    "image": "earrings_flashy_"
  },
  {
    "id": "plasticEarrings",
    "name": "Plastic earrings",
    "Earrings": true,
    "store": 4,
    "cost": 20,
    "slutty": true,
    "daringRec": 6,
    "female": true,
    "image": "earrings_plastic_"
  },
  {
    "id": "sneakers",
    "name": "Sneakers",
    "Shoes": true,
    "daringRec": 0,
    "store": 7,
    "cost": 40,
    "image": "sneakers_"
  },
  {
    "id": "schoolShoes",
    "name": "School shoes",
    "Shoes": true,
    "school": true,
    "daringRec": 0,
    "store": 7,
    "cost": 40,
    "image": "black_shoes_"
  },
  {
    "id": "flats",
    "name": "Flats",
    "Shoes": true,
    "female": true,
    "school": true,
    "store": 6,
    "daringRec": 5,
    "cost": 40,
    "schoolAlt": 9,
    "image": "flats_"
  },
  {
    "id": "girlsneakers",
    "name": "Girls' sneakers",
    "Shoes": true,
    "female": true,
    "store": 6,
    "daringRec": 5,
    "cost": 60,
    "image": "girlsneakers_"
  },
  {
    "id": "cheerSneakers",
    "name": "Cheer sneakers",
    "Shoes": true,
    "female": true,
    "school": true,
    "cheer": true,
    "store": 6,
    "daringRec": 0,
    "disabled": true,
    "cost": 0,
    "image": "cheer_sneakers.jpg"
  },
  {
    "id": "heeledCheer",
    "name": "Heeled cheer sneakers",
    "Shoes": true,
    "female": true,
    "slutty": true,
    "heels": true,
    "store": 6,
    "daringRec": 7,
    "disabled": true,
    "cost": 0,
    "image": "heeled_cheer_sneakers.jpg"
  },
  {
    "id": "boots",
    "name": "Women's boots",
    "Shoes": true,
    "female": true,
    "school": true,
    "store": 6,
    "daringRec": 5,
    "cost": 80,
    "schoolAlt": 5,
    "image": "boots_"
  },
  {
    "id": "heeledBoots",
    "name": "High-heeled boots",
    "Shoes": true,
    "female": true,
    "slutty": true,
    "school": true,
    "heels": true,
    "store": 6,
    "daringRec": 5,
    "cost": 120,
    "schoolAlt": 12,
    "image": "boots_heeled_"
  },
  {
    "id": "highBoots",
    "name": "Thigh-high heeled boots",
    "Shoes": true,
    "female": true,
    "slutty": true,
    "heels": true,
    "store": 6,
    "daringRec": 7,
    "cost": 200,
    "image": "boots_high_"
  },
  {
    "id": "highHeel3",
    "name": "High heels",
    "Shoes": true,
    "female": true,
    "slutty": true,
    "school": true,
    "heels": true,
    "store": 6,
    "daringRec": 5,
    "cost": 100,
    "schoolAlt": 9,
    "image": "heels_"
  },
  {
    "id": "stilettoHeels",
    "name": "Stripper heels",
    "Shoes": true,
    "female": true,
    "slutty": true,
    "heels": true,
    "store": 6,
    "daringRec": 7,
    "cost": 300,
    "image": "heels_stripper_"
  },
  {
    "id": "balletHeels",
    "name": "Ballet heels",
    "Shoes": true,
    "female": true,
    "slutty": true,
    "heels": true,
    "store": -1,
    "daringRec": 13,
    "cost": 300,
    "image": "heels_ballet_"
  },
  {
    "id": "alarmClock",
    "name": "Alarm clock",
    "store": 0,
    "NotClothing": true,
    "daringRec": 0,
    "image": "alarm_clock.jpg",
    "cost": 15
  },
  {
    "id": "batteries",
    "name": "Batteries (Generic Brand)",
    "store": 0,
    "NotClothing": true,
    "daringRec": 0,
    "image": "battery.jpg",
    "cost": 5
  },
  {
    "id": "batteriesQuality",
    "name": "Batteries (Name Brand)",
    "store": 0,
    "NotClothing": true,
    "disabled": true,
    "daringRec": 0,
    "image": "battery_quality.jpg",
    "cost": 10
  },
  {
    "id": "spyCamera",
    "name": "Wifi spy camera",
    "store": 0,
    "NotClothing": true,
    "daringRec": 0,
    "image": "spy_camera.jpg",
    "cost": 30
  },
  {
    "id": "camera",
    "name": "Camera",
    "store": 0,
    "NotClothing": true,
    "daringRec": 0,
    "image": "camera.jpg",
    "cost": 0
  },
  {
    "id": "stunGun",
    "name": "Stun gun",
    "store": 0,
    "NotClothing": true,
    "disabled": true,
    "daringRec": 8,
    "image": "stun_gun.jpg",
    "cost": 200
  },
  {
    "id": "roomGamer",
    "name": "Video games themed decorations",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "room_gamer.jpg",
    "cost": 100
  },
  {
    "id": "roomPunk",
    "name": "Various punky decorations",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "room_punk.jpg",
    "cost": 80
  },
  {
    "id": "roomGeek",
    "name": "Fantasy themed decorations",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "room_geek.jpg",
    "cost": 120
  },
  {
    "id": "roomSport",
    "name": "Sport themed decorations",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "room_sport.jpg",
    "cost": 90
  },
  {
    "id": "roomGirly",
    "name": "Girly girl room decorations",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "room_girly_girl.jpg",
    "cost": 0
  },
  {
    "id": "lampClassic",
    "name": "Classic lamp",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "lamp_classic.jpg",
    "cost": 20
  },
  {
    "id": "lampPurple",
    "name": "Purple lamp",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "lamp_purple.jpg",
    "cost": 35
  },
  {
    "id": "lampTube",
    "name": "Multicolor lamp",
    "store": 1,
    "NotClothing": true,
    "daringRec": 0,
    "image": "lamp_tube.jpg",
    "cost": 25
  },
  {
    "id": "vibrator",
    "name": "Vibrator",
    "store": 3,
    "NotClothing": true,
    "cost": 60,
    "daringRec": 4,
    "female": true,
    "image": "vibrator.jpg"
  },
  {
    "id": "massageOil",
    "name": "Sensuous massage oil",
    "store": 3,
    "NotClothing": true,
    "cost": 20,
    "daringRec": 1,
    "female": true,
    "image": "massage_oil.jpg"
  },
  {
    "id": "playgirlMagazine",
    "name": "Playgirl magazine",
    "store": -1,
    "NotClothing": true,
    "cost": 15,
    "daringRec": 0,
    "image": "playgirl_magazine.jpg",
    "female": true
  },
  {
    "id": "nailPolish",
    "name": "Nail polish",
    "store": 4,
    "NotClothing": true,
    "cost": 10,
    "daringRec": 0,
    "disabled": true,
    "female": true,
    "image": "nail_polish.jpg"
  },
  {
    "id": "Depilatory",
    "name": "Depilatory",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 6,
    "cost": 30,
    "image": "hr_depilatory.jpg"
  },
  {
    "id": "Waxing",
    "name": "Waxing",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 5,
    "cost": 20,
    "image": "hr_waxing.jpg"
  },
  {
    "id": "LaserHairRemoval",
    "name": "Laser hair removal",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 7,
    "cost": 200,
    "image": "hr_laser.jpg"
  },
  {
    "id": "Manicure",
    "name": "Manicure",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 7,
    "cost": 20,
    "image": "manicure.jpg"
  },
  {
    "id": "GarishManicure",
    "name": "Garish manicure",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 9,
    "cost": 200,
    "image": "manicure_garish.jpg"
  },
  {
    "id": "PermanentManicure",
    "name": "Garish manicure",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 9,
    "cost": 200,
    "image": "catalysator.jpg"
  },
  {
    "id": "HairShort",
    "name": "Short haircut",
    "store": 2,
    "NotClothing": true,
    "surgery": true,
    "daringRec": 5,
    "cost": 20,
    "image": "hair_short_brown.jpg"
  },
  {
    "id": "HairMedium",
    "name": "Medium haircut",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 30,
    "image": "hair_medium_brown.jpg"
  },
  {
    "id": "HairLong",
    "name": "Long haircut",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 50,
    "image": "hair_long_brown.jpg"
  },
  {
    "id": "HairPigtails",
    "name": "Pigtails",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 30,
    "image": "hair_pigtails_brown.jpg"
  },
  {
    "id": "HairCurly",
    "name": "Curly hair",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 40,
    "image": "hair_curly_brown.jpg"
  },
  {
    "id": "SubtleMakeup",
    "name": "Subtle makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 5,
    "cost": 10,
    "image": "makeup_subtle.jpg"
  },
  {
    "id": "NormalMakeup",
    "name": "Professional makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 7,
    "cost": 30,
    "image": "makeup_normal.jpg"
  },
  {
    "id": "BimboMakeup",
    "name": "Bimbo makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 7,
    "cost": 50,
    "image": "makeup_bimbo.jpg"
  },
  {
    "id": "HeavyMakeup",
    "name": "Heavy makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 8,
    "cost": 15,
    "image": "makeup_heavy.jpg"
  },
  {
    "id": "PermanentSubtleMakeup",
    "name": "Permanent subtle makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "cost": 100,
    "image": "makeup_subtle.jpg"
  },
  {
    "id": "PermanentNormalMakeup",
    "name": "Permanent makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "cost": 200,
    "image": "makeup_normal.jpg"
  },
  {
    "id": "PermanentBimboMakeup",
    "name": "Permanent bimbo makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "cost": 300,
    "image": "makeup_bimbo.jpg"
  },
  {
    "id": "PermanentHeavyMakeup",
    "name": "Permanent heavy makeup",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 10,
    "cost": 200,
    "image": "makeup_heavy.jpg"
  },
  {
    "id": "tattooSissy",
    "name": "Sissy tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 8,
    "cost": 10,
    "image": "tattoo_sissy.jpg"
  },
  {
    "id": "tattooSlut",
    "name": "Slut tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 8,
    "cost": 60,
    "image": "tattoo_slut.jpg"
  },
  {
    "id": "tattooStupidWhore",
    "name": "Stupid whore tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 8,
    "cost": 40,
    "image": "tattoo_stupidwhore.jpg"
  },
  {
    "id": "tattooStockings",
    "name": "Stockings tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 80,
    "image": "tattoo_stockings.jpg"
  },
  {
    "id": "tattooHeart",
    "name": "Heart tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 8,
    "cost": 15,
    "image": "tattoo_heart.jpg"
  },
  {
    "id": "tattooBunny",
    "name": "Bunny tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 20,
    "image": "tattoo_bunny.jpg"
  },
  {
    "id": "tattooButterfly",
    "name": "Butterfly tattoo",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 100,
    "image": "tattoo_butterfly.jpg"
  },
  {
    "id": "beautyMark",
    "name": "Beauty mark",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 10,
    "image": "beauty_mark.jpg"
  },
  {
    "id": "LipsEnhancing",
    "name": "Lips enhancing",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 7,
    "cost": 30,
    "image": "bm_lips.gif"
  },
  {
    "id": "LipsEnhancingXL",
    "name": "Lips enhancing extra",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 8,
    "cost": 100,
    "image": "bm_lips_xl.gif"
  },
  {
    "id": "LipsPermanent",
    "name": "Lips permanent catalysator",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "disabled": true,
    "cost": 500,
    "image": "catalysator.jpg"
  },
  {
    "id": "AssEnhancing",
    "name": "Ass enhancing",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 7,
    "cost": 30,
    "image": "bm_ass.gif"
  },
  {
    "id": "AssEnhancingXL",
    "name": "Ass enhancing extra",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 8,
    "cost": 100,
    "image": "bm_ass_xl.gif"
  },
  {
    "id": "AssPermanent",
    "name": "Ass permanent catalysator",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "disabled": true,
    "cost": 500,
    "image": "catalysator.jpg"
  },
  {
    "id": "PenisShrinking",
    "name": "Penis shrinking",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "disabled": true,
    "cost": 20,
    "image": "small_penis.jpg"
  },
  {
    "id": "PiercingEars",
    "name": "Ears piercing",
    "NotClothing": true,
    "store": 2,
    "daringRec": 6,
    "cost": 30,
    "image": "piercing_ears.jpg"
  },
  {
    "id": "PiercingLips",
    "name": "Lip piercing",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 20,
    "image": "piercing_lips.jpg"
  },
  {
    "id": "PiercingNose",
    "name": "Nose piercing",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 40,
    "image": "piercing_nose.jpg"
  },
  {
    "id": "PiercingBelly",
    "name": "Belly piercing",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 50,
    "image": "piercing_belly.jpg"
  },
  {
    "id": "PiercingTongue",
    "name": "Tongue piercing",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 30,
    "image": "piercing_tongue.jpg"
  },
  {
    "id": "PiercingNipples",
    "name": "Nipples piercing",
    "NotClothing": true,
    "store": 2,
    "daringRec": 7,
    "cost": 80,
    "image": "piercing_nipples.jpg"
  },
  {
    "id": "breastImplantsA",
    "name": "Breast implants - small",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 50,
    "image": "breast_implants_stage1.gif"
  },
  {
    "id": "breastImplantsB",
    "name": "Breast implants - average",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 100,
    "image": "breast_implants_stage2.gif"
  },
  {
    "id": "breastImplantsC",
    "name": "Breast implants - big",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 7,
    "cost": 200,
    "image": "breast_implants_stage3.gif"
  },
  {
    "id": "breastImplantsDD",
    "name": "Breast implants - massive",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 8,
    "cost": 400,
    "image": "breast_implants_stage4.gif"
  },
  {
    "id": "breastPermanent",
    "name": "Breast permanent catalysator",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "disabled": true,
    "cost": 1000,
    "image": "catalysator.jpg"
  },
  {
    "id": "analSmoothing1",
    "name": "Anal smoothing",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 8,
    "cost": 50,
    "image": "ass_smoothening_1.jpg"
  },
  {
    "id": "analSmoothing2",
    "name": "Anal smoothing plus",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 9,
    "cost": 100,
    "image": "ass_smoothening_2.jpg"
  },
  {
    "id": "analSmoothing3",
    "name": "Anal smoothing extra",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 10,
    "cost": 150,
    "image": "ass_smoothening_3.jpg"
  },
  {
    "id": "softeningFacial",
    "name": "Facial softening",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 7,
    "cost": 100,
    "image": "facial_softening.jpg"
  },
  {
    "id": "surgeryFacial",
    "name": "Facial softening extra",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 8,
    "cost": 300,
    "image": "facial_surgery.jpg"
  },
  {
    "id": "noseClassic",
    "name": "Classic nose",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 100,
    "image": "nose_classic.jpg"
  },
  {
    "id": "noseButton",
    "name": "Button nose",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 200,
    "image": "nose_button.jpg"
  },
  {
    "id": "nosePiggy",
    "name": "Piggy nose",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 6,
    "cost": 20,
    "image": "nose_piggy.jpg"
  },
  {
    "id": "surgerySexualReassignment",
    "name": "Female sexual reassignment surgery",
    "NotClothing": true,
    "store": 2,
    "surgery": true,
    "daringRec": 10,
    "cost": 2000,
    "image": "sexual_reassignment.jpg"
  },
  {
    "id": "token",
    "name": "token",
    "NotClothing": true,
    "daringRec": 0,
    "store": -1,
    "cost": 0,
    "image": "sexual_reassignment.jpg"
  }
];

let itemVariants = [
  {
    "id": "schoolFemale",
    "variants": [
      {
        "name": "Female School Dress with Tartan Skirt and Neck Tie",
        "variant": "00"
      },
      {
        "name": "Female School Dress with Tartan Skirt and Bow Tie",
        "variant": "01"
      }
    ]
  },
  {
    "id": "sluttyCheer",
    "variants": [
      {
        "name": "Slutty Red and White Cheerleader Uniform with Micro Skirt",
        "variant": "01"
      }
    ]
  },
  {
    "id": "bra",
    "variants": [
      {
        "name": "White Lacy Bra",
        "variant": "00"
      },
      {
        "name": "White Frilly Bra",
        "variant": "01"
      },
      {
        "name": "White Cotton Bra with Frilly Back",
        "variant": "02"
      },
      {
        "name": "White Polkadot Bra with Grey Lace",
        "variant": "03"
      },
      {
        "name": "Pink Satin Bra",
        "variant": "04"
      },
      {
        "name": "Pink Cotton Bra with Blue Bow",
        "variant": "05"
      },
      {
        "name": "Pink Cotton Bra with White Lace Trim",
        "variant": "06"
      },
      {
        "name": "Black Strapless Bra",
        "variant": "07"
      },
      {
        "name": "Blue Cotton Patterned Bra",
        "variant": "08"
      },
      {
        "name": "Green Lacy Bra",
        "variant": "09"
      },
      {
        "name": "Blue and Grey Sports Bra",
        "variant": "10"
      },
      {
        "name": "Red and Grey Sports Bra",
        "variant": "11"
      },
      {
        "name": "White Sports Bra with Grey Straps",
        "variant": "12"
      },
      {
        "name": "Baby Blue Bra",
        "variant": "13"
      },
      {
        "name": "Blue Sports Bra with Pink Trim",
        "variant": "14"
      },
      {
        "name": "Blue Lacy Bra",
        "variant": "15"
      },
      {
        "name": "Grey Lacy Bra",
        "variant": "16"
      },
      {
        "name": "Black Lacy Bra",
        "variant": "17"
      },
      {
        "name": "Pink Long Bra with Pink Straps",
        "variant": "18"
      },
      {
        "name": "Blue Sheer Bra with Black Straps",
        "variant": "19"
      },
      {
        "name": "Cream Cotton Bra",
        "variant": "20"
      },
      {
        "name": "Green Frilly Bra",
        "variant": "21"
      },
      {
        "name": "Black Bra",
        "variant": "22"
      },
      {
        "name": "Black Polkadot Bra with Red Trim and Bow",
        "variant": "40"
      },
      {
        "name": "Red Tartan Sexy Bra",
        "variant": "00"
      },
      {
        "name": "Red Sexy Bra with Black Straps and Trim",
        "variant": "01"
      },
      {
        "name": "Pink Sexy Bra with Black Straps and Bow",
        "variant": "02"
      },
      {
        "name": "Pink Polkadot Sexy Bra with Black Trim",
        "variant": "03"
      },
      {
        "name": "Blue Lacy Sexy Bra with White Straps",
        "variant": "04"
      },
      {
        "name": "Bright Pink and Baby Pink Lacy Sexy Bra",
        "variant": "05"
      },
      {
        "name": "Purple Lacy Sexy Bra with Pink Straps",
        "variant": "06"
      },
      {
        "name": "Pink Sexy Bra with Black Lace",
        "variant": "07"
      },
      {
        "name": "Yellow Satin Sexy Bra with Black Straps and Trim",
        "variant": "08"
      },
      {
        "name": "Purple Sexy Bra with Light Purple Straps and Trim",
        "variant": "09"
      },
      {
        "name": "Purple Sexy Bra with Frilly Trim and Bow",
        "variant": "10"
      },
      {
        "name": "Pink Sexy Low Cut Bra with Black Straps and Bows",
        "variant": "11"
      },
      {
        "name": "Blue Sexy Satin Bra with Black Straps and Trim",
        "variant": "12"
      },
      {
        "name": "Blue Sexy Coton Bra with White Trim",
        "variant": "13"
      },
      {
        "name": "Black Lacy Sexy Bra",
        "variant": "14"
      },
      {
        "name": "Black Sexy Bra with Black Lacing and Bow",
        "variant": "15"
      },
      {
        "name": "Black Sheer Sexy Bra with Black Straps",
        "variant": "16"
      },
      {
        "name": "Pink Sexy Full Cup Bra",
        "variant": "17"
      },
      {
        "name": "Red Lacy Sexy Bra",
        "variant": "18"
      },
      {
        "name": "White Leopard Pink Sexy Bra",
        "variant": "19"
      },
      {
        "name": "Black Lacy Sexy Bra",
        "variant": "20"
      },
      {
        "name": "Black Sheer Lacy Sexy Bra",
        "variant": "21"
      },
      {
        "name": "White Lacy Sexy Bra with Pink Trim",
        "variant": "22"
      },
      {
        "name": "Pink Frilly Sexy Bra",
        "variant": "23"
      },
      {
        "name": "Black Sheer Sexy Bra with Black Straps",
        "variant": "24"
      },
      {
        "name": "Black Sexy Bra with Black Lacy Trim",
        "variant": "25"
      },
      {
        "name": "Pink Sexy Bra with Black Straps and Trim",
        "variant": "26"
      },
      {
        "name": "Pink and Grey Sexy Bra",
        "variant": "27"
      },
      {
        "name": "Black Sexy Bra with Pink Bow and Ribbon",
        "variant": "40"
      },
      {
        "name": "Red Lacy Sexy Bra",
        "variant": "41"
      },
      {
        "name": "Pink Sexy Bra",
        "variant": "60"
      },
      {
        "name": "Pink Sexy Bra",
        "variant": "61"
      },
      {
        "name": "Black Low Cut Latex Bra",
        "variant": "00"
      },
      {
        "name": "Black Full Cup Latex Bra",
        "variant": "01"
      },
      {
        "name": "Black Cutout Latex Bra",
        "variant": "02"
      }
    ]
  },
  {
    "id": "braSexy",
    "variants": [
      {
        "name": "Red Tartan Sexy Bra",
        "variant": "00"
      },
      {
        "name": "Red Sexy Bra with Black Straps and Trim",
        "variant": "01"
      },
      {
        "name": "Pink Sexy Bra with Black Straps and Bow",
        "variant": "02"
      },
      {
        "name": "Pink Polkadot Sexy Bra with Black Trim",
        "variant": "03"
      },
      {
        "name": "Blue Lacy Sexy Bra with White Straps",
        "variant": "04"
      },
      {
        "name": "Bright Pink and Baby Pink Lacy Sexy Bra",
        "variant": "05"
      },
      {
        "name": "Purple Lacy Sexy Bra with Pink Straps",
        "variant": "06"
      },
      {
        "name": "Pink Sexy Bra with Black Lace",
        "variant": "07"
      },
      {
        "name": "Yellow Satin Sexy Bra with Black Straps and Trim",
        "variant": "08"
      },
      {
        "name": "Purple Sexy Bra with Light Purple Straps and Trim",
        "variant": "09"
      },
      {
        "name": "Purple Sexy Bra with Frilly Trim and Bow",
        "variant": "10"
      },
      {
        "name": "Pink Sexy Low Cut Bra with Black Straps and Bows",
        "variant": "11"
      },
      {
        "name": "Blue Sexy Satin Bra with Black Straps and Trim",
        "variant": "12"
      },
      {
        "name": "Blue Sexy Coton Bra with White Trim",
        "variant": "13"
      },
      {
        "name": "Black Lacy Sexy Bra",
        "variant": "14"
      },
      {
        "name": "Black Sexy Bra with Black Lacing and Bow",
        "variant": "15"
      },
      {
        "name": "Black Sheer Sexy Bra with Black Straps",
        "variant": "16"
      },
      {
        "name": "Pink Sexy Full Cup Bra",
        "variant": "17"
      },
      {
        "name": "Red Lacy Sexy Bra",
        "variant": "18"
      },
      {
        "name": "White Leopard Pink Sexy Bra",
        "variant": "19"
      },
      {
        "name": "Black Lacy Sexy Bra",
        "variant": "20"
      },
      {
        "name": "Black Sheer Lacy Sexy Bra",
        "variant": "21"
      },
      {
        "name": "White Lacy Sexy Bra with Pink Trim",
        "variant": "22"
      },
      {
        "name": "Pink Frilly Sexy Bra",
        "variant": "23"
      },
      {
        "name": "Black Sheer Sexy Bra with Black Straps",
        "variant": "24"
      },
      {
        "name": "Black Sexy Bra with Black Lacy Trim",
        "variant": "25"
      },
      {
        "name": "Pink Sexy Bra with Black Straps and Trim",
        "variant": "26"
      },
      {
        "name": "Pink and Grey Sexy Bra",
        "variant": "27"
      },
      {
        "name": "Black Sexy Bra with Pink Bow and Ribbon",
        "variant": "40"
      },
      {
        "name": "Red Lacy Sexy Bra",
        "variant": "41"
      },
      {
        "name": "Pink Sexy Bra",
        "variant": "60"
      },
      {
        "name": "Pink Sexy Bra",
        "variant": "61"
      }
    ]
  },
  {
    "id": "braLatex",
    "variants": [
      {
        "name": "Black Low Cut Latex Bra",
        "variant": "00"
      },
      {
        "name": "Black Full Cup Latex Bra",
        "variant": "01"
      },
      {
        "name": "Black Cutout Latex Bra",
        "variant": "02"
      }
    ]
  },
  {
    "id": "buttPlugInflate",
    "variants": [
      {
        "name": "Inflatable Buttplug (1)",
        "variant": "0"
      },
      {
        "name": "Inflatable Buttplug (2)",
        "variant": "1"
      },
      {
        "name": "Inflatable Buttplug (3)",
        "variant": "2"
      },
      {
        "name": "Inflatable Buttplug (4)",
        "variant": "3"
      },
      {
        "name": "Inflatable Buttplug (5)",
        "variant": "4"
      },
      {
        "name": "Inflatable Buttplug (6)",
        "variant": "5"
      }
    ]
  },
  {
    "id": "pyjamasMale",
    "variants": [
      {
        "name": "Grey Tartan Pyjamas",
        "variant": "00"
      },
      {
        "name": "Black Pyjamas",
        "variant": "01"
      }
    ]
  },
  {
    "id": "silkyTeddy",
    "variants": [
      {
        "name": "Black Satin Teddie",
        "variant": "00"
      },
      {
        "name": "Grey Sheer Satin Nightie",
        "variant": "01"
      },
      {
        "name": "Black Frilly Nightie",
        "variant": "02"
      },
      {
        "name": "Pink Satin Teddie",
        "variant": "03"
      },
      {
        "name": "Yellow Satin Teddie",
        "variant": "04"
      },
      {
        "name": "Black Satin Nightie with Fur",
        "variant": "00"
      }
    ]
  },
  {
    "id": "casualMale",
    "variants": [
      {
        "name": "White T-Shirt and Blue Jeans",
        "variant": "00"
      },
      {
        "name": "Green T-Shirt and Blue Jeans",
        "variant": "01"
      },
      {
        "name": "Grey T-shirt with Striped Long Sleeves and Grey Jeans",
        "variant": "02"
      },
      {
        "name": "White Polo Shirt and Black Jeans",
        "variant": "03"
      }
    ]
  },
  {
    "id": "skirtTop",
    "variants": [
      {
        "name": "Pink Blouse and Blue Denim Skirt",
        "variant": "00"
      },
      {
        "name": "Black Crop Top and Short Red Skirt",
        "variant": "01"
      },
      {
        "name": "Pink Crop Top and Short Purple Skirt",
        "variant": "02"
      },
      {
        "name": "See-Through Black Top and Black Leather Skirt",
        "variant": "03"
      },
      {
        "name": "Polkadot Red Crop Top and Polkadot Black Skirt",
        "variant": "04"
      },
      {
        "name": "Pink Crop Top and Floral Black Skirt",
        "variant": "05"
      },
      {
        "name": "Pink Tied Front Crop Top and Blue Denim Skirt",
        "variant": "06"
      },
      {
        "name": "Black Lacy Top and Black Denim Skirt",
        "variant": "07"
      },
      {
        "name": "White Lacy Top and Pleated Cream Skirt",
        "variant": "08"
      },
      {
        "name": "Long Sleve Pink Blouse and Black Floral Skirt",
        "variant": "09"
      },
      {
        "name": "Purple Crop Top and Blue Denim Skirt",
        "variant": "10"
      },
      {
        "name": "Brown Leather Top and Black Ruffled Leather Skirt",
        "variant": "11"
      },
      {
        "name": "Black Low Cut Polkadot Crop Top and Red Tartan Skirt",
        "variant": "12"
      },
      {
        "name": "Brown Crop Top and Black Denim Skirt with Slit",
        "variant": "13"
      },
      {
        "name": "Pink Blouse with Open Shoulder and Blue Denim Skirt",
        "variant": "14"
      },
      {
        "name": "Blue Striped Top with Purple Tartan Skirt",
        "variant": "15"
      },
      {
        "name": "Plunge Cut Striped Blue and White Long Sleeve Top with Short Tartan Blue and Red Skirt",
        "variant": "16"
      },
      {
        "name": "Black Mesh Top with Short Pink Tartan Skirt",
        "variant": "17"
      }
    ]
  },
  {
    "id": "summerDress",
    "variants": [
      {
        "name": "Yellow Floral Dress",
        "variant": "00"
      },
      {
        "name": "Pink Floral Dress",
        "variant": "01"
      },
      {
        "name": "White Ornate Dress",
        "variant": "02"
      },
      {
        "name": "Short White and Black Frilly Dress with Corset",
        "variant": "03"
      },
      {
        "name": "Yellow Sundress",
        "variant": "04"
      },
      {
        "name": "White Ruffled Dress",
        "variant": "05"
      },
      {
        "name": "Blue Denim Dress with Flowers",
        "variant": "06"
      },
      {
        "name": "Blue and White Sailors Dress",
        "variant": "07"
      },
      {
        "name": "White Striped Dress with Bow Belt",
        "variant": "08"
      },
      {
        "name": "Orange Dress",
        "variant": "09"
      },
      {
        "name": "Blue Denim Dress with Belly Peek Hole",
        "variant": "10"
      },
      {
        "name": "Blue Denim Dress with Buttons",
        "variant": "11"
      },
      {
        "name": "Blue Polkadot Dress with Collar",
        "variant": "12"
      },
      {
        "name": "Green Ornate Dress",
        "variant": "13"
      },
      {
        "name": "White Dress with Black Splash Pattern",
        "variant": "14"
      },
      {
        "name": "Grey Tartan Dress",
        "variant": "15"
      },
      {
        "name": "Blue Denim Long Sleeve Dress",
        "variant": "16"
      },
      {
        "name": "Yellow Dress with White Lacing",
        "variant": "17"
      },
      {
        "name": "White Ornate Dress with Lacing",
        "variant": "18"
      },
      {
        "name": "Blue Dress with Lacing and White Belt",
        "variant": "19"
      },
      {
        "name": "Long Pink Lacy Dress with Black Belt",
        "variant": "20"
      },
      {
        "name": "Long Grey Striped Dress",
        "variant": "21"
      },
      {
        "name": "Pink Floral Dress",
        "variant": "22"
      },
      {
        "name": "Bue Dress with Pink Flamingo Decorations",
        "variant": "23"
      },
      {
        "name": "Long Pink Shoulderless Dress",
        "variant": "24"
      },
      {
        "name": "Pink Sleeveless Dress with Grey Pattern",
        "variant": "25"
      },
      {
        "name": "Plain Pink Sleeveless Dress",
        "variant": "26"
      },
      {
        "name": "White Low Cut Dress",
        "variant": "27"
      },
      {
        "name": "Red Lowcut Polkadot Dress",
        "variant": "28"
      },
      {
        "name": "Sleeveless Red Gingham Dress",
        "variant": "29"
      },
      {
        "name": "White Polkadot Dress",
        "variant": "30"
      },
      {
        "name": "Blue Patterned Sleeveless Dress",
        "variant": "31"
      },
      {
        "name": "Long Blue Shoulderless Denim Dress",
        "variant": "32"
      },
      {
        "name": "White Sleeveless Dress with Flowers",
        "variant": "33"
      },
      {
        "name": "Pink Polkadot Sleeveless Dress",
        "variant": "34"
      },
      {
        "name": "Pink Lacy Dress with White Colar",
        "variant": "35"
      }
    ]
  },
  {
    "id": "sluttyDress",
    "variants": [
      {
        "name": "Low Cut Black Leather Bodycon Dress",
        "variant": "00"
      },
      {
        "name": "Shiny Pink Tubetop and Short Skirt with Pink Armwarmers",
        "variant": "01"
      },
      {
        "name": "Shiny Black Low Cut Short Dress",
        "variant": "02"
      },
      {
        "name": "Long Low Cut Shiny Pink Dress",
        "variant": "03"
      },
      {
        "name": "Frilly Black Low Cut Dress",
        "variant": "04"
      },
      {
        "name": "Frilly Pink Low Cut Dress",
        "variant": "05"
      },
      {
        "name": "Strapless Black Sequin Dress",
        "variant": "06"
      },
      {
        "name": "Shaggy Black Low Cut Dress",
        "variant": "07"
      },
      {
        "name": "Floral Shiny Pink Low Cut Dress",
        "variant": "08"
      },
      {
        "name": "Satin Black Dress with Black Satin Choker",
        "variant": "09"
      },
      {
        "name": "Black See-Through Plunge Neck Dress",
        "variant": "10"
      },
      {
        "name": "Shiny Long Black Dress with Straps",
        "variant": "11"
      },
      {
        "name": "Short Leather Dress with Straps",
        "variant": "12"
      },
      {
        "name": "Stiped Black Leather Dress",
        "variant": "13"
      },
      {
        "name": "Black See-Through Dress with Black Leather Belt",
        "variant": "14"
      },
      {
        "name": "Short Shiny Black Low Cut Dress",
        "variant": "15"
      },
      {
        "name": "Strapless Black Leather Dress",
        "variant": "16"
      },
      {
        "name": "Plunge Cut Black Dress with White and Sivler Stars",
        "variant": "17"
      },
      {
        "name": "Low Cut Black Leather Dress with Belly Peep Holes",
        "variant": "18"
      },
      {
        "name": "Black Low Cut Bodycon Dress with Straps",
        "variant": "19"
      },
      {
        "name": "Pink Low Cut Bodycon Dress",
        "variant": "20"
      },
      {
        "name": "Pink Low Cut Latex Dress with Long Arms",
        "variant": "21"
      },
      {
        "name": "Shiny Pink Low Cut Dress",
        "variant": "22"
      },
      {
        "name": "Low Cut Pink Crop Top and Tight Pink Skirt with Red Bow",
        "variant": "23"
      },
      {
        "name": "Plunge Cut Black Latex Dress",
        "variant": "24"
      },
      {
        "name": "Low Cut Red Polkadot Latex Dress",
        "variant": "25"
      },
      {
        "name": "Plunge Cut Shiny Pink Dress",
        "variant": "26"
      },
      {
        "name": "Low Cut Pink Latex Top and Black Latex Skirt",
        "variant": "27"
      },
      {
        "name": "Shoulderless Low Cut Red Latex Dress",
        "variant": "28"
      },
      {
        "name": "Pink Satin Low Cut Dress",
        "variant": "29"
      },
      {
        "name": "Long Black Low Cut Dress with Flowers",
        "variant": "30"
      },
      {
        "name": "Low Cut Strapless Black and Silver Dress",
        "variant": "31"
      }
    ]
  },
  {
    "id": "maidOutfit",
    "variants": [
      {
        "name": "Frilly French Maid Outfit",
        "variant": "00"
      },
      {
        "name": "Latex Maid Outfit",
        "variant": "01"
      }
    ]
  },
  {
    "id": "cosplayOutfit",
    "variants": []
  },
  {
    "id": "jocksLucky",
    "variants": [
      {
        "name": "Grey Brown Gorilla Boxers",
        "variant": "00"
      },
      {
        "name": "Blue Tartan Boxers",
        "variant": "01"
      },
      {
        "name": "Yellow Flowered Boxers",
        "variant": "02"
      },
      {
        "name": "Plain Grey Boxers",
        "variant": "03"
      },
      {
        "name": "Plain Black Boxers",
        "variant": "04"
      },
      {
        "name": "Plain Black Boxers with White Band",
        "variant": "05"
      },
      {
        "name": "Yellow Ducky Boxers",
        "variant": "06"
      },
      {
        "name": "Red Tartan Boxers",
        "variant": "07"
      }
    ]
  },
  {
    "id": "corset",
    "variants": []
  },
  {
    "id": "pantiesCotton",
    "variants": [
      {
        "name": "White Panties with Lace Side",
        "variant": "00"
      },
      {
        "name": "White Ruffled Panties",
        "variant": "01"
      },
      {
        "name": "White Frilly Panties",
        "variant": "02"
      },
      {
        "name": "White with Grey Polkadot Frilly Panties",
        "variant": "03"
      },
      {
        "name": "Plain Pink Panties with Girly Writing",
        "variant": "04"
      },
      {
        "name": "Pink and White Striped Plain Panties",
        "variant": "05"
      },
      {
        "name": "Plain Pink Panties with White Band",
        "variant": "06"
      },
      {
        "name": "Grey Panties with Koala Logo",
        "variant": "07"
      },
      {
        "name": "Black with White Polkadot Boyshort Panties",
        "variant": "40"
      },
      {
        "name": "Pastel Blue Pain Panties with Frilly White Edges",
        "variant": "60"
      }
    ]
  },
  {
    "id": "gString",
    "variants": [
      {
        "name": "Red Tartan Sexy Panties with Lace Side",
        "variant": "00"
      },
      {
        "name": "Sexy Red Panties with Black Dots and Lacing",
        "variant": "01"
      },
      {
        "name": "Righ Waisted Sexy Pink Panties",
        "variant": "02"
      },
      {
        "name": "Sexy Pink Panties with Balck Dots and Frilly Lacing",
        "variant": "03"
      },
      {
        "name": "Lacy Blue G-String Panties",
        "variant": "04"
      },
      {
        "name": "Lacy Pink and Cream G-String Panties",
        "variant": "05"
      },
      {
        "name": "Lacy Purple G-String Panties",
        "variant": "06"
      },
      {
        "name": "Pink G-String Panteis with Frilly Black Lacing",
        "variant": "07"
      },
      {
        "name": "Sexy Yellow Panties with Black Lacing",
        "variant": "08"
      },
      {
        "name": "Lacy Purple G-String Panties with Black Bow",
        "variant": "09"
      },
      {
        "name": "Frilly Purple G-String Panties",
        "variant": "10"
      },
      {
        "name": "Sexy Lacy Pink Panties with Black Ribbon",
        "variant": "11"
      },
      {
        "name": "Blue and Black Sexy Panties with Ribbon and Lace",
        "variant": "12"
      },
      {
        "name": "Sexy Blue Panties with White Frilly Trim",
        "variant": "13"
      },
      {
        "name": "Lacy Black G-String Panties",
        "variant": "14"
      },
      {
        "name": "Lacy Black Dotted G-String Panties",
        "variant": "15"
      },
      {
        "name": "Lacy and Strappy Black G-String Panties",
        "variant": "16"
      },
      {
        "name": "White Strappy G-String Panties",
        "variant": "17"
      },
      {
        "name": "Frilly Red G-String Panties",
        "variant": "18"
      },
      {
        "name": "Black High Waisted G-String Panties with Pink Bows",
        "variant": "40"
      },
      {
        "name": "Frilly and Strappy Red G-String Panties",
        "variant": "41"
      },
      {
        "name": "Pink Frilly G-String Panties",
        "variant": "60"
      }
    ]
  },
  {
    "id": "pantiesLatex",
    "variants": [
      {
        "name": "Black Full Breif Latex Panties",
        "variant": "00"
      },
      {
        "name": "Black Bikini Latex Panties with Pink Decoration",
        "variant": "01"
      },
      {
        "name": "Black Latex G-String Panties",
        "variant": "02"
      },
      {
        "name": "Pink Latex Panties with Black Bow",
        "variant": "40"
      }
    ]
  },
  {
    "id": "socks",
    "variants": [
      {
        "name": "Black Knee High Socks",
        "variant": "00"
      },
      {
        "name": "Black Over Knee Socks",
        "variant": "01"
      },
      {
        "name": "White Over Knee Socks",
        "variant": "02"
      },
      {
        "name": "White Scrunch Cotton Socks",
        "variant": "03"
      },
      {
        "name": "Black Over Knee Socks with White Strips",
        "variant": "04"
      },
      {
        "name": "White Over Knee Socks with Red Stripes",
        "variant": "05"
      },
      {
        "name": "Grey Over Knee Socks",
        "variant": "06"
      },
      {
        "name": "Grey Knee High Socks",
        "variant": "07"
      },
      {
        "name": "Grey Knee High Socks with Grey Lace",
        "variant": "08"
      },
      {
        "name": "Grey Woolen Knee High Socks",
        "variant": "09"
      },
      {
        "name": "Grey Over Knee Socks with White Lace and Bows",
        "variant": "10"
      },
      {
        "name": "White Knee High Socks with White Lace",
        "variant": "11"
      },
      {
        "name": "White Knee High Socks with Cream Frills",
        "variant": "12"
      },
      {
        "name": "White Over Knee Socks with Red Bows",
        "variant": "13"
      },
      {
        "name": "Yellow Over Knee Socks",
        "variant": "14"
      },
      {
        "name": "Dark Red Over Knee Socks",
        "variant": "15"
      },
      {
        "name": "White Knee High Socks with Pink Stipes and Love Hearts",
        "variant": "16"
      },
      {
        "name": "White Knee High Socks with White Lace",
        "variant": "17"
      },
      {
        "name": "Pink and Purple Knee High Socks",
        "variant": "18"
      },
      {
        "name": "Purple Knee High Socks with Dogs",
        "variant": "19"
      },
      {
        "name": "Blue Diamond Pattern Knee High Socks",
        "variant": "20"
      },
      {
        "name": "Pink and Purple Over Knee Socks",
        "variant": "21"
      },
      {
        "name": "Grey Over Knee Socks with Cream Hearts",
        "variant": "22"
      },
      {
        "name": "Pink Over Knee Socks with White Stripes",
        "variant": "06"
      },
      {
        "name": "Red Knee High Socks with Pink Stripes",
        "variant": "24"
      },
      {
        "name": "Pink Knee High Socks with Green Diamonds",
        "variant": "25"
      },
      {
        "name": "Grey, Red and Black Diamond Knee High Socks",
        "variant": "26"
      },
      {
        "name": "White Ankle Socks with Red Writing",
        "variant": "43"
      }
    ]
  },
  {
    "id": "stockings",
    "variants": [
      {
        "name": "Black Thigh High Stockings",
        "variant": "00"
      },
      {
        "name": "Black Knee High Stockings",
        "variant": "01"
      },
      {
        "name": "Black Thigh High Stockings with Black Bands",
        "variant": "02"
      },
      {
        "name": "Black Sheer Knee High Stockings",
        "variant": "03"
      },
      {
        "name": "Black Sheer Thigh High Stockings with Black Lace",
        "variant": "04"
      },
      {
        "name": "Black Sheer Thigh High Stockings with Black Lace and Suspenders",
        "variant": "00"
      },
      {
        "name": "White Sheer Thigh High Stockings",
        "variant": "06"
      },
      {
        "name": "Natural Thigh High Stockings",
        "variant": "07"
      },
      {
        "name": "Natural Thigh High Stockings with Lace and White Suspenders",
        "variant": "08"
      },
      {
        "name": "White Thigh High Stockings with Lace",
        "variant": "09"
      },
      {
        "name": "Natural Thigh High Stockings with White Lace",
        "variant": "10"
      },
      {
        "name": "White Thigh High Stockings with White Lace and Suspenders",
        "variant": "11"
      },
      {
        "name": "White Thigh High Stockings with White Lace and Bow",
        "variant": "12"
      },
      {
        "name": "Black Sheer Thigh High Stockings with Black Dots and Band",
        "variant": "13"
      },
      {
        "name": "Sheer Thigh High Stockings with Black Feet and Bow Decoration",
        "variant": "14"
      },
      {
        "name": "Black Sheer Thigh High Stockings with Red Bows",
        "variant": "15"
      },
      {
        "name": "Red Knee High Fishnet Stockings",
        "variant": "00"
      },
      {
        "name": "Red Thigh High Stockings with Red Bows",
        "variant": "17"
      },
      {
        "name": "Black Knee High Stockings with Black Fishnet Pattern",
        "variant": "18"
      },
      {
        "name": "White Knee High Stockings with White Laces",
        "variant": "19"
      },
      {
        "name": "Black Thigh High Stockings with Black Peepholes",
        "variant": "20"
      },
      {
        "name": "Black Thigh High Stockings with Black Laces",
        "variant": "21"
      },
      {
        "name": "White Thigh High Stockings with White Ribbons and Red Lovehearts",
        "variant": "22"
      },
      {
        "name": "Pink Thigh High Fishnet Stockings",
        "variant": "23"
      },
      {
        "name": "Black Over Knee Stockings",
        "variant": "24"
      },
      {
        "name": "Black Thigh High Stockings with White Bows and Bone Decoration",
        "variant": "25"
      },
      {
        "name": "Pink Fishnet Tights",
        "variant": "26"
      },
      {
        "name": "Black Fishnet Stockings",
        "variant": "27"
      },
      {
        "name": "Red Fishnet Stockings",
        "variant": "28"
      },
      {
        "name": "Black Thigh High Stockings with Red Bows",
        "variant": "39"
      },
      {
        "name": "Black Toeless Thigh High Latex Stockings",
        "variant": "00"
      },
      {
        "name": "Black Knee High Latex Stockings with Pink Frills",
        "variant": "01"
      },
      {
        "name": "Black Knee High Latex Stockings",
        "variant": "02"
      },
      {
        "name": "Pink Thigh High Latex Stockings with Black Bands",
        "variant": "03"
      },
      {
        "name": "Black Thigh High Latex Stockings",
        "variant": "39"
      }
    ]
  },
  {
    "id": "stockingsLatex",
    "variants": [
      {
        "name": "Black Toeless Thigh High Latex Stockings",
        "variant": "00"
      },
      {
        "name": "Black Knee High Latex Stockings with Pink Frills",
        "variant": "01"
      },
      {
        "name": "Black Knee High Latex Stockings",
        "variant": "02"
      },
      {
        "name": "Pink Thigh High Latex Stockings with Black Bands",
        "variant": "03"
      },
      {
        "name": "Black Thigh High Latex Stockings",
        "variant": "39"
      }
    ]
  },
  {
    "id": "hairband",
    "variants": [
      {
        "name": "Red Hairband with Red Bow",
        "variant": "00"
      },
      {
        "name": "Black Hairband with Diamonds",
        "variant": "01"
      },
      {
        "name": "Pink Hairband with Pink Bow",
        "variant": "02"
      },
      {
        "name": "Blue Hairband with Blue Bow",
        "variant": "03"
      },
      {
        "name": "Black Hairband with RBlack Bow",
        "variant": "04"
      },
      {
        "name": "Blue and Silver Tiara",
        "variant": "05"
      },
      {
        "name": "Tortoise Brown Hairband",
        "variant": "06"
      },
      {
        "name": "Pink Satin Hairband with Bow",
        "variant": "07"
      },
      {
        "name": "White Hairband with Pink Bow",
        "variant": "08"
      },
      {
        "name": "Black Cat Ear Hairband",
        "variant": "09"
      }
    ]
  },
  {
    "id": "hairbow",
    "variants": [
      {
        "name": "Tartan Red Hairbow",
        "variant": "00"
      },
      {
        "name": "Black Hairbow",
        "variant": "01"
      },
      {
        "name": "Pink Hairbow",
        "variant": "02"
      },
      {
        "name": "Purple Hairbow",
        "variant": "06"
      },
      {
        "name": "White Hairbow with Pink Polkadots",
        "variant": "04"
      },
      {
        "name": "Black Hairbow with White Polkadots",
        "variant": "05"
      },
      {
        "name": "Pink Hairbow",
        "variant": "06"
      },
      {
        "name": "Red Hairbow with Diamond Loveheart",
        "variant": "07"
      },
      {
        "name": "Pink Hairbow with Shiny Silver",
        "variant": "08"
      },
      {
        "name": "Light Green Hairbow",
        "variant": "09"
      },
      {
        "name": "Pink Hairbow with White Polkadots",
        "variant": "10"
      },
      {
        "name": "Red Velvet Hairbow",
        "variant": "1"
      },
      {
        "name": "Rainbow Hairbow",
        "variant": "12"
      },
      {
        "name": "Pink and Purple Hairbow with Flower",
        "variant": "13"
      },
      {
        "name": "Blue Gingham Hairbow",
        "variant": "14"
      },
      {
        "name": "Red, White and Black Hairbow",
        "variant": "43"
      }
    ]
  },
  {
    "id": "choker",
    "variants": [
      {
        "name": "Black Choker with White Lace and Black Bow",
        "variant": "00"
      },
      {
        "name": "Black Choker with Gold Clasp and Chain",
        "variant": "01"
      },
      {
        "name": "Black Lacy Choker",
        "variant": "02"
      },
      {
        "name": "Black Choker with Love Heart Clasp and Diamonds",
        "variant": "03"
      },
      {
        "name": "Black Gothic Choker with Cross and Chains",
        "variant": "04"
      },
      {
        "name": "Diamond Choker with Black Ribbon and Bow",
        "variant": "05"
      },
      {
        "name": "Small Black Choker with Metal Pendant",
        "variant": "00"
      },
      {
        "name": "Black Choker with Metal Cat Shaped Clasp",
        "variant": "07"
      }
    ]
  },
  {
    "id": "collar",
    "variants": [
      {
        "name": "Pink Collar with Gold Love Heart",
        "variant": "00"
      },
      {
        "name": "Black Leather Collar with Purple Jewels",
        "variant": "01"
      },
      {
        "name": "Black Leather Collar with Metal Ring",
        "variant": "02"
      },
      {
        "name": "Black Collar with Metal Ring and Spikes",
        "variant": "03"
      },
      {
        "name": "Black Collar with Bell",
        "variant": "04"
      },
      {
        "name": "White Leather Collar with Gold Love Heart",
        "variant": "05"
      },
      {
        "name": "Red Collar with Black Lace",
        "variant": "06"
      },
      {
        "name": "Black Bitch Collar",
        "variant": "bitch"
      },
      {
        "name": "Pink Sissy Collar with Dog Tag",
        "variant": "00"
      },
      {
        "name": "Pink Sissy Collar with Metal Ring",
        "variant": "01"
      },
      {
        "name": "Metal Collar with Metal Ring",
        "variant": "steel"
      }
    ]
  },
  {
    "id": "collarSissy",
    "variants": [
      {
        "name": "Pink Sissy Collar with Dog Tag",
        "variant": "00"
      },
      {
        "name": "Pink Sissy Collar with Metal Ring",
        "variant": "01"
      }
    ]
  },
  {
    "id": "sunglasses",
    "variants": [
      {
        "name": "Aviator Sunglasses with Pink Lenses",
        "variant": "00"
      },
      {
        "name": "Wayferer Sunglasses with Pink Frames",
        "variant": "01"
      },
      {
        "name": "Wayferer Sunglasses with Pink and Black Frames",
        "variant": "00"
      },
      {
        "name": "Pink Plastic Ladies Sunglasses",
        "variant": "03"
      },
      {
        "name": "Black Ladies Sunglasses with Metal Decoration",
        "variant": "04"
      },
      {
        "name": "Aviator Sunglasses with Grey Lenses",
        "variant": "05"
      },
      {
        "name": "Metal Framed Sunglasses with Yellow Lenses",
        "variant": "06"
      },
      {
        "name": "Tortoise Brown Ladies Sunglasses",
        "variant": "07"
      },
      {
        "name": "Tortise Red Ladies Sunglasses with Gold Trim",
        "variant": "08"
      },
      {
        "name": "Black Sunglasses with Blue Highlights",
        "variant": "09"
      },
      {
        "name": "Red Ladies Sunglasses",
        "variant": "10"
      },
      {
        "name": "Tortise Brown Ladies Sunglasses with Wide Arms",
        "variant": "11"
      }
    ]
  },
  {
    "id": "glasses",
    "variants": [
      {
        "name": "Round Frame Harry Potter Glasses",
        "variant": "00"
      },
      {
        "name": "Black Frame Librarian Glasses",
        "variant": "01"
      },
      {
        "name": "Gold Round Frame Harry Potter Glasses",
        "variant": "02"
      },
      {
        "name": "Black Framed Glasses",
        "variant": "03"
      },
      {
        "name": "Black Framed Ladies Glasses",
        "variant": "04"
      },
      {
        "name": "Pink Framed Ladies Glasses",
        "variant": "05"
      },
      {
        "name": "Tortoise Brown Ladies Glasses",
        "variant": "06"
      },
      {
        "name": "Thin Black Framed Ladies Glasses",
        "variant": "07"
      },
      {
        "name": "Blue Framed Ladies Glasses",
        "variant": "08"
      },
      {
        "name": "Pink Framed Librarian Glasses",
        "variant": "09"
      }
    ]
  },
  {
    "id": "blindfold",
    "variants": [
      {
        "name": "Black Leather Blindfold",
        "variant": "00"
      },
      {
        "name": "Red Suede Blindfold",
        "variant": "01"
      },
      {
        "name": "Red Sleep Mask Blindfold",
        "variant": "02"
      },
      {
        "name": "Black Leather Blindfold with Nose Mould",
        "variant": "03"
      }
    ]
  },
  {
    "id": "gag",
    "variants": [
      {
        "name": "Black Leather Ball Gag",
        "variant": "00"
      },
      {
        "name": "Black Leather Ring Gag",
        "variant": "01"
      },
      {
        "name": "Black Leather Anal Bead Gag",
        "variant": "02"
      },
      {
        "name": "Black Leather Lips Gag",
        "variant": "03"
      },
      {
        "name": "Black Leather Dildo Gag",
        "variant": "04"
      },
      {
        "name": "Black Leather Dog Bone Gag",
        "variant": "05"
      },
      {
        "name": "Black Leather Metal Hook Gag",
        "variant": "06"
      },
      {
        "name": "Red and Black Leather Ring Gag",
        "variant": "00"
      },
      {
        "name": "Black Leather Gasmask Gag",
        "variant": "08"
      },
      {
        "name": "Black Leather Cock Gag",
        "variant": "09"
      },
      {
        "name": "Black Leather Inflatable Gag",
        "variant": "10"
      }
    ]
  },
  {
    "id": "diamondStuds",
    "variants": [
      {
        "name": "Diamond Stud Earrings",
        "variant": "00"
      },
      {
        "name": "Diamond Stud Flower Earrings",
        "variant": "01"
      },
      {
        "name": "Blue Gem Earrings",
        "variant": "02"
      },
      {
        "name": "Pearl Earrings",
        "variant": "03"
      },
      {
        "name": "Ornate Pearl Earrings",
        "variant": "04"
      },
      {
        "name": "White Gold Heart Earrings",
        "variant": "05"
      },
      {
        "name": "Black Gem Stud",
        "variant": "06"
      },
      {
        "name": "Ruby and Diamond Earrings",
        "variant": "07"
      },
      {
        "name": "Purple and Green Gem Earring",
        "variant": "08"
      },
      {
        "name": "Pearl Band Earrings",
        "variant": "09"
      },
      {
        "name": "Delicate Emerald Earrings",
        "variant": "10"
      },
      {
        "name": "Small Green Earrings with Gold Chain",
        "variant": "11"
      },
      {
        "name": "Purple Gem Earrings",
        "variant": "12"
      },
      {
        "name": "Multi Coloured Gem Earrings",
        "variant": "13"
      },
      {
        "name": "Diamond and Gold Earrings",
        "variant": "14"
      },
      {
        "name": "Diamond Stud and Gold Hoop Earrings",
        "variant": "15"
      },
      {
        "name": "Small Gold Chain Earrings",
        "variant": "16"
      }
    ]
  },
  {
    "id": "rubyEarrings",
    "variants": [
      {
        "name": "Sapphire and Diamond Earrings",
        "variant": "00"
      },
      {
        "name": "Silver Diamond Earrings",
        "variant": "01"
      },
      {
        "name": "Amethyst Earrings",
        "variant": "02"
      },
      {
        "name": "Ruby and Diamond Gold Earrings",
        "variant": "03"
      },
      {
        "name": "Sapphire Silver Earrings",
        "variant": "04"
      },
      {
        "name": "Ruby and Obsidian Gold Earrings",
        "variant": "05"
      },
      {
        "name": "Ruby and Amethyst Silver Earrings",
        "variant": "06"
      },
      {
        "name": "Antiuqe Emerald Earrings",
        "variant": "07"
      },
      {
        "name": "Antique Emerald and Gold Earrings",
        "variant": "08"
      },
      {
        "name": "Ruby and Diamond Intricate Earrings",
        "variant": "09"
      },
      {
        "name": "Silver Ribbon and Diamond Earrings",
        "variant": "10"
      },
      {
        "name": "Topaz Flower and Gold Chain Earrings",
        "variant": "11"
      },
      {
        "name": "Gold Bar Earrings",
        "variant": "12"
      },
      {
        "name": "Diamond Wreith Earrings",
        "variant": "13"
      },
      {
        "name": "Large Sapphire and Gold Earrings",
        "variant": "14"
      },
      {
        "name": "Ruby Dangle Earrings",
        "variant": "15"
      },
      {
        "name": "Large Amethyst Earrings",
        "variant": "16"
      }
    ]
  },
  {
    "id": "hoopsEarrings",
    "variants": [
      {
        "name": "Large Gold Hoop Earrings",
        "variant": "00"
      },
      {
        "name": "Large Gold Hoop Earrings with Gold Bells",
        "variant": "01"
      },
      {
        "name": "Large Gold and Silver Hoop Earrings with Diamonds",
        "variant": "02"
      },
      {
        "name": "Large Gold Twisty Earrings with Diamond Stud",
        "variant": "03"
      },
      {
        "name": "Copper Branching Earrings with Pearls",
        "variant": "04"
      },
      {
        "name": "Gold Sun Shaped Dangling Earrings",
        "variant": "05"
      },
      {
        "name": "Red Flower Shaped Dangling Earrings",
        "variant": "06"
      },
      {
        "name": "Crystal Dangling Earrings",
        "variant": "07"
      },
      {
        "name": "Pink Tassle Earrings",
        "variant": "08"
      },
      {
        "name": "Large Wide Gold Hoop Earrings",
        "variant": "09"
      },
      {
        "name": "Large Gold Hoop Earrings with Cutouts and Diamonds",
        "variant": "10"
      },
      {
        "name": "Gold Hoop Earrings with Love Heart",
        "variant": "11"
      },
      {
        "name": "Dangling Diamond Earrings",
        "variant": "12"
      },
      {
        "name": "Silver Hoop Earrings with Diamonds and Onynx",
        "variant": "13"
      },
      {
        "name": "Textured Silver Hoop Earrings",
        "variant": "14"
      },
      {
        "name": "Gold Hoop Earrings with Diamond Insert",
        "variant": "15"
      },
      {
        "name": "Garnet and Diamond Dangling Earrings",
        "variant": "16"
      }
    ]
  },
  {
    "id": "plasticEarrings",
    "variants": [
      {
        "name": "Blue Plastic Hoop Earrings",
        "variant": "00"
      },
      {
        "name": "Red Love Heart Plastic Earrings",
        "variant": "01"
      },
      {
        "name": "Pink Plastic Love Heart Earrings",
        "variant": "02"
      },
      {
        "name": "Blue Plastic Split Hoop Earrings",
        "variant": "03"
      },
      {
        "name": "Pink Plastic Ring Earrings",
        "variant": "04"
      },
      {
        "name": "Blue Plastic Flower Earrings",
        "variant": "05"
      },
      {
        "name": "Blue Plastic Ring Earrings with Decoration",
        "variant": "06"
      },
      {
        "name": "Blue Plastic Rectangle Patterned Earrings",
        "variant": "07"
      },
      {
        "name": "Pink Bubble Earrings",
        "variant": "08"
      },
      {
        "name": "Pink Plastic Earrings",
        "variant": "09"
      },
      {
        "name": "Yellow Plastic Round Earrings",
        "variant": "10"
      },
      {
        "name": "Orange Egg Shaped Plastic Earrings",
        "variant": "11"
      },
      {
        "name": "Black and White Sphere Earrings",
        "variant": "12"
      },
      {
        "name": "Plastic and Gold Diamond Shaped Plastic Earrings",
        "variant": "13"
      },
      {
        "name": "Red, Yellow and Pink Oval Plastic Earrings",
        "variant": "14"
      },
      {
        "name": "Red Circle Dangling Earrings",
        "variant": "15"
      },
      {
        "name": "Blue and Gold Flower Earrings",
        "variant": "16"
      }
    ]
  },
  {
    "id": "sneakers",
    "variants": [
      {
        "name": "White Vans Sneakers",
        "variant": "00"
      },
      {
        "name": "Black Zip Up Sneakers",
        "variant": "01"
      },
      {
        "name": "Blue Sneakers with White Soles",
        "variant": "02"
      },
      {
        "name": "Black Vans High Top Sneakers",
        "variant": "03"
      }
    ]
  },
  {
    "id": "schoolShoes",
    "variants": [
      {
        "name": "Dorky Plain Black School Shoes",
        "variant": "00"
      },
      {
        "name": "Shiny Laced Black School Shoes",
        "variant": "01"
      },
      {
        "name": "Shiny Black School Loafers",
        "variant": "02"
      }
    ]
  },
  {
    "id": "flats",
    "variants": [
      {
        "name": "Black Suede Flats with Brown Soles",
        "variant": "00"
      },
      {
        "name": "Black Shiny Flats with Black Strap and Pointy Toes",
        "variant": "01"
      },
      {
        "name": "Black Leather Flats with Black Elastic Straps",
        "variant": "02"
      },
      {
        "name": "Black Satin Flats with Black Straps and Pointy Toes",
        "variant": "03"
      },
      {
        "name": "Black Leather Flats with Black Ankle Straps",
        "variant": "04"
      },
      {
        "name": "Black Suede Flats with Black Straps and Cat Decoration",
        "variant": "05"
      },
      {
        "name": "Black Leather Flats with Black Woolen Line",
        "variant": "06"
      },
      {
        "name": "Black Shiny Loafers",
        "variant": "00"
      },
      {
        "name": "Black Leather Flats with Blue Bows",
        "variant": "08"
      },
      {
        "name": "Black Leather Loafers",
        "variant": "09"
      },
      {
        "name": "Black Suede Flats with Silver Ring Buckle",
        "variant": "10"
      },
      {
        "name": "Red Sequin Flats with Red Bows",
        "variant": "11"
      },
      {
        "name": "Red Satin Flats with Gemstone Buckle",
        "variant": "12"
      },
      {
        "name": "Pink Flats with Pink Love Heart",
        "variant": "13"
      },
      {
        "name": "Blue Suede Flats",
        "variant": "14"
      },
      {
        "name": "Pink Suede Flats",
        "variant": "15"
      },
      {
        "name": "Blue Canvas Slip-on Shoes",
        "variant": "16"
      },
      {
        "name": "Bright Pink Flats",
        "variant": "17"
      },
      {
        "name": "Light Blue Satin Flats with Gemstone Buckle",
        "variant": "18"
      },
      {
        "name": "Blue Suede Flats with Small Bow",
        "variant": "19"
      },
      {
        "name": "Pink Suede Flats",
        "variant": "20"
      },
      {
        "name": "Pink Suede Flats with Gold Decoration",
        "variant": "21"
      },
      {
        "name": "Grey Leather Flats",
        "variant": "2"
      },
      {
        "name": "Pink Suede Flats with Ankle Straps",
        "variant": "23"
      },
      {
        "name": "Pink Suede Flats with Gemstone Ankle Straps",
        "variant": "24"
      },
      {
        "name": "Pink Suede Flats with White Heel",
        "variant": "25"
      },
      {
        "name": "Pink Flats with Thin Pink Bow",
        "variant": "26"
      },
      {
        "name": "Red Flats with Red Band and Pointy Toes",
        "variant": "27"
      },
      {
        "name": "Light Blue Leather Flats with Buckle",
        "variant": "28"
      },
      {
        "name": "Brown Suede Flats with Pointy Toes",
        "variant": "29"
      },
      {
        "name": "Black Sparkly Flats",
        "variant": "30"
      },
      {
        "name": "Pink Shiny Flats with Pink Bow",
        "variant": "31"
      },
      {
        "name": "Pink Suede Flats with Pink Ankle Straps",
        "variant": "32"
      },
      {
        "name": "White Flats with White Bows",
        "variant": "33"
      }
    ]
  },
  {
    "id": "girlsneakers",
    "variants": [
      {
        "name": "Pink Converse Lo-Top Sneakers",
        "variant": "00"
      },
      {
        "name": "White Floral Pattern Sneakers",
        "variant": "01"
      },
      {
        "name": "Black High Heeled Sneakers with White Toes and Heels",
        "variant": "02"
      },
      {
        "name": "Pink High Heel Sneakers with Velcro Straps",
        "variant": "03"
      },
      {
        "name": "Baby Pink Sneakers with Thick Soles",
        "variant": "04"
      },
      {
        "name": "Baby Pink Sneakers",
        "variant": "05"
      },
      {
        "name": "Pink Converse High-Top Sneakers",
        "variant": "06"
      },
      {
        "name": "Pink Running Sneakers with White Lightning Bolt",
        "variant": "07"
      },
      {
        "name": "Pink Running Sneakers with Pink Straps",
        "variant": "08"
      },
      {
        "name": "Slip-on Baby Pink Sneakers with Thick Soles",
        "variant": "09"
      },
      {
        "name": "Pink Adidas Sneakers with White Stripes",
        "variant": "00"
      }
    ]
  },
  {
    "id": "boots",
    "variants": [
      {
        "name": "Black Suede Boots with Buckle Straps",
        "variant": "00"
      },
      {
        "name": "Black Leather Boots with Laces",
        "variant": "01"
      },
      {
        "name": "Black Pointy Toed Slip on Suede Boots",
        "variant": "02"
      },
      {
        "name": "Black Leather Boots with Laces and Studded Buckle and Belt",
        "variant": "03"
      },
      {
        "name": "Red Suede Boots",
        "variant": "04"
      },
      {
        "name": "Red Suede Boots with Red Laces",
        "variant": "05"
      },
      {
        "name": "White Leather Boots with White Bow",
        "variant": "06"
      },
      {
        "name": "Knee High White Leather Lace-up Boots",
        "variant": "07"
      },
      {
        "name": "White Slip-on Slouch Boots",
        "variant": "08"
      },
      {
        "name": "White Leather Lace-up Boots",
        "variant": "09"
      },
      {
        "name": "Grey Sheepskin Ugg Boots",
        "variant": "10"
      },
      {
        "name": "Purple Sheepskin Ugg Boots",
        "variant": "11"
      },
      {
        "name": "Grey Button-up Soft Boots",
        "variant": "12"
      },
      {
        "name": "Brown Suede Boots with Large Brown Laces",
        "variant": "13"
      },
      {
        "name": "Pink Dr. Marten's Boots",
        "variant": "14"
      },
      {
        "name": "Brown Leather Boots with Brown Laces and Buckles",
        "variant": "15"
      },
      {
        "name": "Cream Slip-on Pointy Toed Leather Boots",
        "variant": "16"
      },
      {
        "name": "Green Camo Boots with Rose Embrodiery",
        "variant": "17"
      },
      {
        "name": "Brown Suede Boots with Brown Laces",
        "variant": "18"
      },
      {
        "name": "Brown Knee High Slouch Boots with Brown Buckles",
        "variant": "19"
      },
      {
        "name": "Orange Suede Boots with Orange Laces",
        "variant": "20"
      },
      {
        "name": "Pink Suede Slip-on Slouch Boots",
        "variant": "21"
      },
      {
        "name": "Black Leather Heeled Boots with Black Laces and Buckles",
        "variant": "00"
      },
      {
        "name": "Black Leather Slip-on Heeled Boots",
        "variant": "01"
      },
      {
        "name": "Black Leather Chunky Heeled Boots with Black Laces and Buckles",
        "variant": "02"
      },
      {
        "name": "Black Leather Heeled Boots with Black Laces and Grey Fur",
        "variant": "03"
      },
      {
        "name": "Black Leather Knee High Heeled Boots with Black Laces and Buckles",
        "variant": "04"
      },
      {
        "name": "Shiny Black Heeled Boots with Black Laces and Red Soles",
        "variant": "05"
      },
      {
        "name": "Slouch Black Leather Heeled Boots with Black Buckles",
        "variant": "06"
      },
      {
        "name": "Black Leather Knee High Heeled Boots with Black Straps and Love Hearts",
        "variant": "07"
      },
      {
        "name": "Black Leather Knee High Heeled Boots with Buttons",
        "variant": "08"
      },
      {
        "name": "Red Suede Heeled Open Boots with Black Laces",
        "variant": "09"
      },
      {
        "name": "Red Tartan Heeled Boots with Black Laces and Studded Buckles",
        "variant": "10"
      },
      {
        "name": "Red Suede Fold Over Heeled Boots with Black Buttons",
        "variant": "11"
      },
      {
        "name": "Red Suede Pointy Toed Heeled Boots with Red Laces",
        "variant": "12"
      },
      {
        "name": "White Leather Heeled Boots with Zips",
        "variant": "13"
      },
      {
        "name": "White Leather Heeled Boots with White Buttons",
        "variant": "14"
      },
      {
        "name": "White Leather Heeled Boots with White Buckles and Straps",
        "variant": "15"
      },
      {
        "name": "White Leather Heeled Boots with White Buckles and Cork Heels",
        "variant": "16"
      },
      {
        "name": "Grey Suede Heeled Boots with Grey Buckles",
        "variant": "17"
      },
      {
        "name": "Brown Suede Pointy Toed Heeled Boots with Brown Buckles",
        "variant": "18"
      },
      {
        "name": "Brown Suede Heeled Boots with Brown Laces",
        "variant": "19"
      },
      {
        "name": "Brown Leather Knee High Heeled Boots",
        "variant": "20"
      },
      {
        "name": "Silver Shiny Heeled Boots",
        "variant": "21"
      },
      {
        "name": "Cream Heeled Boots with Cream Laces",
        "variant": "2"
      },
      {
        "name": "Brown Suede Heeled Boots with Brown Laces and Fur",
        "variant": "23"
      },
      {
        "name": "Black Leather Thigh High Boots with Black Laces",
        "variant": "00"
      },
      {
        "name": "Black Suede Thigh High Boots with Black Laces and Buckles",
        "variant": "01"
      },
      {
        "name": "Black Leather Thigh High Platform Boots with Black Laces",
        "variant": "02"
      },
      {
        "name": "Black Suede Thigh High Boots with Black Ribbons",
        "variant": "03"
      },
      {
        "name": "Black Fishnet Thigh High Open Toe Boots with Black Laces",
        "variant": "04"
      },
      {
        "name": "Red Suede Thigh High Boots",
        "variant": "05"
      },
      {
        "name": "White Leather Thigh High Open Boots with White Laces",
        "variant": "06"
      },
      {
        "name": "Brown Leather Thigh High Boots with Brown Zips",
        "variant": "07"
      },
      {
        "name": "Blue Suede Thigh High Boots with Blue Laces",
        "variant": "08"
      },
      {
        "name": "Brown Velour Thigh High Boots",
        "variant": "09"
      },
      {
        "name": "Blue Suede Thigh High Boots with Blue Laces",
        "variant": "10"
      },
      {
        "name": "Purple Suede Thigh High Boots",
        "variant": "11"
      },
      {
        "name": "Grey Suede Thigh High Boots",
        "variant": "12"
      },
      {
        "name": "Brown Suede Thigh High Boots",
        "variant": "13"
      }
    ]
  },
  {
    "id": "heeledBoots",
    "variants": [
      {
        "name": "Black Leather Heeled Boots with Black Laces and Buckles",
        "variant": "00"
      },
      {
        "name": "Black Leather Slip-on Heeled Boots",
        "variant": "01"
      },
      {
        "name": "Black Leather Chunky Heeled Boots with Black Laces and Buckles",
        "variant": "02"
      },
      {
        "name": "Black Leather Heeled Boots with Black Laces and Grey Fur",
        "variant": "03"
      },
      {
        "name": "Black Leather Knee High Heeled Boots with Black Laces and Buckles",
        "variant": "04"
      },
      {
        "name": "Shiny Black Heeled Boots with Black Laces and Red Soles",
        "variant": "05"
      },
      {
        "name": "Slouch Black Leather Heeled Boots with Black Buckles",
        "variant": "06"
      },
      {
        "name": "Black Leather Knee High Heeled Boots with Black Straps and Love Hearts",
        "variant": "07"
      },
      {
        "name": "Black Leather Knee High Heeled Boots with Buttons",
        "variant": "08"
      },
      {
        "name": "Red Suede Heeled Open Boots with Black Laces",
        "variant": "09"
      },
      {
        "name": "Red Tartan Heeled Boots with Black Laces and Studded Buckles",
        "variant": "10"
      },
      {
        "name": "Red Suede Fold Over Heeled Boots with Black Buttons",
        "variant": "11"
      },
      {
        "name": "Red Suede Pointy Toed Heeled Boots with Red Laces",
        "variant": "12"
      },
      {
        "name": "White Leather Heeled Boots with Zips",
        "variant": "13"
      },
      {
        "name": "White Leather Heeled Boots with White Buttons",
        "variant": "14"
      },
      {
        "name": "White Leather Heeled Boots with White Buckles and Straps",
        "variant": "15"
      },
      {
        "name": "White Leather Heeled Boots with White Buckles and Cork Heels",
        "variant": "16"
      },
      {
        "name": "Grey Suede Heeled Boots with Grey Buckles",
        "variant": "17"
      },
      {
        "name": "Brown Suede Pointy Toed Heeled Boots with Brown Buckles",
        "variant": "18"
      },
      {
        "name": "Brown Suede Heeled Boots with Brown Laces",
        "variant": "19"
      },
      {
        "name": "Brown Leather Knee High Heeled Boots",
        "variant": "20"
      },
      {
        "name": "Silver Shiny Heeled Boots",
        "variant": "21"
      },
      {
        "name": "Cream Heeled Boots with Cream Laces",
        "variant": "2"
      },
      {
        "name": "Brown Suede Heeled Boots with Brown Laces and Fur",
        "variant": "23"
      }
    ]
  },
  {
    "id": "highBoots",
    "variants": [
      {
        "name": "Black Leather Thigh High Boots with Black Laces",
        "variant": "00"
      },
      {
        "name": "Black Suede Thigh High Boots with Black Laces and Buckles",
        "variant": "01"
      },
      {
        "name": "Black Leather Thigh High Platform Boots with Black Laces",
        "variant": "02"
      },
      {
        "name": "Black Suede Thigh High Boots with Black Ribbons",
        "variant": "03"
      },
      {
        "name": "Black Fishnet Thigh High Open Toe Boots with Black Laces",
        "variant": "04"
      },
      {
        "name": "Red Suede Thigh High Boots",
        "variant": "05"
      },
      {
        "name": "White Leather Thigh High Open Boots with White Laces",
        "variant": "06"
      },
      {
        "name": "Brown Leather Thigh High Boots with Brown Zips",
        "variant": "07"
      },
      {
        "name": "Blue Suede Thigh High Boots with Blue Laces",
        "variant": "08"
      },
      {
        "name": "Brown Velour Thigh High Boots",
        "variant": "09"
      },
      {
        "name": "Blue Suede Thigh High Boots with Blue Laces",
        "variant": "10"
      },
      {
        "name": "Purple Suede Thigh High Boots",
        "variant": "11"
      },
      {
        "name": "Grey Suede Thigh High Boots",
        "variant": "12"
      },
      {
        "name": "Brown Suede Thigh High Boots",
        "variant": "13"
      }
    ]
  },
  {
    "id": "highHeel3",
    "variants": [
      {
        "name": "Black Suede High Heels",
        "variant": "00"
      },
      {
        "name": "Black Shiny High Heels with Black Ankle Strap",
        "variant": "01"
      },
      {
        "name": "Black Shiny High Heels with Pointy Toes and Ankle Strap",
        "variant": "02"
      },
      {
        "name": "Black Suede High Heels with Ankle Strap",
        "variant": "03"
      },
      {
        "name": "Red Leather High Heels",
        "variant": "04"
      },
      {
        "name": "Red Shiny High Heels",
        "variant": "05"
      },
      {
        "name": "Grey Fabric High Heels",
        "variant": "06"
      },
      {
        "name": "Cream Suede High Heels",
        "variant": "07"
      },
      {
        "name": "Pink Suede High Heels with Pink Bow",
        "variant": "08"
      },
      {
        "name": "Green Suede High Heels",
        "variant": "09"
      },
      {
        "name": "Pink Shiny High Heels",
        "variant": "10"
      },
      {
        "name": "Yellow High Heels",
        "variant": "11"
      },
      {
        "name": "Brown Platform High Heels",
        "variant": "12"
      },
      {
        "name": "Blue Suede High Heels with Pointy Toes",
        "variant": "13"
      },
      {
        "name": "Red Shiny High Heels with Pointy Toes",
        "variant": "14"
      },
      {
        "name": "White Leather High Heels",
        "variant": "15"
      },
      {
        "name": "Purple Suede High Heels",
        "variant": "16"
      },
      {
        "name": "Baby Pink Shiny High Heels",
        "variant": "07"
      },
      {
        "name": "Bright Light Blue High Heels",
        "variant": "18"
      },
      {
        "name": "Cream Leather High Heels",
        "variant": "19"
      },
      {
        "name": "Black Suede High Heels with Black Ribbon Bow and White Lacy Trim",
        "variant": "39"
      },
      {
        "name": "Black Shiny High Heels",
        "variant": "40"
      },
      {
        "name": "Black Latex Ballet Heels with Locks",
        "variant": "00"
      },
      {
        "name": "Black Leather Ballet Heels with Locks",
        "variant": "01"
      },
      {
        "name": "Red Latex Ballet Heels with Straps",
        "variant": "02"
      },
      {
        "name": "Black Knee High Leather Ballet Heels with Locks",
        "variant": "03"
      },
      {
        "name": "Black Latex Wedged Ballet Heels",
        "variant": "04"
      },
      {
        "name": "Baby Pink Latex Ballet Heels",
        "variant": "05"
      },
      {
        "name": "Silver Wedged Ballet Heels",
        "variant": "06"
      },
      {
        "name": "Black Latex Ankle Ballet Heels with Straps",
        "variant": "07"
      },
      {
        "name": "Red Latex Ballet Heels with Black Laces",
        "variant": "08"
      },
      {
        "name": "Purple Latex Ballet Heels",
        "variant": "09"
      },
      {
        "name": "Black Latex Ballet Heels with Black Laces",
        "variant": "10"
      },
      {
        "name": "Blue Latex Ballet Heels",
        "variant": "11"
      },
      {
        "name": "Black Leather Knee High Ballet Heels with Lock Straps",
        "variant": "12"
      },
      {
        "name": "White Leather Knee High Ballet Heels with Lock Straps",
        "variant": "13"
      },
      {
        "name": "Black Platform Strappy Stripper Heels",
        "variant": "00"
      },
      {
        "name": "Red Platform Strappy Stripper Heels",
        "variant": "01"
      },
      {
        "name": "Silver Platform Strappy Stripper Heels",
        "variant": "02"
      },
      {
        "name": "Pink Platform Strappy Stripper Heels",
        "variant": "03"
      },
      {
        "name": "Black Platform Shiny Strappy Stripper Heels",
        "variant": "04"
      },
      {
        "name": "Pink and Black Platform Strappy Stripper Heels",
        "variant": "05"
      },
      {
        "name": "Black Wedged Stripper Heels with Gemstones and Open Wedge",
        "variant": "06"
      },
      {
        "name": "Black Velvet Stripper Heels with Ankle Strap",
        "variant": "07"
      },
      {
        "name": "Black Aligator Pattern Stripper Heels with Pink Fluffy Trim and Ankle Straps",
        "variant": "08"
      },
      {
        "name": "Pink Leather Wedged Strappy Stripper Heels",
        "variant": "09"
      },
      {
        "name": "Grey Leather Strappy Stripper Heels",
        "variant": "10"
      },
      {
        "name": "Brown Suede Stripper Heels",
        "variant": "11"
      },
      {
        "name": "Purple Stripper Heels with Purple Ankle Straps",
        "variant": "12"
      },
      {
        "name": "Black Shiny Platform Stripper Heels",
        "variant": "13"
      },
      {
        "name": "Bright Pink Suede Stripper Heels with Pointy Heel",
        "variant": "14"
      },
      {
        "name": "Purple Stripper Heels with Ankle Straps",
        "variant": "15"
      },
      {
        "name": "Pink and Black Leather Stripper Heels",
        "variant": "16"
      },
      {
        "name": "Pink Strappy Suede Stripper Heels",
        "variant": "17"
      },
      {
        "name": "Black Latex Stripper Heels with Black Laces and Ankle Straps",
        "variant": "39"
      }
    ]
  },
  {
    "id": "stilettoHeels",
    "variants": [
      {
        "name": "Black Platform Strappy Stripper Heels",
        "variant": "00"
      },
      {
        "name": "Red Platform Strappy Stripper Heels",
        "variant": "01"
      },
      {
        "name": "Silver Platform Strappy Stripper Heels",
        "variant": "02"
      },
      {
        "name": "Pink Platform Strappy Stripper Heels",
        "variant": "03"
      },
      {
        "name": "Black Platform Shiny Strappy Stripper Heels",
        "variant": "04"
      },
      {
        "name": "Pink and Black Platform Strappy Stripper Heels",
        "variant": "05"
      },
      {
        "name": "Black Wedged Stripper Heels with Gemstones and Open Wedge",
        "variant": "06"
      },
      {
        "name": "Black Velvet Stripper Heels with Ankle Strap",
        "variant": "07"
      },
      {
        "name": "Black Aligator Pattern Stripper Heels with Pink Fluffy Trim and Ankle Straps",
        "variant": "08"
      },
      {
        "name": "Pink Leather Wedged Strappy Stripper Heels",
        "variant": "09"
      },
      {
        "name": "Grey Leather Strappy Stripper Heels",
        "variant": "10"
      },
      {
        "name": "Brown Suede Stripper Heels",
        "variant": "11"
      },
      {
        "name": "Purple Stripper Heels with Purple Ankle Straps",
        "variant": "12"
      },
      {
        "name": "Black Shiny Platform Stripper Heels",
        "variant": "13"
      },
      {
        "name": "Bright Pink Suede Stripper Heels with Pointy Heel",
        "variant": "14"
      },
      {
        "name": "Purple Stripper Heels with Ankle Straps",
        "variant": "15"
      },
      {
        "name": "Pink and Black Leather Stripper Heels",
        "variant": "16"
      },
      {
        "name": "Pink Strappy Suede Stripper Heels",
        "variant": "17"
      },
      {
        "name": "Black Latex Stripper Heels with Black Laces and Ankle Straps",
        "variant": "39"
      }
    ]
  },
  {
    "id": "balletHeels",
    "variants": [
      {
        "name": "Black Latex Ballet Heels with Locks",
        "variant": "00"
      },
      {
        "name": "Black Leather Ballet Heels with Locks",
        "variant": "01"
      },
      {
        "name": "Red Latex Ballet Heels with Straps",
        "variant": "02"
      },
      {
        "name": "Black Knee High Leather Ballet Heels with Locks",
        "variant": "03"
      },
      {
        "name": "Black Latex Wedged Ballet Heels",
        "variant": "04"
      },
      {
        "name": "Baby Pink Latex Ballet Heels",
        "variant": "05"
      },
      {
        "name": "Silver Wedged Ballet Heels",
        "variant": "06"
      },
      {
        "name": "Black Latex Ankle Ballet Heels with Straps",
        "variant": "07"
      },
      {
        "name": "Red Latex Ballet Heels with Black Laces",
        "variant": "08"
      },
      {
        "name": "Purple Latex Ballet Heels",
        "variant": "09"
      },
      {
        "name": "Black Latex Ballet Heels with Black Laces",
        "variant": "10"
      },
      {
        "name": "Blue Latex Ballet Heels",
        "variant": "11"
      },
      {
        "name": "Black Leather Knee High Ballet Heels with Lock Straps",
        "variant": "12"
      },
      {
        "name": "White Leather Knee High Ballet Heels with Lock Straps",
        "variant": "13"
      }
    ]
  }
];

window.itemData = {};
window.baseItemData = {};
baseItemData.forEach(bi => {
	let variants = itemVariants.find(iv => iv.id === bi.id);
	if (variants) {
		variants.variants.forEach(v => {
			let item = Object.assign({}, bi);
			item.name = v.name;
			item.image += v.variant+".jpg";
			item.id = bi.id+(+v.variant);
			window.itemData[item.id] = item;
		});
	} else {
		window.itemData[bi.id] = bi;
	}
	window.baseItemData[bi.id] = bi;
});
