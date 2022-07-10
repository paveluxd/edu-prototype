//Misc
let answerIco = '<img style="height:16px; width:16px;" src="./img/ico-gold.svg">'
let lifeIco = '<img style="height:16px; width:16px;" src="./img/ico-life.svg">'

function hide(elem){
    if(elem ==='skills'){
        document.querySelector('#skills').classList.toggle('hide')
        document.querySelector('#q-cont').classList.toggle('hide')
    }
    else if (elem ==='main'){
        document.querySelector('#main-screen').classList.toggle('hide')
    }
}

function rNum(max, min){
    // Returns a random integer from 0 to 9:
    let val = Math.floor(Math.random() * max);
    return val
}


//Game data
let round = 0

let gameState = {
    player: {
        life: 10,
        class: 'knight'
    },
    enemy: {
        life: 2,
        class: 'skeleton'
    }
}

let questions = {
    q1: {
        question: 'Stars appears to move from east to west because...',
        answer: 'The earth rotates from west to east',
        options: [
            'All stars move from east to west',
            'The earth rotates from west to east',
            'The earth rotates from east to west',
            'The background of the stars moves from west to east',
        ],
    },
    q2: {
        question: 'It takes much longer to cook food in the hills than in the plains, because...',
        answer: 'In the hills the atmospheric pressure is lower than that in the plains and therefore water boils at a temperature lower than 100°C causing an increase in cooking time',
        options: [
            'In the hills the atmospheric pressure is lower than that in the plains and therefore water boils at a temperature lower than 100°C causing an increase in cooking time',
            'Due to low atmospheric pressure on the hills, the water boils at a temperature higher than 100°C and therefore water takes longer to boil',
            'In the hills the atmospheric density is low and therefore a lot of heat is lost to the atmosphere',
            'In the hills the humidity is high and therefore a lot of heat is absorbed by the atmosphere leaving very little heat for cooking',
        ],
    },
    q3: {
        question: 'Intensity of sound at a point is __________ its distance from the source.',
        answer: 'Inversely proportional to square of',
        options: [
            'Directly proportional to',
            'Inversely proportional to',
            'Directly proportional to square of',
            'Inversely proportional to square of',
        ],
    },
    q4: {
        question: 'Magnetism at the center of a bar magnet is...',
        answer: 'Zero',
        options: [
            'Minimum',
            'Minimum',
            'Zero',
            'Minimum or maximum',
        ],
    },
    q5: {
        question: 'On a stationary sail boat, air is blown from a fan attached to the boat. The boat',
        answer: 'Does not move',
        options: [
            'Moves in opposite direction in which the air is blown',
            'Does not move',
            'Moves in the same direction in which air blows',
            'Spins around',
        ],
    },
    q6: {
        question: 'Isotopes of an element contain...',
        answer: 'The same number of protons but different number of neutrons',
        options: [
            'The same number of protons but different number of neutrons',
            'The same number of neutrons but different number of protons',
            'Equal number of protons and electrons',
            'Equal number of nucleons',
        ],
    },
    q7: {
        question: 'Identify the vector quantity from the following...',
        answer: 'Angular momentum',
        options: [
            'Heat',
            'Angular momentum',
            'Time',
            'Work',
        ],
    },
    q8: {
        question: 'An aeroplane is flying horizontally with a velocity of 600 km/h and at a height of 1960 m. When it is vertically at a point A on the ground a bomb is released from it. The bomb strikes the ground at point B. The distance AB is...',
        answer: '3.33 km',
        options: [
            '1200 m',
            '0.33 km',
            '3.33 km',
            '33 km',
        ],
    },
    q9: {
        question: 'Photosynthesis takes place faster in...',
        answer: 'White light',
        options: [
            'Yellow light',
            'White light',
            'Red light',
            'Darkness',
        ],
    },
    q10: {
        question: 'It is more difficult to walk on a sandy road than on a concrete road because...',
        answer: 'The friction between sand and feet is less than that between concrete and feet',
        options: [
            'Sand is soft and concreter is hard',
            'The friction between sand and feet is less than that between concrete and feet',
            'The friction between sand and feet is more than that between concrete and feet',
            'The sand is grainy but concrete is smooth',
        ],
    },
    q11: {
        question: 'Radiocarbon is produced in the atmosphere as a result of...',
        answer: 'Collision between fast neutrons and nitrogen nuclei present in the atmosphere',
        options: [
            'Collision between fast neutrons and nitrogen nuclei present in the atmosphere',
            'Action of ultraviolet light from the sun on atmospheric oxygen',
            'Action of solar radiations particularly cosmic rays on carbon dioxide present in the atmosphere',
            'Lightning discharge in atmosphere',
        ],
    },
    q12: {
        question: 'Large transformers, when used for some time, become very hot and are cooled by circulating oil. The heating of the transformer is due to...',
        answer: 'Both the heating effect of current and hysteresis loss',
        options: [
            'The heating effect of current alone',
            'Hysteresis loss alone',
            'Both the heating effect of current and hysteresis loss',
            'Intense sunlight at noon',
        ],
    },
    q13: {
        question: 'Study of life in outer space is known as...',
        answer: 'Exobiology',
        options: [
            'Endobiology',
            'Exobiology',
            'Entrobiology',
            'Neobiology',
        ],
    },
    q14: {
        question: 'If two bodies of different masses, initially at rest, are acted upon by the same force for the same time, then the both bodies acquire the same...',
        answer: 'Momentum',
        options: [
            'Velocity',
            'Momentum',
            'Acceleration',
            'Kinetic energy',
        ],
    },
    q15: {
        question: 'Of the following properties of a wave, the one that is independent of the other is its...',
        answer: 'Amplitude',
        options: [
            'Amplitude',
            'Velocity',
            'Wavelength',
            'Frequency',
        ],
    },
    q16: {
        question: 'RADAR is used for...',
        answer: 'Detecting and locating the position of objects such as aeroplanes',
        options: [
            'Locating submerged submarines',
            'Receiving a signals in a radio receiver',
            'Locating geostationary satellites',
            'Detecting and locating the position of objects such as aeroplanes',
        ],
    },
    q17: {
        question: 'Stars twinkle because...',
        answer: "The refractive index of the different layers of the earth's atmosphere changes continuously, consequently the position of the image of a start changes with time",
        options: [
            'The intensity of light emitted by them changes with time',
            'The distance of the stars from the earth changes with time',
            "The refractive index of the different layers of the earth's atmosphere changes continuously, consequently the position of the image of a start changes with time",
            "The light from the star is scattered by the dust particles and air molecules in the earth's atmosphere",
        ],
    },
    q18: {
        question: 'Sound travels with a different speed in media. In what order does the velocity of sound increase in these media?',
        answer: "Air, water and iron",
        options: [
            'Water, iron and air',
            'Iron, air and water',
            'Air, water and iron',
            'Iron, water and air',
        ],
    },
    q19: {
        question: 'Light travels at the fastest speed in',
        answer: "Vacuum",
        options: [
            'Glass',
            'Water',
            'Hydrogen',
            'Vacuum',
        ],
    },
    q20: {
        question: 'Supersonic plane fly with the speed',
        answer: "Greater than the speed of sound",
        options: [
            'Less than the speed of sound',
            'Of sound',
            'Greater than the speed of sound',
            'Of light',
        ],
    },
}


