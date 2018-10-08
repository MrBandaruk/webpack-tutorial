import $ from 'jquery';
import { Greeter } from './greeter';
import styles from './styles.scss';
import logo from './logo.png';

var greeter = new Greeter();
greeter.greet('Hello, Webpack!');

console.log(styles);
console.log(logo);

$('#app').text('Hello world!').addClass(styles.title)
    .append(`<img class='${styles.logo}' src='.${logo}'/>`);

