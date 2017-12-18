How to set up SASS to compile to CSS from the CLI: 

In MAC to have it watch one Sass file: 

1) type the shortcut "⌘ + spacebar"
2) this brings up the "Spotlight Search".  Type in "terminal." Hit "Enter"
3) cd project 
4) cd wk-01-alpha 
5) enter the following into the cli: "sass --watch styles.sass:styles.css" (this means sass command to watch the file "styles.sass" and process it into the file "styles.css")
6) once you have it watching the file, any time you make a change it should update it.


In MAC to have it watch an entire directory: 

1) type the shortcut "⌘ + spacebar"
2) this brings up the "Spotlight Search".  Type in "terminal." Hit "Enter"
3) cd project 
4) cd wk-01-alpha 
5) enter the following into the cli: "sass --watch sass:css" (this means sass command to watch the file "styles.sass" and process it into the file "styles.css")
6) once you have it watching the file, any time you make a change it should update it.