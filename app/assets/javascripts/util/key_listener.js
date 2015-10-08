window.addEventListener('keydown', function(e){
  var key = parseKey(e.keyCode);

  if (typeof key !== 'undefined') {
    KeyActions.keyPressed(key);
    // alert( key + " pressed");
  }
});

window.addEventListener('keyup', function(e){
  var key = parseKey(e.keyCode);
  if (typeof key !== 'undefined'){
    KeyActions.keyUnpressed(key);
  }

});

var parseKey = function(keyCode) {
  var key;
  switch (keyCode) {
    case 65:
      key = "C";
      break;
    case 87:
      key = "C#";
      break;
    case 83:
      key = "D";
      break;
    case 69:
      key = "D#";
      break;
    case 68:
      key = "E";
      break;
    case 70:
      key = "F";
      break;
    case 84:
      key = "F#";
      break;
    case 71:
      key = "G";
      break;
    case 89:
      key = "G#";
      break;
    case 72:
      key = "A";
      break;
    case 85:
      key = "A#";
      break;
    case 74:
      key = "B";
      break;
  }
  return key;
};
