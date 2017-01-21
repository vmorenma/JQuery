var ground = [];
var dificultad= '';

$(function(){
	
	$('button#btnprint').click(function(){
		var s="";
		dificultad=$('select').val();
		if (ground!= undefined){
			for (i=0;i<dificultad;i++){
				for (j=0;j<dificultad;j++){
					s+=ground[i][j]+"  ";
				}
				s+="\n";
			}
			console.log(s);				
		}
	});
	$('img#beginbutton').click(function(){
		dificultad=$('select').val();
		console.log(dificultad);
		for (var i=0; i<dificultad;i++){
			ground[i]=[];
			for(var j=0; j<dificultad;j++){
				ground[i][j]=Math.trunc(Math.random()*10);
				if (ground[i][j]>0 && ground[i][j]<9){
					ground[i][j]=-8  
				}else{
					ground[i][j]=-9// -9 MINA NO VISTA 
				}
			}
		}
		//Getting the table
		var $table= $('table#fieldtable');

		//Clearing the table
		$table.children().remove();

		//Adding the images to our table
		for (var i=0;i<dificultad;i++){
			//Creating row with JQuery
			var $row= $("<tr></tr>");

			for(var j=0;j<dificultad;j++){
				//Creating cells with JQuery
				var $cell=$('<td></td>');
				var $img;
				if(ground[i][j]==-8){
					$img=$("<img x='"+i+"'y='"+j+"' class='cuadrado'/>");
				}else{
					$img=$("<img x='"+i+"'y='"+j+"' class='cuadrado_bomba'/>");
				}
				$cell.append($img);
				$row.append($cell);
			}
			$table.append($row);
		}
		$(this).addClass('win');
		$(this).removeClass('begin');
		$(this).addClass('begin');
		$(this).removeClass('win');
	});
	$('body').on('click','img.cuadrado_bomba',function(){
		console.log('CLICK BOMBA!');				
		$(this).addClass('bomba2');
		$(this).removeClass('cuadrado_bomba');

	});

	$('body').on('click','img.cuadrado',function(){
		console.log('Pista');
		console.log('x: '+$(this).attr("x"));
		console.log('y: '+$(this).attr("y"));
		

		var x=$(this).attr("x");
		var y=$(this).attr("y");
		var counter=0;

		if ((x==0 && y==0)||(x==dificultad-1 && y==dificultad-1) ||(x==0 && y==dificultad-1)|| (x==dificultad-1 && y==0)){
			if(x==0 && y==0){
				if(ground[1][0]==-9){
					counter++;
				}
				if(ground[1][1]==-9){
					counter++;
				}
				if(ground[0][1]==-9){
					counter++;
				}
				minehint(counter,this);

			}else if(x==dificultad-1 && y==dificultad-1){
				if(ground[dificultad-1][dificultad-2]==-9){
					counter++;
				}
				if(ground[dificultad-2][dificultad-2]==-9){
					counter++;
				}
				if(ground[dificultad-2][dificultad-1]==-9){
					counter++;
				}
				minehint(counter,this);

			}else if(x==0 && y==dificultad-1){
				if(ground[0][dificultad-2]==-9){
					counter++;
				}
				if(ground[1][dificultad-2]==-9){
					counter++;
				}
				if(ground[1][dificultad-1]==-9){
					counter++;
				}
				minehint(counter,this);

			}else if(x==dificultad-1 && y==0){
				if(ground[dificultad-2][0]==-9){
					counter++;
				}
				if(ground[dificultad-2][1]==-9){
					counter++;
				}
				if(ground[dificultad-1][1]==-9){
					counter++;
				}
				minehint(counter,this);

			}else{
				console.log('Error');
			}
		}else if(x==0||x==dificultad-1||y==0||y==dificultad-1){
			if(x==0){
				if(ground[parseInt(x)][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)+1]==-9){
					counter++;
				}
				if(ground[parseInt(x)][parseInt(y)+1]==-9){
					counter++;
				}
				minehint(counter,this);
			}else if(y==0){
				if(ground[parseInt(x)-1][parseInt(y)]==-9){
					counter++;
				}
				if(ground[parseInt(x)-1][parseInt(y)+1]==-9){
					counter++;
				}
				if(ground[parseInt(x)][parseInt(y)+1]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)+1]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)]==-9){
					counter++;
				}
				minehint(counter,this);

			}else if(x==dificultad-1){
				if(ground[parseInt(x)][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)-1][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)-1][parseInt(y)]==-9){
					counter++;
				}
				if(ground[parseInt(x)-1][parseInt(y)+1]==-9){
					counter++;
				}
				if(ground[parseInt(x)][parseInt(y)+1]==-9){
					counter++;
				}
				minehint(counter,this);

			}else if(y=dificultad-1){
				if(ground[parseInt(x)-1][parseInt(y)]==-9){
					counter++;
				}
				if(ground[parseInt(x)-1][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)-1]==-9){
					counter++;
				}
				if(ground[parseInt(x)+1][parseInt(y)]==-9){
					counter++;
				}
				minehint(counter,this);

			}else{
				console.log('Error');
			}

		}else{
			if(ground[parseInt(x)-1][parseInt(y)-1]==-9){
					counter++;
			}
			if(ground[parseInt(x)-1][parseInt(y)]==-9){
				counter++;
			}
			if(ground[parseInt(x)-1][parseInt(y)+1]==-9){
				counter++;
			}
			if(ground[parseInt(x)][parseInt(y)+1]==-9){
				counter++;
			}
			if(ground[parseInt(x)+1][parseInt(y)+1]==-9){
				counter++;
			}
			if(ground[parseInt(x)+1][parseInt(y)]==-9){
				counter++;
			}
			if(ground[parseInt(x)+1][parseInt(y)-1]==-9){
				counter++;
			}
			if(ground[parseInt(x)][parseInt(y)-1]==-9){
				counter++;
			}
			minehint(counter,this);

		}
	});			
});

function minehint(counter,img){
	if (counter==0){
		$(img).addClass('cero');
		$(img).removeClass('cuadrado');
	}else if(counter==1){
		$(img).addClass('uno');
		$(img).removeClass('cuadrado');
	}else if (counter==2){
		$(img).addClass('dos');
		$(img).removeClass('cuadrado');
	}else if(counter==3){
		$(img).addClass('tres');
		$(img).removeClass('cuadrado');
	}else if(counter==4){
		$(img).addClass('cuatro');
		$(img).removeClass('cuadrado');
	}else if(counter==5){
		$(img).addClass('cinco');
		$(img).removeClass('cuadrado');
	}else if(counter==6){
		$(img).addClass('seis');
		$(img).removeClass('cuadrado');
	}else if(counter==7){
		$(img).addClass('siete');
		$(img).removeClass('cuadrado');
	}else if(counter==8){
		$(img).addClass('ocho');
		$(img).removeClass('cuadrado');
	}
}