# JSelect

<!-- JS Coverage Badge -->
<img src="https://img.shields.io/badge/JS Coverage-98.27%25-green" alt="JS Coverage 98.27%">

JSelect is a vanilla JS select box tool that allows you to customise your
HTML selects.

**Currently in development/pre-release**

## Download

You can download JSelect with NPM:

```shell
# Placeholder, not yet published
npm install @dannyxcii/jselect
```

## Usage

### Basic Usage

To create a basic instance of JSelect:

```html
<select id="my-select">
    <option value="1">1</option>
    <option value="2">2</option>
</select>
```

```javascript
import { JSelect } from '@dannyxcii/jselect';

document.addEventListener('DOMContentLoaded', () => {
    new JSelect(document.querySelector('#my-select')); 
});
```

### Helpers

JSelect provides static methods that may prove helpful to some developers in certain situations.

For instances where you may have multiple select inputs that just need to be converted into
JSelect boxes for styling purposes, apply the CSS class `jselect` to all select boxes you want converted
and call `JSelect.loadAllWithDefaultOptions`. Intended as a blanket use case where the default options are 
enough.

```html
<select class="jselect">
    <option value="1">One</option>
    <option value="2">Two</option>
</select>
<select class="jselect">
    <option value="1">One</option>
    <option value="2">Two</option>
</select>
```
```javascript
import { JSelect } from '@dannyxcii/jselect';

document.addEventListener('DOMContentLoaded', () => {
    JSelect.loadAllWithDefaultOptions();
});
```