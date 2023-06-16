import { createStore } from "redux";

var initState = {
  mode: "READ",
  welcome_content: {
    title: "WEB",
    desc: "Hello, Web",
  },
  selected_content_id: 1,
  contents: [
    { id: 1, title: "HTML", desc: "HTML is ..." },
    { id: 2, title: "CSS", desc: "CSS is ..." },
    { id: 3, title: "JavaScript", desc: "JavaScript is ..." },
  ],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case "WELCOME":
      return { ...state, mode: action.mode };
    default:
      return state;

      case "READ":
        return {...state, selected_content_id:action.id};
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
