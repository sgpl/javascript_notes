# Intro to JS
- via Udacity.
- Started: 20 Aug - 4:15pm


### What is JS?
- Versatile programming language.
- Not a markup language like html or css.
- Created in 1995 by Brendan Ike in ~10 days.
- Not related to Java.
- Originally called LiveScript.
- Recent versions referred to by their ECMAScript - ES5 or ES6.
- ES2016 / ES2017
- Considered one of the three foundational pillars of web-development.
- All major browsers come with built-in JS Engine.

##### JS Console
- Chrome: Command + Option + j (Mac)
- Firefox: Command + Option + i (Mac)
- Eg: alert("Hello Sharad, How are you")
- console.log -- used to display content to JS Console. Eg:
- console.log("Hello World!")
- Another example:

  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

- Makes the heading turn red.  

document.getElementsByTagName("h1")[0].style.color = "#ff0000";

- End of lesson 1.  



### Intro to Data / Data Types
- Data is everywhere.
- Eg: facebook: name / friends count / comments - date and time / etc.
- Imp to note what types of data you're using and when it's appropriate to use a particular data type.
- Define and manipulate data types such as:
- Eg of primitive data types: numbers, strings, boolean, undefined, null

##### Numbers:
- Includes any positive or negative integer as well as decimals.
- Can do math by typing expression into the console.
- And can use operators: less than / greater than / not equal to / etc.
-

##### Comments:
- Any text after a double slash //
- Or:  
/*
- longer comments.
- */
- Commenting improves readability of code and helps in debugging / figuring out what it does later.


##### Strings:
- Use quotes to signify strings.
- They have to match (single or double quotes).
- Use single quotes - style guide recommendation from Udacity.
- **String Concatenation** eg:
- "Hello," + " New York City"
- Returns: "Hello, New York City"
- **Implicit type coercion:** a feature of JavaScript.
- "Hello" + 5*10 returns: "Hello50"
- JavaScript multiplies the 5*10 to become 50 and then changes the number 50 into the string "50", so you're adding together the same data type. This then gets combined with the string "Hello".
- **Escaping Characters**:
- Eg:  "The man whispered, \"please speak to me.\""
- Some common characters that need to be escaped: \" \' \n \t \\
- **String Comparisons**: when comparing strings, case matters - "Yes" == "yes" // returns false.
- When checking if a string is "greater than" or "less than" another string, JavaScript compares individual characters using a numerical value. Each character is assigned a numerical value that essentially corresponds to the character's location in an ASCII table: http://www.ascii-code.com/
- "green" > "blue" // returns true
- "green" > "Green" // also true


##### Variables:
- Variables store data.
- Any data can be stored in a variable.
- Declaring variable eg:
- var nameOfVariable = "Hello";
- **naming convention**: camelCase

##### Indexing:
- "Hello"[0]; -> H
- var name = "Sharad";
- name[0]; -> S
- Alternate:
- name.charAt(0); -> S

##### Null & Undefined & NaN
- **null** has no value - value of nothing (totally empty). var x = null;
- **undefined** - indicates absence of value. var x; console.log(x); x exists, it just doesn't have  value yet.
- **NaN**: NaN stands for "Not-A-Number" and it's often returned indicating an error with number operations. For instance, if you wrote some code that performed a math calculation, and the calculation failed to produce a valid number, NaN might be returned.

##### Implicit type coercion:
- "1" == 1 // returns true
- 0 == false // returns true
- js is a loosely typed language
- when you’re writing JavaScript code, you do not need to specify data types. Instead, when your code is interpreted by the JavaScript engine it will automatically be converted into the "appropriate" data type. This is called implicit type coercion
- **Strict Equality**: use === // this compares values without doing a type conversion.


### CONDITIONALS:
