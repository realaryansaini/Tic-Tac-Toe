let buttons = document.querySelectorAll(".btn")
let block_input = ()=>{
   buttons.forEach((button) => {
      button.setAttribute('disabled' , true)
   })
}

let change_bg_green = (first , second ,third)=>{
    buttons.forEach((button)=>{
      let button_id = button.getAttribute("data-id")
        if (button_id == first || button_id == second || button_id == third){
         button.style.backgroundColor = "#008000c7"
        }
    })
}

let result = document.querySelector(".result")
let check_game_status = () => {
   let cross_data = JSON.parse(localStorage.getItem("cross_data"))
   if (cross_data !== null && cross_data.length >= 5) {
      try{if (cross_data.find(data => data.a1).a1 == cross_data.find(data => data.b1).b1 && cross_data.find(data => data.c1).c1 == cross_data.find(data => data.b1).b1) {
         result.innerText = `Player ${(cross_data.find(data => data.a1).a1 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("a1" , "b1" , "c1")
      }}
      catch(err){console.log(err)}
      try{if (cross_data.find(data => data.a2).a2 == cross_data.find(data => data.b2).b2 && cross_data.find(data => data.c2).c2 == cross_data.find(data => data.b2).b2) {
         console.log("you win " + cross_data.find(data => data.a2).a2);
         result.innerText = `Player ${(cross_data.find(data => data.a2).a2 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("a2" , "b2" , "c2")
      }}
      catch(err){console.log(err)}
      try{if (cross_data.find(data => data.a3).a3 == cross_data.find(data => data.b3).b3 && cross_data.find(data => data.c3).c3 == cross_data.find(data => data.b3).b3) {
         console.log("you win " + cross_data.find(data => data.a3).a3);
         result.innerText = `Player ${(cross_data.find(data => data.a3).a3 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("a3" , "b3" , "c3")
      }}
      catch(err){console.log(err)}
      
      try{if (cross_data.find(data => data.a1).a1 == cross_data.find(data => data.a2).a2 && cross_data.find(data => data.a3).a3 == cross_data.find(data => data.a2).a2) {
         console.log("you win " + cross_data.find(data => data.a1).a1);
         result.innerText = `Player ${(cross_data.find(data => data.a1).a1 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("a1", "a2" , "a3")
      }}
      catch(err){console.log(err)}
      try{if (cross_data.find(data => data.b1).b1 == cross_data.find(data => data.b2).b2 && cross_data.find(data => data.b3).b3 == cross_data.find(data => data.b2).b2) {
         console.log("you win " + cross_data.find(data => data.b1).b1);
         result.innerText = `Player ${(cross_data.find(data => data.b1).b1 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("b1" , "b2" ,'b3')
      }}
      catch(err){console.log(err)}
      try{if (cross_data.find(data => data.c1).c1 == cross_data.find(data => data.c2).c2 && cross_data.find(data => data.c3).c3 == cross_data.find(data => data.c1).c1) {
         console.log("you win " + cross_data.find(data => data.c1).c1);
         result.innerText = `Player ${(cross_data.find(data => data.c1).c1 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("c1" ,"c2" ,"c3")
      }}
      catch(err){console.log(err)}
      
      try{if (cross_data.find(data => data.a1).a1 == cross_data.find(data => data.b2).b2 && cross_data.find(data => data.c3).c3 == cross_data.find(data => data.b2).b2) {
         console.log("you win " + cross_data.find(data => data.a1).a1);
         result.innerText = `Player ${(cross_data.find(data => data.a1).a1 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("a1" , "b2" ,"c3")
      }}
      catch(err){console.log(err)}
      try{if (cross_data.find(data => data.c1).c1 == cross_data.find(data => data.b2).b2 && cross_data.find(data => data.a3).a3 == cross_data.find(data => data.b2).b2) {
         console.log("you win " + cross_data.find(data => data.c1).c1);
         result.innerText = `Player ${(cross_data.find(data => data.c1).c1 == 0)? "O" : "X"} Won the match`
         block_input()
         change_bg_green("c1" ,"b2" ,"a3")
      } }
      catch(err){console.log(err)}
      if(cross_data.length == 9){
         result.innerText = `It's a draw`
      }
   }
}


buttons.forEach((button) => {
   button.addEventListener("click", () => {
      button.setAttribute("disabled", true)

      let cross_game = localStorage.getItem("cross_game")
      if (cross_game !== null) {
         if (cross_game == "0") {
            localStorage.setItem("cross_game", "1")
         } else {
            localStorage.setItem("cross_game", "0")
         }
      } else {
         localStorage.setItem("cross_game", "1")
      }

      if (localStorage.getItem("cross_game") == "0") {
         button.innerText = "O"
      }
      else {
         button.innerText = "X"
      }

      let obj = {}
      let cross_data = localStorage.getItem("cross_data")
      let button_id = button.getAttribute("data-id")
      if (cross_data == null) {
         obj[button_id] = localStorage.getItem("cross_game")
         localStorage.setItem("cross_data", JSON.stringify([obj]))
      } else {
         obj[button_id] = localStorage.getItem("cross_game")
         let new_cross_data = JSON.parse(cross_data)
         new_cross_data.push(obj)
         localStorage.setItem("cross_data", JSON.stringify(new_cross_data))
      }

      check_game_status()
   })
})


let cross_data = JSON.parse(localStorage.getItem("cross_data"))
if (cross_data !== null) {
   buttons.forEach((button) => {
      let button_id = button.getAttribute("data-id")
      let data = cross_data.filter((element) => Object.keys(element)[0] == button_id)
      let text = ""
      try {
         text = (data[0][button_id] == "0") ? "O" : "X"
         button.setAttribute("disabled", true)
      }
      catch (error) {
         console.log(error);
      }
      button.innerText = text
   })
}



let reset = () => {
   localStorage.removeItem("cross_data")
   // window.location.reload()
   buttons.forEach((button)=>{
      // button.setAttribute("disabled" , false)
      button.removeAttribute("disabled")
      button.innerText = ""
      result.innerText = ""
      localStorage.removeItem("cross_game")
      button.style.backgroundColor = "white"
   })
}


check_game_status()