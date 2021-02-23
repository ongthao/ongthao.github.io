function clickHandler() {
  document.getElementById('text-input').style.fontSize = '24px';
}

function fancy() {
  fancy_radio = document.getElementById('fancy');
  text_input = document.getElementById('text-input');
  if(fancy_radio.checked) {
    text_input.style.fontWeight = 'bold';
    text_input.style.color = 'blue';
    text_input.style.textDecoration = 'underline';
    boring_radio.checked = false;
  }
}

function boring() {
  boring_radio = document.getElementById('boring');
  text_input = document.getElementById('text-input');
  if(boring_radio.checked) {
    text_input.style.fontWeight = 'normal';
    text_input.style.color = 'inherit';
    text_input.style.textDecoration = 'none';
    fancy_radio.checked = false;
  }
}

function moo() {
  text_input = document.getElementById('text-input');
  text_input.value = text_input.value.toUpperCase();
  
  parts = text_input.value.split(".");
  for(i = 0; i < parts.length-1; i++) {
    parts[i] += 'moo';
  }
  text_input.value = parts.join(".");
}