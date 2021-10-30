
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
   
  }
}
 
class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  
  

  addItem = item => {
    this.items.push(item); 
    this.name++;
    this.billTotal();
  }

  removeItem = nome => {
    
    var posicao = this.items.indexOf(nome, 1);
     bill.render();
    this.items.splice(posicao, 2);

    let priceTotal = this.items.reduce((acumulador, valorAtual)=> {
      return acumulador + valorAtual.price}, 0);
    
      document.getElementById('total').innerHTML = 'R$ ' + priceTotal;

  }

  billTotal = preco => {
    //Estava fazendo assim e só aparecia o último valor cadastrado::
    /*var foodPrice = parseFloat(foodPrice);
    foodPrice = preco;
    let priceTotal = document.getElementById('total');
    priceTotal.innerHTML = preco;*/

     let priceTotal = this.items.reduce((acumulador, valorAtual)=> {
      return acumulador + valorAtual.price}, 0);
    
      document.getElementById('total').innerHTML = 'R$ ' + priceTotal;
  }
    
  render = () => {
    //UNFINISHED
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';

    
    this.items.map(item => {
     
      let row = document.createElement('tr');
      let foodName = document.createElement('td');
      let foodPrice = document.createElement('td');
      

      let deletar = document.createElement('button');
      deletar.innerHTML = 'deletar';
      deletar.setAttribute('onclick', 'deletar');
    

      foodName.innerHTML = item.name;
      foodPrice.innerHTML = 'R$ ' + item.price;
     
      row.append(foodName);
      row.append(foodPrice);
      billContainer.append(row);

    

      
    })
  
  }
}


var bill = new Bill();

function init() {
  //bill.addItem(new Item('croissant', 5.99));
  //bill.addItem(new Item('café', 2.99));
  bill.render();
  if(bill.items.length == 0){
    alert('Comanda está vazia');
  }
  document.getElementsByTagName('body')[0].style.display = 'flex';
}

function printBill() {
  window.print();
  let priceTotal = document.querySelector('#total');
  bill.items.length = 0;
  bill.removeItem();
  priceTotal.innerHTML = 'R$ 0,00';
  limpar();
}

 function add(){

  let foodName = document.getElementById('nome').value;
  let foodPrice = document.getElementById('preco').value;

  if(foodName == '' || foodPrice== ''){
    alert('Insira o dado faltante')
  } else{ foodPrice = parseFloat(foodPrice);
    bill.addItem(new Item(foodName, foodPrice));
    bill.billTotal(foodPrice);
    bill.render();
    limpar();
  }
 }

 function deletar(){
   let foodName = document.getElementById('nome').value;
   bill.removeItem(foodName);
   bill.render();
 
 }
 function limpar(){
   let foodName = document.querySelector('#nome');
   let foodPrice = document.querySelector('#preco');

   foodName.value = '';
   foodPrice.value = '';
 }
  
  

