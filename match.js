let team1 = "Pakistan";
let team2 = "India";
let overs = 2;
let secondInning;
let score = 0;
let wkts = 0;


function sleepFor(duration) {
    let now = new Date().getTime();
    while (new Date().getTime() < now + duration) {       
    }
}




const match = (team1, team2, overs)=> {
    sleepFor(1000);
    console.log(`The match is between ${team1} and ${team2}`);
    let battingTeam;
    if(toss("heads",team1,team2)){
        battingTeam = team1;
        console.log(`${team1} won the toss and choose to bat first`);
    }
    else{
        battingTeam = team2;
        console.log(`${team2} won the toss and choose to bat first`);
    } 
    sleepFor(2000)
    console.log(`${overs} Overs match started, ${battingTeam} is to bat`);
    innings(battingTeam);
    secondInning = true;

    if(battingTeam === team1)
        battingTeam = team2 
    else 
        battingTeam = team1

    innings(battingTeam);
}

const toss = (choice,team1,team2)=> {
    sleepFor(3000);
    console.log(`Toss between ${team1} and ${team2}`);
    console.log(`${team1} chooses ${choice}`);;
    let coin = ["heads" , "tails"];
    const toss = ((coin[Math.floor(Math.random()*2)]));
    sleepFor(1000);
    if(toss===choice) return true;
    return false;
}


let target;
const ScoreCalc = (team,overs)=> {
    let totalballs = 6;
    while (totalballs--) {
         let number = Math.floor(Math.random() * 7);
          console.log(number);
        if(number==0){
            console.log("its out!");
            wkts++;
            sleepFor(2000);
        }else if(number == 4 || number == 6){
            console.log(`its ${number}`);
            sleepFor(1000);
        } else { 
            sleepFor(1000);
        }
        score +=number;
        if(secondInning){
         if(winningCondition(team, target + 1, score, overs+1)){
            
            return;
         }
       
        }else
         target = score;
    }
    winningCondition(team, target + 1, score, overs);

}

const innings = (team)=> {
        let i=1;
        totalScore = score
        score = 0;
        wkts=0
         totalOvers = overs ;
        if(secondInning){
            console.log(
                `To Win ${team} need ${totalScore - score+1} From ${
                    overs 
                } Overs`);
                sleepFor(2000);
                console.log("Starting second inning");
            }
        while(totalOvers--){
        sleepFor(2000)
       
                console.log(`Over # ${i++} started `);
                sleepFor(1000);
                ScoreCalc(team,totalOvers);
                sleepFor(1000);
                console.log(`Team ${team} Score: ${score}/${wkts}`);
            }
           
        }
        
   const winningCondition = (team, totalScore, score, overs) => {
  sleepFor(1000);
    console.log(overs + "overs:");
  if (score < totalScore && overs ==0) {
        console.log(`${team} lost by ${totalScore - score} runs`);
        return true;
  } else if (score > totalScore) {
    console.log(`${team} won by ${10 - wkts} wkts`);
    return true;
}
};




match(team1,team2,overs);

