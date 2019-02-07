function getFile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);

		}
		}
		htp.send(null);

	}
	getFile("dynamic.json",function(text){
		let data=JSON.parse(text);
		console.log(data);
		profile(data.profile);
		career(data.career);
		education(data.education);
		languages(data.languages);
		skills(data.skills);
	})
	var left=document.querySelector(".leftsub");
	function profile(p){
		var pimg=document.createElement("img");
		pimg.src=p.img;
		left.appendChild(pimg);

		var ph3=document.createElement("h3");
		ph3.textContent=p.name;
		left.appendChild(ph3);

		var proll=document.createElement("p");
		proll.textContent=p.roll;
		left.appendChild(proll);

		var ins=document.createElement("p");
		ins.textContent=p.institute;
		left.appendChild(ins);

		var pdes=document.createElement("p");
		pdes.textContent=p.designation;
		left.appendChild(pdes);

		var pmail=document.createElement("p");
		pmail.textContent=p.mailid;
		left.appendChild(pmail);



	}
	var right=document.querySelector(".rightsub");
	function career(car){
		var hc=document.createElement("h1");
		hc.innerHTML="Resume";
		right.appendChild(hc);

		var cc=document.createElement("h2");
		cc.innerHTML="career objective";
		right.appendChild(cc);

		var chr=document.createElement("hr");
        right.appendChild(chr);

		var cp=document.createElement("p");
		cp.textContent=car.info;
		right.appendChild(cp);
	}
	function education(edu){
		var ed=document.createElement("h2");
		ed.innerHTML="educational details";
		right.appendChild(ed);
		var ehr=document.createElement("hr");
		right.appendChild(ehr);
		var etable=document.createElement("table");
		etable.border="1";
		var tr1="<tr><td>s.no</td><td>degree</td><td>institue</td><td>yop</td></tr>";
		var tr2="";
		for(i=0;i<edu.length;i++){
		
			tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].yop+"</td></tr>";

		}
		etable.innerHTML=tr1+tr2;
		right.appendChild(etable);


	}
	function languages(lng){
		var lh2=document.createElement("h2");
		lh2.innerHTML="languages known";
		right.append(lh2);
		var lhr=document.createElement("hr");
		right.append(lhr);
		var ul=document.createElement("ul");
		var li="";
		for(i=0;i<lng.length;i++){
			li=li+"<li>"+lng[i].lang+"</li>";
		}
		ul.innerHTML=li;
		right.appendChild(ul);


	}
	function skills(skl){
		var sh2=document.createElement("h2");
		sh2.innerHTML="skills";
		right.append(sh2);
		var shr=document.createElement("hr");
		right.append(shr);
		var ul=document.createElement("ul");
		var li="";
		for(i=0;i<skl.length;i++){
			li=li+"<li>"+skl[i].skill+"</li>"
		}
		ul.innerHTML=li;
		right.appendChild(ul);




	}


	


