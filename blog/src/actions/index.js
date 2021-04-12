import jsonPlaceholder from "../apis/JsonPlaceHolder";

// we can't use async await with redux. when it is compiled to es15 syntax it will cause error
//so can can use a middle ware called redux-thunk instead
//using redux thunk only we can return function. So we can use asyn await to the returned function which won't cause error
//using redux-thunk as a advantage if we return a function like below, we can get the dispatch and getstate function by using redux-thunk
//returning a function is totaly an option we can also return objects like we always do

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/post");

  //since we are using dispatch itself we don't need to return anything we can directly perform our action

  dispatch({ type: "FETCH_POST", payload: response });
};