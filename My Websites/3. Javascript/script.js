var clickedTime; var createdTime; var reactionTime;

        function randomizeColor(){
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i =0; i < 6; i++){
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function randomizeSize(min,max,unit){
            var newSize = Math.floor(Math.random() * (max - min+1)) + min;
            return newSize.toString() + unit;
        }

        function alterBox(boxId){

            var box = document.getElementById(boxId);

            var delay = Math.random() * 3000;

            setTimeout(function(){

                    box.style.backgroundColor = randomizeColor();
                    box.style.borderRadius = randomizeSize(0,150,'px');
                    box.style.width = randomizeSize(10,300,'px');
                    box.style.height = randomizeSize(10,300,'px');
                    box.style.left = randomizeSize(0,70,'%');
                    box.style.top = randomizeSize(0,70,'%');

                    document.getElementById('box').style.display = "block";
                    createdTime=Date.now();
                },delay)
        }

        document.getElementById('box').onclick = function(){
                var highScore = document.getElementById('high-score')
                clickedTime = Date.now();
                reactionTime = (clickedTime - createdTime) / 1000;
                document.getElementById('time').innerHTML= reactionTime;
                if(reactionTime < Number(highScore.innerHTML)){
                    highScore.innerHTML = reactionTime;
                }
                else if(Number(highScore.innerHTML) === 0){
                    highScore.innerHTML = reactionTime;
                }
                this.style.display="none";
                alterBox('box');
        }

        alterBox('box');
