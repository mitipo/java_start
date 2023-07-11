var heading = document.querySelector("#heading");
        heading.onclick = function(){
            heading.style.color = "red";
            heading.style.fontSize = "58px";
            heading.style.fontWeight = "800";
        };
        var mitipo = document.querySelector("#mitipo");
        mitipo.onclick = function(){
            mitipo.style.color = "black";
            mitipo.style.fontSize = "42px";
            mitipo.style.fontWeight = "600";
        };
        // 글자색 바꾸기 토글
        var heading = document.querySelector("#heading");
        var isRed = false; //초기 토글 상태는 false입니다.
        heading.onclick = function(){
            // isRed 변수 값에 따라 텍스트 색상을 변경합니다.
            if(isRed){
                heading.style.color = "initial" //원래 색상으로 변경.
                isRed = false;
            }
            else{
                heading.style.color = "red" //빨간색으로 변경.
                isRed = true;
            }
        }
        var mitipo = document.querySelector("#mitipo");
        var isRed = false;
        mitipo.onclick = function(){
            if(isRed){
                mitipo.style.color = "initial"
                isRed = false;
            }
            else{
                mitipo.style.color = "blue"
                isRed = true;
            }
        }
        