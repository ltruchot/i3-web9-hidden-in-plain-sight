import $ from 'jquery';

/** ***********
* IA BEHAVIOR *
************* */

// Aurélie's code
export function randomMoveElements(elements) {
  $(elements).each(function () {
    var rand = Math.floor(Math.random() * 2);
    var position = $(this).position();
    var leftNow = position.left;
    if (rand === 1) {
      $(this).css({
        left: `${leftNow + 10}px`,
      });
    }
  });
}
