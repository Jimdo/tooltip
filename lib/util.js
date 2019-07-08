"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrowDirection = getArrowDirection;
exports.getArrowAlign = getArrowAlign;

var _placements = require("./placements");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getPlacementFromAlign(align) {
  for (var _i = 0, _Object$keys = Object.keys(_placements.placements); _i < _Object$keys.length; _i++) {
    var placement = _Object$keys[_i];

    var _placements$placement = _slicedToArray(_placements.placements[placement].points, 2),
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