var starr=exports;
var sys=require('sys');
var stack=starr.stack=function(){
	this.array=[];
};
stack.prototype.each=function(fnc){
	for (var i = 0; i < this.array.length; i++) {
	    var r = fnc(this.array[i], i);
	    if (r === false) {
	      return;
	    }
	  }
};
stack.prototype.add=function(obj){
	this.prune();
	var id=this.array.length;
	if(obj.name)
	{
	}
	else
	{
		obj.name=this.array.length;
	}
	if(this.exists(obj.name))
	{
		console.log("Object Exists");
		this.array[this.getByName(obj.name).id]=obj;
		return this.exists(obj.name);
	}
	else
	{
		this.array[id]=obj;
		return id;
	}
	return false;
};
stack.prototype.remove=function(name){
	console.log(this.exists(name))
	if(this.exists(name))
	{
		this.array[this.getByName(name).id]=null;
	}
	this.prune();
	return true;
};
stack.prototype.size=function(){

	return this.array.length;
}
stack.prototype.exists=function(name){
	var result=false;
	this.each(function(obj, id){
		if(obj && obj.name==name)
			result=true;
			return result;
	});
	return result;
};
stack.prototype.get=function(id){
	return this.array[id];
}
stack.prototype.getByName=function(name){
	if(this.exists(name))
	{
		var result=false;
		this.each(function(obj, id){
			if(obj && obj.name==name)
				result=obj;
				result.id=id;
				return result;
		});
		return result;
	}
}
stack.prototype.prune=function(){
	var temparr=[];
	this.each(function(arr){
		if(arr && arr.name)
		{
			temparr[temparr.length]=arr;
		}
		
	});
	console.log("size: "+this.size());
	this.array=temparr;
	return true;
}