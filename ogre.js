/*
// Music - Add sound effects and background music (if it's not too distracting/annoying)
const audio = new Audio('[LINK/TO/MUSIC]')

// Hero Gear (Weapons, armor and items) - use inquirer to add user choice functionality - tie to db to make this more flexible (add more options, etc.)
const weaponArr = [
    'Dagger':,
        damage: Math.ceil(Math.random() * 4),
        speed: 2,
        shield: true,
    'Axe':,
        damage: Math.ceil(Math.random() * 8),
        speed: 7,
        shield: true,
    'Halberd':,
        dmg: Math.ceil(Math.random() * 10),
        speed: 9
        shield: false
];

const armorArr = [
    'Large Shield':,
        ac: -1,
    'Chain Mail':,
        ac: -5,
    'Field Plate Mail':,
        ac: -8,
    'Leather Armor':
        ac: -4
];

const itemArr = [
    'Potion of Minor Healing':,
        hpRec: 0,
    'Potion of Shield':,
        ac: -1,
    'Potion of Striking':,
        bonus: hero.thac0 - 1
];
*/

// Ogre Stats (AC, THAC0 and HP) - give ogre a weapon?
let ogre = {
    ac: 5,
    thac0: 17,
    hp: 9
};

// Ogre HD Rolls
for (let i = 0; i < 3; i++) {
    ogre.hp += (Math.ceil(Math.random() * 8) + 1);
};

// Fighter info
let hero = {
    name: 'Polthrach',
    level: 4,
    hp: 10,
    hpTotal: 10, // use current/max instead? (hero.hp = {current: 10, max: 10}) - will need to change all instances of hp(.hpTotal) to match
    inventory: ['Sword', 'Shield', 'Field Plate Armor', 'Potion of Minor Healing'], // Weapons, armor and items will need to be objects w/name and mod values
    ac: 10,
    acMod: -9, // mod value - acMod, thac0, weaponBonus will need to be adjustable based on user's selections
    thac0: 16, // mod value
    weaponBonus: 0, // mod value
    excepStrDmgBonus: 0,
    iniBonus: 0
};

// Inquirer prompt to name character - not working
// const inquirer = require('inquirer');
// inquirer.prompt([
//     {
//         name: hero.name,
//         message: 'What would you like to name your Fighter?',
//         type: 'input'
//     }
// ]).then(hero => {
//     modCharCreation();
// });

// Sleep function to add pauses in the game's text to improve readability
const sleep = (milliseconds) => { 
    let timeStart = new Date().getTime(); 
    while (true) {
        let elapsedTime = new Date().getTime() - timeStart;
        if (elapsedTime > milliseconds) {
            break;
        };
    };
};

// Fighter stats [int, wis, cha, dex, con, str]
const charStatArr = [];
const charStatBonusArr = [0, 0, 0, 0, 0, 0];
const statNameArr = [ 'Intelligence', 'Wisdom', 'Charisma', 'Dexterity', 'Constitution', 'Strungth'];
const esb = Math.ceil(Math.random() * 100);

const modCharCreation = () => {
    let stat  = 0;
    const modArr = [];

    for (let j = 0; j < 4; j++) {
        stat = (Math.ceil(Math.random() * 6));
        modArr.push(stat);
    };
    
    modArr.sort().shift();
    stat = modArr.reduce((a, b) => a + b);
    charStatArr.push(stat);
};

for (let k = 0; k < 6; k++) {
    modCharCreation();
};

charStatArr.sort((a,b) => a - b);

