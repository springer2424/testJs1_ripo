export function createPlayer(name){
    const player = {
        name :name,
        second : []
    }
    return player
}

export function addSolveTime(player, seconds){
    player.second.push(seconds)
}

export function showStats(player){
    let totalTime = 0

    for(let i = 0; i<player.second.length;i++){
        const time = player.second[i]
        totalTime += time  
    }
    const avrig = totalTime / player.second.length;
    console.log(`     player name:   ==${player.name}==,\n     totalTime:     ==${totalTime}==,\n     avrig per1:    ==${avrig}==`)


}