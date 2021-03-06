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
	
};
stack.prototype.size=function(){

	return this.array.length;
};
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
};
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
	};
};
stack.prototype.addProperty=function(id,name,value)
{
	try{
		var item=this.get(id);
		item[name]=value;
	}catch(e)
	{
	 console.log(e);	
	}

};
stack.prototype.getProperty=function(id,name)
{
	try{
		var item=this.get(id);
		return item[name];
	}catch(e){
		console.log(e);
	}
};
stack.prototype.getPropertyByName=function(name,item)
{
	var id=this.getByName(name).id;
	return this.getProperty(id,item);
};
stack.prototype.addPropertyByName=function(name,item,value)
{
	var id=this.getByName(name).id;
	this.addProperty(id,item,value);
};
stack.prototype.prune=function(){
	var temparr=[];
	this.each(function(arr){
		if(arr && arr.name)
		{
			temparr[temparr.length]=arr;
		}
		
	});
	this.array=temparr;
	return true;
};
//Todo: Finish These Functions.  They are just Skeletal right now.
stack.prototype.getByPropertyName=function(name){
	
};
stack.prototype.toJSON=function(){
	return JSON.parse(JSON.stringify(this.array));
};
stack.prototype.toString=function(){
	
};
stack.prototype.toArray=function(){
	
};
stack.prototype.join=function(delimiter)
{
	
};
stack.prototype.first=function(){
	
};
stack.prototype.last=function(){
	
};
stack.prototype.without=function(values){
	
};