// Fighter stat bonuses or penalties
if (charStatArr[5] === 18) {
    if (esb === 100) {
        charStatBonusArr[5] = 3;
        hero.excepStrDmgBonus = 6;
    } else if (esb >= 91) {
        charStatBonusArr[5] = 2;
        hero.excepStrDmgBonus = 5;
    } else if (esb >= 76) {
        charStatBonusArr[5] = 2;
        hero.excepStrDmgBonus = 4;
    } else if (esb >= 51) {
        charStatBonusArr[5] = 2;
        hero.excepStrDmgBonus = 3;
    } else if (esb >= 1) {
        charStatBonusArr[5] = 1;
        hero.excepStrDmgBonus = 3;
    };
} else if (charStatArr[5] >= 17) {
    charStatBonusArr[5] = 1;
} else if (charStatArr[5] >= 16) {
    charStatBonusArr[5] = 0;
    hero.excepStrDmgBonus = 1;
} else if (charStatArr[5] >= 8) {
    charStatBonusArr[5] = 0;
} else if (charStatArr[5] >= 6) {
    charStatBonusArr[5] = -1;
} else if (charStatArr[5] >= 4) {
    charStatBonusArr[5] = -2;
    hero.excepStrDmgBonus = -1;
} else if (charStatArr[5] >= 3) {
    charStatBonusArr[5] = -3;
    hero.excepStrDmgBonus = -1;
} else if (charStatArr[5] >= 2) {
    charStatBonusArr[5] = -3;
    hero.excepStrDmgBonus = -2;
} else if (charStatArr[5] >= 1) {
    charStatBonusArr[5] = -5;
    hero.excepStrDmgBonus = -4;
};

if (charStatArr[3] >= 18) {
    charStatBonusArr[3] = -4;
    hero.iniBonus = 2;
} else if (charStatArr[3] >= 17) {
    charStatBonusArr[3] = -3;
    hero.iniBonus = 2;
} else if (charStatArr[3] >= 16) {
    charStatBonusArr[3] = -2;
    hero.iniBonus = 1;
} else if (charStatArr[3] >= 15) {
    charStatBonusArr[3] = -1;
} else if (charStatArr[3] >= 7) {
    charStatBonusArr[3] = 0;
} else if (charStatArr[3] >= 6) {
    charStatBonusArr[3] = 1;
} else if (charStatArr[3] <= 5) {
    charStatBonusArr[3] = 2;
    hero.iniBonus = -1;
} else if (charStatArr[3] <= 4) {
    charStatBonusArr[3] = 3;
    hero.iniBonus = -2;
} else if (charStatArr[3] <= 3) {
    charStatBonusArr[3] = 4;
    hero.iniBonus = -3;
} else if (charStatArr[3] <= 2) {
    charStatBonusArr[3] = 5;
    hero.iniBonus = -4;
} else if (charStatArr[3] >= 1) {
    charStatBonusArr[3] = 5;
    hero.iniBonus = -6;
};

if (charStatArr[4] >= 18) {
    charStatBonusArr[4] = 4;
} else if (charStatArr[4] >= 17) {
    charStatBonusArr[4] = 3;
} else if (charStatArr[4] >= 16) {
    charStatBonusArr[4] = 2;
} else if (charStatArr[4] >= 15) {
    charStatBonusArr[4] = 1;
} else if (charStatArr[4] >= 7) {
    charStatBonusArr[4] = 0;
} else if (charStatArr[4] >= 6) {
    charStatBonusArr[4] = -1;
} else if (charStatArr[4] >= 3) {
    charStatBonusArr[4] = -2;
} else if (charStatArr[4] >= 1) {
    charStatBonusArr[4] = -3
};

// Fighter HP
for (let l = 0; l < (hero.level - 1); l++) {
    hero.hp += (Math.ceil(Math.random() * 10) + charStatBonusArr[4]);
};
hero.hpTotal = hero.hp;

// Fighter AC
hero.ac = hero.ac + (hero.acMod + charStatBonusArr[3]);

// Fighter THAC0
hero.thac0 -= (charStatBonusArr[5] + hero.weaponBonus);

