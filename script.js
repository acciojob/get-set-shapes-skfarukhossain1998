//complete this code
class Rectangle {
constructor (width ,height){
	this._height=height;
	this._width=width;
}
	// getter
	get getArea(){
		return Number((this._height)*(this._width));
	}
	


	
}

class Square extends Animal {
	getPerimeter(){
		return Number(2*((this._height)+(this._width)));
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

const sqr=new Square(25,23);
sqr.getArea();
sqr.getPerimeter();
