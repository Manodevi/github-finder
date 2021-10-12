import { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import  {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_ALERT
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const axiosRes = await axios.get(`https://api.github.com/search/users?q=${text}&per_page=30&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({type: SEARCH_USERS, payload: axiosRes.data.items});
  };

  // Get User
  const getUser = async (username) => {
    setLoading();
    const axiosRes = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({type: GET_USER, payload: axiosRes.data});    
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const axiosRes = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({type: GET_REPOS, payload: axiosRes.data});        
  };

  // Clear Users
  const clearUsers = () => {
    dispatch({type: CLEAR_USERS});
  };

  // Set Loading
  const setLoading = () => {
    dispatch({type: SET_LOADING});
  }

  // Set Alert
  const setAlert = (message, type) => {
    dispatch({type: SET_ALERT, payload: {message, type}});
    setTimeout(() => dispatch({type: SET_ALERT, payload: null}), 3000);
  };

  return <GithubContext.Provider
     value = {{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      alert: state.alert,
      searchUsers,
      getUser,
      getUserRepos,
      clearUsers,
      setAlert
    }
  }>
    {props.children}
    </GithubContext.Provider>
};

export default GithubState;