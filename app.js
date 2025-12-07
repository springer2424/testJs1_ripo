import ridarr from "./riddles/riddlesarr.js"
import input from "analiza-sync";
import { createPlayer,addSolveTime,showStats } from "./utils/pleyerfun.js";
import { askRiddle,measureSolveTime} from "./utils/riddelfunc.js";




console.log("  welcome to the game")
let playerName = input("wot is your name : ")
console.log(`    welcome ${playerName} `)
let player = createPlayer(playerName)
for(let i = 0; i < ridarr.length;i++){
    let ridel = ridarr[i]
    let second = measureSolveTime(()=>askRiddle(ridel))
    addSolveTime(player,second)
    console.log(`  time fo this rider :\n ======${second}======`)

}

showStats(player)
