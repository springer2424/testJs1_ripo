
import input from "analiza-sync";




export function askRiddle(riddleObj){
    console.log(riddleObj.namer)
    console.log(riddleObj.taskDescription)
    let valid = false
    while(valid == false){
        if("choices" in riddleObj){
            console.log(riddleObj.choices)
            const choys = input("What is your choice? ");
            if(choys -1 == riddleObj.correctAnswer ){
                valid = true
            }else{
                console.log("tray egen")

                
                continue}


        }
        if("choices" in riddleObj === false){
            
            const choys = input("What is your choice? ");
            if(choys == riddleObj.correctAnswer){
                valid = true
            }else{
                console.log("tray egen")

                
                continue}
        }
    }    


    console.log("correct veri good")}



export function measureSolveTime(fn){
    const start = Date.now()
    fn()
    const end = Date.now()
    let tot = (end - start)/1000
    return tot



}    
