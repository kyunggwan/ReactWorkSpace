import { createStore } from "redux";
var initState = {
  mode: "WELCOME",
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
  return state;
}

export default createStore(reducer);
