var React = require('react');
var ajax = require('reqwest');

var MainComponent = React.createClass({
  getInitialState: function() {
    return {
      storeID: '5479'
    }
  },

  render: function() {
    return (
      <div className='pizza'>
        <h2>Give Them Pizza!</h2>
      </div>
    );
  },

  saveZip: function(e) {
    this.setState({
      zipCode: e.target.value
    });
  },

  orderPizza: function() {
    var _data = this.state;
    ajax({
      url: '/pizza',
      type: 'json',
      data: JSON.stringify(_data),
      method: 'post',
      contentType: 'application/json'
    })
      .always(function (resp) {
        console.log(resp);
      });
    console.log("submitting...");
  }

});

module.exports = MainComponent;