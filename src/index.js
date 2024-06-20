// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './components/Home';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  errorBoundary(err, info, props) {
    return <div>Home Page Error</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;

if (!window.singleSpaNavigate) {
  ReactDOM.render(<Home />, document.getElementById('home'));
}
