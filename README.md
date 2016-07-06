# yaml-head-loader

This is a module that reads the yaml front-matter and makes no asumption as to what the intened use of that front-matter or the text data left over.

Assuming this file:

```yaml
---
foo: Pellentesque Bibendum Consectetur Quam Fringilla
bar: Ligula Vulputate
---

Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
```

The resulting data structure would be:

```js
{
  foo: 'Pellentesque Bibendum Consectetur Quam Fringilla',
  bar: 'Ligula Vulputate',
  tail: 'Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
}
```
