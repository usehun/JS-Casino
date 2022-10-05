## JS-Casino

(1) <br/>
범위를 정하기 위해 사용자가 최댓값을 입력할 부분입니다.
<br/>
![ex01](https://user-images.githubusercontent.com/88027485/193951559-92a758fc-b10d-4d35-a916-ed312ba19eb1.png)

(2) <br/>
게임을 진행하기 위해 사용자가 숫자를 골라야 합니다. 고른 숫자를 입력하고 플레이 버튼으로 게임을 시작할 수 있도록 하기 위한 부분입니다.
<br/>
<button>태그를 클릭해 <input>태그의 내용을 submit(제출)하기 위해서는 <form>태그 내에 작성해야 합니다.
<br/>
![ex02](https://user-images.githubusercontent.com/88027485/193951561-44d1d03a-fc0f-43a2-a4d3-54535b300ef6.png)

(3) <br/>
사용자에게 게임의 승패를 알리기 위한 부분입니다. <span>태그를 사용해 텍스트를 출력하게 됩니다.
<br/>
![ex03](https://user-images.githubusercontent.com/88027485/193951564-99c6cb1c-c21e-462d-9c84-5a72ce5af262.png)

#### index.js
(1) <br/>
먼저 html 요소들을 js에서 사용할 수 있도록 선언해 줍니다.
<br/>
e.preventDefault();
<br/>
입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기 위한 코드입니다.

(2) <br/>
const guessInput = guessForm.querySelector("input");
<br/>
사용자가 선택한 숫자를 입력하는 요소를 js에서 사용할 수 있게 선언해 줍니다.
<br/>

(3) <br/>
guessInput과 maxNumber이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다.
<br/>
![ex04](https://user-images.githubusercontent.com/88027485/193951566-af925081-440b-48a3-8472-5f991b52bd9c.png)

(4) <br/>
const max = maxNumber.value;
<br/>
maxNumber의 값을 변수 max로 선언해 줍니다.

(5) <br/>
const random = Math.ceil(Math.random() * max);
<br/>
Math.random()함수로 랜덤으로 숫자를 생성합니다. 이때 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
<br/>
필요한 값은 정수 형태의 숫자이기 때문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
<br/>
여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.

(6) <br/>
const userGuess = parseInt(guessInput.value, 10);
<br/>
<input>과 <form>태그를 통해 제출된 값은 문자열형태로 저장됩니다. guessInput.value의 타입은 현재 문자열입니다. 위 코드는 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
<br/>
parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.

(7) <br/>
게임의 결과를 출력하기 위한 코드입니다. html에서 작성해 둔 span태그의 innerHTML프로퍼티를 사용해 출력할 내용을 작성해 줍니다.
<br/>
![ex05](https://user-images.githubusercontent.com/88027485/193951571-9ad53a99-cb14-4bbb-90ab-63fb8b6ab9a8.png)
