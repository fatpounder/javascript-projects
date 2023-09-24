function makeLine(size) {
    let line = ''
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line
}
console.log(makeLine(5));


function makeSquare(size) {
    let square = ''
    for (i = 0; i < size; i++) {
        square = (makeLine(size))
    }
    return square = ` ${square}\n ${square}\n ${square}\n ${square}\n ${square}`
}
console.log(makeSquare(5));


function makeRectangle(width, height) {
    let rectangle = ''
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n')
    }
    return rectangle
}
console.log(makeRectangle(5, 3));


function makeDownwardStairs(height) {
    let stairs = ""
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + "\n")
    } 
    return stairs
}
console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
    let spaceline = ""
    let space = ""
    for (let i = 0; i < numSpaces; i++) {
        space += " ";
    }
    spaceline = space + makeLine(numChars) + space
    return spaceline
}
console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
    let tri = ""
    for (let i = 0; i < height; i++) {
        tri +=  (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n')
    }
    return tri.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));


function makeDiamond(height) {
    let revTri = ""
    let topTri = ""
    for (i = 0; i < height; i++) {
        topTri += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n')
    }
    for (i = (height - 1); i >= 0; i--) {
        revTri += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n')
    }
    return topTri.slice(0, -1) + '\n' + revTri.slice(0, -1)
}
console.log(makeDiamond(5));