var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import ReactCalendar from './ucalendar';
import { getThemeColorCss } from './themeHelper';
import { isMobile } from './dom';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import * as colors from './colors';
var StyledCalendarWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  background: #fff;\n  line-height: inherit;\n  box-sizing: border-box;\n  &.pc {\n    width: 280px;\n  }\n"], ["\n  font-size: 14px;\n  background: #fff;\n  line-height: inherit;\n  box-sizing: border-box;\n  &.pc {\n    width: 280px;\n  }\n"])));
var StyledCalendar = styled(ReactCalendar)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\n  &.double-view {\n    min-width: 520px;\n    .viewContainer {\n      display: flex;\n      margin: -0.5em;\n      flex-wrap: nowrap;\n\n      > * {\n        width: 50%;\n        margin: 0.5em;\n      }\n    }\n  }\n\n  abbr {\n    font-size: 1em;\n    text-decoration: none;\n    cursor: default;\n  }\n\n  &,\n  & *,\n  & *:before,\n  & *:after {\n    box-sizing: border-box;\n  }\n\n  button {\n    margin: 0;\n    border: 0;\n    outline: none;\n\n    &:enabled {\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n\n  .navigation {\n    display: flex;\n    height: 44px;\n    margin-bottom: 0.5em;\n    border-bottom: 1px solid ", ";\n\n    button {\n      min-width: 44px;\n      background: none;\n      color: #999;\n      white-space: nowrap;\n      user-select: none;\n      padding: 0;\n\n      &:enabled {\n        &:hover,\n        &:focus {\n          color: #333;\n        }\n      }\n\n      &[disabled] {\n        color: #999;\n      }\n    }\n  }\n\n  .month-view {\n    .month-view__weekdays {\n      text-align: center;\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: 0.75em;\n\n      .month-view__weekdays__weekday {\n        padding: 0.5em;\n      }\n    }\n\n    .weekNumbers {\n      .tile {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 0.75em;\n        font-weight: bold;\n        padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n      }\n    }\n  }\n  .month-view__days__day--weekend {\n    /* color: rgb(209, 0, 0); */\n  }\n  .month-view__days__day--neighboringMonth {\n    color: #ccc;\n  }\n\n  .year-view,\n  .decade-view,\n  .century-view {\n    .tile {\n      padding: 1em 0.5em;\n    }\n  }\n\n  .century-view {\n    .tile {\n      padding: 1em 0;\n      font-size: 12px;\n    }\n  }\n\n  .tile {\n    max-width: 100%;\n    text-align: center;\n    cursor: pointer;\n    padding: 0.5em;\n    background: none;\n\n    &:disabled {\n      color: #ccc;\n      cursor: not-allowed;\n      abbr {\n        cursor: not-allowed;\n      }\n    }\n\n    &:enabled {\n      &:hover,\n      &:focus {\n        background-color: rgb(230, 230, 230);\n      }\n    }\n\n    &.tile--active,\n    &.tile--hasActive {\n      ", "\n      color:#fff;\n      &:hover,\n      &:focus {\n        ", "\n        color: #fff;\n      }\n    }\n\n    &.tile--range {\n      ", "\n      opacity: 0.4;\n    }\n    &.tile--rangeStart,\n    &.tile--rangeEnd {\n      ", "\n      opacity: 1;\n      color: #fff;\n    }\n  }\n"], ["\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\n  &.double-view {\n    min-width: 520px;\n    .viewContainer {\n      display: flex;\n      margin: -0.5em;\n      flex-wrap: nowrap;\n\n      > * {\n        width: 50%;\n        margin: 0.5em;\n      }\n    }\n  }\n\n  abbr {\n    font-size: 1em;\n    text-decoration: none;\n    cursor: default;\n  }\n\n  &,\n  & *,\n  & *:before,\n  & *:after {\n    box-sizing: border-box;\n  }\n\n  button {\n    margin: 0;\n    border: 0;\n    outline: none;\n\n    &:enabled {\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n\n  .navigation {\n    display: flex;\n    height: 44px;\n    margin-bottom: 0.5em;\n    border-bottom: 1px solid ", ";\n\n    button {\n      min-width: 44px;\n      background: none;\n      color: #999;\n      white-space: nowrap;\n      user-select: none;\n      padding: 0;\n\n      &:enabled {\n        &:hover,\n        &:focus {\n          color: #333;\n        }\n      }\n\n      &[disabled] {\n        color: #999;\n      }\n    }\n  }\n\n  .month-view {\n    .month-view__weekdays {\n      text-align: center;\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: 0.75em;\n\n      .month-view__weekdays__weekday {\n        padding: 0.5em;\n      }\n    }\n\n    .weekNumbers {\n      .tile {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 0.75em;\n        font-weight: bold;\n        padding: calc(0.75em / 0.75) calc(0.5em / 0.75);\n      }\n    }\n  }\n  .month-view__days__day--weekend {\n    /* color: rgb(209, 0, 0); */\n  }\n  .month-view__days__day--neighboringMonth {\n    color: #ccc;\n  }\n\n  .year-view,\n  .decade-view,\n  .century-view {\n    .tile {\n      padding: 1em 0.5em;\n    }\n  }\n\n  .century-view {\n    .tile {\n      padding: 1em 0;\n      font-size: 12px;\n    }\n  }\n\n  .tile {\n    max-width: 100%;\n    text-align: center;\n    cursor: pointer;\n    padding: 0.5em;\n    background: none;\n\n    &:disabled {\n      color: #ccc;\n      cursor: not-allowed;\n      abbr {\n        cursor: not-allowed;\n      }\n    }\n\n    &:enabled {\n      &:hover,\n      &:focus {\n        background-color: rgb(230, 230, 230);\n      }\n    }\n\n    &.tile--active,\n    &.tile--hasActive {\n      ", "\n      color:#fff;\n      &:hover,\n      &:focus {\n        ", "\n        color: #fff;\n      }\n    }\n\n    &.tile--range {\n      ", "\n      opacity: 0.4;\n    }\n    &.tile--rangeStart,\n    &.tile--rangeEnd {\n      ", "\n      opacity: 1;\n      color: #fff;\n    }\n  }\n"])), colors.border, getThemeColorCss('background-color'), getThemeColorCss('background-color'), getThemeColorCss('background-color'), getThemeColorCss('background-color'));

var _formatDay = function _formatDay(locale, date) {
  return date.getDate();
};
/** 日历,基于react-calendar  */


var Calendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.formatDay,
      formatDay = _a === void 0 ? _formatDay : _a,
      _b = props.locale,
      locale = _b === void 0 ? 'zh-CN' : _b,
      _c = props.calendarType,
      calendarType = _c === void 0 ? 'US' : _c,
      _d = props.minDetail,
      minDetail = _d === void 0 ? 'decade' : _d,
      value = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      header = props.header,
      footer = props.footer,
      style = props.style,
      rest = __rest(props, ["className", "formatDay", "locale", "calendarType", "minDetail", "value", "defaultValue", "onChange", "header", "footer", "style"]);

  var _e = useState(value || defaultValue || new Date()),
      val = _e[0],
      setVal = _e[1];

  useImperativeHandle(ref, function () {
    return {
      value: val
    };
  });
  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  }, [val, onChange]);
  return /*#__PURE__*/React.createElement(StyledCalendarWrap, {
    className: clsx('uc-calendar-wrap', className, {
      mobile: isMobile,
      pc: !isMobile
    }),
    style: style
  }, header, /*#__PURE__*/React.createElement(StyledCalendar, __assign({}, rest, {
    onChange: setVal,
    calendarType: calendarType,
    locale: locale,
    minDetail: minDetail,
    formatDay: formatDay
  })), footer);
});
Calendar.displayName = 'UC-Calendar';
export default Calendar;
var templateObject_1, templateObject_2;