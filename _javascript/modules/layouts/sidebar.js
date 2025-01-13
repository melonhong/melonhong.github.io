const ATTR_DISPLAY = 'sidebar-display';
const $sidebar = document.getElementById('sidebar');
const $trigger = document.getElementById('sidebar-trigger');
const $mask = document.getElementById('mask');

class SidebarUtil {
  static #isExpanded = false;

  static toggle() {
    this.#isExpanded = !this.#isExpanded;
    document.body.toggleAttribute(ATTR_DISPLAY, this.#isExpanded);
    $sidebar.classList.toggle('z-2', this.#isExpanded);
    $mask.classList.toggle('d-none', !this.#isExpanded);
    console.log('click');
  }
}

function setInitialSidebarState() {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    $sidebar.classList.add('z-2'); // 열린 상태의 스타일 적용
    $mask.classList.remove('d-none'); // 마스크 보이기
    document.body.setAttribute(ATTR_DISPLAY, 'true'); // body에 속성 추가
  }
}

// 초기 상태 설정 및 이벤트 핸들러 추가
export function initSidebar() {
  setInitialSidebarState(); // 초기 상태 설정
  $trigger.onclick = $mask.onclick = () => SidebarUtil.toggle();
}
