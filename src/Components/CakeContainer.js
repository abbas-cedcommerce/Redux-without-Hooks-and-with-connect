import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/container";

function CakeContainer(props) {
  return (
    <>
      <h1>No of Cakes - {props.numOfCakes}</h1>
      <button onClick={props.buyCakes}>Buy Cake</button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
