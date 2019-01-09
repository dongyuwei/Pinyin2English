const fs = require('fs');
const cedict = require('./cedict/cedict.json');

const buildDictEntry = (pinyin, translations) => {
    const entry =`<d:entry id="py_${pinyin}" d:title="${pinyin}">
        <d:index d:value="${pinyin}" d:title="${pinyin}"/>
        <h1><span class="headword">${pinyin}</span></h1>
        ${buildTranslationItems(translations)}
    </d:entry>`;
    return entry;
};

const buildTranslationItems = (translations) => {
    const items = translations.map((translation) => {
        return `<li class="${hasChinsesCharacter(translation) ? 'cn': ''}"><span class="meaning">${escapeHTML(translation)}</span></li>`;
    }).join('\n\t');
    return `<ol class='translations'>\n\t${items}\n\t</ol>`;
};

const hasChinsesCharacter = (translation) => {
    return translation.match(/[\u3400-\u9FBF]/);
};

const escapeHTML = (str) => {
    const escapeChars = {
        '<' : 'lt',
        '>' : 'gt',
        '"' : 'quot',
        '&' : 'amp',
        '\'': 'apos'
    };

    return str.replace(/[<>"&']/g, function(c) {
        return '&' + escapeChars[c] + ';';
    });
};

const buildDictEntries = (dict) => {
    let entries = [];
    for (let pinyin in dict){
        const translations = dict[pinyin];
        entries.push(buildDictEntry(pinyin, translations));
    }
    return entries.join('\n');
};

const buildDictionary = (dict) => {
    const dictXML = `<?xml version="1.0" encoding="UTF-8"?>
        <d:dictionary xmlns="http://www.w3.org/1999/xhtml" xmlns:d="http://www.apple.com/DTDs/DictionaryService-1.0.rng">
            ${buildDictEntries(dict)}
        </d:dictionary>`;

    fs.writeFileSync('./Pinyin2English.xml', dictXML, 'utf-8');
};

buildDictionary(cedict);