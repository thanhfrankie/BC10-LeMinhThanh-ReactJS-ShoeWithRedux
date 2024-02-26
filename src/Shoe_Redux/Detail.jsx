import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    let { name, image } = this.props.shoe;
    return (
      <div className="col-5">
        <img src={image} alt="" className="w-75" />
        <h3>{name}</h3>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    shoe: state.detail,
  };
};

export default connect(mapStateToProps)(Detail);
// rcc
