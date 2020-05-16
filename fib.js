function fibonacci()
                {
                        var n = parseInt(document.getElementById("N").value);
                        var ansD = document.getElementById("answer");
			if(n == 1)
			ansD.value = 0;
			else
			{
				var a = 0;
				var b = 1;
				ansD.value = "";
				ansD.value+=a.toString()+" ";
				ansD.value+=b.toString()+" ";
				var i,c;
				for(i = 3;i<=n;i++)
				{
					c = a+b;
					a = b;
					b = c;
					ansD.value+=c.toString()+" ";
				}
			}
                }