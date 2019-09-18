import css from './css/index.css';
import less from './css/black.less';
import scss from './css/white.scss';
import hello from './hello'

import $ from 'jquery'

{
  let jspangString = 'Hello Jspang';
  document.getElementById('title').innerHTML=jspangString;
}
hello()

$('#webpack').html('hello Webpack')

var json = require('./json/config.json')
document.getElementById("json").innerHTML= json.name