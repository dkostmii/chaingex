/**
 * Gets the current page.
 * 
 * Page is set in `<body>`'s `data-page` attribute.
 * 
 * For example, `<body data-page="Home">...</body>`
 * 
 * @returns {string}
 */
function getCurrentPage() {
  if ('page' in document.body.dataset) {
    return document.body.dataset.page;
  }

  throw new Error('The data-page attribute is missing in <body> element.');
}

export default getCurrentPage;
