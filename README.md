# Social image generator

Generate social images for your blog using an API.

This API returns HTML which can be screenshotted (manually or maybe using puppeteer)

## Usage

Just fetch the url [`https://siddharthshyniben.github.io/social-image-generator/`](https://siddharthshyniben.github.io/social-image-generator/)
and fill in the following params in the query string:

- `text`: The main text. Supports HTML
- `caption`: The caption shown below the text. Supports HTML
- `tags`: The tags to show at the top of the image. Supports HTML
- `img`: the image shown at the side
- `animate`: whether to animate the text

Example URL: <https://siddharthshyniben.github.io/social-image-generator/?tags=foobar,%20baz,%20lol&text=%3Cb%3EBold%3C/b%3E%20text&caption=foo%20bar%20baz%20blog&animate=yes&img=https://angular.io/assets/images/logos/angular/angular.svg>

## License

[MIT](./LICENSE)
