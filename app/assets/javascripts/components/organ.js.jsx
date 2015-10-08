/*global React*/

var Organ = React.createClass({

  getInitialState: function() {
    return {
      octave: 4
    };
  },

  changeOctave: function(dir) {
    var octave = this.state.octave;
    if (dir === "up" && octave < 8) {
      this.setState({octave: octave + 1});
    } else if (octave > 0) {
      this.setState({octave: octave - 1});
    }
  },

  render: function() {
    return (<ul className='organ'>
      {this.props.notes.map(function(note){
        return(<li><Key noteName={note} octave={this.state.octave}/></li>);
        }.bind(this))
      }
      <button onClick={this.changeOctave.bind(null, "up")}>^</button>
      <button onClick={this.changeOctave.bind(null, "down")}>v</button>
    </ul>);
  }

  // freq

});
