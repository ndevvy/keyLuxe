/*global React*/

var Key = React.createClass({
  getInitialState: function() {
    return {
      pressed: false
    };
  },

  componentDidMount: function() {
    var noteName = this.props.noteName;
    var freq = window.TONES[noteName] * Math.pow(2, (this.props.octave - 4));
    this.note = new window.Note(freq);
    window.KeyStore.addChangeHandler(this.checkPressed);
  },

  componentWillUnmount: function() {
    window.KeyStore.removeChangeHandler(this.checkPressed);
  },

  checkPressed: function(){
    var keyIdx = window.KeyStore.all().indexOf(this.props.noteName);

    if (keyIdx !== -1) {
      this.note.start(); //
      this.setState({ pressed: true });
    } else {
      this.note.stop();  //
      this.setState({ pressed: false });
    }
  },

  render: function () {
    var classname = this.state.pressed ? "pressed" : "unpressed";
    var color = (this.props.noteName.length > 1) ? "black" : "white";
    return (
      <div className={"key " + classname + " " + color}>{this.props.noteName}</div>
    );
  }


});