// Log Fighter stats to the user
if (charStatArr[5] >=18) {
    console.log(`${hero.name}'s ${statNameArr[5]} is phenomenal! His Exceptional Strungth roll is ${esb}! His bonus to hit is ${charStatBonusArr[5]} and his damage bonus is ${hero.excepStrDmgBonus}!`);
} else if (charStatArr[5] >= 16) {
    console.log(`${hero.name}'s ${statNameArr[5]} is ${charStatArr[5]}. His bonus to hit is ${charStatBonusArr[5]} and his damage bonus is ${hero.excepStrDmgBonus}.`);
} else if (charStatArr[5] <= 6) {
    console.log(`${hero.name}'s ${statNameArr[5]} is ${charStatArr[5]}. His penalty to hit is ${charStatBonusArr[5]} and his damage penalty is ${hero.excepStrDmgBonus}.`);
} else {
    console.log(`${hero.name}'s ${statNameArr[5]} is ${charStatArr[5]}. He has no bonuses to hit or for damage.`);
};

if (charStatArr[3] >= 15) {
    console.log(`${hero.name}'s ${statNameArr[3]} is ${charStatArr[3]}. His bonus to his Armor Class is ${charStatBonusArr[3]} and his initiative bonus is ${hero.iniBonus}.`);
} else if (charStatArr[3] <= 6) {
    console.log(`${hero.name}'s ${statNameArr[3]} is ${charStatArr[3]}. His penalty to his Armor Class is ${charStatBonusArr[3]} and his initiative penalty is ${hero.iniBonus}.`);
} else {
    console.log(`${hero.name}'s ${statNameArr[3]} is ${charStatArr[3]}. He has no bonuses to his Armor Class or initiative.`);
};

if (charStatArr[4] >= 15) {
    console.log(`${hero.name}'s ${statNameArr[4]} is ${charStatArr[4]}. His hitpoint bonus is ${charStatBonusArr[4]} per level.`);
} else if (charStatArr[4] <= 6) {
    console.log(`${hero.name}'s ${statNameArr[4]} is ${charStatArr[4]}. His hitpoint penalty is ${charStatBonusArr[4]} per level.`);
} else {
    console.log(`${hero.name}'s ${statNameArr[4]} is ${charStatArr[4]}. He has no hitpoint bonus.`);
};

for (let m = 0; m < 3; m++) {
    console.log(`${hero.name}'s ${statNameArr[m]} is ${charStatArr[m]}. He has no bonus for this stat.`);
};

console.log('');
sleep(1000)
console.log(`With all his modifiers, ${hero.name} has ${hero.hpTotal} total hitpoints, his THAC0 is ${hero.thac0} and his Armor Class is ${hero.ac}.`);
console.log('');

sleep(5000);

// Combat
// Combat: Turn

for (let n = 1; n < 10000; n++) {
    let heroIni = Math.ceil(Math.random() * 10) + hero.iniBonus;
    let ogreIni = Math.ceil(Math.random() * 10);

    if (hero.hp <= 0 || ogre.hp <= 0) {
        break;
    };
    console.log(`Turn ${n} has started! Will ${hero.name} prevail?`);
    sleep(1000);
    console.log(`${hero.name} has rolled ${heroIni} for his initiative! Is he quick enough to strike first this turn?`);
    console.log('');
    sleep(1000);

    if (heroIni >= ogreIni) {
        heroAttack();
        if (ogre.hp <=0) {
            break;
        };
        ogreAttack();
        if (hero.hp <= 0) {
            break;
        };
    } else {
        ogreAttack();
        if (hero.hp <= 0) {
            break;
        };
        heroAttack();
        if (ogre.hp <= 0) {
            break;
        };
    };
};

