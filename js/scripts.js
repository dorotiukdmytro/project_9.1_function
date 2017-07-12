// scripts.js

function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
		return "Invalid data";
	} if ((a > 0) && (h > 0)) {
		var result = a*h/2;
		return result;
	}
}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(14, 20);
var triangle3Area = getTriangleArea(20, 40);