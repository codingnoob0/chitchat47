import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    email: null,
    username:null,
    friends:[],
    messages:{chat:null,messages:null},
    sidebarStatus:true,
    newMessages: {},
    avatar: null,
    error: null,
    loading: false
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject(state,{
        token: action.token,
        email: action.email,
        username:action.username,
        friends:action.friends,
        newMessages:action.newMessages,
        error: null,
        avatar: action.avatar,
        loading: false,
     })
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const setSidebarStatus = (state,action)=>{
    return updateObject(state,{
        sidebarStatus: action.status
    })
}

const addFriends = (state, action) => {
    return updateObject(state, { friends: action.friends });
};

const setMessages = (state, action) => {
    return updateObject(state, { messages: action.messages });
};

const setNewMessages = (state, action) => {
    return updateObject(state, { newMessages: action.newmessages });
};

const changeAvatar = (state,action) =>{
    return updateObject(state, { avatar: action.avatar });
}

const authLogout = (state, action) => {
    return updateObject(state, { token: null,
        email: null,
        username:null,
        friends:null,
        messages:null,
        sidebarStatus:true,
        avatar: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_SIDEBAR_STATUS: return setSidebarStatus(state, action);
        case actionTypes.ADD_FRIENDS: return addFriends(state, action);
        case actionTypes.SET_MESSAGES: return setMessages(state, action);
        case actionTypes.SET_NEW_MESSAGES: return setNewMessages(state, action);
        case actionTypes.CHANGE_AVATAR: return changeAvatar(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;