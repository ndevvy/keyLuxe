(function(root) {
  'use strict';
  var AudioContext = root.AudioContext || root.webkitAudioContext;
  var ctx = new AudioContext();

  if (typeof root.Note === 'undefined') {
    root.Note = {};
  }

  root.Note = function(frequency) {
    this.oscillatorNode = this.createOscillator(frequency);
    this.gainNode = this.createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  };

  root.Note.prototype.createOscillator = function (freq) {
    var osc = ctx.createOscillator(freq);
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  root.Note.prototype.createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  root.Note.prototype.start = function () {
    this.gainNode.gain.value = 0.3;
  };

  root.Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };

}(this));
