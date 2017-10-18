function Item(name, place, weight, price, img) {
	this.name = name;
	this.place = place;
	this.weight = weight;
	this.price  = price;
	this.img = img;
}

Item.prototype.GetBill = function () {
	var printSound = new Audio("sound/print.mp3");
	printSound.play();
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
	var Sound = new Audio("sound/weigh.mp3");
	Sound.play();
	$(".weigh_item").css("background-image", this.img);
	$(".weigh_value").html(this.weight+" gramm");

}

var apple = new Item("apple", "Section-1", 3000, 2.99, "url('img/apple.png')"),
	banan = new Item("banan", "Section-1", 4000, 4.99, "url('img/banan.png')"),
	barries = new Item("barries", "Section-1", 1000, 7.99, "url('img/barries.png')"),
	carrot = new Item("carrot", "Section-2", 3500, 1.99, "url('img/carrot.png')"),
	cheese = new Item("cheese", "Section-3", 500, 0.99, "url('img/cheese.png')"),
	cocos = new Item("cocos", "Section-1", 1500, 9.99, "url('img/cocos.png')"),
	cofe = new Item("cofe", "Section-4", 300, 1.50, "url('img/cofe.png')"),
	cook = new Item("cook", "Section-4", 700, 3.50, "url('img/cook.png')"),
	cucumber = new Item("cucumber", "Section-2", 1200, 2.00, "url('img/cucumber.png')"),
	lime = new Item("lime", "Section-1", 400, 3.99, "url('img/lime.png')"),
	meat = new Item("meat", "Section-5", 1500, 9.99, "url('img/meat.png')"),
	nut = new Item("nut", "Section-4", 800, 5.99, "url('img/nut.png')"),
	onion = new Item("onion", "Section-2", 400, 1.99, "url('img/onion.png')"),
	potato = new Item("potato", "Section-2", 5000, 0.99, "url('img/potato.png')"),
	tomato =new Item("tomato", "Section-2", 1000, 5.59, "url('img/tomato.png')");


var itemArray = [apple, barries, banan, carrot, cheese, cocos, cofe, cook, cucumber, lime, meat, nut, onion, potato, tomato];

function createItems(item){
	var i = document.createElement("div");
	$(i).addClass("item");
	$(i).css("background-image", item.img);
	i.innerHTML = "<div class='sub_item_panel'><div class='buy' onclick='"+item.name+".GetBill()'></div><div class='weigh_butt' onclick='"+item.name+".Weigh()'></div></div>"
	$("#" + item.place + " .items").append(i);


}

_.each(itemArray, createItems);