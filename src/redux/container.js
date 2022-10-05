import { BUY_CAKE } from "./cake/cakeTypes";

export const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () =>
      dispatch({
        type: BUY_CAKE
      })
  };
};
