//your JS code here. If required.
const parentlevel=document.getElementById("level")
let count=1
if(parentlevel.parent==null){
	alert(`the count ${count}`)
}else{
	parentlevel=parentlevel.parent
	count++
}