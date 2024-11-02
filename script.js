let count = 0;
const txt = document.getElementById("count_text");

var WebApp = window.Telegram.WebApp;

var MainButton = WebApp.MainButton;
var BackButton = WebApp.BackButton;

WebApp.expand();

MainButton.show();
BackButton.show();

WebApp.MainButton.text = "Save and Exit";

MainButton.onClick(function() {
  let data = {
    clicks: count
  }
  WebApp.sendData(JSON.stringify(data));
  WebApp.close();
});
WebApp.onEvent('mainButtonClicked', function() {
  /* also */
});

BackButton.onClick(function() {
  WebApp.showAlert("To exit with the save, click the button at the bottom");
});
WebApp.onEvent('backButtonClicked', function() {
  /* also */
});

WebApp.expand();

function click_count(){
    count++;
    text = "" + count;
    txt.innerText = text;
}
