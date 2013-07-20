String.prototype.contains = function(text){
		if(text == '') return true;
		else if(text == null) return false;
		else return this.indexOf(text) !== -1;
}	
String.prototype.count = function(text){
		if(this.contains(text)){
			return this.split(text).length-1;
		}
		else
			return 0;
}
String.prototype.capitalize = function(){
		if(this == '') return str;
	    else return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.clear = function(){
     	return this.trim().replace(/\s+/g, ' ');
}
String.prototype.endsWith = function(text) {
	if(text == '') return true;
	else if(text == null) return false;
    else return this.indexOf(text, this.length - text.length) !== -1;
}

String.prototype.insert = function(text,at) {
	if(at == null || at > this.length)
		at = this.length;
	else if(at < 0)
		at = 0;
	
	return this.substring(0,at)+text+this.substring(at);
}
