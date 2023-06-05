//complete this code
class Rectangle {
constructor (width ,height){
	this._height=height;
	this._width=width;
}
	// getter
	get getArea(){
		return width * height;
	}
	


	
}

class Square extends Rectangle {
	getPerimeter(sq_s){
		return sq_s*4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

 const rect_w = 5; 
const rect_h = 10; 
const sq_s = 7; 
const rectangle = new Rectangle(rect_w, rect_h);
const square = new Square(); 
square.getPerimeter(sq_s);
rectangle.getArea();
