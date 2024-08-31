function functionName() {
  alert(arguments.callee.name);
}
functionName(); // alerts "functionName"
function AccioJob() {
  alert(arguments.callee.name);
}
AccioJob(); // alerts "AccioJob"