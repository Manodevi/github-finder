import { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users.js';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;