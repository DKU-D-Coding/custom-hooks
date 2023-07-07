export function init() {
   var name = "Mozilla";
   function displayName() {
      alert(name);
   }

   displayName();
}

function makeFunc() {
   var name = "Mozilla";
   function displayName() {
      alert(name);
   }

   return displayName;
}

var myFunc = makeFunc();

const LexicalScoping = () => {
   //TODO: 어떤 차이가 있을까?
   init();
   myFunc();

   return null;
};

export default LexicalScoping;
