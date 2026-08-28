# MarkEdit-readable-width

Keeps the editor at a readable maximum width and centers it when the window is wider.

## Installation

Install this extension from the [MarkEdit Extension Registry](https://markedit-app.github.io/extensions/#markedit-readable-width).

## Configuration

Set the available widths in pixels in MarkEdit's `settings.json`:

```json
{
  "extension.markeditReadableWidth": [640, 800, 960]
}
```

The setting is optional. It defaults to `640`, `800`, and `960` pixels, with `800` selected for new users. Open **Extensions > Readable Width** to choose:

- **Narrow (640 px)**
- **Comfortable (800 px)**
- **Wide (960 px)**
- **Off**

Configured widths are sorted from narrowest to widest. An array of three values uses the Narrow, Comfortable, and Wide labels; other array lengths use numeric labels. If `800` is unavailable, the middle configured width is selected by default.

The selected width or Off state is remembered across launches. Relaunch MarkEdit after changing `settings.json`.

## Building

```sh
yarn install
yarn build
```

`yarn build` also deploys the extension to your local MarkEdit installation.
