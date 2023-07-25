const outputScreen = document.getElementById("outputScreen");


function display(num){
    outputScreen.value += num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid!");
    }
}

function clearr(){
    outputScreen.value = "";
}


function deletee(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function percentage(){
    outputScreen.value = outputScreen.value/100;
}