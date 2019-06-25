var express=require('express');
var app=express();

var productController=function(req,res)
{
	console.log("calling rest api");
	var products=[
	{name:'pepsi',quantity:50,product:'colddrink'},
	{name:'coca-cola',quantity:60,product:'colddrink'},
	{name:'lays',quantity:10,product:'chips'},
	{name:'kurkue',quantity:50,product:'eatables'},
	{name:'vadapav',quantity:60,product:'junk'},
	];
	
	res.send(products);
};
app.get("/products",productController);

var server=app.listen(8088,function()
{
	var host=server.address().address
	var port=server.address().port
	
	console.log("running at local host 8088",server,port)
	
	
})