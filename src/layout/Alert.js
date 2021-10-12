import { useContext } from 'react';
import GithubContext from '../context/github/githubContext';

const Alert = props => {
  const githubContext = useContext(GithubContext);
  const alert = githubContext.alert;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Alert;