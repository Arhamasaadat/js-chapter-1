    document.write("<h2>1.AWESOME WEBSITE</h2>");
    var a = 10;
    document.write("The value of a is: " + a + "<br><br>");

    document.write("The value of ++a is: " + (++a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a++ is: " + (a++) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of --a is: " + (--a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of a-- is: " + (a--) + "<br>");
    document.write("Now the value of a is: " + a + "<br>");


    document.write("<h2>3. Greet the User</h2>");
    var userName = prompt("Please enter your name:");
    if (userName === null || userName === "") {
      userName = "Guest";
    }
    document.write("<p>Hello <strong>" + userName + "</strong>! Welcome to our website! 😊</p>");

    document.write("<h2>5. Multiplication Table</h2>");
    var tableNumber = prompt("Enter a number for multiplication table (default is 5):");
    tableNumber = tableNumber ? parseInt(tableNumber) : 5;

    if (isNaN(tableNumber)) {
      tableNumber = 5;
    }

    document.write("<p>Multiplication Table of <strong>" + tableNumber + "</strong>:</p>");
    document.write("<ul>");
    for (var i = 1; i <= 10; i++) {
      document.write("<li>" + tableNumber + " x " + i + " = " + (tableNumber * i) + "</li>");
    }
    document.write("</ul>");

    document.write("<h2>6. Marks Sheet</h2>");

    var sub1 = prompt("Enter first subject name:");
    var sub2 = prompt("Enter second subject name:");
    var sub3 = prompt("Enter third subject name:");

    var totalMarksPerSubject = 100;
    var totalAllSubjects = totalMarksPerSubject * 3;

    var obt1 = parseFloat(prompt("Enter obtained marks for " + sub1 + " (out of 100):"));
    var obt2 = parseFloat(prompt("Enter obtained marks for " + sub2 + " (out of 100):"));
    var obt3 = parseFloat(prompt("Enter obtained marks for " + sub3 + " (out of 100):"));

    // Handle invalid input
    if (isNaN(obt1)) obt1 = 54;
    if (isNaN(obt2)) obt2 = 54;
    if (isNaN(obt3)) obt3 = 48;

    var totalObtained = obt1 + obt2 + obt3;
    var percentage = (totalObtained / totalAllSubjects) * 100;

    // Create Table
    document.write("<table>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obt1 + "</td><td>" + obt1 + "%</td></tr>");
    document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obt2 + "</td><td>" + obt2 + "%</td></tr>");
    document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obt3 + "</td><td>" + obt3 + "%</td></tr>");
    document.write("<tr><th colspan='2'>Total</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
    document.write("</table>");