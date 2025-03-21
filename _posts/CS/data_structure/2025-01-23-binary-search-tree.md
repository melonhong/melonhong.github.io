---
layout: post
title: 이진 탐색 트리
date: '2025-01-23 02:03:17 +0900'
category: [CS, 자료구조]
math: true
---
## 이진 탐색 트리(BST; binary search tree)
이진트리 기반의 탐색을 위한 자료구조이다. 다음과 같은 특징을 가진다.

> 1. 모든 노드는 유일한 키를 갖는다.
2. **왼쪽 서브트리의 키들은 루트의 키보다 작다.**
3. **오른쪽 서브트리의 키들은 루트의 키보다 크다.**
4. 왼쪽과 오른쪽 서브트리도 이진 탐색 트리이다.
{: .prompt-info}

![BST](https://images.javatpoint.com/ds/images/binary-search-tree11.png){: width="400" height="100" }_이진 탐색 트리_

> 참고로 힙이랑은 좀 다르다. 힙은 완전 이진트리 기반에 형제 간의 크기는 따지지 않지만, 이진 탐색 트리는 완전 이진트리가 아니어도 되고, 형제 간의 크기를 따지기 때문이다.
{: .prompt-warning }

## 이진 탐색 트리의 연산
### 탐색
0. 주어진 탐색키와 루트 노드의 키를 비교한다.
1. 둘이 같으면 성공적으로 끝낸다.
2. 탐색키가 더 작으면 왼쪽 자식을 기준으로 다시 시작한다.
3. 탐색키가 더 크면 오른쪽 자식을 기준으로 다시 시작한다.


### 삽입
삽입 연산을 하기 위해선 먼저 탐색 연산을 수행해야 한다. 중복을 불허하고, **탐색에 실패한 위치가 삽입할 위치가 되기 때문이다.**


### 삭제
역시 먼저 탐색 연산을 수행해야 한다. 그리고 다음 세 가지 경우를 고려한다.
1. 삭제하려는 노드가 단말 노드인 경우 -> 삭제하려는 노드의 부모 노드 링크를 NULL로
2. 삭제하려는 노드가 자식 서브 트리를 하나만 갖는 경우 -> 삭제하려는 노드의 유일한 자식을 부모 노드 링크로
3. 삭제하려는 노드가 자식 서브 트리를 두 개 갖는 경우 -> 둘 중 어떤 노드를 부모 노드의 링크로 할 지 따져야 함 -> 삭제하려는 노드와 가장 비슷한 키의 노드를 가져오자 -> 자식 왼쪽 서브트리에서 제일 큰 값 또는 오른쪽 서브트리에서 제일 작은 값


## 이진 탐색 트리의 성능
트리의 높이가 h인 경우 이진 탐색 트리의 시간 복잡도는 $$ O(h)$$이다. n개의 노드를 가지는 이진 탐색 트리의 경우 $$ O(log_2n) $$의 시간 복잡도를 가진다. 선형 탐색의 경우는 $$ O(n) $$이므로 이것보다 더 빠르다.


## 참고
[C++로 쉽게 풀어쓴 자료구조 9장](https://product.kyobobook.co.kr/detail/S000001076271)