import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter nama="Alvin" />
        <Counter nama="Adetya" />
        <Counter nama="Sodo" />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    angka: 0
  };

  naik = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };

  turun = () => {
    this.setState({
      angka: this.state.angka - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h2>{this.state.angka}</h2>
        <button onClick={this.naik}>Tambah</button>
        <button onClick={this.turun}>Kurang</button>
      </div>
    );
  }
}
