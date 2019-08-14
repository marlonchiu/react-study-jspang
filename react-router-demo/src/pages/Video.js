import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FlutterPage from './video/FlutterPage'
import ReactPage from './video/ReactPage'
import VuePage from './video/VuePage'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <div className='topNav'>
          <ul>
            <li>
              <Link to="/video/react">React教程</Link>
            </li>
            <li>
              <Link to="/video/vue">Vue教程</Link>
            </li>
            <li>
              <Link to="/video/flutter">Flutter教程</Link>
            </li>
          </ul>
        </div>
        <div className="videoContent">
          <h3>视频教程</h3>
          <Route path="/video/react/" component={ReactPage} />
          <Route path="/video/vue/" component={VuePage} />
          <Route path="/video/flutter/" component={FlutterPage} />
        </div>
      </div>
     );
  }
}
 
export default Video;