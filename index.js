function updateClock(){
    const time = new Date();
    let hour = time.getHours();
    const meri = (hour<12)?"am":"pm";
    hour%=12;
    hour=hour.toString().padStart(2,0);
    const minute = time.getMinutes().toString().padStart(2,0);
    const second = time.getSeconds().toString().padStart(2,0);
    const timeString = `${hour}:${minute}:${second} ${meri}`;
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock,1000);