let myName = prompt("Lütfen isminizi giriniz")
document.querySelector('#myName').innerHTML = myName




function tarihSaat(){
    const days= ["Pazar","Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = days[date.getDay()]

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.querySelector("#myClock").innerHTML = `${hour}: ${minutes}: ${seconds}  ${day}`
}

setInterval(tarihSaat, 1000);
showTime();