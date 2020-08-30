import { connect } from "react-redux";
import Header from "./header";
import { Operation } from "../../redux/reducers/user-activity/operation/operation";

const mapDispatchToProps = (dispatch) => ({
   addNewActivity: async (data) => {
      return await dispatch(Operation.addNewData(data));
   }
});

export default connect(null, mapDispatchToProps)(Header);
