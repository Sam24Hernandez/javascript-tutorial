"use strict";

onmessage = function onmessage() {
  var myDate;

  for (var i = 0; i < 10000000; i++) {
    var date = new Date();
    myDate = date;
  }

  postMessage(myDate);
};