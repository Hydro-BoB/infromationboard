document.getElementById("mybutton").onclick = function(){

    var text = document.getElementById("mytext").value;
   // console.log("hello",text);


var cells = document.getElementsByClassName('yuck');

const usingSplit = text.split('');
var arrlength=text.length

for(var i=0;i<arrlength;i++)
{console.log(text[i]);
cells[i].innerHTML = text[i];
}

/*cells[8].innerHTML = "Row3 Column3";
cells[0].innerHTML = "Row1 Column3";
cells[1].innerHTML = text;


const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);
// Result
// [ 'h', 'i', ' ', 't', 'h', 'e', 'r', 'e' ]

*/

}