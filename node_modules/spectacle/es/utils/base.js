/*eslint max-statements:0,complexity:0,no-invalid-this:0*/
var parseFontSize = function parseFontSize(fontSize) {
  var sizeComponents = fontSize.match(/\d*\.*\d+|\D+/g);
  var size = parseFloat(sizeComponents[0]);
  var unit = sizeComponents[1];
  return {
    size: size,
    unit: unit
  };
};

var getFontSizeFromElement = function getFontSizeFromElement(element) {
  var fontSize = window.getComputedStyle ? window.getComputedStyle(element).getPropertyValue('font-size') : element.currentStyle.fontSize;
  return fontSize ? parseFontSize(fontSize) : null;
};

var convertFontSizeToPx = function convertFontSizeToPx(fontSize) {
  var convertedFontSize;

  if (typeof fontSize === 'number') {
    convertedFontSize = fontSize;
  } else if (typeof fontSize === 'string') {
    var parsedFont = parseFontSize(fontSize);
    var bodyFont = getFontSizeFromElement(document.body);
    var htmlFont = getFontSizeFromElement(document.documentElement);

    switch (parsedFont.unit) {
      case 'px':
        convertedFontSize = parsedFont.size;
        break;

      case 'pt':
        convertedFontSize = parsedFont.size * 96 / 72;
        break;

      case '%':
        if (bodyFont) {
          convertedFontSize = bodyFont.size * parsedFont.size / 100;
        }

        break;

      case 'em':
        if (bodyFont) {
          convertedFontSize = bodyFont.size * parsedFont.size;
        }

        break;

      case 'rem':
        if (htmlFont) {
          convertedFontSize = htmlFont.size * parsedFont.size;
        }

        break;

      default:
        convertedFontSize = parsedFont.size;
    }
  }

  return convertedFontSize;
};

export var getStyles = function getStyles() {
  if (process.env.NODE_ENV !== 'production' && typeof this.warnedAboutFontSize === 'undefined') {
    this.warnedAboutFontSize = false;
  }

  var _this$props = this.props,
      italic = _this$props.italic,
      bold = _this$props.bold,
      caps = _this$props.caps,
      margin = _this$props.margin,
      padding = _this$props.padding,
      textColor = _this$props.textColor,
      textFont = _this$props.textFont,
      textSize = _this$props.textSize,
      textAlign = _this$props.textAlign,
      bgColor = _this$props.bgColor,
      bgImage = _this$props.bgImage,
      bgDarken = _this$props.bgDarken,
      bgSize = _this$props.bgSize,
      bgPosition = _this$props.bgPosition,
      bgRepeat = _this$props.bgRepeat,
      overflow = _this$props.overflow,
      height = _this$props.height;
  var styles = {};
  var recommendedMinFontSizePx = 24;

  if (typeof italic === 'boolean') {
    styles.fontStyle = italic ? 'italic' : 'normal';
  }

  if (typeof bold === 'boolean') {
    styles.fontWeight = bold ? 'bold' : 'normal';
  }

  if (typeof caps === 'boolean') {
    styles.textTransform = caps ? 'uppercase' : 'none';
  }

  if (margin) {
    styles.margin = margin;
  }

  if (padding) {
    styles.padding = padding;
  }

  if (textColor) {
    var color = '';

    if (!this.context.styles.colors.hasOwnProperty(textColor)) {
      color = textColor;
    } else {
      color = this.context.styles.colors[textColor];
    }

    styles.color = color;
  }

  if (textFont) {
    var font = '';

    if (!this.context.styles.fonts.hasOwnProperty(textFont)) {
      font = textFont;
    } else {
      font = this.context.styles.fonts[textFont];
    }

    styles.fontFamily = font;
  }

  if (textSize) {
    styles.fontSize = textSize;

    if (process.env.NODE_ENV !== 'production' && !this.warnedAboutFontSize && this.context.store.getState().style.globalStyleSet) {
      var fontSize = convertFontSizeToPx(textSize) || recommendedMinFontSizePx;

      if (fontSize < recommendedMinFontSizePx) {
        // eslint-disable-next-line
        console.warn("prop `textSize=\"".concat(textSize, "\"` is below the recommended minimum of ").concat(recommendedMinFontSizePx, "px"));
        this.warnedAboutFontSize = true;
      }
    }
  }

  if (textAlign) {
    styles.textAlign = textAlign;
  }

  if (bgColor) {
    var _color = '';

    if (!this.context.styles.colors.hasOwnProperty(bgColor)) {
      _color = bgColor;
    } else {
      _color = this.context.styles.colors[bgColor];
    }

    styles.backgroundColor = _color;
  }

  if (bgImage) {
    if (bgDarken) {
      styles.backgroundImage = "linear-gradient( rgba(0, 0, 0, ".concat(bgDarken, "), rgba(0, 0, 0, ").concat(bgDarken, ") ), url(").concat(bgImage, ")");
    } else {
      styles.backgroundImage = "url(".concat(bgImage, ")");
    }

    styles.backgroundSize = bgSize || 'cover';
    styles.backgroundPosition = bgPosition || 'center center';

    if (bgRepeat) {
      styles.backgroundRepeat = bgRepeat;
    }
  }

  if (overflow) {
    styles.overflow = overflow;
  }

  if (height) {
    styles.height = height;
  }

  return styles;
};