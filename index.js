/**
 * return true if a string is find
 * @returns {boolean}
 */

function customSearch(s, p) {
  let x = p.split(" ");
  var find = true;
  for (var partIndex in x) {
    if (s.toLowerCase().indexOf(x[partIndex]) > -1) {
      // Let this item feature in the result set only if other parts of the
      // query have been found too
      find = find && true;
    } else {
      // Even if a single part of the query was not found, this item
      // should not feature in the results
      find = false;
    }
  }
  return find;
}

module.exports = {
  customSearch
};