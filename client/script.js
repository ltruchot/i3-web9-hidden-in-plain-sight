// dependencies
import './style.scss';
import $ from 'jquery';
import io from 'socket.io/client-dist/socket.io';

/** ***********
* MULTIPLAYER *
************* */

// Loïc's code
var socket = io('http://localhost:3000');

/** ****************
* GAME START STATE *
****************** */

// Madisson's code
var playerStartPlaces = [];
var colors = ['red', 'rebeccapurple', 'palegreen', 'royalblue'];
// put 16 divs in the array
for (var i = 1; i < 17; i++) {
  var personnage = $(`<div class="personnage">${i}</div>`);
  personnage.css('background-color', colors[i]);
  playerStartPlaces.push(personnage);
}
$('#container').append(playerStartPlaces);
