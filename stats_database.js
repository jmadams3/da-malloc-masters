// This is a database that can save all the stats which are included in main

"use strict";

const Database = require('better-sqlite3');

const db = new Database('stats.db');

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='statsinfo';`);
let row = stmt.get();
if (row === undefined) {
    const sqlInit = `
        CREATE TABLE statsinfo ( id INTEGER PRIMARY KEY,
            wins INTEGER,
            losses INTEGER, 
            points INTEGER, 
            basketballs INTEGER, 
            basketballCost INTEGER,
            jordans INTEGER,
            jordansCost INTEGER,
            jerseys INTEGER,
            jerseysCost INTEGER,
            gatorade INTEGER,
            gatoradeCost INTEGER,
            assistantCoaches INTEGER,
            assistantCoachCost INTEGER,
            ballHandlingLevel INTEGER,
            ballHandlingCost INTEGER,
            shootingLevel INTEGER,
            shootingCost INTEGER,
            defenseLevel INTEGER,
            defenseCost INTEGER,
            playmakingLevel INTEGER,
            playmakingCost INTEGER,
            finishingLevel INTEGER,
            finishingCost INTEGER 
            );
        INSERT INTO statsinfo (wins, losses, points, basketballs, basketballCost, jordans, jordansCost, jerseys, jerseysCost, gatorade, gatoradeCost, assistantCoaches, assistantCoachCost, ballHandlingLevel, ballHandlingCost, shootingLevel, shootingCost, defenseLevel, defenseCost, playmakingLevel, playmakingCost, finishingLevel, finishingCost) VALUES (0, 0, 0, 0, 10, 0, 100, 0, 1000, 0, 10000, 0, 100000, 0, 1000, 0, 1000, 0, 1000, 0, 1000, 0, 1000),
         (0, 0, 0, 0, 10, 0, 100, 0, 1000, 0, 10000, 0, 100000, 0, 1000, 0, 1000, 0, 1000, 0, 1000, 0, 1000)
    `;
    
    db.exec(sqlInit);
    console.log('Stats database created.')

} else {
    console.log('Stats database exists.')
}

module.exports = db