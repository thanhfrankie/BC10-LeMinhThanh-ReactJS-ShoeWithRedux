import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addAmountAction,
  deleteShoeAction,
  minusAmountAction,
} from "./redux/action";

class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.price * item.amount} $</strong>
                  </td>
                  <td>
                    <button className="btn-dark"   onClick={this.props.handleMinusAmount(item.id)}>-</button>
                    <strong>{item.amount}</strong>
                    <button
                      className="btn-warning"
                      onClick={this.props.handleAddAmount(item.id)}
                    >
                      +
                    </button>
                  </td>

                  <td>
                    <img
                      src={item.image}
                      style={{
                        width: 80,
                      }}
                      alt=""
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.handleDelete(item.id);
                      }}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => {
      dispatch(deleteShoeAction(id));
    },
    handleAddAmount: (id) => {
      dispatch(addAmountAction(id));
    },
    handleMinusAmount: (id) => {
      dispatch(minusAmountAction(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
