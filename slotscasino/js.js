var hasStarBeenReturned = [false, false, false, false, false]
var counter = 0 
var isinfreegames = 0
var freespins = 0
var multiplier = 0
var freegamestotalwin = 0

playslot = () => {
  $("#playbutton").prop("disabled", true)
  $("#devwinreward").prop("hidden", true)
  if(isinfreegames == 0){
  $("#freegameswin").prop("hidden", true)
  }
  setTimeout(() => {
    $("#playbutton").prop("disabled", false)
    $("#devwinreward").prop("hidden", false)
    $("#freegameswin").prop("hidden", false)
  },1500)
  let winsarray= []

  if(freespins>0){
    freespins--
    $("#devfreegames").text("freespins: "+freespins)}
    if(freespins==0){
      $("#devfreegames").text("")
    }

  if (isinfreegames == 1) {
    possibleslots = [  
      "$",
      "€",
      "!",
    ]
  }else{
    possibleslots = [
      "$",
      "€",
      "!",
      "A",
      "Q",
      "J",
      "K",
      "A",
      "Q",
      "J",
      "K",
      "A",
      "Q",
      "J",
      "K", 
    ]
  }

  let col1 = $("#col1")
  let col2 = $("#col2")
  let col3 = $("#col3")
  let col4 = $("#col4")
  let col5 = $("#col5")

  let col1childs = col1.find("div")
  let col2childs = col2.find("div")
  let col3childs = col3.find("div")
  let col4childs = col4.find("div")
  let col5childs = col5.find("div")

  col1array=[]
  col2array=[]
  col3array=[]
  col4array=[]
  col5array=[]

  for (var i = 0; i < 3; i++) {

    $(col1childs[i]).text(getRandomResult(0))
    col1array.push($(col1childs[i]).text())
    $(col2childs[i]).text(getRandomResult(1))
    col2array.push($(col2childs[i]).text())
    $(col3childs[i]).text(getRandomResult(2))
    col3array.push($(col3childs[i]).text())
    $(col4childs[i]).text(getRandomResult(3))
    col4array.push($(col4childs[i]).text())
    $(col5childs[i]).text(getRandomResult(4))
    col5array.push($(col5childs[i]).text())
    
  }

  anime({
    targets: '.anime',
    scale: [
      {value: 0, easing: 'easeOutSine', duration: 0},
      {value: 1, easing: 'easeInOutQuad', duration: 0}
    ],
    delay: anime.stagger(300, {grid: [3,1], from: 'center'})
  });

  
  let payment = 0

  if(col1array[0]==col2array[0]){
    payment=10
    if(col2array[0]==col3array[0]){
      payment=20
      if(col3array[0]==col4array[0]){
        payment=50
        if(col4array[0]==col5array[0]){
          payment=100
        }
      }
    }
    if(col1array[0]=="$" || col1array[0]=="€" || col1array[0]=="!"){  
      payment*=2
    }
    winsarray.push(payment)
    payment = 0
    
  }

  if(col1array[1]==col2array[1]){
    payment=10
    if(col2array[1]==col3array[1]){
      payment=20
      if(col3array[1]==col4array[1]){
        payment=50
        if(col4array[1]==col5array[1]){
          payment=100
        }
      }
    }
    if(col1array[1]=="$" || col1array[1]=="€" || col1array[1]=="!"){  
      payment*=2
    }
    winsarray.push(payment)
    payment = 0
    
  }

  if(col1array[2]==col2array[2]){
    payment=10
    if(col2array[2]==col3array[2]){
      payment=20
      if(col3array[2]==col4array[2]){
        payment=50
        if(col4array[2]==col5array[2]){
          payment=100
        }
      }
    }
    if(col1array[2]=="$" || col1array[2]=="€" ||col1array[2]=="!"){  
      payment*=2
    }
    winsarray.push( payment)
    payment = 0
    
  }

  if(col1array[2]==col2array[1]){
    payment=10
    if(col2array[1]==col3array[0]){
      payment=20
      if(col3array[0]==col4array[1]){
        payment=50
        if(col4array[1]==col5array[2]){
          payment=100
        }
      }
    }
    if(col1array[2]=="$" || col1array[2]=="€" || col1array[2]=="!"){  
      payment*=2
    }
    winsarray.push(payment)
    payment = 0
    
  }

  if(col1array[0]==col2array[1]){
    payment=10
    if(col2array[1]==col3array[2]){
      payment=20
      if(col3array[2]==col4array[1]){
        payment=50
        if(col4array[1]==col5array[0]){
          payment=100
        }
      }
    }
    if(col1array[0]=="$" || col1array[0]=="€" || col1array[0]=="!"){  
      payment*=2
    }
    winsarray.push(payment)
    payment = 0
    
  }

let scatters = 0
  for (var i = 0; i < 3; i++) {
    if(col1array[i]=="*"){
      scatters++
    }
    if(col2array[i]=="*"){
      scatters++
    }
    if(col3array[i]=="*"){
      scatters++
    }
    if(col4array[i]=="*"){
      scatters++
    }
    if(col5array[i]=="*"){
      scatters++
    }
  }


console.log(winsarray)

  if(scatters>=3){
    console.log("3 scatters")
    if(isinfreegames == 1){
      multiplier+=2
    }
    isinfreegames = 1
    freespins+=10
    
    $("#devfreegames").text("freespins: ".freespins)
    $("#multiplier").text(multiplier)
  }

  let totalpayment = 0
  for (var i = 0; i < winsarray.length; i++) {
    totalpayment+=winsarray[i]
  }
  if(multiplier>0){
    totalpayment*=multiplier
  }

  if(isinfreegames == 1){
    freegamestotalwin+=totalpayment
    $("#freegameswin").text(freegamestotalwin)
  }if(isinfreegames == 0){
    freegamestotalwin=0
    $("#freegameswin").text('')
  }

  $("#devwinreward").text("pay: "+totalpayment)

if(isinfreegames == 1 && freespins == 0){
  isinfreegames = 0
  multiplier = 0
  $("#multiplier").text("multiplier: "+multiplier)

}

if (multiplier==0){
  $("#multiplier").text('')
}

  }

getRandomResult = (colIndex) => {
  if (counter == 15) {
    hasStarBeenReturned = [false, false, false, false, false]
    counter = 0
  }
  counter++

  var index = Math.floor(Math.random() * possibleslots.length)
  let a =0.05
  if(isinfreegames == 1) {
  a=0.06
  }

  if (!hasStarBeenReturned[colIndex] && Math.random() < a) {
    hasStarBeenReturned[colIndex] = true
    return "*"
  }
  return possibleslots[index]
  
}