//Game
let qElem = document.querySelector('#q-cont')

function setBattlefield(){

    //Set round info
    round++
    document.querySelector('#round').innerHTML = 'Round ' + round

    //Set up the battlefield
    let btlf = document.querySelector('#battlefield')
    btlf.innerHTML = ''
    
    //Add units
    let battlefieldUnits = [
        'player',
        'enemy',
    ]

    let enemyImgQuant = 20

    //Gen units
    battlefieldUnits.forEach(function(elem){

        //Get unit data
        let unitObj = gameState[elem]

        //Container
        let unit = document.createElement('div')
        unit.classList = 'container'
        btlf.append(unit)

        //Set enemy life
        gameState.enemy.life = round
        
        //Stats text
        let stats = document.createElement('p')
        stats.id = elem + '-stats-elem'
        stats.innerHTML = lifeIco + ' ' + unitObj.life
        unit.append(stats)

        //Pick image
        let unitImg = document.createElement('img')
        unitImg.setAttribute('src', './img/' + unitObj.class + '.svg')
        if(elem === 'enemy'){
            unitImg.setAttribute('src', './img/units/' + rNum(enemyImgQuant) + '.png')
            unitImg.setAttribute('style', 'width:120px; height: 120px;')
        } 
        unit.append(unitImg)
    })

    getQuestion()
}
setBattlefield()

function getQuestion(){
    
    qElem.innerHTML = ''

    //Add question elem
    let question = document.createElement('div')
    question.id = 'question'
    qElem.append(question)

    //Set question
    //Set random question
    let index = rNum(Object.keys(questions).length)
    let qKeys = Object.keys(questions)
    let q = questions[qKeys[index]]
    // console.log(index, qKeys, q, Object.keys(questions).length);
    question.innerHTML = q.question
    
    //Add options buttons
    q.options.forEach(function(elem){
        let btn = document.createElement('button')
        btn.innerHTML = answerIco + elem
        btn.setAttribute('onclick', 'answer(this)')
        btn.classList.add('sec')
        qElem.append(btn)
    })
}

//Process answer
let gameLog = document.querySelector('#log')
let gameRound = document.querySelector('#round')


function answer(btn){
    // hide("skills")

    //Variables
    let question = document.querySelector('#question')
    let qSet = questions
    let btnContent = btn.innerHTML
    let enemy = gameState.enemy
    let player = gameState.player

    //Evaluate answer
    Object.keys(qSet).forEach(function(elem){

        //Find the question
        if(qSet[elem].question === question.innerHTML){
            
            //Correct
            if(btnContent === answerIco + qSet[elem].answer){

                //Combat phase
                enemy.life--
                gameLog.innerHTML = "Correct"
                document.querySelector('#enemy-stats-elem').innerHTML = lifeIco + enemy.life

                //Load next question
                getQuestion()
            }

            //Wrong
            else {
                //Wrong answer logic
                player.life--
                gameLog.innerHTML = "Incorrect, you lost 1 life."
                document.querySelector('#player-stats-elem').innerHTML = lifeIco + player.life 
            }

            //Player dead
            if(player.life < 1){
                qElem.innerHTML = "<h1>Game over! You have died.</h1><br>Refresh to try again."

                //Reset round
                round = 1
            } 
            //Enemy dead
            else if (enemy.life < 1){
                gameLog.innerHTML = "Victory! You defeted the enemy. Next round!"

                //Start next round
                setBattlefield()
            }
        }
    })
}