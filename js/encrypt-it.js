/*
 * Starter file 
 */
(function() {
  "use strict";

  console.log("Window loaded!");

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick, false);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick() {
    console.log('Button clicked!');
    const inputText = document.getElementById('input-text');
    const resultArea = document.getElementById('result');
    resultArea.textContent = shiftCipher(inputText.value);
  }

  function shiftCipher(text) {
    const shift = 2;
    text = text.toLowerCase();
    let finalResult = '';
    for(let i = 0; i < text.length; i++) {
      const currentCode = text.charCodeAt(i); 
      if(currentCode >= 97 && currentCode <= 122) {
        if (text[i] == 'y') {
          finalResult += String.fromCharCode(97)
        } else if (text[i] == 'z') {
          finalResult += String.fromCharCode(98);
        } else {
          finalResult += String.fromCharCode(currentCode + shift); 
        }
      } else {
        finalResult += text[i];
      }
    }
    return finalResult;
  }
})();