// Combat: Attack
// Combat: heroAttack
const heroAttack = () => {
    let heroRoll = Math.ceil(Math.random() * 20);
    let heroToHit = hero.thac0 - (hero.weaponBonus + hero.excepStrDmgBonus) - heroRoll;
    let heroDmg = (Math.ceil(Math.random() * 8)) + charStatBonusArr[5] + hero.weaponBonus + hero.excepStrDmgBonus;

// Combat: Hero PoMH - Turn this into a button so the player can decide when to use
    if (hero.hp <= hero.hpTotal / 2 && hero.inventory[3] === 'Potion of Minor Healing') {
        const hpRec = (Math.ceil(Math.random() * 4) + 1);
        hero.hp += hpRec;
        if (hero.hp > hero.hpTotal) {
            hero.hp = hero.hpTotal;
        };
        console.log(`${hero.name} uses his ${hero.inventory[3]} and regains ${hpRec} hitpoints! His total is now ${hero.hp}.`)
        hero.inventory.pop();
    } else {
        console.log(`${hero.name} rolls ${heroRoll} for his attack!`);
        sleep(1000);
        console.log(`Based on this roll, ${hero.name} hits Armor Class ${heroToHit}!`);
        console.log('');
        sleep(1000);
        if (heroRoll === 1) {
            console.log(`The worst has happened! ${hero.name} has dropped his ${hero.inventory[0]} and lost his turn!`);
            sleep(2000);
            console.log('');
            console.log(`While ${hero.name} recovers his ${hero.inventory[0]}, the ogre charges!`);
            console.log('');
            sleep(2000);
            ogreAttack();
        } else if (heroRoll === 20) {
            heroDmg = heroDmg * 2;
            ogre.hp = ogre.hp - heroDmg;
            console.log(`The gods shine upon ${hero.name}! The foul ogre takes ${heroDmg} points of deadly damage!`);
        } else if (heroToHit <= ogre.ac) {
            ogre.hp = ogre.hp - heroDmg;
            if (heroDmg === 1) {
                console.log(`${hero.name}'s ${hero.inventory[0]} barely catches the ogre's warty hide! He only does ${heroDmg} point of deadly damage to the ogre!`);
            } else {
            console.log(`A hit! A fine hit! ${hero.name} has done ${heroDmg} points of deadly damage to the ogre!`);
            }
        } else {
            console.log(`A curse on the ogre! ${hero.name} missed his chance.`);
        };
    };
    if (heroRoll !== 1) {
        console.log('');
    };
    sleep(3000);
};

// Combat: Ogre Attack
const ogreAttack = () => {
    let ogreRoll = Math.ceil(Math.random() * 20);
    let ogreToHit = ogre.thac0 - ogreRoll;
    let ogreDmg = (Math.ceil(Math.random() * 10));

    if (ogreRoll === 1) {
        console.log(`What luck! The ogre has slipped and fallen in a pile of his own offal! He has lost his turn!`);
        sleep(2000);
        console.log('');
        console.log(`While the ogre is picking himself up, ${hero.name} presses his advantage!`);
        console.log('');
        sleep(2000);
        heroAttack();
    } else if (ogreRoll === 20) {
        ogreDmg = ogreDmg * 2;
        hero.hp = hero.hp - ogreDmg;
        console.log(`The ogre has connected with a lucky blow! ${hero.name} takes ${ogreDmg} damage and has ${hero.hp} hitpoints remaining.`);
    } else if (ogreToHit <= hero.ac) {
        hero.hp = hero.hp - ogreDmg;
        console.log(`The ogre shows his cunning and strikes! ${hero.name} takes ${ogreDmg} damage and has ${hero.hp} hitpoints remaining.`);
    } else {
        console.log(`${hero.name}'s skill is unmatched! The ogre misses his clumsy attack!`);
    };
    if (ogreRoll !== 1) {
        console.log('');
    };
    sleep(3000);
};

// Combat: End
const ending = Math.ceil(Math.random() * 2);

if (hero.hp <= 0) {
    if (ending === 1) {
        console.log('Thou art dead.');
    } else {
        console.log(`Tragedy has befallen us. The fiendish ogre has defeated ${hero.name}. His heroic sacrifice will live forever in our memories.`);
    };
} else {
    if (ending === 1) {
        console.log(`${hero.name}'s might is unquestionable! He has defeated the ogre and rid our land of its evil! Harr-r-r-r-r-r-ooo!`);
    } else {
        console.log('Courage and wit have served thee well. Thou hast been promoted to the next level.');
    };
};
