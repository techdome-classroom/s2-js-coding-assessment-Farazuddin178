/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap={
        ')':'(',
        '}':'{',
        ']':'['
    };
    const stack=[];
    for (let char of s){
        if(char in bracketMap){
            const topElement =stack.length>
        }
    }
};

module.exports = { isValid };


