let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let updatedList=touristSpots.map((element)=>{
	let words=element.split(" ")
	let updatedString=words.reduce((prev,curr,index)=>{
		if(curr!="The" && curr!="an" && curr!="a"){
			return prev+" "+curr;
		}
		return prev;
	},"")
	return updatedString;
});
let mp={};
updatedList.forEach((element,index)=>{
	mp[element]=touristSpots[index];
});
updatedList.sort();
let finalAns=updatedList.map((element)=>{
	return mp[element];
})
console.log(finalAns);