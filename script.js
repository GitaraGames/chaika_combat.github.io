var count = 0;
const txt = document.getElementById("count_text");
let tg = window.Telegram.WebApp;

function click_count(){
    count++;
    text = "" + count;
    txt.innerText = text;
}
