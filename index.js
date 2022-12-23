const AWAY = ['pertinho', 'logo ali', 'um tirin de espingarda']

const LOOKUP = [
    [/pouco/, 'cadin'],
    [/muito longe/, AWAY],
    [/longe/, AWAY],
    [/coisa boa/, ['trem baum']],
    [/coisa/, ['trem']],
    [/caldo/, ['cardo', 'cardin']],
    [/caldinho/, ['cardin']],
]

const convert = (term) => {
    for (let [regex, replacement] of LOOKUP) {
        if (regex.test(term)) {
            if (Array.isArray(replacement)) {
                replacement = replacement[Math.floor(Math.random() * replacement.length)]
            }
            term = term.replace(regex, replacement)
        }
    }
    return term
}

if (typeof module !== 'undefined') {
    module.exports = convert;
}
