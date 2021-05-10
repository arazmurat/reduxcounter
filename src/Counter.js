import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCount, decreaseCount } from "./actions/counterAction";
import { Button, Icon } from "semantic-ui-react";

export const Counter = (props) => {
  return (
    <div>
      <Button onClick={props.decreaseCount} icon labelPosition="left" basic color='orange' content='Orange' >
        <Icon name="minus" />
        Decrease
      </Button>
      <span style={{ padding: "10px" }}>{props.count}</span>
      <Button onClick={props.increaseCount} icon labelPosition="right" basic color='purple' content='Purple'>
        Increase
        <Icon name="plus" />
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increaseCount, decreaseCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
