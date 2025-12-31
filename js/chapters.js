const chapters = [
    {
        id: "sec1_intro",
        title: "섹션 1. 소개 & 환경설정",
        description: "파이썬의 세계에 오신 것을 환영합니다! 개발 환경을 설정하고 첫 코드를 실행해봅시다.",
        content: `
            <h3>1. 소개</h3>
            <p>파이썬은 전 세계적으로 가장 인기 있는 프로그래밍 언어 중 하나입니다. 데이터 분석, 인공지능, 웹 개발, 자동화 등 무궁무진한 분야에서 활용됩니다.</p>
            
            <h3>2. 환경설정</h3>
            <p>본 사이트에서는 <strong>Pyodide</strong>를 통해 브라우저에서 즉시 파이썬을 실행할 수 있습니다.</p>
            <div class="note-box">
                로컬 개발을 원하신다면 <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>와 <a href="https://www.python.org/" target="_blank">Python 공식 설치 파일</a>을 이용하세요.
            </div>
            
            <div class="tip-box">
                <strong>Tip:</strong> 우측의 코드 에디터에서 자유롭게 코드를 작성하고 키보드의 <code>Ctrl</code> + <code>Enter</code>를 눌러 빠르게 실행해보세요.
            </div>
        `,
        defaultCode: `print("Hello, Python World!")
print("지금부터 파이썬 학습을 시작합니다!")`
    },
    {
        id: "sec2_types",
        title: "섹션 2. 자료형",
        description: "프로그래밍의 기초인 숫자, 문자열, 불리언 자료형과 변수에 대해 배웁니다.",
        content: `
            <h3>3-5. 다양한 자료형</h3>
            <p>파이썬이 데이터를 다루는 방식입니다.</p>
            <ul>
                <li><strong>숫자형:</strong> 정수(int), 실수(float)</li>
                <li><strong>문자열(String):</strong> 큰따옴표("")나 작은따옴표('')로 감싼 글자</li>
                <li><strong>불리언(Boolean):</strong> 참(True)과 거짓(False)</li>
            </ul>

            <h3>6. 변수 (Variable)</h3>
            <p>값을 저장하는 공간입니다. <code>이름 = 값</code> 형태로 사용합니다.</p>
            <div class="tip-box">
                변수 이름은 의미 있게 짓는 것이 좋습니다. (예: <code>name</code>, <code>score</code>)
            </div>
            
            <h3>7. 주석 (Comment)</h3>
            <p><code>#</code> 뒤에 적힌 내용은 컴퓨터가 무시합니다. 코드 설명을 적을 때 유용합니다.</p>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #1</h4>
                <p>변수 <code>station</code>을 이용하여 다음 문장을 출력하세요.<br>
                "사당행 열차가 들어오고 있습니다."<br>
                "신도림행 열차가 들어오고 있습니다."</p>
            </div>
        `,
        defaultCode: `# 퀴즈 #1 풀이
station = "사당"
print(station + "행 열차가 들어오고 있습니다.")

station = "신도림"
print(station + "행 열차가 들어오고 있습니다.")`
    },
    {
        id: "sec3_operators",
        title: "섹션 3. 연산자",
        description: "수식을 계산하고 랜덤한 숫자를 뽑는 방법을 알아봅니다.",
        content: `
            <h3>9-10. 연산자와 간단한 수식</h3>
            <p>더하기(+), 빼기(-), 곱하기(*), 나누기(/) 등을 사용할 수 있습니다.</p>
            <pre><code>print(10 // 3) # 몫: 3
print(10 % 3)  # 나머지: 1</code></pre>

            <h3>11. 숫자 처리 함수</h3>
            <p><code>abs()</code>(절대값), <code>pow()</code>(제곱), <code>max()</code>(최대값), <code>min()</code>(최소값) 등 유용한 함수들이 있습니다.</p>

            <h3>12. 랜덤 함수</h3>
            <p><code>random</code> 모듈을 사용하면 난수(무작위 수)를 생성할 수 있습니다.</p>
            <div class="warning-box">
                <strong>주의:</strong> 랜덤 함수를 쓰려면 <code>from random import *</code>를 먼저 선언해야 합니다.
            </div>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #2</h4>
                <p>매월 4일-28일 사이의 날짜 중 하루를 스터디 날짜로 선정하는 코드를 작성하세요.<br>
                (조건: 랜덤으로 날짜 생성)</p>
            </div>
        `,
        defaultCode: `from random import *

# 4일부터 28일 사이의 랜덤한 정수 생성
date = randint(4, 28)
print("오프라인 스터디 모임 날짜는 매월 " + str(date) + "일로 선정되었습니다.")`
    },
    {
        id: "sec4_strings",
        title: "섹션 4. 문자열 처리",
        description: "문자열을 자르고, 합치고, 검색하는 강력한 기능들을 배웁니다.",
        content: `
            <h3>15. 슬라이싱 (Slicing)</h3>
            <p>문자열의 특정 부분만 잘라낼 때 사용합니다. <code>변수명[시작:끝]</code> 형태입니다.</p>
            <div class="tip-box">
                <strong>Tip:</strong> 파이썬의 인덱스는 0부터 시작합니다! [0]이 첫 번째 글자입니다.
            </div>

            <h3>16. 문자열 처리 함수</h3>
            <p><code>lower()</code>(소문자), <code>upper()</code>(대문자), <code>replace()</code>(문자교체), <code>count()</code>(갯수세기) 등이 자주 쓰입니다.</p>

            <h3>18. 탈출 문자 (Escape Character)</h3>
            <p>문자열 안에서 줄바꿈을 하거나 따옴표를 출력하고 싶을 때 사용합니다.</p>
            <ul>
                <li><code>\\n</code> : 줄바꿈</li>
                <li><code>\\"</code> : 큰따옴표 출력</li>
            </ul>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #3</h4>
                <p>사이트별 비밀번호를 만들어주는 프로그램을 작성하세요.<br>
                예) http://naver.com -> 비밀번호 : nav51!</p>
            </div>
        `,
        defaultCode: `url = "http://naver.com"
my_str = url.replace("http://", "") # naver.com
my_str = my_str[:my_str.index(".")] # naver (점 앞까지만)

password = my_str[:3] + str(len(my_str)) + str(my_str.count("e")) + "!"
print("{0} 의 비밀번호는 {1} 입니다.".format(url, password))`
    },
    {
        id: "sec5_datastructures",
        title: "섹션 5. 자료구조",
        description: "리스트, 사전, 튜플, 세트 등 데이터를 효율적으로 관리하는 방법입니다.",
        content: `
            <h3>20. 리스트 (List) []</h3>
            <p>순서가 있는 데이터의 집합입니다. 값의 변경이 가능합니다.</p>

            <h3>21. 사전 (Dictionary) {}</h3>
            <p>Key와 Value의 쌍으로 이루어집니다. Key를 통해 Value에 접근합니다.</p>
            
            <h3>22. 튜플 (Tuple) ()</h3>
            <p>리스트와 비슷하지만 값을 변경하거나 추가할 수 없습니다. 대신 속도가 빠릅니다.</p>
            
            <h3>23. 세트 (Set) {}</h3>
            <p>중복을 허용하지 않고, 순서가 없는 집합입니다. 교집합(&), 합집합(|) 등을 구할 때 유용합니다.</p>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #4</h4>
                <p>댓글 이벤트 당첨자 추첨 프로그램을 작성하세요.<br>
                (1명은 치킨, 3명은 커피 쿠폰. 중복 당첨 불가)</p>
            </div>
        `,
        defaultCode: `from random import *
users = range(1, 21) # 1부터 20까지
users = list(users)

shuffle(users) # 섞기
winners = sample(users, 4) # 4명 뽑기

print(" -- 당첨자 발표 -- ")
print("치킨 당첨자 : {0}".format(winners[0]))
print("커피 당첨자 : {0}".format(winners[1:]))
print(" -- 축하합니다 -- ")`
    },
    {
        id: "sec6_control",
        title: "섹션 6. 제어문",
        description: "조건에 따라 분기하거나 반복하는 로직을 구현합니다.",
        content: `
            <h3>26. if (조건문)</h3>
            <p>조건이 참(True)일 때만 실행합니다.</p>
            <div class="warning-box">
                <strong>주의:</strong> 파이썬에서는 <strong>들여쓰기(Indentation)</strong>가 문법입니다. 탭이나 공백으로 줄을 맞추지 않으면 에러가 납니다.
            </div>

            <h3>27-28. for / while (반복문)</h3>
            <p>정해진 횟수만큼 반복할 때는 <code>for</code>, 특정 조건이 만족하는 동안은 <code>while</code>을 주로 씁니다.</p>

            <h3>30. 한 줄 for</h3>
            <p><code>[i+1 for i in students]</code> 처럼 리스트 안에 반복문을 넣어 간결하게 작성할 수 있습니다.</p>

            <h3>31. (New) 구조적 패턴 매칭 (match-case)</h3>
            <p>파이썬 3.10부터 도입된 기능으로, 여러 조건을 직관적으로 처리할 수 있습니다. (다른 언어의 switch문과 비슷합니다)</p>
            <div class="tip-box">
                <strong>Tip:</strong> <code>if-elif-else</code>가 복잡해질 때 <code>match-case</code>를 쓰면 코드가 훨씬 깔끔해집니다.
            </div>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #5</h4>
                <p>50명의 승객을 매칭하는 프로그램을 작성하세요.<br>
                조건: 소요시간 5~50분 난수 생성, 5~15분 사이인 승객만 매칭 성공</p>
            </div>
        `,
        defaultCode: `from random import *

# match-case 예제 (HTTP 상태 코드 처리)
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"

print("404 Error:", http_error(404))
print("418 Error:", http_error(418))

print("-" * 20)

cnt = 0 # 총 탑승 승객 수
for i in range(1, 51): # 1 ~ 50명
    time = randint(5, 50) # 소요시간 5~50분
    if 5 <= time <= 15: # 매칭 성공
        print("[O] {0}번째 손님 (소요시간 : {1}분)".format(i, time))
        cnt += 1
    else: # 매칭 실패
        print("[ ] {0}번째 손님 (소요시간 : {1}분)".format(i, time))`
    },
    {
        id: "sec7_functions",
        title: "섹션 7. 함수",
        description: "코드를 재사용 가능한 블록으로 만듭니다.",
        content: `
            <h3>함수란?</h3>
            <p>자주 사용하는 코드를 묶어서 이름을 붙인 것입니다. <code>def 함수이름():</code> 으로 정의합니다.</p>

            <h3>32-33. 전달값과 반환값</h3>
            <p>함수는 인자(Parameter)를 받고, 처리 결과를 <code>return</code>을 통해 돌려줄 수 있습니다.</p>

            <h3>37. 지역변수와 전역변수</h3>
            <p>함수 내에서 선언된 변수는 함수 밖에서 쓸 수 없습니다(지역변수). 프로그램 전체에서 쓰려면 <code>global</code> 키워드를 사용해야 합니다.</p>

            <h3>38. (New) 독스트링과 타입 힌트</h3>
            <p>전문적인 코드를 작성하려면 함수에 설명을 달고(Docstring), 인자의 타입을 명시(Type Hints)하는 것이 좋습니다.</p>
            <div class="tip-box">
                <strong>Tip:</strong> <code>def func(name: str) -> str:</code> 처럼 타입을 지정해주면 코드를 이해하기 훨씬 쉬워집니다.
            </div>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #6</h4>
                <p>표준 체중을 구하는 프로그램을 작성하세요.<br>
                남자: 키(m) x 키(m) x 22<br>
                여자: 키(m) x 키(m) x 21</p>
            </div>
        `,
        defaultCode: `def std_weight(height, gender):
    """
    키와 성별을 받아 표준 체중을 계산하는 함수입니다.
    :param height: 키 (cm 단위)
    :param gender: 성별 ("남자" 또는 "여자")
    :return: 표준 체중 (float)
    """
    if gender == "남자":
        return height * height * 22
    else:
        return height * height * 21

# 타입 힌트 예제
def greeting(name: str) -> str:
    return "Hello, " + name

print(greeting("Python User"))

height = 175 # cm
gender = "남자"
weight = round(std_weight(height / 100, gender), 2)
print("키 {0}cm {1}의 표준 체중은 {2}kg 입니다.".format(height, gender, weight))`
    },
    {
        id: "sec8_io",
        title: "섹션 8. 입출력",
        description: "사용자 입력을 받고, 파일에 데이터를 저장하고 읽어옵니다.",
        content: `
            <h3>39-40. 표준 입출력</h3>
            <p><code>input("질문")</code>으로 사용자 입력을 받을 수 있습니다.</p>
            <div class="warning-box">
                <code>input()</code>으로 받은 값은 항상 <strong>문자열(String)</strong>입니다. 숫자로 쓰려면 <code>int()</code>로 변환해야 합니다.
            </div>

            <h3>41. 파일 입출력</h3>
            <p><code>open()</code> 함수로 파일을 열고, <code>write()</code>, <code>read()</code>를 사용합니다.</p>
            
            <div class="tip-box">
                <strong>참고:</strong> 이 웹사이트는 브라우저 환경이므로 실제 컴퓨터에 파일이 저장되지는 않습니다(가상 파일 시스템 사용). 새로고침하면 파일이 사라집니다.
            </div>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #7</h4>
                <p>매주 1회 작성하는 보고서 파일을 만드는 프로그램을 작성하세요.<br>
                파일명 예: 1주차.txt, 2주차.txt ...</p>
            </div>
        `,
        defaultCode: `# 1주차부터 3주차까지 보고서 파일 생성 예제
for i in range(1, 4):
    with open(str(i) + "주차.txt", "w", encoding="utf8") as report_file:
        report_file.write("- {0} 주차 주간보고 -".format(i))
        report_file.write("\\n부서 :")
        report_file.write("\\n이름 :")
        report_file.write("\\n업무 요약 :")

# 생성된 파일 읽어보기
print("--- 1주차.txt 내용 ---")
with open("1주차.txt", "r", encoding="utf8") as f:
    print(f.read())`
    },
    {
        id: "sec9_class",
        title: "섹션 9. 클래스",
        description: "객체 지향 프로그래밍(OOP)으로 복잡한 프로그램을 구조화합니다.",
        content: `
            <h3>45. 클래스와 객체</h3>
            <p>클래스는 설계도, 객체는 그 설계도로 만든 제품입니다. 예를 들어 '스타크래프트 유닛'이라는 클래스로 '마린1', '마린2' 객체를 만들 수 있습니다.</p>

            <h3>46. __init__ (생성자)</h3>
            <p>객체가 생성될 때 자동으로 호출되는 함수입니다. 멤버 변수를 초기화할 때 사용합니다.</p>

            <h3>49-50. 상속 (Inheritance)</h3>
            <p>기존 클래스의 기능을 물려받아 새로운 클래스를 만드는 것입니다. 코드 중복을 줄일 수 있습니다.</p>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #8</h4>
                <p>부동산 프로그램 작성 (매물 정보 표시)</p>
            </div>
        `,
        defaultCode: `class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print("{0} 유닛이 생성되었습니다.".format(name))

    def move(self, location):
        print("{0} : {1} 방향으로 이동합니다. [속도 {2}]"\
            .format(self.name, location, self.speed))

class Marine(Unit):
    def __init__(self):
        Unit.__init__(self, "마린", 40, 1)

    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print("{0} : 스팀팩을 사용합니다. (HP 10 감소)".format(self.name))
        else:
            print("{0} : 체력이 부족합니다.".format(self.name))

# 유닛 생성 및 이동
marine1 = Marine()
marine1.move("5시")
marine1.stimpack()`
    },
    {
        id: "sec10_exception",
        title: "섹션 10. 예외처리",
        description: "에러가 발생했을 때 프로그램이 종료되지 않도록 처리합니다.",
        content: `
            <h3>57. 예외처리 (try-except)</h3>
            <p>프로그램 실행 중에 발생하는 에러를 '예외'라고 합니다. 이를 방치하면 프로그램이 죽어버리지만, <code>try-except</code>를 쓰면 우아하게 대처할 수 있습니다.</p>
            
            <h3>60. finally</h3>
            <p>에러 발생 여부와 상관없이 무조건 실행되는 블록입니다. 주로 파일 닫기나 자원 해제에 쓰입니다.</p>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #9</h4>
                <p>대기 손님의 치킨 요리 시간을 줄이는 시스템에서, 재료 소진 시 에러를 발생시키는 코드를 작성하세요.</p>
            </div>
        `,
        defaultCode: `class SoldOutError(Exception):
    pass

chicken = 10
waiting = 1
while True:
    try:
        print("[남은 치킨 : {0}]".format(chicken))
        order = int(input("치킨 몇 마리 주문하시겠습니까?"))
        if order > chicken:
            print("재료가 부족합니다.")
        elif order <= 0:
            raise ValueError
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다." \
                .format(waiting, order))
            waiting += 1
            chicken -= order
        
        if chicken == 0:
            raise SoldOutError
    except ValueError:
        print("잘못된 값을 입력하였습니다.")
    except SoldOutError:
        print("재료가 소진되어 조기를 마감합니다.")
        break
    else:
        # 무한 루프 방지를 위해 테스트용 break
        if waiting > 3: break`
    },
    {
        id: "sec11_modules",
        title: "섹션 11. 모듈과 패키지",
        description: "코드를 모듈 단위로 나누고, 외부 패키지를 설치하여 사용합니다.",
        content: `
            <h3>62. 모듈 (Module)</h3>
            <p>필요한 함수나 변수, 클래스들을 모아놓은 파이썬 파일(.py)입니다. <code>import 모듈이름</code>으로 가져다 쓸 수 있습니다.</p>

            <h3>63. 패키지 (Package)</h3>
            <p>여러 모듈을 모아놓은 폴더입니다.</p>
            <div class="tip-box">
                <strong>Tip:</strong> <code>pip install 패키지명</code> 명령어로 전 세계 개발자들이 만든 유용한 패키지를 설치해서 쓸 수 있습니다.
            </div>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #10</h4>
                <p>프로젝트 내에 byme.py 모듈을 만들고 시그니처를 출력하는 함수를 정의하고 사용해보세요.</p>
            </div>
        `,
        defaultCode: `# 내장 함수 예제
print(dir()) # 사용할 수 있는 목록 표시

import random
print(dir()) # random 모듈 추가 확인

# 외장 함수 (glob 예제) - 파일 목록 조회
import glob
print(glob.glob("*.txt"))`
    },
    {
        id: "sec12_outro",
        title: "섹션 12. 끝 (Outro)",
        description: "파이썬 기본편 학습을 마쳤습니다. 축하합니다!",
        content: `
            <h3>71. Outro</h3>
            <p>수고하셨습니다! 이제 여러분은 파이썬의 기초를 모두 닦으셨습니다.</p>
            <p>앞으로는 웹 개발(Django, Flask), 데이터 분석(Pandas), 업무 자동화 등 본인이 원하는 분야를 정해서 더 깊이 있게 학습해보세요.</p>
            <div class="tip-box">
                <strong>도전 과제:</strong> 배운 내용을 바탕으로 나만의 작은 프로젝트(계산기, 크롤러 등)를 시작해보세요!
            </div>
            <p style="text-align: center; margin-top: 2rem; font-weight: bold; font-size: 1.2rem;">"나도 코딩, 너도 코딩, 우리 모두 프로그래머!"</p>
        `,
        defaultCode: `print("축하합니다! 파이썬 기본 과정을 완주하셨습니다.")
print("Happy Coding!")`
    },
    {
        id: "sec14_stdlib",
        title: "섹션 14. 파이썬 표준 라이브러리 투어",
        description: "파이썬 공식 문서에서 추천하는 유용한 내장 라이브러리들을 빠르게 훑어봅니다.",
        content: `
            <h3>1. 수학과 통계 (math, statistics)</h3>
            <p>복잡한 계산이나 평균, 중앙값 등을 쉽게 구할 수 있습니다.</p>

            <h3>2. 날짜와 시간 (datetime)</h3>
            <p>오늘 날짜를 구하거나, 100일 뒤가 며칠인지 계산할 때 필수적입니다.</p>

            <h3>3. 데이터 압축 (zlib, gzip)</h3>
            <p>데이터를 압축하거나 해제하는 기능을 제공합니다.</p>
            
            <h3>4. 성능 측정 (timeit)</h3>
            <p>내 코드가 얼마나 빠르게 실행되는지 시간을 측정해줍니다.</p>

            <div class="tip-box">
                <strong>Tip:</strong> 파이썬은 "Batteries Included"라는 철학을 가지고 있어, 설치하자마자 바로 쓸 수 있는 강력한 도구들이 정말 많습니다.
            </div>

            <div class="quiz-box">
                <h4>🧠 퀴즈 #Standard</h4>
                <p><code>statistics</code> 모듈을 사용하여 <code>[10, 20, 30, 40, 50]</code>의 평균과 표준편차를 구해보세요.</p>
            </div>
        `,
        defaultCode: `import math
import statistics
from datetime import date, timedelta

# 1. 수학 예제
print(f"파이(pi) 값: {math.pi}")
print(f"루트 16: {math.sqrt(16)}")

# 2. 통계 예제
data = [2.75, 1.75, 1.25, 0.25, 0.5, 1.25, 3.5]
print(f"평균: {statistics.mean(data)}")
print(f"중앙값: {statistics.median(data)}")

# 3. 날짜 예제
today = date.today()
hundred_days_later = today + timedelta(days=100)
print(f"오늘: {today}")
print(f"100일 뒤: {hundred_days_later}")`
    }
];

