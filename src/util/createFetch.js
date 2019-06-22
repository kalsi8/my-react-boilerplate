



/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */

function createFetch(fetch, getCookie) {
    // NOTE: Tweak the default options to suite your application needs
    return fetch;
}

export default createFetch;
