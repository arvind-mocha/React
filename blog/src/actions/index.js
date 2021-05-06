import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash"; // lodash is a universal library for many js functions check it out

//solution to solve memoize functions drawback
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //await because can't fetch user before posts

  const userIds = _.uniq(_.map(getState().posts, "userId")); // using lodash to get unique ids and only return their userId field using map from lodash
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

// we can't use async await with redux. when it is compiled to es15 syntax it will cause error
//so can can use a middle ware called redux-thunk instead
//using redux thunk only we can return function. So we can use asyn await to the returned function which won't cause error
//using redux-thunk as a advantage if we return a function like below, we can get the dispatch and getstate function by using redux-thunk
//returning a function is totaly an option we can also return objects like we always do

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  //since we are using dispatch itself we don't need to return anything we can directly perform our action

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//code we wrote for the first time for fetching users
//we had users with same id many time so we fetched a user 10 times

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// solution for the above problem
// we can use momoize from lodash
// we just need to pass our function into memoize
// it return the same value if the same argument is passed avoiding api calls, no refetch happens
// draw back if a user is updated memoized function  don't return the updated user. since it don't do fetching

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch); // this how we must call a memoized function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
