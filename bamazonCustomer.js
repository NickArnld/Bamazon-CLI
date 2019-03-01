const mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root2",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  firstConnection();
});

function firstConnection() {
  connection.query("SELECT * FROM bamazon.products", function(err, res) {
    if (err) throw err;
    var productArr = res;
    console.log("~~~~ Welcome to Bamazon ~~~~");
    console.log("---- Products Availabe:         ");
    for (i in productArr){
        var cur = productArr[i];
        console.log("Product ID:", cur.item_id, "||","Name:", cur.product_name,"||", "Price:", cur.price,"||", "Stock:", cur.stock_quantity);
    }
    firstPrompt();
  });
}

function firstPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "order",
            message: "What would you like to order? (Enter the Product ID#)"
        },
        {
            type: "input",
            name: "order_amount",
            message: "How many?"
        }
    ])
    .then((ans)=>{
        // console.log("YOU WANT:", ans.order);
        checkStock(ans.order, ans.order_amount);
        
    })
    .catch((err)=>{console.log(err)});
}

function checkStock(id, amount){
    connection.query(`SELECT * FROM bamazon.products WHERE item_id = ${id}`, function(err, res) {
        if (err) throw err;
        var quantity = res[0].stock_quantity;

        if(quantity>parseInt(amount)){
            fulfillOrder(id);
        }else{
            console.log("Insufficent Stock!")
        }        
    });
}

function fulfillOrder(id){
    var price = 0;
    connection.query(`SELECT * FROM bamazon.products WHERE item_id = ${id}`, function(err, res) {
        price = res[0].price;
    });
    connection.query(`UPDATE bamazon.products SET stock_quantity = stock_quantity - 1 WHERE item_id = ${id}  `, function(err, res) {
        console.log("Your Total is:", price);
        connection.end();
    });
    // return
}