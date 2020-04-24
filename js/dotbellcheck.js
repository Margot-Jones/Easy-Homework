let i=[];
		let og = document.getElementsByClassName('oran/grey');
		let click = document.getElementsByClassName('click');
		let clickedeEl;
		for(let j = 0 ; click.length>j ; j++) {
      click[j].setAttribute('id',j);
      i[j]=0; 
    }


		function clickMe(e){
 			
    		clickedeEl=document.getElementById(e.id).getAttribute('id');
			el=clickedeEl;
    		i[el]++;
    		if(i[el]==3) i[el]=0;
    		if (i[el]==0){
    			click[el].children[2].style.display = 'none';
    			click[el].children[1].style.display = 'none';
          		click[el].children[0].style.display = 'block';
              if(og[el]!=undefined) og[el].style.color = 'black';
    		}
    		if (i[el]==1){
    			click[el].children[0].style.display = 'none';
    			click[el].children[2].style.display = 'none';
          		click[el].children[1].style.display = 'block';
          		if(og[el]!=undefined) og[el].style.color = 'orange';
    		}
    		if (i[el]==2){
    			click[el].children[1].style.display = 'none';
    			click[el].children[0].style.display = 'none';
          		click[el].children[2].style.display = 'block';
          		if(og[el]!=undefined) og[el].style.color = 'green';
    		}
    	
		}
