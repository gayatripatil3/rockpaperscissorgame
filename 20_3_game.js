var user_score=0,comp_score=0;
var count=0;
function clicked(choice){ 
    count++;
    document.getElementById("choice").innerHTML="";
    document.getElementById("choice").innerHTML=choice;
    var arr=['ROCK','PAPER','SCISSORS'];
    var comp_choice_index=Math.floor(Math.random()*arr.length);
    var comp_choice=arr[comp_choice_index];
    document.getElementById("decision").innerHTML=comp_choice;
   
    switch(choice){
        case 'ROCK':
            switch(comp_choice){
                case 'PAPER':
                    comp_score++;
                    document.getElementById("user_score_id").innerHTML=user_score;
                    document.getElementById("comp_score_id").innerHTML=comp_score;
                    break;
                case 'SCISSORS':
                    user_score++;
                    document.getElementById("user_score_id").innerHTML=user_score;
                    document.getElementById("comp_score_id").innerHTML=comp_score;
                    break;
            }
            break;
        case 'PAPER':
            switch(comp_choice){
                case 'ROCK':
                    user_score++;
                    document.getElementById("user_score_id").innerHTML=user_score;
                    document.getElementById("comp_score_id").innerHTML=comp_score;
                    break;
                case 'SCISSORS':
                    comp_score++;
                    document.getElementById("user_score_id").innerHTML=user_score;
                    document.getElementById("comp_score_id").innerHTML=comp_score;
                    break;
            }
            break;
        case 'SCISSORS':
            switch(comp_choice){
                case 'PAPER':
                    user_score++;
                    document.getElementById("user_score_id").innerHTML=user_score;
                    document.getElementById("comp_score_id").innerHTML=comp_score;
                    break;
                case 'ROCK':
                    comp_score++;
                    document.getElementById("user_score_id").innerHTML=user_score;
                    document.getElementById("comp_score_id").innerHTML=comp_score;
                    break;
            }
            break;
    }



    // if(choice==='ROCK' && comp_choice==='PAPER'){
        // comp_score++;
        // document.getElementById("user_score_id").innerHTML=user_score;
        // document.getElementById("comp_score_id").innerHTML=comp_score;
    // }
    // else if(choice==='ROCK' && comp_choice==='SCISSORS'){
    //     user_score++;
    //     document.getElementById("user_score_id").innerHTML=user_score;
    //     document.getElementById("comp_score_id").innerHTML=comp_score;
    // }
    // else if(choice==='SCISSORS' && comp_choice==='ROCK'){
    //     comp_score++;
    //     document.getElementById("user_score_id").innerHTML=user_score;
    //     document.getElementById("comp_score_id").innerHTML=comp_score;
    // }
    // else if(choice==='SCISSORS' && comp_choice==='PAPER'){
    //     user_score++;
    //     document.getElementById("user_score_id").innerHTML=user_score;
    //     document.getElementById("comp_score_id").innerHTML=comp_score;
    // }
    // else if(choice==='PAPER' && comp_choice==='SCISSORS'){
    //     comp_score++;
    //     document.getElementById("user_score_id").innerHTML=user_score;
    //     document.getElementById("comp_score_id").innerHTML=comp_score;
    // }
    // else if(choice==='PAPER' && comp_choice==='ROCK'){
    //     user_score++;
    //     document.getElementById("user_score_id").innerHTML=user_score;
    //     document.getElementById("comp_score_id").innerHTML=comp_score;
    // }
    if(count==3){
        var result="";
        count=0;
        document.getElementById("item_div_id").style.display="none"
        if(user_score>comp_score){
             result="Congratulations, YOU WIN!!!";
        }
        else if(user_score<comp_score){
             result="Oops, COMPUTER WINS!!!"
        }
        else if(user_score==comp_score){
             result="Ohh, IT'S A TIE!!!"
        }
        document.getElementById("result_id").innerHTML=result;
        document.getElementById("inner_result_screen_id").style.display="flex";  
    }
}
function reset(){
    user_score=0;
    comp_score=0;
    count=0;
    document.getElementById("inner_result_screen_id").style.display="none";
    document.getElementById("item_div_id").style.display="flex"
    document.getElementById("user_score_id").innerHTML=user_score;
    document.getElementById("comp_score_id").innerHTML=comp_score;
    document.getElementById("choice").innerHTML="";
    document.getElementById("decision").innerHTML="";
}