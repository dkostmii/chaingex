# fonticons JS reference

Import `fonticons` JS using:

```JS
import fonticons from './fonticons/index.js';
```

in `app.js` file.

Then call `fonticons()` function and add your breakpoint using a chain of `breakpoint()` calls:

```JS
fonticons().breakpoint('400px').breakpoint('800px');
```

You can use integer or decimal in `px`, `em`, `rem`, `pt`, `cm` or `in` units as breakpoint value.

**Important!** You must use `<i></i>` element for icons. Otherwise `fonticons` JS script won't find those elements.
