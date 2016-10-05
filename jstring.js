// ( 1 ) String.contains()
String.prototype.contains = function(text){
		if(text == '') return true;
		else if(text == null) return false;
		else return this.indexOf(text) !== -1;
}	

// ( 2 ) String.count()
String.prototype.count = function(text){
		if(this.contains(text))
			return this.split(text).length-1;
		else
			return 0;
}

// ( 3 ) String.capitalize()
String.prototype.capitalize = function(){
	    if(this == '') return this;
	    else return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

// ( 4 ) String.trim()
String.prototype.trim = function(){
     	return this.replace(/^\s+|\s+$/g, '');
}

// ( 5 ) String.leftTrim()
String.prototype.leftTrim =function(){
	return this.replace(/^\s+/,'');
}

// ( 6 ) String.rightTrim()
String.prototype.rightTrim=function(){
	return this.replace(/\s+$/,'');
}

// ( 7 ) String.clear()
String.prototype.clear = function(){
     	return this.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
}

// ( 8 ) String.startsWith()
String.prototype.startsWith = function(start) {
	if(start == '') return true;
	else if(start == null || start.length > this.length) return false;
    else return this.substring(0,start.length) == start;
}

// ( 9 ) String.endsWith()
String.prototype.endsWith = function(end) {
	if(end == '') return true;
	else if(end == null || end.length > this.length) return false;
    else return this.indexOf(end, this.length - end.length) !== -1;
}

// ( 10 ) String.insert()
String.prototype.insert = function(text,at) {
	if(at == null || at > this.length)
		at = this.length;
	else if(at < 0)
		at = 0;
	
	return this.substring(0,at)+text+this.substring(at);
}

/*
 * update 2016/10//04
 */
//(11)String.delete()
String.prototype.delete=function(text){
	if(!this.contains(text))
		return this;
	var ary=this.split("");
	for(var i=0;i<ary.length;++i){
		if(ary[i] == text){
			ary.splice(i,1);
		}
	}
	return ary.join("");
}



