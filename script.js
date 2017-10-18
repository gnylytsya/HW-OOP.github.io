function Item(name, place, wight, price, img){
	this.name = name;
	this.place = place;
	this.wight = wight;
	this.price = price;
	this.img = img;
}

Item.prototype.GetBill = function () {
	var animationTime = 3;
	var printer = $(".bills");
	var bills = printer.find('.bill');
	printerHeight = parseInt(printer.css("height"));
	if (printerHeight<1160){
		printer.css("height", printerHeight+83);
	}
	if(bills.length > 0) {
		var topLastBill = bills.first().position().top;
		console.log(topLastBill);
		printer.prepend("<div class='bill' style='top: "+(topLastBill-82)+"px;'>"+this.name+":<br>"+this.price+"$</div>")
	} else {
		printer.prepend("<div class='bill' style='top: 0px'>"+this.name+":<br>"+this.price+"$</div>")
	}
	var index = 0;
	_.each($(".bill"), function(a) {
		index++;
		var bill = $(a);
		var billHeight = bill.height();
		bill.css("top", index*billHeight);
	})
}

Item.prototype.Weigh = function () {
	$(".weigh_item").css("background-image", this.img);
	$(".weigh_value").html(this.weight+" gramm");

var apple = new Item("apple", "Section-1", 700, 2.00, "url('img/apple.png')"),
	banan = new Item("banan", "Section-1", 1000, 1.00, "url('img/banan.png')"),
	berries = new Item("berries", "Section-1", 1000, 8.00, "url('img/berries.png')"),
	lemon = new Item("lemon","Section-1", 1000, 5.00, "url('img/lemon.png')"),
	pineapple = new Item("pineapple", "Section-1", 750, 9.99, "url('img/pineapple.png')"),
	carrot = new Item("carrot", "Section-2", 1000, 1.00, "url('img/carrot.png')"),
	cheese = new Item("cheese", "Section-3", 1000, 3.00, "url('img/cheese.png')"),
	cocos = new Item("cocos", "Section-1", 1000, 15.00, "url('img/cocos.png')"),
	coffee = new Item("coffee", "Section-4", 1000, 10.00, "url('img/coffee.png')"),
	cucuber = new Item("cucuber", "Section-2", 1200, 2.00, "url('img/cucuber.png')"),
	lime = new Item("lime", "Section-1", 400, 3.99, "url('img/lime.png')"),
	meat = new Item("meat", "Section-5", 1500, 9.99, "url('img/meat.png')"),
	nut = new Item("nut", "Section-4", 800, 5.99, "url('img/nut.png')"),
	fish = new Item("fish", "Section-4", 800, 5.99, "url('img/fish.png')"),
	onion = new Item("onion", "Section-2", 400, 1.99, "url('img/onion.png')"),
	potato = new Item("potato", "Section-2", 5000, 0.99, "url('img/potato.png')"),
	tomato =new Item("tomato", "Section-2", 1000, 5.59, "url('img/tomato.png')");
	
var itemArray = [apple, banan, berries, carrot, cheese, cocos, coffee, cucuber,fish, lime, meat, nut, onion, potato, tomato, pineapple];

function createItems(item){
	var i = document.createElement("div");
	$(i).addClass("item col-lg-3 col-md-6 mb-4");
	$(i).css("background-image", item.img);
	i.innerHTML = "<div class='sub_item_panel'><div class='buy' onclick='"+item.name+".GetBill()'></div><div class='weigh_butt' onclick='"+item.name+".Weigh()'></div></div>"
	$("#" + item.place + " .items").append(i);
}

_.each(itemArray, createItems);