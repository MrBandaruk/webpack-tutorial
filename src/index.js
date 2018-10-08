import $ from 'jquery';
import { Greeter } from './greeter';
import styles from './styles.scss';

var greeter = new Greeter();
greeter.greet('Hello, Webpack!');

console.log(styles)

$('#app').text('Hello world!').addClass(styles.title);