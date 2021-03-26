//the children is present in all children jsx component if it as a parent as a jsx component

const Route = ({ path, children }) => {
  //   console.log(`Child element of path ${path} is`, children);
  return window.location.pathname === path ? children : null;
};

export default Route;
