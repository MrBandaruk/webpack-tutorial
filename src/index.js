import $ from 'jquery';
import { Greeter } from './greeter';

var greeter = new Greeter();
greeter.greet('Hello, Webpack!');

$('#app').text('Hello world!');