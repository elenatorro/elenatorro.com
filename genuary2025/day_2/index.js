function HSV(h, s, v) {
  if (h <= 0) {
    h = 0;
  }
  if (s <= 0) {
    s = 0;
  }
  if (v <= 0) {
    v = 0;
  }

  if (h > 360) {
    h = 360;
  }
  if (s > 100) {
    s = 100;
  }
  if (v > 100) {
    v = 100;
  }

  this.h = h;
  this.s = s;
  this.v = v;
}

function RGB(r, g, b) {
  if (r <= 0) {
    r = 0;
  }
  if (g <= 0) {
    g = 0;
  }
  if (b <= 0) {
    b = 0;
  }

  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }

  this.r = r;
  this.g = g;
  this.b = b;
}

function CMYK(c, m, y, k) {
  if (c <= 0) {
    c = 0;
  }
  if (m <= 0) {
    m = 0;
  }
  if (y <= 0) {
    y = 0;
  }
  if (k <= 0) {
    k = 0;
  }

  if (c > 100) {
    c = 100;
  }
  if (m > 100) {
    m = 100;
  }
  if (y > 100) {
    y = 100;
  }
  if (k > 100) {
    k = 100;
  }

  this.c = c;
  this.m = m;
  this.y = y;
  this.k = k;
}

var ColorConverter = {

  _RGBtoHSV: function (RGB) {
    var result = new HSV(0, 0, 0);

    r = RGB.r / 255;
    g = RGB.g / 255;
    b = RGB.b / 255;

    var minVal = Math.min(r, g, b);
    var maxVal = Math.max(r, g, b);
    var delta = maxVal - minVal;

    result.v = maxVal;

    if (delta == 0) {
      result.h = 0;
      result.s = 0;
    } else {
      result.s = delta / maxVal;
      var del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
      var del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
      var del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;

      if (r == maxVal) {
        result.h = del_B - del_G;
      } else if (g == maxVal) {
        result.h = (1 / 3) + del_R - del_B;
      } else if (b == maxVal) {
        result.h = (2 / 3) + del_G - del_R;
      }

      if (result.h < 0) {
        result.h += 1;
      }
      if (result.h > 1) {
        result.h -= 1;
      }
    }

    result.h = Math.round(result.h * 360);
    result.s = Math.round(result.s * 100);
    result.v = Math.round(result.v * 100);

    return result;
  },

  _HSVtoRGB: function (HSV) {
    var result = new RGB(0, 0, 0);

    var h = HSV.h / 360;
    var s = HSV.s / 100;
    var v = HSV.v / 100;

    if (s == 0) {
      result.r = v * 255;
      result.g = v * 255;
      result.v = v * 255;
    } else {
      var_h = h * 6;
      var_i = Math.floor(var_h);
      var_1 = v * (1 - s);
      var_2 = v * (1 - s * (var_h - var_i));
      var_3 = v * (1 - s * (1 - (var_h - var_i)));

      if (var_i == 0) {
        var_r = v;
        var_g = var_3;
        var_b = var_1
      } else if (var_i == 1) {
        var_r = var_2;
        var_g = v;
        var_b = var_1
      } else if (var_i == 2) {
        var_r = var_1;
        var_g = v;
        var_b = var_3
      } else if (var_i == 3) {
        var_r = var_1;
        var_g = var_2;
        var_b = v
      } else if (var_i == 4) {
        var_r = var_3;
        var_g = var_1;
        var_b = v
      } else {
        var_r = v;
        var_g = var_1;
        var_b = var_2
      };

      result.r = var_r * 255;
      result.g = var_g * 255;
      result.b = var_b * 255;

      result.r = Math.round(result.r);
      result.g = Math.round(result.g);
      result.b = Math.round(result.b);
    }

    return result;
  },

  _CMYKtoRGB: function (CMYK) {
    var result = new RGB(0, 0, 0);

    c = CMYK.c / 100;
    m = CMYK.m / 100;
    y = CMYK.y / 100;
    k = CMYK.k / 100;

    result.r = 1 - Math.min(1, c * (1 - k) + k);
    result.g = 1 - Math.min(1, m * (1 - k) + k);
    result.b = 1 - Math.min(1, y * (1 - k) + k);

    result.r = Math.round(result.r * 255);
    result.g = Math.round(result.g * 255);
    result.b = Math.round(result.b * 255);

    return result;
  },

  _RGBtoCMYK: function (RGB) {
    var result = new CMYK(0, 0, 0, 0);

    r = RGB.r / 255;
    g = RGB.g / 255;
    b = RGB.b / 255;

    result.k = Math.min(1 - r, 1 - g, 1 - b);
    result.c = (1 - r - result.k) / (1 - result.k);
    result.m = (1 - g - result.k) / (1 - result.k);
    result.y = (1 - b - result.k) / (1 - result.k);

    result.c = Math.round(result.c * 100);
    result.m = Math.round(result.m * 100);
    result.y = Math.round(result.y * 100);
    result.k = Math.round(result.k * 100);

    return result;
  },

  toRGB: function (o) {
    if (o instanceof RGB) {
      return o;
    }
    if (o instanceof HSV) {
      return this._HSVtoRGB(o);
    }
    if (o instanceof CMYK) {
      return this._CMYKtoRGB(o);
    }
  },

  toHSV: function (o) {
    if (o instanceof HSV) {
      return o;
    }
    if (o instanceof RGB) {
      return this._RGBtoHSV(o);
    }
    if (o instanceof CMYK) {
      return this._RGBtoHSV(this._CMYKtoRGB(o));
    }
  },

  toCMYK: function (o) {
    if (o instanceof CMYK) {
      return o;
    }
    if (o instanceof RGB) {
      return this._RGBtoCMYK(o);
    }
    if (o instanceof HSV) {
      return this._RGBtoCMYK(this._HSVtoRGB(o));
    }
  }

}
// From https://gist.github.com/av01d/538b3fffc78fdc273894d173a83c563f
const ColorSteps = (() => {
  const colorValues = color => {
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    document.body.appendChild(div);
    let rgba = getComputedStyle(div).getPropertyValue('background-color');
    div.remove();

    if (rgba.indexOf('rgba') === -1) {
      rgba += ',1'; // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below
    }

    return rgba.match(/[\.\d]+/g).map(a => {
      return +a
    });
  }

  const getColorSteps = (colorStart, colorEnd, steps) => {
    const start = colorValues(colorStart),
      end = colorValues(colorEnd),
      opacityStep = (end[3] * 100 - start[3] * 100) / steps,
      colors = [];
    let alpha = 0,
      opacity = start[3] * 100;

    for (let i = 0; i < steps; i++) {
      alpha += 1.0 / steps;
      opacity += opacityStep;

      let c = [
        Math.round(end[0] * alpha + (1 - alpha) * start[0]),
        Math.round(end[1] * alpha + (1 - alpha) * start[1]),
        Math.round(end[2] * alpha + (1 - alpha) * start[2])
      ];

      colors.push(
        opacity == 100 ? `rgb(${c[0]},${c[1]},${c[2]})` : `rgba(${c[0]},${c[1]},${c[2]},${opacity/100})`
      );
    }

    const cmykColors = []
    colors.forEach(c => {
      cmykColors.push(ColorConverter.toCMYK(c))
    })

    // return cmykColors;
    return colors;
  }

  return {
    colorValues,
    getColorSteps
  }
})();

