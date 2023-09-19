function openTab(evt, tab) {
  var i, content, links;
  content = document.getElementsByClassName('content');
  for (i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  }
  links = document.getElementsByClassName('links');
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(' active', '');
  }
  document.getElementById(tab).style.display = 'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();
