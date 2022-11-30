const initalState = {
  id: '',
};
const shopreduser = (state = initalState, action) => {
  switch (action.type) {
    case 'PRODUCT_ADD':
      return {
        id: action.data,
      };
    default:
      return state;
  }
};
export { shopreduser };
