var count = 0;
const txt = document.getElementById("count_text");
const hello_user = document.getElementById("hello_user");

var WebApp = window.Telegram.WebApp;

var MainButton = WebApp.MainButton;
var BackButton = WebApp.BackButton;

MainButton.show();
BackButton.show();

MainButton.onClick(function() {
  WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
});
WebApp.onEvent('mainButtonClicked', function() {
  /* also */
});

BackButton.onClick(function() {
  WebApp.showAlert("Нет пути назад!");
  
  BackButton.hide();
});
WebApp.onEvent('backButtonClicked', function() {
  /* also */
});

WebApp.expand();

function click_count(){
    WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
    count++;
    text = "" + count;
    txt.innerText = text;
}
