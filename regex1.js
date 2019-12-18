/*
 * Complete the function in the editor below by returning a RegExp object, 're',
 * that matches any string 's' that begins and ends with the same vowel.
 * Recall that the English vowels are a, e, i, o, and u.
 */

 function regexVar() {
   const re = /^(a|e|i|o|u).*\1$/;
   return re;
}

const re = regexVar();
const s = 'aohjikva';

console.log(re.test(s));
