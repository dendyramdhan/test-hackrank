function dorongString(s, dorongKiri, dorongKanan) {
    // Write your code here
    let c = s.split('');

    if (dorongKiri) {
        for (let i = 0; i < dorongKiri; i++) {
            if (c[0] === 'X' && c[1] === 'Y' && c[2] === 'Z') {
                c.push(c[0]); 
                c.push(c[1]);
                c.push(c[2]);
                c.shift();
                c.shift();
                c.shift();
            } else {
                c.push(c[0]);
                c.shift();
            }
        }   
    }

    if (dorongKanan) {
        for (let i = 0; i < dorongKanan; i++) {
            if (c[c.length - 1] === 'Z' && c[c.length - 2] === 'Y' && c[c.length - 3] === 'X') {    
                c.unshift(c[c.length - 1]); 
                c.unshift(c[c.length - 2]);
                c.unshift(c[c.length - 3]);
                c.pop();
                c.pop();
                c.pop();
            } else {
                c.unshift(c[c.length - 1]);
                c.pop();
            }
        }   
    }

    return c.join('');
}

// 2
function dorongString2(s, dorongKiri, dorongKanan) {
    let c = s.split('');

    c.sort()
    return c;
}

console.log(dorongString2('abcdXYZefgXYZhij', 0, 5));