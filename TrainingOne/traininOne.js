function createXmasTree(height, ornament) {
    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    const tree = []
    for (let i = 0; i < height; i++) {
        const stars = ornament.repeat(i * 2 + 1)
        const spaces = '_'.repeat(height - i - 1)
        tree.push(spaces + stars + spaces)
    }
    return tree.join('\n') + '\n' + trunk + '\n' + trunk
}

console.log(createXmasTree(5, '*'));
console.log(createXmasTree(7, '#'))
console.log(createXmasTree(9, '@'))