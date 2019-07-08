'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _positions = require('positions');

var _positions2 = _interopRequireDefault(_positions);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _placements = require('./placements');

var _util = require('./util');

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var pointNamesMap = {
  tc: 'top center',
  bc: 'bottom center',
  cl: 'center left',
  cr: 'center right',
  tl: 'top left',
  tr: 'top right',
  bl: 'bottom left',
  br: 'bottom right'
};

var getArrowStyle = function getArrowStyle(position, align) {
  var arrowDirection = (0, _util.getArrowDirection)(align);
  var arrowAlign = (0, _util.getArrowAlign)(align);

  var style = {};
  if (arrowDirection === 'up' || arrowDirection === 'down') {
    style.left = position.left + align.offset[0] + 'px';
  }
  if (arrowDirection === 'left' || arrowDirection === 'right') {
    style.top = position.top + align.offset[1] + 'px';
  }
  if (arrowAlign === 'left') {
    style.marginLeft = 5;
  }
  if (arrowAlign === 'right') {
    style.marginRight = 5;
  }
  if (arrowAlign === 'top') {
    style.marginTop = 5;
  }
  if (arrowAlign === 'bottom') {
    style.marginBottom = 5;
  }

  return style;
};

var Tooltip = function (_Component) {
  (0, _inherits3['default'])(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { arrowStyle: null }, _this.onPopupAlign = function (popupNode, align) {
      var onPopupAlign = _this.props.onPopupAlign;


      _this.adjustArrow(align);

      if (onPopupAlign) {
        onPopupAlign(popupNode, align);
      }
    }, _this.getPopupDomNode = function () {
      return _this.trigger.getPopupDomNode();
    }, _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;
      var arrowStyle = _this.state.arrowStyle;


      return [_react2['default'].createElement(
        'div',
        { ref: _this.saveArrow, className: prefixCls + '-arrow', key: 'arrow', style: arrowStyle },
        arrowContent
      ), _react2['default'].createElement(_Content2['default'], {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.adjustArrow = function (align) {
      var arrowStyleCurrent = _this.state.arrowStyle;

      var targetNode = (0, _reactDom.findDOMNode)(_this);

      var arrowPlacement = pointNamesMap[align.points[0]];
      var targetPlacement = pointNamesMap[align.points[1]];
      var position = (0, _positions2['default'])(_this.arrow, arrowPlacement, targetNode, targetPlacement);

      var arrowStyle = getArrowStyle(position, align);
      if (!arrowStyleCurrent || arrowStyle.top !== arrowStyleCurrent.top || arrowStyle.left !== arrowStyleCurrent.left) {
        _this.setState({ arrowStyle: arrowStyle });
      }
    }, _this.saveArrow = function (node) {
      _this.arrow = node;
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = (0, _objectWithoutProperties3['default'])(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = (0, _extends3['default'])({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return _react2['default'].createElement(
      _rcTrigger2['default'],
      (0, _extends3['default'])({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: _placements.placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps, {
        onPopupAlign: this.onPopupAlign
      }),
      children
    );
  };

  return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
  trigger: _propTypes2['default'].any,
  children: _propTypes2['default'].any,
  defaultVisible: _propTypes2['default'].bool,
  visible: _propTypes2['default'].bool,
  placement: _propTypes2['default'].string,
  transitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  animation: _propTypes2['default'].any,
  onVisibleChange: _propTypes2['default'].func,
  onPopupAlign: _propTypes2['default'].func,
  afterVisibleChange: _propTypes2['default'].func,
  overlay: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]).isRequired,
  overlayStyle: _propTypes2['default'].object,
  overlayClassName: _propTypes2['default'].string,
  prefixCls: _propTypes2['default'].string,
  mouseEnterDelay: _propTypes2['default'].number,
  mouseLeaveDelay: _propTypes2['default'].number,
  getTooltipContainer: _propTypes2['default'].func,
  destroyTooltipOnHide: _propTypes2['default'].bool,
  align: _propTypes2['default'].object,
  arrowContent: _propTypes2['default'].any,
  id: _propTypes2['default'].string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};
exports['default'] = Tooltip;
module.exports = exports['default'];