// https://github.com/odanielson/vector_2d.js
// Copyright 2013, odanielson@github.com
// MIT-license

var Norm = function(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

var Normalize = function(v) {
    var norm = Norm(v);
    return [v[0] / norm, v[1] / norm];
}

var Subtract = function(a, b) {
    return [a[0] - b[0], a[1] - b[1]];
}

var Add = function(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
}

var Multiply = function(v, k) {
    return [v[0] * k, v[1] * k];
}

var ComplexMultiply = function(v1, v2) {
    return [ (v1[0] * v2[0]) - (v1[1] * v2[1]), (v1[0] * v2[1]) + (v2[0] * v1[1]) ];
}

var RotateLeft = function(v) {
    return ComplexMultiply(v, [0,-1]);
}
