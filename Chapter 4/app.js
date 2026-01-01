// 1. Declare 3 variables in one statement
    var firstName = "Hamza", age = 8, country = "Pakistan";

    // 2. 5 Legal variable names
    var myName = "Ahmed";
    var _newValue = 200;
    var $price = 100;
    var expire = "validity";
    var Variable = " practice";

    // 2. 5 Illegal variable names (commented to avoid errors)
    // var 123user;          // starts with number
    // var my-name;          // contains hyphen
    // var let;              // reserved keyword
    // var first name;       // contains space
    // var @email;           // invalid special character

    // 3. Display rules in the browser
    document.write("<h1>Rules for naming JS variables</h1>");

    document.write("<p>Variable names can only contain <strong>numbers , $ letters, and _</strong>.<br>");
    document.write("For example: <strong>$my_1stVariable</strong></p>");

    document.write("<p>Variables must begin with a <strong>letter, $ or _</strong>.<br>");
    document.write("For example: <strong>$name</strong>, <strong>_name</strong> or <strong>name</strong></p>");

    document.write("<p>Variable names are <strong>case sensitive</strong></p>");

    document.write("<p>Variable names should not be JS <strong>keywords</strong></p>");