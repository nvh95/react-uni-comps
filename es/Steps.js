import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useLayoutEffect, useRef, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import { throttle } from './helper';
import clsx from 'clsx';
var StyledSteps = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .step {\n    .step-box {\n      position: relative;\n      &::after {\n        content: '';\n        position: absolute;\n        background-color: #909ca4;\n      }\n\n      .step-circle {\n        position: relative;\n        display: flex;\n        width: 25px;\n        height: 25px;\n        font-size: 13px;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        color: #909ca4;\n        border: 1px solid #909ca4;\n        border-radius: 50%;\n        background-color: #fff;\n        padding: 0;\n\n        &.dot {\n          width: 8px;\n          height: 8px;\n        }\n\n        &.icon {\n          border: none;\n        }\n      }\n    }\n\n    &.finish {\n      .step-box {\n        &::after {\n          ", "\n        }\n      }\n      .step-circle {\n        ", "\n        ", "\n      }\n    }\n    &.current {\n      .step-circle {\n        color: #fff;\n        ", "\n        border:0;\n      }\n    }\n\n    &.finish,\n    &.current {\n      .step-title {\n        ", "\n      }\n      .step-circle {\n        &.dot {\n          ", "\n        }\n      }\n    }\n\n    &:last-child {\n      .step-box::after {\n        display: none;\n      }\n    }\n  }\n\n  &.horizontal {\n    display: flex;\n\n    .step {\n      &:not(:last-child) {\n        width: ", "px;\n      }\n      position: relative;\n\n      .step-box {\n        width: 24px;\n        height: 24px;\n        &::after {\n          left: 50%;\n          top: 50%;\n          height: 1px;\n          transform: translateY(-50%);\n          width: ", "px;\n          position: absolute;\n        }\n        .step-circle {\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n    }\n\n    .step-content {\n      font-size: 14px;\n      padding-top: 12px;\n      color: #999;\n      .step-title {\n      }\n      .step-description {\n        margin-top: 2px;\n      }\n    }\n  }\n\n  &.vertical {\n    .step {\n      display: flex;\n\n      &:not(:last-child) {\n        height: ", "px;\n      }\n\n      .step-box {\n        flex: none;\n        width: 24px;\n        margin-right: 8px;\n\n        &::after {\n          left: 50%;\n          top: 13px;\n          width: 1px;\n          transform: translateX(-50%);\n          height: 100%;\n        }\n        .step-circle {\n          top: 13px;\n          left: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n\n      &:last-child {\n        .step-content {\n          padding-bottom: 0;\n        }\n      }\n      .step-content {\n        flex: auto;\n        padding: 3px 0 14px;\n        font-size: 14px;\n        color: #999;\n        .step-title {\n        }\n        .step-description {\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"], ["\n  .step {\n    .step-box {\n      position: relative;\n      &::after {\n        content: '';\n        position: absolute;\n        background-color: #909ca4;\n      }\n\n      .step-circle {\n        position: relative;\n        display: flex;\n        width: 25px;\n        height: 25px;\n        font-size: 13px;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        color: #909ca4;\n        border: 1px solid #909ca4;\n        border-radius: 50%;\n        background-color: #fff;\n        padding: 0;\n\n        &.dot {\n          width: 8px;\n          height: 8px;\n        }\n\n        &.icon {\n          border: none;\n        }\n      }\n    }\n\n    &.finish {\n      .step-box {\n        &::after {\n          ", "\n        }\n      }\n      .step-circle {\n        ", "\n        ", "\n      }\n    }\n    &.current {\n      .step-circle {\n        color: #fff;\n        ", "\n        border:0;\n      }\n    }\n\n    &.finish,\n    &.current {\n      .step-title {\n        ", "\n      }\n      .step-circle {\n        &.dot {\n          ", "\n        }\n      }\n    }\n\n    &:last-child {\n      .step-box::after {\n        display: none;\n      }\n    }\n  }\n\n  &.horizontal {\n    display: flex;\n\n    .step {\n      &:not(:last-child) {\n        width: ", "px;\n      }\n      position: relative;\n\n      .step-box {\n        width: 24px;\n        height: 24px;\n        &::after {\n          left: 50%;\n          top: 50%;\n          height: 1px;\n          transform: translateY(-50%);\n          width: ", "px;\n          position: absolute;\n        }\n        .step-circle {\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n    }\n\n    .step-content {\n      font-size: 14px;\n      padding-top: 12px;\n      color: #999;\n      .step-title {\n      }\n      .step-description {\n        margin-top: 2px;\n      }\n    }\n  }\n\n  &.vertical {\n    .step {\n      display: flex;\n\n      &:not(:last-child) {\n        height: ", "px;\n      }\n\n      .step-box {\n        flex: none;\n        width: 24px;\n        margin-right: 8px;\n\n        &::after {\n          left: 50%;\n          top: 13px;\n          width: 1px;\n          transform: translateX(-50%);\n          height: 100%;\n        }\n        .step-circle {\n          top: 13px;\n          left: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n\n      &:last-child {\n        .step-content {\n          padding-bottom: 0;\n        }\n      }\n      .step-content {\n        flex: auto;\n        padding: 3px 0 14px;\n        font-size: 14px;\n        color: #999;\n        .step-title {\n        }\n        .step-description {\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('background-color'), function (props) {
  return props.space;
}, function (props) {
  return props.space;
}, function (props) {
  return props.space;
});
/** 步骤条 */

var Steps = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.current,
      current = _a === void 0 ? 0 : _a,
      _b = props.dotStyle,
      dotStyle = _b === void 0 ? false : _b,
      className = props.className,
      _c = props.direction,
      direction = _c === void 0 ? 'horizontal' : _c,
      _d = props.steps,
      steps = _d === void 0 ? [] : _d,
      rest = __rest(props, ["current", "dotStyle", "className", "direction", "steps"]);

  var domRef = useRef();
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var _e = useState(80),
      space = _e[0],
      setSpace = _e[1];

  useLayoutEffect(function () {
    var isHorizontal = direction === 'horizontal';

    var resizeHandler = function resizeHandler() {
      if (steps.length > 1) {
        var domEl = domRef.current;
        setSpace(Math.max((isHorizontal ? domEl.offsetWidth : domEl.offsetHeight) / steps.length, 60));
      }
    };

    var throttleResizeHandler = throttle(resizeHandler);

    if (isHorizontal) {
      window.addEventListener('resize', throttleResizeHandler);
    }

    resizeHandler();
    return function () {
      if (isHorizontal) {
        window.removeEventListener('resize', throttleResizeHandler);
      }
    };
  }, [steps, direction]);
  return /*#__PURE__*/React.createElement(StyledSteps, __assign({}, rest, {
    ref: domRef,
    className: clsx('uc-steps', className, direction),
    space: space
  }), steps.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: clsx('step', {
        finish: idx < current,
        current: idx === current
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: clsx("step-circle", {
        dot: dotStyle && !item.icon,
        icon: item.icon
      })
    }, item.icon ? item.icon : dotStyle ? null : idx + 1)), /*#__PURE__*/React.createElement("div", {
      className: "step-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "step-title"
    }, item.title), !!item.description && /*#__PURE__*/React.createElement("div", {
      className: "step-description"
    }, item.description)));
  }));
});
Steps.displayName = 'UC-Steps';
export default Steps;
var templateObject_1;