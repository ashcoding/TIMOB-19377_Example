var win = Ti.UI.createWindow({backgroundColor: 'white'});
var button = Ti.UI.createButton({
  title:    'Click to Open Preferences'
});
button.addEventListener('click', function() {
  Ti.UI.Android.openPreferences();
});
win.add(button);
win.open();