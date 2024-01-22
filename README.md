This is a minimal reproduction example to showcase a missmatch in behavior of the framework between the official course and the latest version.

```
# install all deps
npm ci

# the test fails to call the console log 3 times as described in the course
npm run test:e2e
```
