class Card {
  constructor(username, options) {
    this.options = {
      font: "Segoe UI",
      background: "fff",
      primary: "5387c6",
      secondary: "000",
      showIcons: "false",
      showBorder: "true",
      ...options,
    };
    this.rowCount = 1;
    this.offset = 30;
    this.x = 20;
    this.y = 35;
    this.body = `<text
      x="${this.x}"
      y="${this.y}"
      class="title"
    >
      ${username}'s Viblo stats
    </text>`;
  }

  createRow(label, number) {
    this.body += `
    <g transform="translate(${this.x}, ${(this.y += this.offset)})">
      <text>${label}</text>
      <text transform="translate(160, 0)">${number}</text>
    </g>`;
    this.rowCount++;
    return this;
  }

  render() {
    const { rowCount, offset } = this;
    const {
      font,
      background,
      primary,
      secondary,
      showIcons,
      showBorder,
    } = this.options;
    const width = 380;
    const height = rowCount * offset + offset;

    return `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
    >
      <style>
        rect {
          ${showBorder === "true" && "stroke: #ccc;"}
          fill: #${background};
        }
        text {
          font-family: ${font};
          font-size: 15px;
          color: #${secondary};
        }
        path {
          transform: translate(75%, calc(50% - 33px));
          fill: #${primary};
        }
        .title {
          font-size: 22px;
          fill: #${primary};
        }
      </style>
      <rect width="100%" height="100%"></rect>
      ${this.body}
      <path d="M 23.800781 55.230469 L 31.800781 55.230469 L 54.246094 0.878906 L 46.214844 0.828125 L 34.015625 30.316406 L 21.421875 30.316406 L 9.273438 0.828125 L 1.238281 0.828125 Z M 4.460938 60.355469 L 51.042969 60.355469 L 51.042969 67.171875 L 4.460938 67.171875 Z M 4.460938 60.355469"/>
    </svg>`;
  }
}

module.exports = Card;
