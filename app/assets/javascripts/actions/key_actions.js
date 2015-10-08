var KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      noteName: noteName
    });
  },

  keyUnpressed: function(noteName){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_UNPRESSED,
      noteName: noteName
    });
  }
};
