import cleanSet from './8-clean_set.js';
import cleanSetCopy from './8-clean_set_copy.js';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log('-----------------------');
console.log(cleanSetCopy(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSetCopy(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
