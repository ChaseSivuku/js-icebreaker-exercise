questLog = ["Collect 10 Firefly wings", 
    "Defeat the goblin king", 
    "Find the lost sword of oakhaven"];

console.log(questLog);
console.log("The hero has ", questLog.length, "quests.");
console.log("The hero's first quest is to ",questLog[0]);

questLog.push("Deliver the Royal Scroll");

console.log(questLog);

questLog.pop();

questLog.unshift("Rescue the Blacksmith's cat");

console.log(questLog);

questLog.shift();

console.log(questLog);

questLog.splice(1, 1)

console.log(questLog);


questLog.splice(1, 0,"Slay the Dragon of Mount Doom");

console.log(questLog);

let joinn = questLog.join("|")

console.log(joinn);