import { connect } from "react-redux"
import TableUserActivity from "./table-user-activity";
import { Operation } from "../../redux/reducers/user-activity/operation/operation";

const mapStateToProps = (state) => ({
   isError: state.error
});


const mapDispatchToProps = (dispatch) => ({
   deleteActivity: (id) => {dispatch(Operation.deleteData(id))},
   changeActivity: (data, id) => {dispatch(Operation.changeData(data, id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(TableUserActivity);
