import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class List extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item) => {
      return <Item key={item.id} data={item} />;
    });
  };
  render() {
    return <div className="row col-7">{this.renderListShoe()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeArr,
  };
};
export default connect(mapStateToProps)(List);
