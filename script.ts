const inputvalue = document.getElementById("input") as HTMLInputElement;

function show(num: string):void {
    inputvalue.value = inputvalue.value+num;
}

function clearall():void {
    inputvalue.value = "";
}

function equal():void {
    try{
        inputvalue.value = eval(inputvalue.value);
    }
    catch(err){
        alert("INVALID")
    }
}

function del():void {
    inputvalue.value = inputvalue.value.slice(0,-1);
}