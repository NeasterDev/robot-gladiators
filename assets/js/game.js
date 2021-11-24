var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple valuies at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of 'playerattack' from the value of 'enemyHealth
        // and use that result to update the value of the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + 
            " now has " + enemyHealth + " health remaining."
        )
        
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of playerHealth'
        // and use that reult to update the value of 'enemyHealth' variable
        playerHealth = playerHealth - enemyAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + 
            " now has " + playerHealth + " health remaining."
        );

        // Check enemy's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        }
        else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you would like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2;
            } else {
                fight();
            }
            window.alert(playerName + " has chosen to skip the fight");
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }

};

// Game States
// "WIN" - Player robot has defeatedm all enemy robots
//      * Fight all enemy robots
//      *Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// fight();
for(var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}