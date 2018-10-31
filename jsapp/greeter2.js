// Greeter.js
/*module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there is my greetings and the greetings is not for you!asdf";
  return greet;
};*/
//Greeter,js
import React, {Component} from 'react';
import config from './config.json';

import styles from './Greeter.css';//导入

class Greeter2 extends Component {
    render() {
        return (
            <div className={styles.root}>
                我是greeter2
                classname:styles.root = {styles.root}
                <div>//使用cssModule添加类名的方法
                    {config.greetText}
                </div>
            </div>
        );
    }
}

export default Greeter2