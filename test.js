function Item(name, place, wight, price, img){
	this.name = name;
	this.place = place;
	this.wight = wight;
	this.price = price;
	this.img = img;
}


var apple = new Item("apple", "Section-1", 700, 2.00, "url('img/apple.png')"),
	banan = new Item("banan", "Section-1", 1000, 1.00, "url('img/banan.png')"),
	berries = new Item("berries", "Section-1", 1000, 8.00, "url('img/berries.png')"),
	lemon = new Item("lemon","Section-1", 1000, 5.00, "url('img/lemon.png')"),
	pineapple = new Item("pineapple", "Section-2", 750, 9.99, "url('img/pineapple.png')"),
	carrot = new Item("carrot", "Section-2", 1000, 1.00, "url('img/carrot.png')"),
	cheese = new Item("cheese", "Section-2", 1000, 3.00, "url('img/cheese.png')"),
	cocos = new Item("cocos", "Section-2", 1000, 15.00, "url('img/cocos.png')"),
	coffee = new Item("coffee", "Section-2", 1000, 10.00, "url('img/coffee.png')"),
	cucuber = new Item("cucuber", "Section-3", 1200, 2.00, "url('img/cucuber.png')"),
	lime = new Item("lime", "Section-3", 400, 3.99, "url('img/lime.png')"),
	meat = new Item("meat", "Section-3", 1500, 9.99, "url('img/meat.png')"),
	nut = new Item("nut", "Section-3", 800, 5.99, "url('img/nut.png')"),
	fish = new Item("fish", "Section-4", 800, 5.99, "url('img/fish.png')"),
	onion = new Item("onion", "Section-4", 400, 1.99, "url('img/onion.png')"),
	potato = new Item("potato", "Section-4", 5000, 0.99, "url('img/potato.png')"),
	tomato =new Item("tomato", "Section-4", 1000, 5.59, "url('img/tomato.png')");

