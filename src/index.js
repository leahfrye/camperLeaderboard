import React from 'react';
import { render } from 'react-dom';
import LeaderboardTable from './components/leaderboardTable';
require("./../dist/scss/style.scss");

render( <LeaderboardTable />, document.querySelector('.main'));
