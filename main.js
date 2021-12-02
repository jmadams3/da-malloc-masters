var points = 0;
var draftPoints = 0;

// Record
var wins = 0;
var losses = 0;

// Shop variables

var basketballs = 0;
var basketballCost = 10;

var jordans = 0;
var jordansCost = 100;

var jerseys = 0;
var jerseysCost = 1000;

var gatorade = 0;
var gatoradeCost = 10000;

var assistantCoaches = 0;
var assistantCoachCost = 100000;

// Level Variables

var ballHandlingLevel = 0;
var ballHandlingCost = 1000;

var shootingLevel = 0;
var shootingCost = 1000;

var defenseLevel = 0;
var defenseCost = 1000;

var playmakingLevel = 0;
var playmakingCost = 1000;

var finishingLevel = 0;
var finishingCost = 1000;

// Players

var rosterMultiplier = 1.00;

var players = {
    love: false,
    black: false,
    garcia: false,
    manek: false,
    bacot: false,
}


// Active oponent team object

var activeOpponent = {};

function pointClick(number) {
    points += number;
    document.getElementById("points").innerHTML = points;
}



// Shop Functions

function buyBasketball() {
    
    if (points >= basketballCost) {
        basketballs += 1;
        points -= basketballCost;
        document.getElementById("basketballs").innerHTML = basketballs;
        document.getElementById("points").innerHTML = points;
        basketballCost = Math.ceil(basketballCost * 1.15);
    }
    
    document.getElementById("basketballCost").innerHTML = basketballCost;
    updatePointsPerSecond();
}

function buyJordans() {
    
    if (points >= jordansCost) {
        jordans += 1;
        points -= jordansCost;
        document.getElementById("jordans").innerHTML = jordans;
        document.getElementById("points").innerHTML = points;
        jordansCost = Math.ceil(jordansCost * 1.15);
    }
    
    document.getElementById("jordansCost").innerHTML = jordansCost;
    updatePointsPerSecond();
}

function buyJerseys() {
    
    if (points >= jerseysCost) {
        jerseys += 1;
        points -= jerseysCost;
        document.getElementById("jerseys").innerHTML = jerseys;
        document.getElementById("points").innerHTML = points;
        jerseysCost = Math.ceil(jerseysCost * 1.15);
    }
    
    document.getElementById("jerseysCost").innerHTML = jerseysCost;
    updatePointsPerSecond();
}

function buyGatorade() {
    
    if (points >= gatoradeCost) {
        gatorade += 1;
        points -= gatoradeCost;
        document.getElementById("gatorade").innerHTML = gatorade;
        document.getElementById("points").innerHTML = points;
        gatoradeCost = Math.ceil(gatoradeCost * 1.15);
    }
    
    document.getElementById("gatoradeCost").innerHTML = gatoradeCost;
    updatePointsPerSecond();
}

function buyAssistantCoach() {
    
    if (points >= assistantCoachCost) {
        assistantCoaches += 1;
        points -= assistantCoachCost;
        document.getElementById("assistantCoaches").innerHTML = assistantCoaches;
        document.getElementById("points").innerHTML = points;
        assistantCoachCost = Math.ceil(assistantCoachCost * 1.15);
    }
    
    document.getElementById("assistantCoachCost").innerHTML = assistantCoachCost;
    updatePointsPerSecond();
}

// Level Functions

function levelBallHandling() {
    
    if (points >= ballHandlingCost) {
        ballHandlingLevel += 1;
        points -= ballHandlingCost;
        document.getElementById("ballHandlingLevel").innerHTML = ballHandlingLevel;
        document.getElementById("points").innerHTML = points;
        ballHandlingCost = Math.ceil(ballHandlingCost * 1.50);
    }
    
    document.getElementById("ballHandlingCost").innerHTML = ballHandlingCost;
}

function levelShooting() {
    
    if (points >= shootingCost) {
        shootingLevel += 1;
        points -= shootingCost;
        document.getElementById("shootingLevel").innerHTML = shootingLevel;
        document.getElementById("points").innerHTML = points;
        shootingCost = Math.ceil(shootingCost * 1.50);
    }
    
    document.getElementById("shootingCost").innerHTML = shootingCost;
}

function levelDefense() {
    
    if (points >= defenseCost) {
        defenseLevel += 1;
        points -= defenseCost;
        document.getElementById("defenseLevel").innerHTML = defenseLevel;
        document.getElementById("points").innerHTML = points;
        defenseCost = Math.ceil(defenseCost * 1.50);
    }
    
    document.getElementById("defenseCost").innerHTML = defenseCost;
}

function levelPlaymaking() {
    
    if (points >= playmakingCost) {
        playmakingLevel += 1;
        points -= playmakingCost;
        document.getElementById("playmakingLevel").innerHTML = playmakingLevel;
        document.getElementById("points").innerHTML = points;
        playmakingCost = Math.ceil(playmakingCost * 1.50);
    }
    
    document.getElementById("playmakingCost").innerHTML = playmakingCost;
}

function levelFinishing() {
    
    if (points >= finishingCost) {
        finishingLevel += 1;
        points -= finishingCost;
        document.getElementById("finishingLevel").innerHTML = finishingLevel;
        document.getElementById("points").innerHTML = points;
        finishingCost = Math.ceil(finishingCost * 1.50);
    }
    
    document.getElementById("finishingCost").innerHTML = finishingCost;
}

// Player Purchase Handling
function purchasePlayer(ele, item) {
    if (players[item] == true) {
        return;
    }
    if (draftPoints >= 5) {
        draftPoints-= 5;
        players[item] = true;
        var id = ele.id;
        addPlayerImg(item);
        rosterMultiplier += .50;
        document.getElementById("rosterMultiplier").innerHTML = rosterMultiplier;
        updatePointsPerSecond();
        document.getElementById("draftPoints").innerHTML = draftPoints;
        document.getElementById(id).src = "./images/checkmark.png";
    }
}

function addPlayerImg(item) {
    if (item == 'love') {
        document.getElementById("calebLovePortraitOwned").src = "./images/lovePortrait.jpg";
    } else if (item == 'black') {
        document.getElementById("leakyBlackPortraitOwned").src = "./images/blackPortrait.jpg";
    } else if (item == 'garcia') {
        document.getElementById("dawsonGarciaPortraitOwned").src = "./images/garciaPortrait.jpg";
    } else if (item == 'manek') {
        document.getElementById("bradyManekPortraitOwned").src = "./images/manekPortrait.jpg";
    } else {
        document.getElementById("armandoBacotPortraitOwned").src = "./images/bacotPortrait.jpg";
    }
}

// Debug
function giveMoney() {
    pointClick(30000000000);
    draftPoints = 1000;
    document.getElementById("draftPoints").innerHTML = draftPoints;
}

function updatePointsPerSecond() {
    var pointsPerSecond = (basketballs + (jordans * 5) + (jerseys * 25) + (gatorade * 100) + (assistantCoaches * 500)) * rosterMultiplier;
    document.getElementById("pointspersecond").innerHTML = pointsPerSecond;
}

window.setInterval(function() {

pointClick(basketballs * rosterMultiplier);
pointClick(jordans * 5 * rosterMultiplier);
pointClick(jerseys * 25 * rosterMultiplier);
pointClick(gatorade * 100 * rosterMultiplier);
pointClick(assistantCoaches * 500 * rosterMultiplier);
document.title = points + " points - UNCclicker"

}, 1000)