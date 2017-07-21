'use strict';

System.register(['./second'], function (_export, _context) {
  "use strict";

  var kam;
  return {
    setters: [function (_second) {
      kam = _second;
    }],
    execute: function () {

      console.log(kam);

      //alert(date.myDateTime());
      //import {} from './second';

      // import date from 'second';

      // import {calcCircumference} from 'second.js'; alert(calcCircumference(200));
    }
  };
});
