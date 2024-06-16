var buttontower1 = $("#btntower1")
var buttontower2 = $("#btntower2")
var buttontower3 = $("#btntower3")
var state = 0
var firstChild = null
var towertomovetext=""

choose = (tower) => {

  
  console.log("pre: "+firstChild)

  if (state == 0) {
    buttontower1.text("move")
    buttontower2.text("move")
    buttontower3.text("move")
    firstChild = $("#tower" + tower + " > :first-child:not(button)")
    state = 1
  } else if (state == 1) {
    buttontower1.text("choose")
    buttontower2.text("choose")
    buttontower3.text("choose")
    console.log(firstChild.text())
    console.log(towertomovetext)
    towertomovetext=$("#tower" + tower + " > :first-child:not(button)").text()
 if(towertomovetext==""){towertomovetext=99}
    if (firstChild.text() > towertomovetext) {
      $("#ruletext").text("Invalid move")
    }else{
      firstChild.prependTo("#tower" + tower)
      $("#ruletext").text("move")
    }
    
    
    state = 0
  }

}
