# Grainierjs
A JavaScript module for creating an html object (canvas) which acts as a grainy overlay.
# How to use
Download the grainier.js file and import it in your html file.
Create a script tag and specify what element, by Id to be the parent (the element to look grainy) of the grainy ovelay:
```html
...
  <body>
    <div id="grainier">
        Hello...
    </div>
    <script>
        options = {
            density: 2,
            opacity: 0.3,
        }
        makeGrainy("grainier", options)
    </script>
  </body>
```

