var count = 0;
const txt = document.getElementById("count_text");
const hello_user = document.getElementById("hello_user");
let tg = window.Telegram.WebApp;

tg.expand();

hello_user.innerText = "Hello, " + tg.initDataUnsafe.user.first_name;

function click_count(){
    count++;
    text = "" + count;
    txt.innerText = text;
}
