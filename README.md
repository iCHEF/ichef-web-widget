iCHEF Web Widget
================
Call icon widget to be used on iCHEF website.

Install
-------
Paste the following code to your webpage, before `</body>`:

```html
<script src="https://ichef.github.io/ichef-web-widget/widget.js"></script>
<script>
    iCHEFWidget.init({ phone: '0227600120', tooltip: 'Contact iCHEF' });
</script>
```

Develop
-------
Fork this repository, and then run:

```sh
yarn install
```

If you want to build dist bundle, run:

```sh
yarn build
```

To release your bundle to Github pages, run:

```sh
yarn dist
```
