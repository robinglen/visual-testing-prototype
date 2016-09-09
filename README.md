# visual-testing-prototype
Prototype for comparing webpage layouts across browsers

It's still pretty stupid at the moment but will take a screenshot, compare it to a benchmark and then product difference image.

## Set up

`npm install`

## Running

Get a screenshot of the html file: static/index.html

`npm run screenshot:driver`

Will save a file the file here: snapshots/snapshot.png

Comparing the screenshot to the benchmark:

`npm run screenshot:comparison`

Will alert if there is any change and save a difference file: snapshots/diff.png
