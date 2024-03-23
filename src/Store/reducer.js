export const initialState = {
  user: null,
  // user: {
  //   message: "Alright then, have a wonderful day",
  //   name: "Godwin",
  //   received: true,
  //   timestamp: "10:40",
  //   photoURL:
  //     "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg",
  //   __v: 0,
  //   _id: "65f2d4268aba3f245a0f309e",
  // },
  message: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_MESSAGE: "SET_MESSAGE",
};

const reducer = (state, action) => {
  //   console.log("this is state:", state);
  //   console.log("this is action:", action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
