# Search Console·GA4 콘텐츠 성과 연동

이 문서는 Google Search Console과 Google Analytics 4 데이터를 OpenHands에서 읽어 콘텐츠 기준과 발행 일정 개선에 활용하기 위한 연결 규격이다. `CONTENT_OPTIMIZATION_STANDARD.md`의 주간 감시·월간 검토·분기 감사에 함께 사용한다.

## 목적

- Search Console: 검색어, 노출, 클릭, CTR, 평균 게재순위, 색인 문제 확인
- GA4: 유입 경로, landing page, 참여 세션, 평균 참여 시간, 재방문 흐름 확인
- Ghost·GitHub Pages·Blogger: 같은 글의 원본·배포 URL과 성과 데이터 연결
- 발행 시각: 고정된 감이 아니라 실제 방문 시간대와 공개 후 반응으로 조정

SEO나 GEO 규칙을 자동 변경하기보다 주간 보고서에 이상과 후보를 기록하고, 월간 검토에서 사람이 승인한 변경만 반영한다.

## 필요한 읽기 전용 설정

### Search Console

1. Google Cloud 프로젝트에서 Search Console API를 활성화한다.
2. 전용 service account를 만든다.
3. Search Console property에 해당 service account 이메일을 읽기 권한 사용자로 추가한다.
4. 다음 값을 Secret Registry 또는 보호된 host 경로에 등록한다.

```text
GOOGLE_APPLICATION_CREDENTIALS=/protected/path/google-readonly-service-account.json
GOOGLE_SEARCH_CONSOLE_SITE_URL=sc-domain:example.com
```

URL-prefix property를 사용한다면 정확한 property URL을 사용한다. credential JSON은 저장소·정적 웹 루트·대화·로그에 넣지 않는다.

### Google Analytics 4

1. GA4 Admin에서 property ID를 확인한다.
2. 같은 service account 이메일을 Viewer 권한으로 추가한다.
3. Google Analytics Data API를 활성화한다.
4. 다음 값을 보호된 환경에 등록한다.

```text
GA4_PROPERTY_ID=123456789
GOOGLE_APPLICATION_CREDENTIALS=/protected/path/google-readonly-service-account.json
```

service account에는 편집·광고·사용자 관리 권한을 주지 않는다.

## 보고서 저장 위치

```text
reports/search-console/YYYY-MM-DD.json
reports/ga4/YYYY-MM-DD.json
reports/content-performance/YYYY-MM-DD.md
```

원시 보고서에는 집계값만 저장한다. 사용자 식별자, 쿠키, IP, client ID, 세션 단위 개인 데이터는 저장하지 않는다.

## 수집 지표

### Search Console 주간 지표

- page, query, country, device 차원
- clicks, impressions, CTR, position
- 최근 7일과 이전 7일 비교
- 공개 후 28일이 지난 글의 검색어·페이지 성과
- 갑작스러운 노출·클릭 감소와 sitemap/index 상태

### GA4 주간 지표

- landing page와 source/medium
- sessions, engagedSessions, engagementRate
- averageSessionDuration 또는 평균 참여 시간
- 날짜·시간대별 방문 분포
- 플랫폼별 원본 URL과 canonical 기준 집계

## 발행 일정 개선 규칙

- 최소 8~12주 데이터가 쌓이기 전에는 현재의 1~3일 간격과 20:00~23:59 KST 분산 일정을 유지한다.
- 시간대 최적화는 한두 글의 결과가 아니라 글 유형별 중앙값을 사용한다.
- 게시 직후 24시간 데이터만으로 성공·실패를 판단하지 않는다.
- Search Console 반영 지연을 고려해 7일, 28일, 90일 구간을 함께 본다.
- 발행 시각보다 주제·검색 의도·콘텐츠 품질 영향이 더 클 수 있음을 보고서에 명시한다.

## OpenHands에서 읽는 방식

주간 기준 감시 자동화는 공식 정책 변화를 조사한다. 분석 credential이 준비되면 별도의 읽기 전용 주간 성과 자동화를 추가한다.

```text
매주: Search Console·GA4 집계 → reports/content-performance/ 보고서
매월: 최근 4개 보고서 + 콘텐츠 기준 감시 보고서 검토
분기: 업데이트·통합·폐기·내부 링크 개선 후보 작성
```

자동화는 보고서만 작성하며 Ghost 글, Blogger 글, GitHub Pages, 광고 설정을 자동으로 변경하지 않는다. 글 또는 규칙 변경은 사람이 검토한 뒤 수행한다.

## 연결 전 체크리스트

- [ ] Search Console property 유형과 정확한 식별자를 확인함
- [ ] GA4 숫자 property ID를 확인함
- [ ] 전용 service account에 Viewer 수준 권한만 부여함
- [ ] credential JSON이 보호된 경로에 있고 Git에 포함되지 않음
- [ ] OpenHands container에는 필요한 경우 read-only mount로 전달함
- [ ] API 읽기 테스트에서 property 이름·집계 건수만 출력하고 credential은 출력하지 않음
- [ ] 보고서에 개인 단위 데이터가 없음
