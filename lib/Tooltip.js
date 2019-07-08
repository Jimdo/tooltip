"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _positions = _interopRequireDefault(require("positions"));

var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

var _placements = require("./placements");

var _util = require("./util");

var _Content = _interopRequireDefault(require("./Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    style.left = "".concat(position.left + align.offset[0], "px");
  }

  if (arrowDirection === 'left' || arrowDirection === 'right') {
    style.top = "".concat(position.top + align.offset[1], "px");
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

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      arrowStyle: null
    });

    _defineProperty(_assertThisInitialized(_this), "onPopupAlign", function (popupNode, align) {
      var onPopupAlign = _this.props.onPopupAlign;

      _this.adjustArrow(align);

      if (onPopupAlign) {
        onPopupAlign(popupNode, align);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPopupDomNode", function () {
      return _this.trigger.getPopupDomNode();
    });

    _defineProperty(_assertThisInitialized(_this), "getPopupElement", function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;
      var arrowStyle = _this.state.arrowStyle;
      return [_react["default"].createElement("div", {
        ref: _this.saveArrow,
        className: "".concat(prefixCls, "-arrow"),
        key: "arrow",
        style: arrowStyle
      }, arrowContent), _react["default"].createElement(_Content["default"], {
        key: "content",
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    });

    _defineProperty(_assertThisInitialized(_this), "adjustArrow", function (align) {
      var arrowStyleCurrent = _this.state.arrowStyle;
      var targetNode = (0, _reactDom.findDOMNode)(_assertThisInitialized(_this));
      var arrowPlacement = pointNamesMap[align.points[0]];
      var targetPlacement = pointNamesMap[align.points[1]];
      var position = (0, _positions["default"])(_this.arrow, arrowPlacement, targetNode, targetPlacement);
      var arrowStyle = getArrowStyle(position, align);

      if (!arrowStyleCurrent || arrowStyle.top !== arrowStyleCurrent.top || arrowStyle.left !== arrowStyleCurrent.left) {
        _this.setState({
          arrowStyle: arrowStyle
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveArrow", function (node) {
      _this.arrow = node;
    });

    _defineProperty(_assertThisInitialized(_this), "saveTrigger", function (node) {
      _this.trigger = node;
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          overlayClassName = _this$props2.overlayClassName,
          trigger = _this$props2.trigger,
          mouseEnterDelay = _this$props2.mouseEnterDelay,
          mouseLeaveDelay = _this$props2.mouseLeaveDelay,
          overlayStyle = _this$props2.overlayStyle,
          prefixCls = _this$props2.prefixCls,
          children = _this$props2.children,
          onVisibleChange = _this$props2.onVisibleChange,
          afterVisibleChange = _this$props2.afterVisibleChange,
          transitionName = _this$props2.transitionName,
          animation = _this$props2.animation,
          placement = _this$props2.placement,
          align = _this$props2.align,
          destroyTooltipOnHide = _this$props2.destroyTooltipOnHide,
          defaultVisible = _this$props2.defaultVisible,
          getTooltipContainer = _this$props2.getTooltipContainer,
          restProps = _objectWithoutProperties(_this$props2, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer"]);

      var extraProps = _objectSpread({}, restProps);

      if ('visible' in this.props) {
        extraProps.popupVisible = this.props.visible;
      }

      return _react["default"].createElement(_rcTrigger["default"], _extends({
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
      }), children);
    }
  }]);

  return Tooltip;
}(_react.Component);

_defineProperty(Tooltip, "propTypes", {
  trigger: _propTypes["default"].any,
  children: _propTypes["default"].any,
  defaultVisible: _propTypes["default"].bool,
  visible: _propTypes["default"].bool,
  placement: _propTypes["default"].string,
  transitionName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  animation: _propTypes["default"].any,
  onVisibleChange: _propTypes["default"].func,
  onPopupAlign: _propTypes["default"].func,
  afterVisibleChange: _propTypes["default"].func,
  overlay: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,
  overlayStyle: _propTypes["default"].object,
  overlayClassName: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  mouseEnterDelay: _propTypes["default"].number,
  mouseLeaveDelay: _propTypes["default"].number,
  getTooltipContainer: _propTypes["default"].func,
  destroyTooltipOnHide: _propTypes["default"].bool,
  align: _propTypes["default"].object,
  arrowContent: _propTypes["default"].any,
  id: _propTypes["default"].string
});

_defineProperty(Tooltip, "defaultProps", {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
});

var _default = Tooltip;
exports["default"] = _default;