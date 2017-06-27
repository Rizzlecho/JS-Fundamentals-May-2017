function startsWith(strings, starting) {
    return starting === strings.substring(0,starting.length);
}

console.log(startsWith('How have you been?', 'How'));