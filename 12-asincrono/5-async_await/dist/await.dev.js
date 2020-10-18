"use strict";

function saludo() {
  return regeneratorRuntime.async(function saludo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.resolve("Hola, que tal!"));

        case 2:
          return _context.abrupt("return", saludando = _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

saludo().then(alert);