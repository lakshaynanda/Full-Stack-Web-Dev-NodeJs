query = "category = 'Phishing' and (verdict = 'Malicious' or malscore > 80)"
result = tokenizeQuery(query)

//Assuming table name is activity

res=[],i;
function tokenizeQuery1(query){
    for(i in activity)
    {
        if(activity.hasOwnProperty(i)){
            if(activity[i].category === 'Phishing' && (activity[i].verdict==='Malicious' || activity[i].malscore > 80)){
                res.push[activity[i]]
            }
        }
    }
}

function tokensToQuery(tokens){

}


function tokenizeQuery(query){
    
}