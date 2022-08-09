function clr()
{
    document.getElementById("result").value = " ";
}
function display(val)
{
    document.getElementById("result").value+=val;
}
function equate()
{
    let x = document.getElementById("result").value;
    try{
    var y = eval(x);
    }
    catch(err){
        document.getElementById("result").value="error";
    }
    document.getElementById("result").value=y;
}

function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
function doMath(){
    var inputNum1=document.getElementById("result").value;
    var result = Math.sqrt(inputNum1);
    document.getElementById("result").value = result;
  }