const buildingTop = (size, x = 0, y = 0, colors, m) => {
  const ratio = round(size / 3)
  const color = colors[0]
  let c = y < colors.length ? y : colors.length - 1
  //c = c >= 0 ? c : 0
  y = y + m
  push()
  const reversed = colors.slice().reverse()
  stroke(reversed[c])
  strokeWeight(4)
  if (y == 0) {
    fill(reversed[c])
  } else if (y >= colors.length - 10) {
    fill(reversed[colors.length - 1])
  } else {
    fill(colors[0])
  }

  quad(
    x,
    y + ratio,
    x + ratio,
    y,
    x + size,
    y + ratio,
    x + ratio * 2,
    y + size - ratio
  )
  pop()
}

const CM_TO_INCH = 2.54
const WIDTH_CM = 10
const HEIGHT_CM = 10
const WIDTH_INCHES = WIDTH_CM / CM_TO_INCH
const HEIGHT_INCHES = HEIGHT_CM / CM_TO_INCH
const DPI = 300

const WIDTH = Math.round(WIDTH_INCHES * DPI)
const HEIGHT = Math.round(HEIGHT_INCHES * DPI)
const size = WIDTH / 5
const COLOR_STEPS = HEIGHT - size * 2
//const colors = ColorSteps.getColorSteps('#243642', '#E2F1E7', COLOR_STEPS)
//const colors = ColorSteps.getColorSteps('#e27396', '#004e89', COLOR_STEPS)
// const colors = ColorSteps.getColorSteps('#ff7b00', '#73d2de', COLOR_STEPS)
const colors = ColorSteps.getColorSteps('#f9dbbd', '#0d1b2a', COLOR_STEPS)

function drawBuildings() {
  const layers = 5
  const rows = round(height / layers)

  clear()
  fill(colors[0])
  background(colors[colors.length - 1])

  let counter = 0
  for (let j = -size; j < WIDTH; j += size) {
    m = 100 * (counter % 2)
    counter++
    for (let i = 0; i < HEIGHT - (size / 5); i += layers) {
      buildingTop(size, j, i, colors, 0)
    }
  }

  noFill()
}

function setup() {
  createCanvas(WIDTH, HEIGHT)
  drawBuildings()
}
