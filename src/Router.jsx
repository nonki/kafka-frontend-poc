import React from 'react';
import { Router as ReachRouter, Link } from '@reach/router';

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
        <Link to="/nothome">Not Home</Link>
    </nav>
  </div>
)

const NotHome = () => <div>NotHome</div>

export const Router = () => (
  <ReachRouter>
    <Home path="/" />
    <NotHome path="/nothome" />
  </ReachRouter>
)

