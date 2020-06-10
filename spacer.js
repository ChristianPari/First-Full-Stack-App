const express = require('express');

function space(string) {

    return '-'.repeat((string).length);

};

module.exports = space;