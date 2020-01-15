let svg = (className, width, height, inner) => {
    return `<svg class="${className}" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${inner}`
}

let icons = {
    'add': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M11.521,61.44l99.84,0" /><path d="M61.441,11.52l0,99.84" /></g>`),
    'animation': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.52" y="11.676" width="99.84" height="99.84" /><path d="M31.488,11.676l0,99.84" /><path d="M91.392,11.676l0,99.84" /><path d="M11.52,28.316l19.968,0" /><path d="M91.392,28.316l19.968,0" /><path d="M11.52,44.956l19.968,0" /><path d="M91.392,44.956l19.968,0" /><path d="M11.52,61.596l19.968,0" /><path d="M31.488,61.596l59.904,0" /><path d="M91.392,61.596l19.968,0" /><path d="M11.52,78.236l19.968,0" /><path d="M91.392,78.236l19.968,0" /><path d="M11.52,94.876l19.968,0" /><path d="M91.392,94.876l19.968,0" /><path d="M11.52,111.516l19.968,0" /><path d="M91.392,111.516l19.968,0" /><path d="M11.52,11.676l19.968,0" /><path d="M91.392,11.676l19.968,0" /></g>`),
    'back': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.141" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M86.258,19.2l-49.92,42.24l49.92,42.24" /></g>`),
    'beat': svg('icon', 123, 123, `<path d="M78.741,11.671l17.301,99.84l-69.204,0l17.301,-99.84l34.602,0Z" /><path d="M26.838,34.649l34.602,51.902" /><path d="M31.163,86.551l60.554,0" /><path d="M54.305,25.363l14.363,0" /><path d="M54.305,40.517l14.363,0" /><path d="M54.305,55.67l14.363,0" /><path d="M20.934,24.422c2.822,-1.63 6.436,-0.661 8.065,2.161c1.63,2.822 0.661,6.436 -2.161,8.066c-2.822,1.629 -6.436,0.661 -8.066,-2.161c-1.629,-2.823 -0.661,-6.437 2.162,-8.066Z" />`),
    'clear': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.076" y="0.015" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M74.157,21.075l-58.564,58.56l26.346,26.347l20.398,0l48.365,-48.361l-36.545,-36.546Z" /><path d="M37.675,57.557l36.546,36.545" /><path d="M63.147,105.983l47.555,0" /></g>`),
    'delete': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.076" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M26.065,26.141l70.599,70.599" /><path d="M96.663,26.141l-70.599,70.599" /></g>`),
    'duplicate': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.171" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M80.468,42.24l0,-30.72l-69.12,0l0,69.12l30.72,0" /><rect x="42.069" y="42.24" width="69.12" height="69.12" /></g>`),
    'edit': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0" y="0.015" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M95.388,11.719l-48.876,48.875l-0.748,17.042l17.042,-0.749l48.875,-48.875l-16.293,-16.293Z" /><path d="M41.924,42.068l-30.72,0l0,69.12l69.12,0l0,-30.72" /></g>`),
    'export': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.171" y="0.015" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M11.348,105.983l99.84,0" /><path d="M88.42,46.367l-27.153,-27.152l-27.152,27.152" /><path d="M61.268,90.471l0,-71.259" /></g>`),
    'extras': svg('icon', 123, 123, `<path d="M104.653,36.603l-43.233,24.961" /><path d="M18.188,86.524l43.232,-24.96" /><path d="M61.42,61.564l-43.232,-24.961" /><path d="M61.42,61.564l43.233,24.96" /><path d="M61.42,11.644l0,99.84" />`),
    'fast-beat': svg('icon', 123, 123, `<path d="M51.285,11.671l0,99.84" /><path d="M91.221,11.671l0,99.84" /><path d="M11.349,11.671l0,99.84" /><path d="M31.317,36.631l0,49.92" /><path d="M71.253,36.631l0,49.92" /><path d="M111.189,36.631l0,49.92" />`),
    'flip-h': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.236" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M111.124,107.52l-38.4,-76.8l0,76.8l38.4,0Z" /><path d="M11.284,107.52l38.4,-76.8l0,76.8l-38.4,0Z" /><path d="M72.724,69.12l19.2,0" /><path d="M72.724,81.92l25.6,0" /><path d="M72.724,94.72l32,0" /><path d="M72.724,56.32l12.8,0" /></g>`),
    'flip-v': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.184" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M15.176,111.36l76.8,-38.4l-76.8,0l0,38.4Z" /><path d="M15.176,11.52l76.8,38.4l-76.8,0l0,-38.4Z" /><path d="M53.576,72.96l0,19.2" /><path d="M40.776,72.96l0,25.6" /><path d="M27.976,72.96l0,32" /><path d="M66.376,72.96l0,12.8" /></g>`),
    'font': svg('icon', 123, 123, `<g><path d="M68.371,61.642l37.44,0" /><path d="M17.348,61.642l37.44,0" /><path d="M80.851,111.562l0,-87.36c0,-6.888 5.592,-12.48 12.48,-12.48c6.888,0 12.48,5.592 12.48,12.48" /><path d="M17.348,111.562l0,-99.84l49.92,0" /></g>`),
    'gif': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.52" y="11.644" width="99.84" height="99.84" /><path d="M22.709,98.878l27.322,-40.984l20.881,31.323l11.411,-17.115l17.848,26.776" /><circle cx="74.468" cy="39.327" r="11.117" /></g>`),
    'high-note': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.236" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M74.504,59.518c-2.805,-7.342 -11.042,-11.024 -18.383,-8.219c-7.341,2.805 -11.023,11.042 -8.218,18.383c2.805,7.342 11.042,11.024 18.383,8.219c7.341,-2.805 11.023,-11.042 8.218,-18.383Z" /><path d="M75.445,64.601l0,-52.925" /><path d="M11.284,50.358l99.84,0" /><path d="M11.284,21.875l48.743,0" /><path d="M89.99,21.875l21.134,0" /><path d="M11.284,78.842l99.84,0" /><path d="M11.284,107.325l99.84,0" /></g>`),
    'import': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.095" y="0.015" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M11.425,105.983l99.84,0" /><path d="M34.193,55.639l27.153,27.152l27.152,-27.152" /><path d="M61.345,11.533l0,71.259" /></g>`),
    'item': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.02" y="0.015" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M24.915,97.372l69.12,0" /><path d="M94.035,45.588c0,19.074 -15.486,34.56 -34.56,34.56c-19.074,0 -34.56,-15.486 -34.56,-34.56l0,0.095l0,-20.145l69.12,0.095l0,19.955Z" /><path d="M94.035,31.11c8.105,0 14.686,6.581 14.686,14.686c0,8.106 -6.581,14.686 -14.686,14.686l-3.37,0" /></g>`),
    'low-note': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.184" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M74.557,88.001c-2.806,-7.341 -11.043,-11.024 -18.384,-8.219c-7.34,2.805 -11.023,11.042 -8.217,18.384c2.805,7.341 11.042,11.023 18.383,8.218c7.341,-2.805 11.023,-11.042 8.218,-18.383Z" /><path d="M75.498,93.084l0,-52.926" /><path d="M11.336,50.358l48.744,0" /><path d="M90.043,50.358l21.133,0" /><path d="M11.336,78.842l99.84,0" /><path d="M11.336,21.875l99.84,0" /><path d="M11.336,107.325l99.84,0" /></g>`),
    'medium-beat': svg('icon', 123, 123, `<path d="M71.329,11.671l0,99.84" /><path d="M11.425,11.671l0,99.84" /><path d="M31.393,36.631l0,49.92" /><path d="M111.265,36.631l0,49.92" /><path d="M91.297,36.631l0,49.92" /><path d="M51.361,36.631l0,49.92" />`),
    'mosi': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.184" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M61.256,106.645c-49.928,0 -49.935,-49.935 -49.935,-49.935c0,0 49.935,0.004 49.935,49.935Z" /><path d="M61.241,106.645c49.932,0 49.935,-49.935 49.935,-49.935c0,0 -49.935,0.004 -49.935,49.935Z" /><path d="M19.925,57.631c0.043,-16.558 10.13,-32.156 26.523,-38.419c21.27,-8.133 45.105,2.523 53.234,23.793c1.843,4.823 2.723,9.78 2.727,14.653" /><path d="M36.289,48.963c3.755,-8.045 10.94,-14.082 19.549,-16.374" /></g>`),
    'music': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.171" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M42.926,86.405c-3.217,-8.417 -12.661,-12.639 -21.077,-9.423c-8.416,3.216 -12.638,12.66 -9.422,21.077c3.216,8.417 12.66,12.639 21.077,9.423c8.416,-3.216 12.638,-12.661 9.422,-21.077Z" /><path d="M110.109,86.404c-3.216,-8.416 -12.66,-12.638 -21.075,-9.422c-8.415,3.216 -12.636,12.66 -9.419,21.076c3.216,8.416 12.66,12.638 21.075,9.422c8.415,-3.216 12.636,-12.66 9.419,-21.076Z" /><path d="M44.005,92.233l0,-77.666l67.184,0l0,77.666" /><path d="M44.005,40.69l67.184,0" /></g>`),
    'palette': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.095" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.425" y="11.676" width="99.84" height="99.84" /><path d="M55.929,78.526c-0.974,-1.262 -2.542,-2.311 -4.43,-3.16c0.054,-1.076 -0.149,-2.177 -0.651,-3.244c-1.98,-4.21 -7.786,-6.318 -12.966,-4.708c-3.738,1.16 -6.098,3.947 -6.393,6.984c-6.779,2.053 -9.869,6.262 -6.932,10.072c3.313,4.294 13.019,6.446 21.679,4.805c8.666,-1.642 13.006,-6.455 9.693,-10.749Z" /><path d="M98.131,78.526c-0.973,-1.262 -2.54,-2.311 -4.426,-3.16c0.053,-1.076 -0.149,-2.177 -0.651,-3.244c-1.979,-4.21 -7.78,-6.318 -12.957,-4.708c-3.736,1.16 -6.093,3.947 -6.389,6.984c-6.774,2.053 -9.862,6.262 -6.927,10.072c3.311,4.294 13.011,6.446 21.664,4.805c8.66,-1.642 12.997,-6.455 9.686,-10.749Z" /><path d="M70.858,75.519l0,-10.878c0,-5.256 -4.259,-9.515 -9.512,-9.515c-5.256,0 -9.515,4.259 -9.515,9.515l0,10.878" /><path d="M30.072,74.878l0,-10.237c0,-17.272 14.002,-31.274 31.274,-31.274c17.27,0 31.271,14.002 31.271,31.274l0,6.681" /><path d="M81.685,67.037l0,-2.396c0,-11.235 -9.107,-20.342 -20.339,-20.342c-11.235,0 -20.342,9.107 -20.342,20.342l0,2.232" /></g>`),
    'palettes': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.095" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M54.21,83.865c-1.282,-1.663 -3.348,-3.045 -5.835,-4.163c0.07,-1.417 -0.197,-2.868 -0.857,-4.274c-2.609,-5.545 -10.256,-8.321 -17.08,-6.201c-4.924,1.528 -8.032,5.199 -8.422,9.2c-8.929,2.704 -13,8.249 -9.13,13.267c4.364,5.657 17.149,8.491 28.556,6.329c11.416,-2.162 17.132,-8.502 12.768,-14.158Z" /><path d="M109.801,83.865c-1.282,-1.663 -3.346,-3.045 -5.831,-4.163c0.07,-1.417 -0.196,-2.868 -0.857,-4.274c-2.607,-5.545 -10.248,-8.321 -17.067,-6.201c-4.921,1.528 -8.027,5.199 -8.416,9.2c-8.923,2.704 -12.991,8.249 -9.124,13.267c4.361,5.657 17.137,8.491 28.536,6.329c11.407,-2.162 17.12,-8.502 12.759,-14.158Z" /><path d="M73.875,79.903l0,-14.328c0,-6.924 -5.61,-12.534 -12.53,-12.534c-6.923,0 -12.533,5.61 -12.533,12.534l0,14.328" /><path d="M20.15,79.059l0,-13.484c0,-22.752 18.444,-41.196 41.196,-41.196c22.748,0 41.191,18.444 41.191,41.196l0,8.799" /><path d="M88.137,68.731l0,-3.156c0,-14.8 -11.996,-26.796 -26.791,-26.796c-14.8,0 -26.796,11.996 -26.796,26.796l0,2.94" /></g>`),
    'pause-music': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.174" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M28.921,19.2l0,84.48l24.945,0l0,-84.48l-24.945,0Z" /><path d="M70.582,19.2l0,84.48l24.945,0l0,-84.48l-24.945,0Z" /></g>`),
    'play-game': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.236" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.211" y="11.644" width="99.84" height="99.84" /><path d="M39.434,37.375l43.54,24.189l-43.54,24.188l0,-48.377Z" /></g>`),
    'play-music': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.085" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M23.339,19.2l76.032,42.24l-76.032,42.24l0,-84.48Z" /></g>`),
    'random': svg('icon', 123, 123, `<circle cx="61.355" cy="36.604" r="2.835" /><circle cx="32.534" cy="61.564" r="2.835" /><circle cx="79.6" cy="79.914" r="2.835" /><circle cx="39.739" cy="74.044" r="2.835" /><circle cx="46.945" cy="86.524" r="2.835" /><circle cx="88.459" cy="64.374" r="2.835" /><path d="M61.355,11.644l43.232,24.96l0,49.92l-43.232,24.96l-43.232,-24.96l0,-49.92l43.232,-24.96Z" /><path d="M91.102,44.389l-29.747,17.175l-29.746,-17.175" /><path d="M61.355,61.564l0,34.348" />`),
    'resize': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0.22" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.785" y="42.396" width="69.12" height="69.12" /><path d="M97.334,11.526l14.173,0l0,14.199" /><path d="M111.533,97.343l0,14.173l-14.199,0" /><path d="M11.785,25.7l0,-14.174l14.199,0" /><path d="M75.947,11.526l14.173,0" /><path d="M80.905,111.516l9.215,0" /><path d="M111.507,75.714l0,14.173" /><path d="M54.56,11.526l14.173,0" /><path d="M111.507,54.326l0,14.174" /><path d="M33.173,11.526l14.173,0" /><path d="M111.507,32.939l0,14.173" /><path d="M11.785,32.939l0,9.457" /></g>`),
    'room': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.076" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M90.852,62.605c0,-16.275 -13.213,-29.488 -29.488,-29.488c-16.275,0 -29.488,13.213 -29.488,29.488c0,16.275 13.213,29.488 29.488,29.488c16.275,0 29.488,-13.213 29.488,-29.488Z" /><path d="M34.961,49.477c3.634,1.134 5.517,1.678 8.139,1.64c5.451,-0.077 16.112,-3.602 19.263,-5.582c5.703,-3.584 10.259,-5.957 12.727,-10.31" /><path d="M47.228,88.233c3.702,-5.188 6.149,-7.758 9.939,-10.317c4.342,-2.931 5.877,-3.652 13.568,-2.894c13.731,1.355 16.002,-4.224 19.589,-7.422" /><path d="M36.163,77.916c7.718,-24.185 44.864,-11.294 52.196,-27.189" /><rect x="11.444" y="11.676" width="99.84" height="99.84" /></g>`),
    'rotate': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0.22" y="0" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M65.498,72.96l23.04,15.36l23.04,-15.36" /><path d="M11.738,107.52l38.4,-76.8l0,76.8l-38.4,0Z" /><path d="M65.498,48c0,0 23.04,0 23.04,23.04l0,17.28" /></g>`),
    'script': svg('icon', 123, 123, `<path d="M111.186,51.58c0,-22.042 -22.368,-39.936 -49.92,-39.936c-27.552,0 -49.92,17.894 -49.92,39.936c0,13.025 7.94,25.232 21.275,32.707l-6.299,27.197l22.01,-21.332c4.218,0.905 8.567,1.364 12.934,1.364c27.552,0 49.92,-17.895 49.92,-39.936Z" />`),
    'settings': svg('icon', 123, 123, `<path d="M70.18,12.337c-5.895,-1.07 -11.933,-1.07 -17.828,0l-3.427,11.137c-3.414,1.109 -6.663,2.674 -9.66,4.651l-10.843,-4.263c-4.512,3.941 -8.277,8.662 -11.115,13.937l6.57,9.623c-1.262,3.362 -2.064,6.877 -2.386,10.453l-10.095,5.82c0.269,5.984 1.613,11.871 3.967,17.38l11.62,0.863c1.841,3.082 4.09,5.901 6.685,8.382l-1.744,11.521c4.846,3.521 10.287,6.141 16.061,7.735l7.92,-8.547c3.558,0.482 7.164,0.482 10.722,0l7.92,8.547c5.774,-1.594 11.215,-4.214 16.061,-7.735l-1.744,-11.521c2.595,-2.481 4.844,-5.3 6.685,-8.382l11.62,-0.863c2.354,-5.509 3.698,-11.396 3.967,-17.38l-10.095,-5.82c-0.322,-3.576 -1.124,-7.091 -2.385,-10.453l6.569,-9.623c-2.838,-5.275 -6.603,-9.996 -11.115,-13.937l-10.843,4.263c-2.997,-1.977 -6.246,-3.542 -9.66,-4.651l-3.427,-11.137Zm-8.914,31.646c9.643,0 17.472,7.829 17.472,17.472c0,9.643 -7.829,17.472 -17.472,17.472c-9.643,0 -17.472,-7.829 -17.472,-17.472c0,-9.643 7.829,-17.472 17.472,-17.472Z" />`),
    'share': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.141" y="0.015" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M99.7,61.455l0,-38.4l-38.4,0" /><path d="M42.098,42.068l-30.72,0l0,69.12l69.12,0l0,-30.72" /><path d="M53.62,69.135l46.08,-46.08" /></g>`),
    'slow-beat': svg('icon', 123, 123, `<path d="M71.283,36.631l0,49.92" /><path d="M11.379,11.671l0,99.84" /><path d="M31.347,36.631l0,49.92" /><path d="M111.219,36.631l0,49.92" /><path d="M91.251,11.671l0,99.84" /><path d="M51.315,36.631l0,49.92" />`),
    'song': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.171" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.349" y="11.676" width="99.84" height="99.84" /><path d="M50.153,76.65c-1.949,-5.101 -7.672,-7.659 -12.772,-5.711c-5.101,1.949 -7.659,7.673 -5.71,12.773c1.949,5.1 7.672,7.659 12.772,5.71c5.101,-1.949 7.659,-7.672 5.71,-12.772Z" /><path d="M90.866,76.649c-1.95,-5.1 -7.672,-7.658 -12.772,-5.709c-5.099,1.949 -7.657,7.672 -5.708,12.772c1.95,5.1 7.672,7.658 12.772,5.709c5.099,-1.949 7.657,-7.672 5.708,-12.772Z" /><path d="M50.807,80.181l0,-47.064l40.713,0l0,47.064" /><path d="M50.807,48.947l40.713,0" /></g>`),
    'sprite': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.141" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><rect x="11.379" y="11.676" width="99.84" height="99.84" /><ellipse cx="52.446" cy="61.596" rx="2.835" ry="2.848" /><ellipse cx="70.152" cy="61.596" rx="2.835" ry="2.848" /><path d="M61.793,43.574c2.871,-8.97 6.545,-15.897 9.879,-14.98c3.335,0.917 8.552,8.553 10.127,20.481c7.615,4.677 12.502,11.9 12.502,19.999c0,14.087 -14.787,25.525 -33.002,25.525c-18.215,0 -33.002,-11.438 -33.002,-25.525c0,-8.099 4.887,-15.322 12.502,-19.999c1.575,-11.928 6.799,-19.564 10.126,-20.481c3.327,-0.917 6.964,6.01 9.835,14.98c0.495,-0.017 0.538,-0.017 1.033,0Z" /></g>`),
    'sprites': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.141" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><ellipse cx="46.816" cy="64.89" rx="2.835" ry="2.848" /><ellipse cx="75.781" cy="64.89" rx="2.835" ry="2.848" /><path d="M62.374,34.303c4.343,-13.568 9.626,-24.046 14.615,-22.659c4.989,1.386 12.935,12.937 15.317,30.98c11.52,7.075 18.912,18 18.912,30.25c0,21.309 -22.368,38.61 -49.92,38.61c-27.551,0 -49.92,-17.301 -49.92,-38.61c0,-12.25 7.393,-23.175 18.912,-30.25c2.383,-18.043 10.223,-29.587 15.316,-30.98c5.093,-1.393 10.899,9.052 15.242,22.621c0.749,-0.026 0.777,0.013 1.526,0.038Z" /></g>`),
    'transparent': svg('icon', 123, 123, `<circle cx="76.616" cy="76.815" r="34.56" /><path d="M42.247,80.655c-17.362,-1.825 -30.911,-16.527 -30.911,-34.369c0,-19.074 15.485,-34.56 34.56,-34.56c17.841,0 32.543,13.549 34.369,30.911" /><path d="M56.083,80.438c0.761,0.08 1.535,0.121 2.318,0.121c12.12,0 21.96,-9.839 21.96,-21.959c0,-0.783 -0.042,-1.557 -0.122,-2.319" />`),
    'very-fast-beat': svg('icon', 123, 123, `<path d="M11.284,11.671l0,99.84" /><path d="M31.252,11.831l0,99.84" /><path d="M51.22,11.482l0,99.84" /><path d="M71.188,11.482l0,99.84" /><path d="M91.156,11.482l0,99.84" /><path d="M111.124,11.482l0,99.84" />`),
    'very-slow-beat': svg('icon', 123, 123, `<path d="M71.348,36.631l0,49.92" /><path d="M11.444,11.671l0,99.84" /><path d="M31.412,36.631l0,49.92" /><path d="M111.284,36.631l0,49.92" /><path d="M91.316,36.631l0,49.92" /><path d="M51.38,36.631l0,49.92" />`),
    'wall': svg('icon', 123, 123, `<path d="M61.204,11.535l43.232,24.96l0,49.92l-43.232,24.96l-43.232,-24.96l0,-49.92l43.232,-24.96Z" /><path d="M90.951,44.281l-29.747,17.174l-29.747,-17.174" /><path d="M61.204,61.455l0,34.349" />`),
    'world': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="-0.076" y="0.124" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M111.284,61.563c0,-27.552 -22.368,-49.92 -49.92,-49.92c-27.552,0 -49.92,22.368 -49.92,49.92c0,27.551 22.368,49.92 49.92,49.92c27.552,0 49.92,-22.369 49.92,-49.92Z" /><path d="M53.509,110.854c3.598,-7.204 9.228,-15.102 17.879,-17.433c9.619,-2.588 15.211,3.79 24.849,3.886" /><path d="M16.668,39.338c6.151,1.92 9.338,2.842 13.777,2.776c9.228,-0.13 16.013,-4.392 21.347,-7.745c9.654,-6.067 16.036,-14.208 20.214,-21.577" /><path d="M37.433,104.947c6.267,-8.782 10.763,-18.93 17.18,-23.261c7.35,-4.961 10.875,-5.826 23.915,-4.762c8.195,0.664 13.695,0.726 18.301,0c3.446,-0.543 7.488,-1.493 13.561,-6.906" /><path d="M88.658,19.761c-3.682,5.176 -8.171,9.781 -13.278,13.563c-3.591,2.657 -7.657,5.122 -9.558,9.162c-0.185,0.392 -0.346,0.818 -0.292,1.244c0.107,0.83 0.956,1.329 1.736,1.625c3.379,1.294 7.138,1.163 10.721,0.66c9.354,-1.305 18.232,-4.996 26.269,-10.007" /><path d="M11.477,59.457c0.146,-0.035 0.292,-0.069 0.438,-0.104c28.789,-6.647 60.088,5.875 88.021,-3.759c3.54,-1.225 6.965,-2.792 10.206,-4.67" /><path d="M11.444,73.919c7.457,-2.454 16.267,-3.794 25.203,-2.441c0.594,0.09 1.287,-0.054 1.702,0.38c0.284,0.296 0.364,0.73 0.376,1.137c0.057,2.169 -1.592,3.906 -2.872,5.656c-4.345,5.938 -8.76,9.646 -13.31,14.312" /></g>`),
    'wrap-h': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0.155" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M96.179,51.996l15.336,-15.337l-15.336,-15.336" /><path d="M96.179,102.076l15.336,-15.337l-15.336,-15.337" /><path d="M27.012,21.117l-15.337,15.337l15.337,15.336" /><path d="M27.012,71.196l-15.337,15.337l15.337,15.337" /><path d="M90.571,36.659l20.944,0" /><path d="M90.571,86.739l20.944,0" /><path d="M32.62,36.454l-20.945,0" /><path d="M32.62,86.533l-20.945,0" /><path d="M81.385,75.897l0,14.173" /><path d="M41.806,75.956l0,14.173" /><path d="M81.385,97.284l0,14.232l-39.579,0c0,0 0,-14.173 0,-14.173" /><path d="M81.385,54.51l0,14.173" /><path d="M41.806,54.569l0,14.173" /><path d="M81.385,33.122l0,14.174" /><path d="M41.806,33.181l0,14.174" /><path d="M81.385,25.908l0,-14.173l0,-0.059l-39.579,0l0,14.291" /></g>`),
    'wrap-v': svg('icon', 123, 123, `<clipPath id="_clip1"><rect x="0.066" y="0.156" width="122.88" height="122.88"/></clipPath><g clip-path="url(#_clip1)"><path d="M71.106,96.179l15.337,15.337l15.337,-15.337" /><path d="M21.027,96.179l15.336,15.337l15.337,-15.337" /><path d="M101.985,27.013l-15.336,-15.337l-15.337,15.337" /><path d="M51.906,27.013l-15.337,-15.337l-15.337,15.337" /><path d="M86.443,90.571l0,20.945" /><path d="M36.363,90.571l0,20.945" /><path d="M86.649,32.621l0,-20.945" /><path d="M36.569,32.621l0,-20.945" /><path d="M47.205,81.385l-14.173,0" /><path d="M47.146,41.807l-14.173,0" /><path d="M25.759,41.807l-14.173,0c0,0 0,39.578 0,39.578l14.232,0" /><path d="M68.593,81.385l-14.174,0" /><path d="M68.534,41.807l-14.174,0" /><path d="M89.98,81.385l-14.173,0" /><path d="M89.921,41.807l-14.173,0" /><path d="M97.194,81.385l14.232,0l0,-39.578l-0.118,0l-14.173,0" /></g>`),
}

let icon = (iconName) => {
    let icon = icons[iconName]
    return div({
        className: 'icon-container',
        dangerouslySetInnerHTML: !icon ? null : {
            __html: icon
        }
    })
}