var bc = new BroadcastChannel('test_channel');

console.log('parsing');

bc.onmessage = function (ev) { 
  console.log('received');
  console.log(ev);
  console.log(ev.data);
  document.querySelector('#message').value = String(ev.data);
  
} /* receive */
bc.postMessage("hi"); 
// bc.postMessage('This is a test message.'); /* send */

 
document.querySelector('#message').addEventListener('keyup', function (ev) {
  var text = document.querySelector('#message').value;
  console.log('text='+text);
  bc.postMessage(text);
});