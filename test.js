'use strict';

let fs = require('fs');
var yml = require('./index.js');

fs.readFile('./test/test.yml', 'utf-8', (err, testYAML) => {
  if (err) {
    console.log(err);
  }
  console.assert(yml(testYAML).meta.foo === 'Pellentesque Bibendum Consectetur Quam Fringilla',
    'ERROR: testYAML frontmatter member foo'
  );
  console.assert(yml(testYAML).meta.bar === 'Ligula Vulputate',
    'ERROR: testYAML frontmatter member bar'
  );

  var testTailString = 'Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.';
  console.assert(yml(testYAML).tail === testTailString,
    'ERROR: testYAML and the rest'
  );
});
