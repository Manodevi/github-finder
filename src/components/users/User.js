import React, { Fragment, useEffect } from 'react';
import Spinner from '../../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';


const User = props => {
  const githubContext = useContext(GithubContext);
  const { loading, getUser, getUserRepos, repos } = githubContext;
  
  useEffect(() => {
    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);
    // eslint-disable-next-line
  }, []);
  
  const {
    name, 
    login,
    company,
    blog,
    location,
    bio,
    hireable,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = githubContext.user; 

  if(loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" alt="Back to Search" className="btn btn-light">
        Back To Search
      </Link>
      Hireable: {' '}
      {hireable ? <i className="fas fa-check text-success" /> : (
        <i className="fas fa-times-circle text-danger" />)
      }
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt={name} className="round-img" style={{width: '150px'}} />
          <h2>{name}</h2>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (<Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
            </Fragment>              
          )}
          <a href={html_url} alt="View GitHub Profile" className="btn btn-dark my-1">View GitHub Profile</a>
          <ul>
            {login && (
              <li>
                <strong>Username : </strong>{login}
              </li>
            )}
            {company && (
              <li>
                <strong>Company : </strong>{company}
              </li>
            )}
            {blog && (
              <li>
                <strong>Website : </strong>{blog}
              </li>
            )}
            
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
}

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired
};


export default User;