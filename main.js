const hour = document.querySelector("div.hour");
const minute = document.querySelector("div.minute");
const second = document.querySelector("div.second");

const clock = () => {
    const dt = new Date();
    const sec = dt.getSeconds() * 6;
    second.style.transform = "rotate(" + sec + "deg)";
    const hr = dt.getHours() * 30;
    hour.style.transform = "rotate(" + hr + "deg)";
    const min = dt.getMinutes() * 6;
    minute.style.transform = "rotate(" + min + "deg)";
}
setInterval(clock, 1000);