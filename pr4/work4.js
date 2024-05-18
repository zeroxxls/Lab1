function strikeStr(str) {
    let words = str.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i += 3) {
        result.push(words.slice(i, i + 3).join(' '));
    }
    return result.join('\n');
}