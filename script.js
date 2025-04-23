let inputvalue = document.getElementById("input")

function show(num){
    inputvalue.value = inputvalue.value+num;
}

function clearall(){
    inputvalue.value = "";
}

function equal(){
    try{
        inputvalue.value = eval(inputvalue.value);
    }
    catch(err){
        alert("INVALID")
    }
}

function del(){
    inputvalue.value = inputvalue.value.slice(0,-1);
}