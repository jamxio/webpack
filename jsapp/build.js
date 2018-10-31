//main.js
/*const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());*/
// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter2 from './greeter2';

import './main.css';//使用import 代替require导入css文件

render(<Greeter2/>,document.getElementById('root'));