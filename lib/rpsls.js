export function rps(shot){
    const shot_list = ['rock', 'paper', 'scissors']; //Create list of all possible shots
    const random_index = Math.floor(Math.random()*3);
    const random_shot = shot_list[random_index];
    if (shot == undefined){
        //Condition when shots are undefined
        return {"player": random_shot};
    }
    shot = shot.toLowerCase();
    if(!shot_list.includes(shot)){
        //Invaliud shot condition
        throw new RangeError("The shot was invalid");
    }
    //If-else block for other shot conditions as specified in rubric
    if (shot == random_shot){
        return {"player": shot, "opponent": random_shot, "result": "tie"};
    }
    else if ((shot == "rock" && random_shot == "scissors") || 
    (shot == "paper" && random_shot == "rock") || 
    (shot == "scissors" && random_shot == "paper")){
        return {"player": shot, "opponent": random_shot, "result": "win"};
    } 
    else{
        return {"player": shot, "opponent": random_shot, "result": "lose"};
    }
}
export function rpsls(shot){
    const shot_list = ['rock', 'paper', 'scissors','lizard','spock']; //Create list of all possible shots
    const random_index = Math.floor(Math.random()*3);
    const random_shot = shot_list[random_index];
    if (shot == undefined){
        //Condition where shots are undefined
        return {"player": random_shot};
    }
    shot = shot.toLowerCase(); //Convert to lower case
    if(!shot_list.includes(shot)){
        //Invalid shot condition
        throw new RangeError("The shot was invalid");
    }
    //If-else block for other shot conditions in rpsls as specified in rubric
    if (shot == random_shot){
        return {"player": shot, "opponent": random_shot, "result": "tie"};
    }
    else if((shot == "paper" && random_shot == "scissors") ||
    (shot == "rock" && random_shot == "paper") ||
    (shot == "lizard" && random_shot == "rock") || 
    (shot == "spock" && random_shot == "lizard") ||
    (shot == "scissors" && random_shot == "spock") ||
    (shot == "lizard" && random_shot == "scissors") || 
    (shot == "paper" && random_shot == "lizard") ||
    (shot == "spock" && random_shot == "paper") || 
    (shot == "rock" && random_shot == "spock") ||
    (shot == "scissors" && random_shot == "rock")){
        return {"player": shot, "opponent": random_shot, "result": "lose"};
    }
    else{
        return {"player": shot, "opponent": random_shot, "result": "win"};
    }
}