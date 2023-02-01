for( var i =0; i< pokemon.length; i++){
    if(pokemon[i].id % 3 == 0){
        console.log(pokemon[i])
    }
}


for ( var i = 0; i < pokemon.length; i ++){
    if(pokemon[i].types.length == 2){
        if(pokemon[i].types[1] =="flying"){
            console.log(pokemon[i])
        }
    }
}

for ( var i=0; i <pokemon.length; i++){
    if(pokemon[i].types.length ==1){
        if(pokemon[i].types[0] == "poison"){
            console.log(pokemon[i].id)
        }
    }
}

for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].types.length > 1){
        console.log(pokemon [i].name)
    }
}

for(var i =0; i<pokemon.length; i++){
    if(pokemon[i].types.length == 1){
        if(pokemon[i].types[0] == "poison"){
            console.log(reverse(pokemon[i].name))
        }
    }
}


function reverse(str){
    var splitToArray = str.split("");
    var reverseArray = splitToArray.reverse();
    var joinToString = reverseArray.join("");
    return joinToString;
}