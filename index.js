const graduatedSugar = 'confetti';

let age = 16;

if (age < 16) {
	console.log('kiddy chair');
}
else if (age >= 16) {
	console.log('froom froom');
}
else if (age === 21) {
	console.log('gogo juice');
}
else if (age > 21) {
	console.log('The frogs are gEY?!');
}
else {
	console.log('What are you doing;');
}

// now to good stuff *jiggle*

const table = {
	0: 'Born!',
	2: 'Transportation Acquired: Walking',
	5: 'Started Elementary School',
	7: 'Best Friend Ever Acquired',
	10: 'First Kiss!',
	14: 'Started High School',
	16: 'Obtained Driver\'s License',
	18: 'Left Starter Zone',
	21: 'Obtained Exotic Juices',
	22: 'Graduated University',
	25: 'Obtained Doctorates',
	28: 'Marriage: Life Sentence Acquired',
	30: '\'Old Age\' Status Acquired',
}

const balloonBox = {
	0: 'Scree Blurb Exitus',
	2: 'Blurb Toddle: Extra Scree',
	5: 'Blurb Operett: Scree Cree on Toddle',
	7: 'Maketh Paket Smol Chair',
	10: 'Wub Wub',
	14: 'Smol Scree, Big Toddle Portail',
	16: 'Gogo VoOVOo',
	18: 'Bi',
	21: 'Open Time Crash Buzz',
	25: 'Big boi carrot trach',
	28: 'ded',
	30: 'Death Becomest All, Chair',
}

for(let i = 0; i <= 30; i++) {
	console.log(`${i} ${ balloonBox[i] ? `Achievement Unlocked: ${balloonBox[i]}` : '' }`)
}