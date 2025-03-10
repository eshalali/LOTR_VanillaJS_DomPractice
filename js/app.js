console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const newSection = document.createElement('section')
	newSection.setAttribute('id', 'middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:
		for (let i = 0; i < lands.length; i++) {
	//   2a. creates an article tag (there should be one for each land when the loop is done)
			const landArt = document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
			landArt.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
			const landTitle = document.createElement('h1')
			landTitle.innerHTML = lands[i]
			landArt.appendChild(landTitle)

	//   2d. appends each land to the middle-earth section
			newSection.appendChild(landArt)
		}
	// 3. append the section to the body of the DOM.
	document.querySelector('body').appendChild(newSection)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitList = document.createElement('ul')
	hobbitList.setAttribute('id', 'the-hobbits')
	// give each hobbit a class of `hobbit`
	for (let i = 0; i < hobbits.length; i++) {
		const hobbitItem = document.createElement('li')
		hobbitItem.innerText = hobbits[i]
		hobbitItem.classList.add('hobbit')
		hobbitItem.setAttribute('id', hobbits[i])
		hobbitList.appendChild(hobbitItem)
	}
	const theshire = document.getElementById('The-Shire')
	theshire.appendChild(hobbitList)
	console.log(hobbitList)
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const ringDiv = document.createElement('div')
	ringDiv.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	ringDiv.classList.add('magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	const frodo = document.getElementById('Frodo Baggins')
	frodo.appendChild(ringDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddieList = document.createElement('ul')
	for (let i = 0; i < baddies.length; i++) {
		const baddieItem = document.createElement('li')
		baddieItem.innerText =  baddies[i]
		// give each of the baddies a class of "baddy"
		baddieItem.classList.add('baddy')
		baddieList.appendChild(baddieItem)
	}
	// remember to append them to Mordor
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(baddieList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideTag = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	const buddyList = document.createElement('ul')
	for (let i = 0; i < buddies.length; i++) {
		const buddyItem = document.createElement('li')
		buddyItem.innerText = buddies[i]
		buddyItem.classList.add('buddy')
		buddyItem.setAttribute('id', buddies[i])
		buddyList.appendChild(buddyItem)
	}
	asideTag.appendChild(buddyList)
	// insert your aside as a child element of `rivendell`
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(asideTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const rivendell = document.getElementById('Rivendell')
	const allHobbits = document.getElementById('the-hobbits')
	rivendell.appendChild(allHobbits)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const strider = document.getElementById('Strider')
	strider.innerText = 'Aragorn'
	strider.setAttribute('id', 'Aragorn')
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	const thefellowship = document.createElement('div', 'the-fellowship')
	thefellowship.setAttribute('id', 'the-fellowship')
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(thefellowship)

	const theHobbits = document.querySelectorAll('.hobbit')
	const theBuddies = document.querySelectorAll('.buddy')
	for (let i = 0; i < theBuddies.length; i++) {
		thefellowship.appendChild(theBuddies[i])
		alert(`${buddies[i]} has joined the Fellowship`)
	}
	for (let i = 0; i < theHobbits.length; i++) {
		thefellowship.appendChild(theHobbits[i])
		alert(`${hobbits[i]} has joined the Fellowship`)
	}
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.getElementById('Gandalf the Grey')
	gandalf.innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.backgroundColor = 'white'
	gandalf.style.borderColor = 'grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been blown')
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	thefellowship = document.getElementById('the-fellowship')
	const boromir = document.getElementById('Boromir')
	boromir.remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const frodo = document.getElementById('Frodo Baggins')
	const sam = document.getElementById('Samwise "Sam" Gamgee')
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(frodo)
	mordor.appendChild(sam)

	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id', 'mount-doom')
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const thering = document.getElementById('the-ring')
	gollum.appendChild(thering)
	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const gollum = document.getElementById('gollum')
	const thering = document.getElementById('the-ring')
	gollum.remove()
	thering.remove()
	// Move all the `hobbits` back to `the shire`
	const theshire = document.getElementById('The-Shire')
	const allHobbits  = document.querySelectorAll('.hobbit')
	for(let i = 0; i < allHobbits.length; i++) {
		theshire.appendChild(allHobbits[i])
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
