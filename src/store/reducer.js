const initialState = {
	balance: 3000
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
 
  //receiving and using a payload
    switch (action.type) {
        
         case"withdraw":
      return { 
        ...state,
        balance: state.balance - action.value,
      };
      break;
      case"deposit":
          return{
          ...state,
          balance:state.balance + action.value,
          }
          break;
   }
   return newState
  }
  
  export default reducer;