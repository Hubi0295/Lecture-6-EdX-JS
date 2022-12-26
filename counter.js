if(!localStorage.getItem('counter')){
    localStorage.setItem("counter", 0);
}
function count(){
    let counter = localStorage.getItem("counter");
    counter++;
    document.getElementById("1").innerHTML=counter;
    localStorage.setItem("counter", counter);
    /* if(counter%100===0){
        alert(`Brawo! counter to: ${counter}`);
    } */
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("1").innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick=count;
    //setInterval(count, 1000);
})