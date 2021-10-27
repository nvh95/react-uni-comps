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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


import React from 'react';
import { getDecadeStart, getDecadeEnd } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import clsx from 'clsx';
import { getDecadeLabel } from '../shared/dates';
import { formatYear as defaultFormatYear } from '../shared/dateFormatter';
export default function Decade(_a) {
  var className = _a.className,
      _b = _a.formatYear,
      formatYear = _b === void 0 ? defaultFormatYear : _b,
      otherProps = __rest(_a, ["className", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, __assign({}, otherProps, {
    className: clsx('century-view__decades__decade', className),
    maxDateTransform: getDecadeEnd,
    minDateTransform: getDecadeStart,
    view: "century"
  }), getDecadeLabel(locale, formatYear, date));
}