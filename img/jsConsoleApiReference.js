window.document.addEventListener('DOMContentLoaded', function(){
	var jCARelem = document.querySelector('table.jCAR')
		,defs = jCARelem.querySelectorAll('td dl');
	for(var i = 0, dL = defs.length; i < dL; i++){
		var dI = defs[i]
			,tI = dI.querySelector('dt')
			,tdI = dI.querySelector('dd');
		tI.addEventListener('click', (function(tdI){return function(ev){
			tdI.style.display = tdI.style.display =='block'?'none':'block';
		}})(tdI),!1);
	}
	if(location.hash =='#expand_all')
		toggleAll();
	if(location.hash =='#collapse_max')
		collapseMax();
},!1);
var toggleAll = function(){
		var jCARelem = document.querySelector('table.jCAR')
			,defs = jCARelem.querySelectorAll('td dl')
			,notAllExpand;
		for(var i = 0, dL = defs.length; i < dL; i++) //check All Expand
			if(defs[i].querySelector('dd').style.display != 'block')
				notAllExpand = 1;
		for(i = 0, dL = defs.length; i < dL; i++)
			defs[i].querySelector('dd').style.display = notAllExpand ?'block':'none';
		location.hash = notAllExpand ?'#expand_all':'#';
	}
	,collapseMax = function(){
		var jCARelem = document.querySelector('table.jCAR')
			,defs = jCARelem.querySelectorAll('td dl')
			,toCollapMax = defs[0].style.display !='none';
		for(i = 0, dL = defs.length; i < dL; i++){
			var dI = defs[i];
			dI.style.display = toCollapMax ?'none':'block';
			dI.parentNode.style.display = toCollapMax ?'none':'table-cell';
			var dI2 = dI.parentNode.parentNode.nextSibling.firstChild.nextSibling //short term
				,def1 = dI2.querySelector('.def1')
				,def2 = dI2.querySelector('.def2');
			if(!def1){ //clone term
				var term = dI.querySelector('dt b').cloneNode(!0);
				term.className ='def1';
				term.innerHTML = term.innerHTML.replace(/(^\w+)|(\w)\w*/g,'$1$2');
				def1 = dI2.firstChild
					? dI2.insertBefore(term, dI2.firstChild)
					: dI2.appendChild(term);
			}
			def1.style.display = toCollapMax ?'block':'none';
			if(def2)
				def2.style.display = toCollapMax ?'none':'block';
		}
		location.hash = toCollapMax ?'#collapse_max':'#';
	};
