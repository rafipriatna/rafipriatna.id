import * as JsSearch from 'js-search';

export default function JsSearchFunction(posts, query) {
    // Configuration
    const dataToSearch = new JsSearch.Search('title')
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    // Fields
    dataToSearch.addIndex('title')
    dataToSearch.addIndex('id')

    // Data
    dataToSearch.addDocuments(posts)

    return dataToSearch.search(query)
}
