import { connect } from "react-redux";
import Nav from "../components/Nav";

/**
 * connect(데이터 전달, event 전달)
 */
export default connect(
  // 데이터 전달
  function (state) {
    return {data:state.contents}
  },
  // event 전달
  function (dispatch) {
    return{
        onClick:function(id){
            dispatch({type: 'READ', id:id})
        }
    }
  }
)(Nav);
