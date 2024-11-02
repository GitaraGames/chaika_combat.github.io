var count = 0;
const txt = document.getElementById("count_text");
const hello_user = document.getElementById("hello_user");

var WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

WebApp.expand();

function click_count(){
    count++;
    text = "" + count;
    txt.innerText = text;
}
