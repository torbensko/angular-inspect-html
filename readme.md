# Inspect HTML Angular directive

View the HTML for a page element, making it easier to reuse HTML examples.

Inspired by the [Bootswatch](http://bootswatch.com/) theming website.



## Usage

- Install via bower:
	```
  bower install torbensko/angular-inspect-html --save
  ```

- Import the module `sko.inspectHtml`

- Add `inspect-html` to the element you want to reveal the HTML of, e.g.

	```
  <div inspect-html>
    <div>reusable html component</div>
  </div>
  ```


## Development

- Install
	```
	npm install
	bower install
	```

- Build the CSS
	```
	grunt
	```

- Run server - requires Python.
	```
	./run.sh
	```