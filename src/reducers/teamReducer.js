const initialState = {
  teamMembers: [],
};

const teamReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_TEAM':
            return{
                ...state ,
                teamMembers: [...state.teamMembers, action.payload]
            };
            
        case "REMOVE_FROM_TEAM":
            return {
                ...state,
                teamMembers: state.teamMembers.filter(
                    (member) => member.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default teamReducer;