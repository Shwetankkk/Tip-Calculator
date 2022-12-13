const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput')
const numberofPeoplediv = document.getElementById('numberOfPeople');
const perPersonTotaldiv =  document.getElementById('perPersonTotal');
let numberofPeople = Number(numberofPeoplediv.innerText)
const calculateBill = () => {
  const bill = Number(billTotalInput.value) 
  const tip = Number(tipInput.value)/100
  const totaltipamount = bill*tip
  const total = bill + totaltipamount
  const ppt = Math.floor(total / numberofPeople)
  perPersonTotal.innerText = ppt
}

const increasePeople = () => {
 numberofPeople = numberofPeople + 1
 numberofPeoplediv.innerText = numberofPeople
 calculateBill()
}

const decreasePeople = () => {
  if(numberofPeople <= 1){
    return
  }
  numberofPeople =  numberofPeople - 1
  numberofPeoplediv.innerText = numberofPeople
  calculateBill()

}