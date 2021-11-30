import _ from "lodash";
import './assets/styles/style.scss';
import './assets/js/img-path';
import printMe from './assets/js/print.js';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.append(btn);
	return element;
}

document.body.appendChild(component());