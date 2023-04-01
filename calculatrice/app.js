function show()
{

   document.getElementById('val').innerHTML += event.target.id;
}

function compute()
{
    document.getElementById('val').innerHTML = eval(document.getElementById('val').innerHTML);
}

function reset()
{
    document.getElementById('val').innerHTML ='';
}