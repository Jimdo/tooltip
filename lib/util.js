'use strict';

exports.__esModule = true;
exports.getArrowDirection = getArrowDirection;
exports.getArrowAlign = getArrowAlign;

var _placements = require('./placements');

function getPlacementFromAlign(align) {
  for (var _iterator = Object.keys(_placements.placements), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var placement = _ref;
    var _placements$placement = _placements.placements[placement].points,
        popupAlignPoint = _placements$placement[0],
        targetAlignPoint = _placements$placement[1];

    if (align.points[0] === popupAlignPoint && align.points[1] === targetAlignPoint) {
      return placement;
    }
  }
}

function getArrowDirection(align) {
  var placement = getPlacementFromAlign(align);

  if (['top', 'topLeft', 'topRight'].includes(placement)) {
    return 'down';
  }

  if (['right', 'rightTop', 'rightBottom'].includes(placement)) {
    return 'left';
  }

  if (['bottom', 'bottomLeft', 'bottomRight'].includes(placement)) {
    return 'up';
  }

  if (['left', 'leftTop', 'leftBottom'].includes(placement)) {
    return 'right';
  }
}

function getArrowAlign(align) {
  var placement = getPlacementFromAlign(align);

  if (['topLeft', 'bottomLeft'].includes(placement)) {
    return 'left';
  }

  if (['topRight', 'bottomRight'].includes(placement)) {
    return 'right';
  }

  if (['leftTop', 'rightTop'].includes(placement)) {
    return 'top';
  }

  if (['leftBottom', 'rightBottom'].includes(placement)) {
    return 'bottom';
  }
}