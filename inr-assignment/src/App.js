import { useState } from 'react';
import './App.css';
import wheel from "./wheel.png"

function App() {

  const [ticket, setTicket] = useState("")
  const [num, setNum] = useState([])

  const ticketcreation = (e)=>{
   const val = e.target.value;
   if(ticket.length<=5){
    setTicket(ticket+val)
   }
   else{
    alert("Can't add more than 6 numbers..!")
   } 
  }

  const handleClick = ()=>{

    if(ticket != ""){
      setNum([...num, {
        id: num.length + Date.now(),
        value: ticket
      }])  
      if(num.length == 4){
        alert("You have only one ticket to go..!")
      }  
      handleErase()
    }else{
      alert("Please enter valid Number")
    }
  }

  const handleErase=()=>{
    setTicket("")
  }

  const randomTicket =()=>{
    setTicket(Math.floor((Math.random()*1000000)+6))
    
  }

  const handleDelete=(id)=>{

    const deleteData = num.filter((e)=>e.id !== id)
    setNum(deleteData) 
  }

 return (
    <div className="App">

     <div id='top'>
      <div id='left'>
        
        <div id='left1'>
          <div>{ticket}</div>
          <div>Enter 6 Digit</div>
        </div>

        <div id='left2'>
          <button value="7" onClick={ticketcreation}>7</button>
          <button value="8" onClick={ticketcreation}>8</button>
          <button value="9" onClick={ticketcreation}>9</button>
          <button value="4" onClick={ticketcreation}>4</button>
          <button value="5" onClick={ticketcreation}>5</button>
          <button value="6" onClick={ticketcreation}>6</button>
          <button value="1" onClick={ticketcreation}>1</button>
          <button value="2" onClick={ticketcreation}>2</button>
          <button value="2" onClick={ticketcreation}>3</button>
          <button onClick={handleErase}>erc</button>
          <button value="0" onClick={ticketcreation}>0</button>
          <button>del</button>
        </div>

        <div id='left3'>
          <button disabled={num.length==5} onClick={handleClick}>ADD TICKET</button>
        </div>

      </div>
      <div id='right'>
        <img onClick={randomTicket} src={wheel} alt="" />
      </div>
     </div>

     <div id='down'>
     <h4>Your Selected Tickets</h4>
      <div id='ticket'>
      {
        num.map((e)=>{
          return(
            <div key={e.id}>
              <div id='show'>{e.value}</div>
              <div id='del' onClick={()=>{
                handleDelete(e.id)
              }}>X</div>
            </div>
          )
        })
      }
      </div>
     </div>

    </div>
  );
}

export default App;
