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
  if(action.type === 'CHANGE_MODE'){
    // state를 복사한 값, adction의 mode값으로 action저장
    return {...state, mode:action.mode};
  }
}

export default createStore(reducer);
