# NETWORK
## TCP/IP 계층모델

1. Newtwork Interface
	- Hardware - Lan 카드
		(Network Interface Card, 네트워크 어댑터)
	- Ethernet (선꼽는것)
	- ADSL
2. Internet
	- 목적IP까지 data를 전송
3. Transport
	- 목적지 프로세스: 실행되고 있는 프로그램에 전송
	- TCP - UDP
4. Application
	- 눈에 보이게 유저에게 서비스를 제공
---

## ARP (Address Resolution Protocol)
: IP address(추상적) -> Mac address(기기주소) 전환하는 것.
- 상대의 맥주소를 알고 있어야 데이터 전송이 가능.
- 브로드캐스트를 통해 본인 IP가 아닌 host는 무시하고,
	해당하는 IP가 본인의 맥주소를 라우터를 통해 요청한 host에 전송.




*Q. 그럼 왜 맥주소만 쓰지 않을까?* .

IP: 최종 목적지의 주소
Mac address: 근처에 있는 하드웨어의 주소 (최종목적지 다음에 보낼)
따라서, 한번 생긴 맥주소는 한번 쓰고 버림.


### DNS (Domain Name System)
: 매칭된 Ip주소로 전환


### DNS Server
:도메인과 Ip주소를 매칭하여 매핑시켜놓은 것

1. Cache
	- 유저가 입력했었던 도메인, IP내역을 가지고 있어 바로 반환
2. Contents
	- 새로이 입력된 도메인, IP내역을 찾는 서버

---

### NAT (Network Address Translation)
: 호스트 간 데이터 공유 시, 공유기에서 Port를 기준으로
  Private network <-> Public Network 전환시켜줌.

(private은 public으로 접근 불가하기때문에, public으로 전환해야함)


### NAPT (Network Address Port Translation)
: 만약 포트가 동일한 host가 존재한다면, 포트를 변화시켜 찾아줌.


### Transport
: 데이터를 목적 프로그램에 전달, 포트에 따라 프로그램을 정의
(하나의 host안에서 port번호는 운영체제에 따라 할당하고 관리하여 동일할 수 없다)

1. well-known port: Server program
 - 20, 21: FTP
 - 80: HTTP (web)
 - 443: HTTPS (보안)
2. Registered port
3. Dynamic port: Client program


### TCP & UDP
1. TCP
 - 도중에 데이터 손실이 일어났을때, 재전송해줌
 - 데이터의 완벽성을 중요시함

2. UDP
 - 도중에 데이터 손실이 일어났을때, 재전송X.
 - but, 속도가 빠름 (동영상 스트리밍, 온라인게임 등. 화면이 깨질지언정 전송)

### URL (Uniform resource locator)
 - url은 사이트주소가 아닌, 리소스를 가리키는 것.
 - [형식] schema://host(computer).domain/directory/file
 - [eg] www.naver.com, cloud.naver.com은 naver.com이라는 도메인안에 2개의 호스트가 존재)


### AJAX
 - 항상 새로 갱신하는 것이 아니라, 수정된 부분만 부분별로 불러들임
 - 브라우저가 아닌 자바스크립트에서 보내진 리퀘스트

### Cookie
 - 웹은 한번의 리퀘스트에 한번의 응답으로 서버가 끝남(stateless,포트번호가 계속 바뀜)
 - 로그인상태를 유지하기 위해 sessionID라는 개념이 생김
 - Set-cookie를 통해 한번의 응답에 session ID를 생성해, cookie정보를 로컬 호스트에 저장
 - 다음번 리퀘스트를 할때 sessionID를 함께 던져주어 세션이 꺼질때까지 로그인 상태인인것처럼 유지

---

# Memory
## Memory hierarchy (메모리 계층구조)
- 1에 가까울수록 속도는 빠르나, 용량은 작다.
- 데이터를 가져올때는 하드 > 메모리 > 캐시 > 레지스터
- 데이터를 저장할때는 레지스터 > 캐시 > 메모리 > 하드 순차적으로 일어남

1. register
2. cache
3. main memory (RAM)
4. hard disc


### Principle of Locality (지역성의 원리)
1. Temporal locality
- CPU가 한번 접근한 메모리(변수)는 다시 접근함
2. Spatial locality
- 이번에 접근할 메모리(변수)는 이전에 접근했던 메모리 '근처'일 확률이 높음

  - 따라서, li = [1,2,3,4,5]중 1번째 idx만 가져온다해도 남은 2,3,4,5를 캐시에 가져감(99%확률)
  - 캐시에 넣으므로써, 컴퓨터는 더 빠른 속도로 값을 반환할 수 있음 (cache hit)
  - But, 3을 찾는데 캐시에 없다면 다시 메모리로 찾으러감(cache miss). 그만큼 속도가 느려짐


###  가상주소 공간
1. code
2. data
 - 전역변수 저장
3. heap
 - 프로그래머가 할당 가능
 - 부분 부분차게되어 메모리가 단편화됨
 - 캐시라인 뜨기가 어려움 -> cache miss가 잘 남
4. stack
 - 지역변수 저장
 - 순서대로 차근차근 차게 되므로 연관있는 데이터끼리 모이게 됨
 - 데이터가 붙어있으므로 locality가 좋음













``
