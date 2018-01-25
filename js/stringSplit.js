function stringSplit(stringToSplit, separator){
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join('/'));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan, Feb, Mar, Apr, May, June, July, Aug, Sep, Oct, Nov, Dec';

var space = ' ';
var comma = ',';

stringSplit(tempestString, space);
stringSplit(tempestString);
stringSplit(monthString, comma);
