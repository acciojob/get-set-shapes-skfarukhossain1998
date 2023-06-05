//complete this code
class Rectangle {
constructor (width ,height){
	this._height=height;
	this._width=width;
}
	// getter
	get getArea(){
		return this._height*this._width;
	}
	


	
}

class Square extends Rectangle {
	getPerimeter(){
		return sq_s*sq_s;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

 const rect_w = 7; const rect_h = 8; 
const sq_s = 6; 
const rectangle = new Rectangle(rect_w, rect_h);
const square = new Square(sq_s); 
square.getArea();
rectangle.getPerimeter();
