# Errors

1. `npm run start`
2. Open a dialog by any button
3. Check warnings and errors in DevTools' console

1 of 4:

```
webpackHotDevClient.js:138 ./node_modules/@react-spectrum/breadcrumbs/dist/main.css (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./node_modules/@react-spectrum/breadcrumbs/dist/main.css)
Warning

(1:745) start value has mixed support, consider using flex-start instead
```

2 of 4:

```
webpackHotDevClient.js:138 ./node_modules/@react-spectrum/breadcrumbs/dist/main.css (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./node_modules/@react-spectrum/breadcrumbs/dist/main.css)
Warning

(1:83) start value has mixed support, consider using flex-start instead
```

3 of 4:

```
index.js:1 Warning: Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: Transition

Learn more about this warning here: https://reactjs.org/link/legacy-context
    at Transition (http://localhost:3000/static/js/vendors~main.chunk.js:67566:30)
    at $c2eed959492fcaa12e5ad56438b32db$export$OpenTransition
    at div
    at ProviderWrapper (http://localhost:3000/static/js/vendors~main.chunk.js:21097:5)
    at ModalProvider (http://localhost:3000/static/js/vendors~main.chunk.js:8462:5)
    at I18nProvider (http://localhost:3000/static/js/vendors~main.chunk.js:4587:5)
    at $bc3300334f45fd1ec62a173e70ad86$var$Provider (http://localhost:3000/static/js/vendors~main.chunk.js:21011:21)
    at $efa130a588abe47e4415ae0ba92319d4$var$Overlay (http://localhost:3000/static/js/vendors~main.chunk.js:19488:5)
    at $e95c536af9708d8f08fc5947c704fa3$var$Modal (http://localhost:3000/static/js/vendors~main.chunk.js:19731:5)
    at $b3e9aa84487f353b5d43baaa685254c$var$DialogTriggerBase (http://localhost:3000/static/js/vendors~main.chunk.js:15839:5)
    at $b3e9aa84487f353b5d43baaa685254c$var$DialogTrigger (http://localhost:3000/static/js/vendors~main.chunk.js:15665:5)
    at DialogButton1
    at p
    at div
    at div
    at ProviderWrapper (http://localhost:3000/static/js/vendors~main.chunk.js:21097:5)
    at ModalProvider (http://localhost:3000/static/js/vendors~main.chunk.js:8462:5)
    at I18nProvider (http://localhost:3000/static/js/vendors~main.chunk.js:4587:5)
    at $bc3300334f45fd1ec62a173e70ad86$var$Provider (http://localhost:3000/static/js/vendors~main.chunk.js:21011:21)
    at App
```

4 of 4:

```
index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
    at div
    at $facde3dde95c50b545b1ceb8303a7b3d$export$Underlay (http://localhost:3000/static/js/vendors~main.chunk.js:19720:5)
    at Transition (http://localhost:3000/static/js/vendors~main.chunk.js:67566:30)
    at $c2eed959492fcaa12e5ad56438b32db$export$OpenTransition
    at div
    at ProviderWrapper (http://localhost:3000/static/js/vendors~main.chunk.js:21097:5)
    at ModalProvider (http://localhost:3000/static/js/vendors~main.chunk.js:8462:5)
    at I18nProvider (http://localhost:3000/static/js/vendors~main.chunk.js:4587:5)
    at $bc3300334f45fd1ec62a173e70ad86$var$Provider (http://localhost:3000/static/js/vendors~main.chunk.js:21011:21)
    at $efa130a588abe47e4415ae0ba92319d4$var$Overlay (http://localhost:3000/static/js/vendors~main.chunk.js:19488:5)
    at $e95c536af9708d8f08fc5947c704fa3$var$Modal (http://localhost:3000/static/js/vendors~main.chunk.js:19731:5)
    at $b3e9aa84487f353b5d43baaa685254c$var$DialogTriggerBase (http://localhost:3000/static/js/vendors~main.chunk.js:15839:5)
    at $b3e9aa84487f353b5d43baaa685254c$var$DialogTrigger (http://localhost:3000/static/js/vendors~main.chunk.js:15665:5)
    at DialogButton1
    at p
    at div
    at div
    at ProviderWrapper (http://localhost:3000/static/js/vendors~main.chunk.js:21097:5)
    at ModalProvider (http://localhost:3000/static/js/vendors~main.chunk.js:8462:5)
    at I18nProvider (http://localhost:3000/static/js/vendors~main.chunk.js:4587:5)
    at $bc3300334f45fd1ec62a173e70ad86$var$Provider (http://localhost:3000/static/js/vendors~main.chunk.js:21011:21)
    at App
```
