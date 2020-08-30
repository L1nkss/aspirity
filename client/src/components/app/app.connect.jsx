import { connect } from "react-redux";
import { Operation } from "../../redux/reducers/user-activity/operation/operation";
import App from "./app";


const mapStateToProps = (state) => ({
    loading: state.loading,
    data: state.userActivity
});

const mapDispatchToProps = (dispatch) => ({
   loadUserActivities: () => dispatch(Operation.loadData())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
