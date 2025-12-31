const chapters = [
    {
        id: "intro",
        title: "1. Python 소개 & Hello World",
        description: "프로그래밍의 첫 걸음, 파이썬의 세계에 오신 것을 환영합니다.",
        content: `
            <h3>파이썬이란?</h3>
            <p>파이썬(Python)은 배우기 쉽고 강력한 프로그래밍 언어입니다. 문법이 간결하여 초보자가 배우기에 가장 적합하며, 데이터 분석, 인공지능, 웹 개발 등 다양한 분야에서 사용됩니다.</p>
            
            <h3>Hello World 출력하기</h3>
            <p>모든 프로그래밍 언어 학습의 시작은 'Hello World' 출력입니다. <code>print()</code> 함수를 사용하여 화면에 글자를 출력할 수 있습니다.</p>
            
            <div class="tip-box">
                <strong>Tip:</strong> 코드를 수정하고 '실행' 버튼을 눌러보세요!
            </div>
        `,
        defaultCode: `print("Hello, Python World!")`
    },
    {
        id: "variables",
        title: "2. 변수와 자료형",
        description: "데이터를 저장하는 방법과 다양한 형태의 데이터에 대해 알아봅니다.",
        content: `
            <h3>변수 (Variable)</h3>
            <p>변수는 데이터를 저장하는 상자와 같습니다. 별도의 선언 없이 <code>이름 = 값</code> 형태로 바로 사용할 수 있습니다.</p>
            
            <h3>기본 자료형</h3>
            <ul>
                <li><strong>Integer (정수):</strong> 1, 10, -5</li>
                <li><strong>Float (실수):</strong> 3.14, 2.5</li>
                <li><strong>String (문자열):</strong> "Hello", 'Python'</li>
                <li><strong>Boolean (불리언):</strong> True, False</li>
            </ul>
        `,
        defaultCode: `# 다양한 변수를 만들어봅시다
name = "Alice"
age = 25
height = 165.5
is_student = True

print(name)
print(f"나이: {age}, 키: {height}")`
    },
    {
        id: "operators",
        title: "3. 연산자",
        description: "수학적인 계산과 논리적인 판단을 하는 방법을 배웁니다.",
        content: `
            <h3>산술 연산자</h3>
            <p>더하기(+), 빼기(-), 곱하기(*), 나누기(/) 등 기본적인 수학 연산을 할 수 있습니다.</p>
            <ul>
                <li><code>**</code> : 거듭제곱 (예: 2 ** 3 = 8)</li>
                <li><code>//</code> : 몫 구하기 (예: 7 // 2 = 3)</li>
                <li><code>%</code> : 나머지 구하기 (예: 7 % 2 = 1)</li>
            </ul>
        `,
        defaultCode: `a = 10
b = 3

print(f"{a} + {b} = {a + b}")
print(f"{a} // {b} = {a // b} (몫)")
print(f"{a} % {b} = {a % b} (나머지)")`
    },
    {
        id: "conditions",
        title: "4. 조건문 (If)",
        description: "상황에 따라 다른 동작을 하도록 컴퓨터에게 명령을 내립니다.",
        content: `
            <h3>if - elif - else</h3>
            <p>조건이 참(True)인지 거짓(False)인지에 따라 실행되는 코드가 달라집니다.</p>
            <p>파이썬에서는 <strong>들여쓰기(Indentation)</strong>가 매우 중요합니다! 조건문에 속하는 코드는 반드시 들여쓰기를 해야 합니다.</p>
        `,
        defaultCode: `score = 85

if score >= 90:
    print("성적: A")
elif score >= 80:
    print("성적: B")
else:
    print("성적: C")`
    },
    {
        id: "loops",
        title: "5. 반복문 (Loop)",
        description: "같은 작업을 반복해서 수행해야 할 때 사용합니다.",
        content: `
            <h3>for 반복문</h3>
            <p>리스트 같은 순서가 있는 데이터의 갯수만큼 반복하거나, <code>range()</code> 함수를 이용해 정해진 횟수만큼 반복합니다.</p>
            
            <h3>while 반복문</h3>
            <p>조건이 참인 동안 계속해서 반복합니다.</p>
        `,
        defaultCode: `# 0부터 4까지 반복
print("--- range(5) ---")
for i in range(5):
    print(f"반복 {i}")

# 리스트 반복
print("\n--- 리스트 반복 ---")
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)`
    },
    {
        id: "functions",
        title: "6. 함수 (Function)",
        description: "코드를 재사용하기 좋게 묶어서 이름을 붙입니다.",
        content: `
            <h3>함수 정의하기</h3>
            <p><code>def</code> 키워드를 사용하여 함수를 만듭니다. 함수는 입력을 받아 처리하고 결과를 반환(return)할 수 있습니다.</p>
        `,
        defaultCode: `def greet(name, time):
    return f"Good {time}, {name}!"

# 함수 호출
msg1 = greet("Cheolsu", "Morning")
msg2 = greet("Younghee", "Evening")

print(msg1)
print(msg2)`
    }
];
