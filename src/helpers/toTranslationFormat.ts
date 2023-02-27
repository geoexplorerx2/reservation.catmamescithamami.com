
const toTranslationFormat = (text: string) => {
    return text.toUpperCase().split(' ').join('_')
}


export default toTranslationFormat