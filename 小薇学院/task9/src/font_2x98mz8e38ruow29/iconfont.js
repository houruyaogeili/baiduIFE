;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.211 856.28 438.794 895.864 804.44 530.143 438.794 164.464 399.211 204.047 725.337 530.167Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M744.648153 142.774751c17.845437-18.047028 17.845437-47.220465 0-65.204048-17.784038-17.983583-46.688345-17.983583-64.533782 0L283.508517 479.385185c-17.847483 18.052145-17.847483 47.15702 0 65.205071l396.599713 401.814482c17.851577 17.98256 46.688345 18.052145 64.533782 0 17.851577-18.048051 17.851577-47.284933 0.071631-65.205071L393.994887 511.958044 744.648153 142.774751 744.648153 142.774751 744.648153 142.774751zM744.648153 142.774751"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.005 302.974l386.971 420.571 381.019-422.746z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-denglu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M505.258459 542.261211c149.730163 0 271.149537-120.136148 271.149537-268.350794 0-148.135852-121.419374-268.308839-271.149537-268.308839-149.815097 0-271.234471 120.172987-271.234471 268.308839C234.022964 422.125063 355.442338 542.261211 505.258459 542.261211L505.258459 542.261211zM512 567.638181c-209.645764 0-474.556203 168.199817-474.556203 375.667985l0 67.802222 949.112406 0 0-67.802222C986.556203 735.843114 721.639624 567.638181 512 567.638181L512 567.638181zM512 567.638181"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M890.335385 330.911222c-12.576374-12.416396-32.800753-12.352748-45.248112 0.192662L517.248327 661.951458 184.831931 332.512727c-12.576374-12.447359-32.800753-12.352748-45.280796 0.192662-12.447359 12.576374-12.352748 32.831716 0.192662 45.280796l353.311652 350.112082c0.543583 0.543583 1.247144 0.672598 1.792447 1.183497 0.127295 0.127295 0.159978 0.287273 0.287273 0.416288 6.239161 6.175514 14.399785 9.280473 22.527725 9.280473 8.224271 0 16.479505-3.168606 22.720387-9.471415l350.112082-353.311652C902.975407 363.615643 902.880796 343.360301 890.335385 330.911222z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiezhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M819.191467 170.666667 204.8 170.666667c-18.850133 0-34.133333 15.2832-34.133333 34.133333l0 614.4c0 18.850133 15.2832 34.133333 34.133333 34.133333l614.391467 0c18.850133 0 34.133333-15.2832 34.133333-34.133333L853.3248 204.8C853.3248 185.949867 838.0416 170.666667 819.191467 170.666667zM802.1248 802.133333 221.866667 802.133333 221.866667 221.866667l580.258133 0L802.1248 802.133333z"  ></path>' +
    '' +
    '<path d="M674.551467 344.593067l-0.1024-0.059733c-12.168533-7.022933-28.6464-3.268267-35.669333 8.900267L489.412267 587.153067l-93.533867-53.998933c-12.194133-7.04-27.9296-2.824533-34.9696 9.3696-7.04 12.194133-2.824533 27.9296 9.3696 34.9696l116.437333 67.2256 0.0512 0.034133 0.0512 0.034133c12.168533 7.022933 27.0848 2.363733 34.107733-9.796267l162.193067-255.940267C690.141867 366.865067 686.72 351.616 674.551467 344.593067z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rili" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M304 256A48 48 0 0 1 256 208V48a48 48 0 0 1 96 0v160a48 48 0 0 1-48 48zM224 480h128V384h-128v96z m0 160h128V544h-128V640z m0 160h128V704h-128v96zM384 160h256v-64H384v64zM448 640h128V544H448V640z m0 160h128V704H448v96z m0-320h128V384H448v96zM720 256a48 48 0 0 1-48-48V48a48 48 0 1 1 96 0v160a48 48 0 0 1-48 48z m-48 384h128V544h-128V640z m0 160h128V704h-128v96z m0-320h128V384h-128v96z m256 544h-832A96 96 0 0 1 0 928V192a96 96 0 0 1 96-96h128v64H64V960h896V160h-160v-64h128A96 96 0 0 1 1024 192v736a96 96 0 0 1-96 96z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)