import React from 'react';
import { render } from 'react-dom';
import LeaderboardTable from './components/leaderboardTable';
import "es5-shim";

require("./scss/style.scss");

render( <LeaderboardTable />, document.getElementById('main'));
