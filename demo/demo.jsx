import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgressbar from '../src';

console.log(`react-circular-progressbar v${COMPONENT_VERSION}`);

const githubURL = 'https://github.com/iqnivek/react-circular-progressbar';

const DemoItem = (props) => (
  <div className="row m-b-3">
    <div className="col-xs-12 col-md-6 offset-md-3">
      <p><code>{props.name}</code><small className="text-muted m-l-1">{props.example ? `e.g. ${props.example}` : null}</small></p>
      <p>{props.description}</p>
      <div className="row">
        <div className="col-xs-6 offset-xs-3">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

class Demo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row m-y-3">
          <div className="col-xs-12">
            <div className="text-md-center">
              <h1 className="m-b-2">{COMPONENT_NAME}</h1>
              <p>{COMPONENT_DESCRIPTION}</p>
            </div>
          </div>
        </div>

        <div className="row m-b-3">
          <div className="col-xs-6 offset-xs-3 col-md-2 offset-md-5">
            <CircularProgressbar />
          </div>
        </div>

        <div className="text-xs-center m-y-3">
          <p>Install with npm:</p>
          <p className="m-b-3"><code>npm install {COMPONENT_NAME}</code></p>
          <a className="btn btn-info btn-lg" href={githubURL}>View project on Github</a>
        </div>

        <hr />
        <h2 className="text-md-center m-y-3">Configuration</h2>

        <hr />
        <div className="text-xs-center m-y-3">
          <a className="btn btn-info btn-lg" href={githubURL}>View project on Github</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(Demo), document.getElementById('demo'));
