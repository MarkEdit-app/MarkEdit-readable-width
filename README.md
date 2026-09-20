# MarkEdit-readable-width

Keeps the editor at a readable maximum width and centers it when the window is wider, including the rendered preview.

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

## Preview

When [MarkEdit-preview](https://github.com/MarkEdit-app/MarkEdit-preview) is installed, the selected width also centers its rendered output. The preview background and scrollbar stay full-width, and switching widths applies immediately.

In side-by-side mode each pane is often already narrower than the selected width. The preview then keeps its default spacing, as does a window resized narrower than the selected width.

## Building

```sh
yarn install
yarn build
```

`yarn build` also deploys the extension to your local MarkEdit installation.
