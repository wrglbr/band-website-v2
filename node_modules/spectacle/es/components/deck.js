function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Controller from '../utils/controller';
import Manager from './manager';
var store = configureStore();

var Deck =
/*#__PURE__*/
function (_Component) {
  _inherits(Deck, _Component);

  function Deck() {
    _classCallCheck(this, Deck);

    return _possibleConstructorReturn(this, _getPrototypeOf(Deck).apply(this, arguments));
  }

  _createClass(Deck, [{
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        store: store
      }, React.createElement(Controller, {
        theme: this.props.theme,
        store: store,
        history: this.props.history
      }, React.createElement(Manager, this.props, this.props.children)));
    }
  }]);

  return Deck;
}(Component);

_defineProperty(Deck, "displayName", 'Deck');

_defineProperty(Deck, "propTypes", {
  autoplay: PropTypes.bool,
  autoplayDuration: PropTypes.number,
  children: PropTypes.node,
  controls: PropTypes.bool,
  globalStyles: PropTypes.bool,
  history: PropTypes.object,
  progress: PropTypes.oneOf(['pacman', 'bar', 'number', 'none']),
  theme: PropTypes.object,
  transition: PropTypes.array,
  transitionDuration: PropTypes.number
});

export { Deck as default };