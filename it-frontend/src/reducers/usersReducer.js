function usersReducer(state = { 
          users: [] }, action) {
          switch (action.type) {
              case "ADD_USER":
              return [...state, action.user];
    
          default:
              return state;
          }
    
}

export default usersReducer;