import { Compartment } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { MarkEdit } from 'markedit-api';

const defaultWidths = [640, 800, 960];
const defaultReadableWidth = 800;
const widthLabels = ['Narrow', 'Comfortable', 'Wide'];
const storageKey = 'extension.markeditReadableWidth.selected';
const configuredWidths = MarkEdit.userSettings['extension.markeditReadableWidth'];
const widths = Array.isArray(configuredWidths)
  ? [...new Set(configuredWidths.filter((value): value is number => typeof value === 'number' && value > 0))]
    .sort((first, second) => first - second)
  : [];

if (widths.length === 0) {
  widths.push(...defaultWidths);
}

const cachedWidth = localStorage.getItem(storageKey);
let readableWidth = cachedWidth === 'off' ? null : Number(cachedWidth);

if (cachedWidth === null || (readableWidth !== null && !widths.includes(readableWidth))) {
  readableWidth = widths.includes(defaultReadableWidth)
    ? defaultReadableWidth
    : widths[Math.floor(widths.length / 2)];
}

const widthCompartment = new Compartment();
MarkEdit.addExtension(widthCompartment.of(createWidthTheme(readableWidth)));
MarkEdit.addMainMenuItem({
  title: 'Readable Width',
  children: [
    ...widths.map((width, index) => ({
      title: widths.length === widthLabels.length
        ? `${widthLabels[index]} (${width} px)`
        : `${width} px wide`,
      action: () => setReadableWidth(width),
      state: () => ({ isSelected: readableWidth === width }),
    })),
    { separator: true },
    {
      title: 'Off',
      action: () => setReadableWidth(null),
      state: () => ({ isSelected: readableWidth === null }),
    },
  ],
});

function setReadableWidth(width: number | null) {
  readableWidth = width;
  localStorage.setItem(storageKey, width === null ? 'off' : String(width));
  MarkEdit.editorView.dispatch({
    effects: widthCompartment.reconfigure(createWidthTheme(width)),
  });
}

function createWidthTheme(width: number | null) {
  return width === null ? [] : EditorView.theme({
    '.cm-content': {
      margin: '0 auto',
      maxWidth: `${width}px`,
    },
  });
}
