// Keep the existing menu usable with touch and keyboard.
document.querySelectorAll('#nav .dropdown').forEach(function(menu){
  var trigger=menu.querySelector('b');
  trigger.setAttribute('tabindex','0');
  trigger.setAttribute('role','button');
  trigger.setAttribute('aria-expanded','false');
  function toggle(){var open=menu.classList.toggle('is-open');trigger.setAttribute('aria-expanded',String(open));}
  trigger.addEventListener('click',toggle);
  trigger.addEventListener('keydown',function(event){if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();}});
});
var menuCheck=document.getElementById('check');
if(menuCheck){
  menuCheck.setAttribute('aria-label','Menu');
  document.querySelectorAll('.nav2 a').forEach(function(link){link.addEventListener('click',function(){menuCheck.checked=false;});});
  document.addEventListener('keydown',function(event){if(event.key==='Escape'){menuCheck.checked=false;document.querySelectorAll('.dropdown.is-open').forEach(function(menu){menu.classList.remove('is-open');menu.querySelector('b').setAttribute('aria-expanded','false');});}});
  document.addEventListener('click',function(event){if(!event.target.closest('#nav')){menuCheck.checked=false;}});
}
