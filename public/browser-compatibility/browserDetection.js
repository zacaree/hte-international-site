
// Adapted from:
// https://codepen.io/gapcode/pen/vEJNZN?editors=1010

/* eslint-disable */


// detect IE
// returns version of IE or false, if browser is not Internet Explorer
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


var browserCompatibilityMsg = document.getElementById('browserCompatibilityMsg');

var unsupportedBrowserMsg = '<' +
  'div id="unsupportedBrowser">' +
    '<div id="closeUnsupported">' +
      '<div class="iconClose">' +
        '<div class="x xOne"></div>' +
        '<div class="x xTwo"></div>' +
      '</div>' +
    '</div>' +
    '<div class="ctr-unsupportedBrowser">' +
      "<h3>You're using a deprecated browser which may not be fully compatable with this site.</h3>" +
      "<p>If you experience issues, please try a different browser for optimal experience.</p>" +
    '</div>' +
  '</div>';

var incompatibleBrowserMsg = '<' +
  'div id="incompatibleBrowser">' +
    '<div class="ctr-incompatibleBrowser">' +
      "<h1>You're viewing the Hustler Turf Equipment site in an unsupported browser.</h1>" +
      "<p>Rather than show you a broken page, we're showing you this.<br>The desktop browsers we support are:</p>" +
      '<ul>' +
        '<li>Chrome 23+</li>' +
        '<li>Firefox 28+</li>' +
        '<li>Safari 6.1+</li>' +
        '<li>Opera 12.1+</li>' +
        '<li>Microsoft Edge 12+</li>' +
      '</ul>' +
      "<p>If you're seeing this page, please try one of the browsers listed.</p>" +
      "<p>The Hustler Turf Equipment site should work in most full featured mobile browsers. But if there is a known problematic mobile browser, you may see this message as well.</p>" +
    '</div>' +
  '</div>';


// Get IE or Edge browser version
(function response() {
  var version = detectIE();

  if (version === false) {
    return;
  } else if (version > 11) {
    return;
  } else if (version === 11) {
    browserCompatibilityMsg.innerHTML = unsupportedBrowserMsg;
    document.getElementById('closeUnsupported').onclick = browserMsgClose;
  } else {
    browserCompatibilityMsg.innerHTML = incompatibleBrowserMsg;
  }
})();


function browserMsgClose() {
  browserCompatibilityMsg.parentNode.removeChild(browserCompatibilityMsg);
}


