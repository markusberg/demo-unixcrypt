# demo-unixcrypt
Troubleshooting unixcrypt. Follow these steps to clone, build and run:

```bash
$ git clone https://github.com/markusberg/demo-unixcrypt
[...]
$ cd demo-unixcrypt/
$ npm install
[...]
$ npm start

> demo-unixcrypt@1.0.0 start
> npm run clean && npm run build && node dist/index.js


> demo-unixcrypt@1.0.0 clean
> rm -fr dist *.tsbuildinfo


> demo-unixcrypt@1.0.0 build
> tsc -p .

true
true
true
true
true
```
