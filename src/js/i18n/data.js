import i18n from 'roddeh-i18n';
import translations from './translations/index.js';

/**
 * An object representing short names for the language.
 * 
 * @typedef {Object} LanguageShortNames
 * @property {string} short Short name containing at most 3-letter short language name.
 * 
 * Examples: `Eng`, `Rus`, `Pl`, `De`.
 * 
 * Notice, that in some languages this is 2-letter short name: `Pl`, `De` for better UX.
 * 
 * @property {string} shorter Short name containing 2-letter short language name.
 * 
 * Examples: `EN`, `RU`, `PL`, `DE`.
 */

/**
 * Defines a language data for application.
 *
 * @typedef {Object} Language
 * @property {string} name Human-readable language name.
 * @property {LanguageShortNames} shortNames An object containing short names for the language.
 * @property {string} value A string containing identifier for the language, used in `<select>` and `<option>` elements. Must be unique.
 * @property {string} styleClass A stylesheet class for element to which I18n is applied.
 * @property {string | RegExp | (string | RegExp)[]} languageCodes A single or multiple language codes mapped to this language.
 * Can be either {@link string} or {@link RegExp} or an array of {@link string} or {@link RegExp}.
 * 
 * @property {i18n} dict A dictionary containing translation data.
 */


/**
 * An array containing language data for all pages.
 * 
 * @constant langs
 * 
 * @type {Language[]}
 */
const langs = [{
  name: 'English',
  shortNames: { short: 'Eng', shorter: 'EN' },
  value: 'eng',
  styleClass: 'i18n__eng',
  languageCodes: /en-*/g,
  dict: i18n.create({
    values: translations.eng,
  }),
}, {
  name: 'Russian',
  shortNames: { short: 'Rus', shorter: 'RU' },
  value: 'rus',
  styleClass: 'i18n__rus',
  languageCodes: ["ru", "uk", "bg", "be"],
  dict: i18n.create({
    values: translations.rus,
  }),
}, {
  name: 'Polish',
  shortNames: { short: 'Pl', shorter: 'PL' },
  value: 'pl',
  styleClass: 'i18n__pl',
  languageCodes: "pl",
  dict: i18n.create({
    values: translations.pl,
  }),
}, {
  name: 'German',
  shortNames: { short: 'De', shorter: 'DE' },
  value: 'de',
  styleClass: 'i18n__de',
  languageCodes: /de.*/g,
  dict: i18n.create({
    values: translations.de,
  }),
}];

export default langs;