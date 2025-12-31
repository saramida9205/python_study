const chapters = [
    {
        id: "install",
        title: "0. 파이썬 설치 및 환경 설정",
        description: "파이썬 개발을 시작하기 위한 준비 과정입니다.",
        content: `
            <h3>1. 파이썬 설치하기</h3>
            <p>공식 홈페이지(<a href="https://www.python.org" target="_blank" style="color:var(--accent-color)">python.org</a>)에서 운영체제에 맞는 최신 버전을 다운로드하여 설치합니다.</p>
            <div class="tip-box">
                <strong>Tip:</strong> 설치 시 <code>Add Python to PATH</code> 옵션을 반드시 체크해야 터미널에서 파이썬을 쉽게 실행할 수 있습니다.
            </div>

            <h3>2. IDE(통합 개발 환경) 설치</h3>
            <p>코드를 편리하게 작성하기 위해 <strong>VS Code(Visual Studio Code)</strong> 사용을 추천합니다. 무료이며 강력한 기능을 제공합니다.</p>
            <ul>
                <li>VS Code 설치 후 'Python' 확장 프로그램(Extension)을 설치하세요.</li>
            </ul>

            <h3>3. 로컬에서 실행하기</h3>
            <p>터미널(CMD)을 열고 <code>python --version</code>을 입력하여 설치가 잘 되었는지 확인해보세요.</p>
        `,
        defaultCode: `# 이 사이트에서는 별도의 설치 없이
# 브라우저에서 바로 코드를 실행할 수 있습니다.
print("설치 없이 바로 실행되는 파이썬!")`
    },
    {
        id: "execution_principle",
        title: "0-1. 파이썬의 실행 원리",
        description: "컴퓨터가 파이썬 코드를 이해하고 실행하는 과정을 알아봅니다.",
        content: `
            <h3>인터프리터 언어 (Interpreter Language)</h3>
            <p>파이썬은 <strong>인터프리터 언어</strong>입니다. 코드를 한 줄씩 읽어가며 즉시 실행하는 방식입니다. 반면 C나 Java 같은 컴파일 언어는 실행 전 전체 코드를 기계어 파일로 번역하는 과정이 필요합니다.</p>

            <h3>실행 과정 확인</h3>
            <ol>
                <li><strong>소스 코드 (.py):</strong> 사람이 작성한 코드</li>
                <li><strong>바이트 코드 (.pyc):</strong> 파이썬이 이해하기 쉬운 중간 형태 (컴파일)</li>
                <li><strong>PVM (Python Virtual Machine):</strong> 바이트 코드를 운영체제에 맞춰 실행</li>
            </ol>
            
            <p>이 웹사이트는 <strong>Pyodide</strong>라는 기술을 사용하여, 웹 브라우저 안에서 파이썬 가상 머신을 돌리는 원리로 작동합니다.</p>
        `,
        defaultCode: `import sys

# 현재 실행 중인 파이썬 버전 확인
print("Python Version Info:")
print(sys.version)

# 인터프리터가 한 줄씩 실행함을 증명
print("첫 번째 줄 실행")
print("두 번째 줄 실행")`
    },
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
    },
    {
        id: "exceptions",
        title: "7. 예외 처리 (Try/Except)",
        description: "프로그램 실행 중 발생하는 오류(에러)를 우아하게 처리하는 방법입니다.",
        content: `
            <h3>Try - Except 구문</h3>
            <p>에러가 발생할 수 있는 코드를 <code>try</code> 블록에 넣고, 에러 발생 시 실행할 코드를 <code>except</code> 블록에 넣습니다. 이를 통해 프로그램이 강제 종료되는 것을 막을 수 있습니다.</p>

            <h3>예시</h3>
            <pre><code>try:
    # 에러가 발생할 수 있는 코드
    result = 10 / 0
except ZeroDivisionError:
    # 에러 발생 시 실행됨
    print("0으로 나눌 수 없습니다.")
</code></pre>
        `,
        defaultCode: `try:
    numbers = [1, 2, 3]
    # 존재하지 않는 인덱스 접근 (IndexError 발생)
    print(numbers[5])
except IndexError:
    print("오류 발생: 리스트의 범위를 벗어났습니다!")
except Exception as e:
    print(f"알 수 없는 오류: {e}")
finally:
    print("이 코드는 성공/실패 여부와 상관없이 항상 실행됩니다.")`
    },
    {
        id: "oop",
        title: "8. 객체 지향 프로그래밍 (Class)",
        description: "현실 세계의 사물을 코드로 모델링하는 객체 지향(OOP)의 기초를 배웁니다.",
        content: `
            <h3>클래스(Class)와 객체(Object)</h3>
            <p><strong>클래스</strong>는 붕어빵 틀(설계도)이고, <strong>객체</strong>는 그 틀로 찍어낸 붕어빵(실체)입니다.</p>
            
            <h3>__init__ 생성자</h3>
            <p>객체가 생성될 때 처음 실행되는 함수로, 객체의 초기 상태(속성)를 설정합니다.</p>
        `,
        defaultCode: `class Dog:
    # 생성자: 강아지의 이름과 나이를 설정
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # 메서드: 강아지의 행동
    def bark(self):
        return f"{self.name}가 멍멍 짖습니다!"

# 객체 생성 (인스턴스화)
my_dog = Dog("바둑이", 3)
your_dog = Dog("초코", 2)

print(my_dog.bark())
print(f"{your_dog.name}는 {your_dog.age}살입니다.")`
    },
    {
        id: "modules",
        title: "9. 모듈과 패키지",
        description: "남이 만들어둔 유용한 기능을 가져와서 사용하는 방법을 배웁니다.",
        content: `
            <h3>Import 사용하기</h3>
            <p>파이썬은 강력한 표준 라이브러리를 제공합니다. <code>import</code> 키워드를 사용해 필요한 모듈을 불러올 수 있습니다.</p>

            <ul>
                <li><code>math</code>: 수학 관련 함수</li>
                <li><code>random</code>: 난수 생성</li>
                <li><code>datetime</code>: 날짜와 시간</li>
            </ul>
        `,
        defaultCode: `import math
import random
from datetime import datetime

print(f"원주율(PI): {math.pi}")
print(f"루트 16: {math.sqrt(16)}")

print(f"주사위 숫자: {random.randint(1, 6)}")

now = datetime.now()
print(f"현재 시간: {now.year}년 {now.month}월 {now.day}일")`
    },
    {
        id: "advanced",
        title: "10. 고급 기능 (Lambda & Comprehension)",
        description: "파이썬을 더 파이썬답게(Pythonic) 사용하는 고급 문법입니다.",
        content: `
            <h3>람다(Lambda) 함수</h3>
            <p>이름 없는 간단한 함수를 한 줄로 만들 때 사용합니다.</p>
            
            <h3>리스트 컴프리헨션 (List Comprehension)</h3>
            <p>반복문과 조건문을 사용해 리스트를 아주 간결하게 만드는 파이썬만의 강력한 기능입니다.</p>
        `,
        defaultCode: `# Lambda 예제
add = lambda x, y: x + y
print(f"Lambda 덧셈: {add(5, 3)}")

# List Comprehension 예제
# 1부터 10까지 숫자 중 짝수만 제곱해서 리스트 만들기
evens_squared = [x**2 for x in range(1, 11) if x % 2 == 0]

print("짝수의 제곱 리스트:")
print(evens_squared)`
    }
];
