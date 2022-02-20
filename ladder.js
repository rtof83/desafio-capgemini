// ladder size here
const count = 8;

// ==========================================================

let space, ast;
for (let i = 1; i <= count; i++) {
    space = ' '.repeat(count - i);
    ast = '*'.repeat(i);

    console.log(space+ast);
}
