function getSelectedValue() {
  var selectEl = document.getElementById('select-script');
  return selectEl.options[selectEl.selectedIndex].value;
}

function injectScript(filename) {
  var scriptEl = document.createElement('script');
  scriptEl.setAttribute('type','text/javascript');
  scriptEl.setAttribute('src', filename);
}

function addToListOfScripts(filename) {
  var listItemEl = document.createElement('li');
  var text = document.createTextNode(filename);
  listItemEl.appendChild(text);

  var listEl = document.getElementById('list-of-scripts');
  listEl.appendChild(listItemEl);
}

function loadScript() {
  var filename = getSelectedValue();
  injectScript('/' + filename);
  addToListOfScripts(filename);
}