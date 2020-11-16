// dependencies
import './style.scss';
import $ from 'jquery';
import io from 'socket.io/client-dist/socket.io';
import { randomMoveElements } from './src/ai';

/** ***********
* MULTIPLAYER *
************* */

// Loïc's code
var socket = io('http://localhost:3000');

/** ****************
* GAME START STATE *
****************** */

// Madisson's code
var aiStartPlaces = [];
var colors = ['red', 'rebeccapurple', 'palegreen', 'royalblue'];
for (var i = 0; i < 16; i++) {
  var ai = $(`<div class="ai">${i + 1}</div>`);
  ai.css({ 'background-color': colors[i], top: `${50 * i}px` });
  aiStartPlaces.push(ai);
}
$('#container').append(aiStartPlaces);

// Aurélie's code: move the AIs
setInterval(function () {
  randomMoveElements(aiStartPlaces);
}, 1000);
