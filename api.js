document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function(){
        fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
        .then(response => response.json())
        .then(data =>{
        console.log(data);
        const weather = document.querySelector("#weather").value;
        const temp = data.hourly.temperature_2m;
        const p = document.createElement('p');
        const dataa = temp[weather];
        if (dataa!= undefined){
        p.innerHTML = `${document.querySelector("#weather").value}:  ${dataa}`;
        document.querySelector("#result").append(p);
        }
        else{
        document.querySelector("#result").innerHTML = "Invalid";
        }
    });
        console.error();
        return false;
    }
});