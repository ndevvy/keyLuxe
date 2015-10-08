(function(root) {
  'use strict';

  var _keys = [], CHANGE_EVENT = "CHANGE";

  root.KeyStore = $.extend({}, EventEmitter.prototype, {

    all: function() {
      return _keys.slice();
    },

    changed: function(){
      root.KeyStore.emit(CHANGE_EVENT);
    },

    pressKey: function (noteName) {
      var keyIdx = _keys.indexOf(noteName);
        if (keyIdx === -1 ){
        _keys.push(noteName);
        this.changed();
      }
    },

    unpressKey: function(noteName) {
      var keyIdx = _keys.indexOf(noteName);
        if (keyIdx !== -1 ){
        _keys.splice(keyIdx, 1);
        this.changed();
      }
    },

    addChangeHandler: function(handler) {
      root.KeyStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function(handler){
      root.KeyStore.removeListener(CHANGE_EVENT, handler);
    }
  });

  root.KeyStore.dispatcherID = AppDispatcher.register(function(action){
    switch(action.actionType){
      case window.KeyConstants.KEY_PRESSED:
        root.KeyStore.pressKey(action.noteName);
        break;
      case window.KeyConstants.KEY_UNPRESSED:
        root.KeyStore.unpressKey(action.noteName);
        break;
    }
  });

  root.KeyStore.setMaxListeners(12);

}(this));
