document.getElementById('colorButton').addEventListener('click', function() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
  });