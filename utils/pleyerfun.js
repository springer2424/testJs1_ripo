function createPlayer(name){
    const player = {
        name : "",
        second : []
    }
    return player
}

function addSolveTime(player, seconds){
    player.second.push(seconds)
}

function showStats(player){
    let totalTime = 0

    for(let i = 0; i<player.second.length;i++){
        const time = player.second[i]
        totalTime += time  
    }
    const avrig = totalTime / player.second.length;
    console.log(player.name,totalTime,avrig)


}