// Подключение функционала "Чертогов Фрилансера"
import { isMobile, getHash } from "../functions.js";
import { flsModules } from "../../files/modules.js";
// Модуль прокрутки к блоку
import { gotoBlock } from "./gotoblock.js";
// Переменная контроля добавления события window scroll.
let addWindowScrollEvent = false;

//====================================================================================================================================================================================================================================================================================================
// Плавная навигация по странице
export function pageNavigation() {
	// data-goto - указать ID блока
	// data-goto-header - учитывать header
	// data-goto-top - недокрутить на указанный размер
	// data-goto-speed - скорость (только если используется доп плагин)
	// Работаем при клике на пункт
	document.addEventListener("click", pageNavigationAction);
	// Если подключен scrollWatcher, подсвечиваем текущий пукт меню
	document.addEventListener("watcherCallback", pageNavigationAction);
	// Основная функция
	function pageNavigationAction(e) {
		if (e.type === "click") {
			const targetElement = e.target;
			if (targetElement.closest('[data-goto]')) {
				const gotoLink = targetElement.closest('[data-goto]');
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
				const noHeader = gotoLink.hasAttribute('data-goto-header') ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if (e.type === "watcherCallback" && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			// Обработка пунктов навигации, если указано значение navigator подсвечиваем текущий пукт меню
			if (targetElement.dataset.watch === 'navigator') {
				const navigatorActiveItem = document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) {
					navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`);
				} else if (targetElement.classList.length) {
					for (let index = 0; index < targetElement.classList.length; index++) {
						const element = targetElement.classList[index];
						if (document.querySelector(`[data-goto=".${element}"]`)) {
							navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
							break;
						}
					}
				}
				if (entry.isIntersecting) {
					// Видим объект
					// navigatorActiveItem ? navigatorActiveItem.classList.remove('_navigator-active') : null;
					navigatorCurrentItem ? navigatorCurrentItem.classList.add('_navigator-active') : null;
				} else {
					// Не видим объект
					navigatorCurrentItem ? navigatorCurrentItem.classList.remove('_navigator-active') : null;
				}
			}
		}
	}
	// Прокрутка по хешу
	if (getHash()) {
		let goToHash;
		if (document.querySelector(`#${getHash()}`)) {
			goToHash = `#${getHash()}`;
		} else if (document.querySelector(`.${getHash()}`)) {
			goToHash = `.${getHash()}`;
		}
		goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
	}
}
// Работа с шапкой при скроле
export function headerScroll() {
	addWindowScrollEvent = true;
	const header = document.querySelector('header.header');
	const headerShow = header.hasAttribute('data-scroll-show');
	const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
	let scrollDirection = 0;
	let timer;
	document.addEventListener("windowScroll", function (e) {
		const scrollTop = window.scrollY;
		clearTimeout(timer);
		if (scrollTop >= startPoint) {
			!header.classList.contains('_header-scroll') ? header.classList.add('_header-scroll') : null;
			if (headerShow) {
				if (scrollTop > scrollDirection) {
					// downscroll code
					header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
				} else {
					// upscroll code
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}
				timer = setTimeout(() => {
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}, headerShowTimer);
			}
		} else {
			header.classList.contains('_header-scroll') ? header.classList.remove('_header-scroll') : null;
			if (headerShow) {
				header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
			}
		}
		scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
	});
}
// Прилипающий блок
export function stickyBlock() {
	addWindowScrollEvent = true;
	// data-sticky для родителя внутри которого прилипает блок *
	// data-sticky-header для родителя, учитываем высоту хедера
	// data-sticky-top="" для родителя, можно указать отступ сверху
	// data-sticky-bottom="" для родителя, можно указать отступ снизу
	// data-sticky-item для прилипающего блока *
	function stickyBlockInit() {
		const stickyParents = document.querySelectorAll('[data-sticky]');
		if (stickyParents.length) {
			stickyParents.forEach(stickyParent => {
				let stickyConfig = {
					media: stickyParent.dataset.sticky ? parseInt(stickyParent.dataset.sticky) : null,
					top: stickyParent.dataset.stickyTop ? parseInt(stickyParent.dataset.stickyTop) : 0,
					bottom: stickyParent.dataset.stickyBottom ? parseInt(stickyParent.dataset.stickyBottom) : 0,
					header: stickyParent.hasAttribute('data-sticky-header') ? document.querySelector('header.header').offsetHeight : 0
				}
				stickyBlockItem(stickyParent, stickyConfig);
			});
		}
	}
	function stickyBlockItem(stickyParent, stickyConfig) {
		const stickyBlockItem = stickyParent.querySelector('[data-sticky-item]');
		const headerHeight = stickyConfig.header;
		const offsetTop = headerHeight + stickyConfig.top;
		const startPoint = stickyBlockItem.getBoundingClientRect().top + scrollY - offsetTop;

		document.addEventListener("windowScroll", stickyBlockActions);
		//window.addEventListener("resize", stickyBlockActions);

		function stickyBlockActions(e) {
			const endPoint = (stickyParent.offsetHeight + stickyParent.getBoundingClientRect().top + scrollY) - (offsetTop + stickyBlockItem.offsetHeight + stickyConfig.bottom);
			let stickyItemValues = {
				position: "relative",
				bottom: "auto",
				top: "0px",
				left: "0px",
				width: "auto"
			}
			if (!stickyConfig.media || stickyConfig.media < window.innerWidth) {
				if (offsetTop + stickyConfig.bottom + stickyBlockItem.offsetHeight < window.innerHeight) {
					if (scrollY >= startPoint && scrollY <= endPoint) {
						stickyItemValues.position = `fixed`;
						stickyItemValues.bottom = `auto`;
						stickyItemValues.top = `${offsetTop}px`;
						stickyItemValues.left = `${stickyBlockItem.getBoundingClientRect().left}px`; // Учесть разницу в ширине экрана?
						stickyItemValues.width = `${stickyBlockItem.offsetWidth}px`;
					} else if (scrollY >= endPoint) {
						stickyItemValues.position = `absolute`;
						stickyItemValues.bottom = `${stickyConfig.bottom}px`;
						stickyItemValues.top = `auto`;
						stickyItemValues.left = `0px`;
						stickyItemValues.width = `${stickyBlockItem.offsetWidth}px`;
					}
				}
			}
			stickyBlockType(stickyBlockItem, stickyItemValues);
		}
	}
	function stickyBlockType(stickyBlockItem, stickyItemValues) {
		stickyBlockItem.style.cssText = `position:${stickyItemValues.position};bottom:${stickyItemValues.bottom};top:${stickyItemValues.top};left:${stickyItemValues.left};width:${stickyItemValues.width};`;
	}
	stickyBlockInit();
}
// Модуль анімація цифрового лічильника
export function digitsCounter() {

	// Обнулення
	if (document.querySelectorAll("[data-digits-counter]").length) {
		document.querySelectorAll("[data-digits-counter]").forEach(element => {
			element.dataset.digitsCounter = element.innerHTML;
			element.innerHTML = `0`;
		});
	}

	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000;
		const startValue = parseInt(digitsCounter.dataset.digitsCounter);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	function digitsCounterAction(e) {
		const entry = e.detail.entry;
		const targetElement = entry.target;
		if (targetElement.querySelectorAll("[data-digits-counter]").length) {
			digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]"));
		}
	}

	document.addEventListener("watcherCallback", digitsCounterAction);
}

// При подключении модуля обработчик события запустится автоматически
setTimeout(() => {
	if (addWindowScrollEvent) {
		let windowScroll = new Event("windowScroll");
		window.addEventListener("scroll", function (e) {
			document.dispatchEvent(windowScroll);
		});
	}
}, 0);

