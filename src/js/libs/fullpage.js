import { isMobile } from "../files/functions.js";
import { flsModules } from "../files/modules.js";

/*
	data-fp - оболочка
	data-fp-section - секции

	Переход на определенный слайд
	fpage.switchingSection(id);

	Установка z-index 
	fPage.init();
	fPage.destroy();
	fPage.setZIndex();

	id активнгого слайда
	fPage.activeSectionId
	Активный слайд
	fPage.activeSection

	События 
	fpinit
	fpdestroy
	fpswitching
*/

// Класс FullPage
export class FullPage {
	constructor(element, options) {
		let config = {
			//===============================
			// Селектор, на котором не работает событие свайпа/колеса
			noEventSelector: '[data-no-event]',
			//===============================
			// Настройки оболочки
			// Класс при инициализации плагина
			сlassInit: 'fp-init',
			// Класс для врапера во время перелистывания
			wrapperAnimatedClass: 'fp-switching',
			//===============================
			// Настройки секций
			// СЕЛЕКТОР для секций
			selectorSection: '[data-fp-section]',
			// Класс для активной секции
			activeClass: 'active-section',
			// Класс для Предыдущей секции
			previousClass: 'previous-section',
			// Класс для следующей секции
			nextClass: 'next-section',
			// id изначально активного класса
			idActiveSection: 0,
			//===============================
			// Прочие настройки
			// Свайп мышью
			// touchSimulator: false,
			//===============================
			// Эффекты
			// Эффекты: fade, cards, slider
			mode: element.dataset.fpEffect ? element.dataset.fpEffect : 'slider',
			//===============================
			// Буллеты
			// Активация буллетов
			bullets: element.hasAttribute('data-fp-bullets') ? true : false,
			// Класс оболочки буллетов
			bulletsClass: 'fp-bullets',
			// Класс буллета
			bulletClass: 'fp-bullet',
			// Класс активного буллета
			bulletActiveClass: 'fp-bullet-active',
			//===============================
			// События
			// Событие создания
			onInit: function () { },
			// Событие перелистывания секции
			onSwitching: function () { },
			// Событие разрушения плагина
			onDestroy: function () { },
		}
		this.options = Object.assign(config, options);
		// Родитель
		this.wrapper = element;
		this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
		// Активный слайд
		this.activeSection = false;
		this.activeSectionId = false;
		// Предыдущий слайд
		this.previousSection = false;
		this.previousSectionId = false;
		// Следубщи слайд
		this.nextSection = false;
		this.nextSectionId = false;
		// Оболочка буллетов
		this.bulletsWrapper = false;
		// Вспомогательная переменная 
		this.stopEvent = false;
		if (this.sections.length) {
			// Инициализация элементов
			this.init();
		}
	}
	//===============================
	// Начальная инициализация
	init() {
		if (this.options.idActiveSection > (this.sections.length - 1)) return
		// Расставляем id 
		this.setId();
		this.activeSectionId = this.options.idActiveSection;
		// Присвоение классов с разными эффектами
		this.setEffectsClasses();
		// Установка классов
		this.setClasses();
		// Установка стилей
		this.setStyle();
		// Установка буллетов
		if (this.options.bullets) {
			this.setBullets();
			this.setActiveBullet(this.activeSectionId);
		}
		// Установка событий
		this.events();
		// Устанавливаем init класс
		setTimeout(() => {
			document.documentElement.classList.add(this.options.сlassInit);
			// Создание кастомного события 
			this.options.onInit(this);
			document.dispatchEvent(new CustomEvent("fpinit", {
				detail: {
					fp: this
				}
			}));
		}, 0);
	}
	//===============================
	// Удалить
	destroy() {
		// Удаление событий
		this.removeEvents();
		// Удаление классов у секций
		this.removeClasses();
		// Удаление класса инициализации
		document.documentElement.classList.remove(this.options.сlassInit);
		// Удаление класса анимации
		this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
		// Удаление классов эффектов
		this.removeEffectsClasses();
		// Удвление z-index у секций
		this.removeZIndex();
		// Удаление стилей
		this.removeStyle();
		// Удаление ID
		this.removeId();
		// Создание кастомного события 
		this.options.onDestroy(this);
		document.dispatchEvent(new CustomEvent("fpdestroy", {
			detail: {
				fp: this
			}
		}));
	}
	//===============================
	// Установка ID для секций 
	setId() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			section.setAttribute('data-fp-id', index);
		}
	}
	//===============================
	// Удаление ID для секций 
	removeId() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			section.removeAttribute('data-fp-id');
		}
	}
	//===============================
	// Функция установки классов для пердыдущей, активной и следующей секций
	setClasses() {
		// Сохранение id для ПРЕДЫДУЩЕГО слайда (если такой есть)
		this.previousSectionId = (this.activeSectionId - 1) >= 0 ?
			this.activeSectionId - 1 : false;

		// Сохранение id для СЛЕДУЮЩЕГО слайда (если такой есть)
		this.nextSectionId = (this.activeSectionId + 1) < this.sections.length ?
			this.activeSectionId + 1 : false;

		// Установка класса и присваение элемента для АКТИВНОГО слайда
		this.activeSection = this.sections[this.activeSectionId];
		this.activeSection.classList.add(this.options.activeClass);

		// Установка класса и присваение элемента для ПРЕДЫДУЩЕГО слайда
		if (this.previousSectionId !== false) {
			this.previousSection = this.sections[this.previousSectionId];
			this.previousSection.classList.add(this.options.previousClass);
		} else {
			this.previousSection = false;
		}

		// Установка класса и присваение элемента для СЛЕДУЮЩЕГО слайда
		if (this.nextSectionId !== false) {
			this.nextSection = this.sections[this.nextSectionId];
			this.nextSection.classList.add(this.options.nextClass);
		} else {
			this.nextSection = false;
		}
	}
	//===============================
	// Присвоение классов с разными эффектами
	removeEffectsClasses() {
		switch (this.options.mode) {
			case 'slider':
				this.wrapper.classList.remove('slider-mode');
				break;

			case 'cards':
				this.wrapper.classList.remove('cards-mode');
				this.setZIndex();
				break;

			case 'fade':
				this.wrapper.classList.remove('fade-mode');
				this.setZIndex();
				break;

			default:
				break;
		}
	}
	//===============================
	// Присвоение классов с разными эффектами
	setEffectsClasses() {
		switch (this.options.mode) {
			case 'slider':
				this.wrapper.classList.add('slider-mode');
				break;

			case 'cards':
				this.wrapper.classList.add('cards-mode');
				this.setZIndex();
				break;

			case 'fade':
				this.wrapper.classList.add('fade-mode');
				this.setZIndex();
				break;

			default:
				break;
		}
	}
	//===============================
	// Блокировка направлений скролла
	//===============================
	// Функция установки стилей 
	setStyle() {
		switch (this.options.mode) {
			case 'slider':
				this.styleSlider();
				break;

			case 'cards':
				this.styleCards();
				break;

			case 'fade':
				this.styleFade();
				break;
			default:
				break;
		}
	}
	// slider-mode
	styleSlider() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			if (index === this.activeSectionId) {
				section.style.transform = 'translate3D(0,0,0)';
			} else if (index < this.activeSectionId) {
				section.style.transform = 'translate3D(0,-100%,0)';
			} else if (index > this.activeSectionId) {
				section.style.transform = 'translate3D(0,100%,0)';
			}
		}
	}
	// cards mode
	styleCards() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			if (index >= this.activeSectionId) {
				section.style.transform = 'translate3D(0,0,0)';
			} else if (index < this.activeSectionId) {
				section.style.transform = 'translate3D(0,-100%,0)';
			}
		}
	}
	// fade style 
	styleFade() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			if (index === this.activeSectionId) {
				section.style.opacity = '1';
				section.style.visibility = 'visible';
			} else {
				section.style.opacity = '0';
				section.style.visibility = 'hidden';
			}
		}
	}
	//===============================
	// Удаление стилей
	removeStyle() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			section.style.opacity = '';
			section.style.visibility = '';
			section.style.transform = '';
		}
	}
	//===============================
	// Функция проверки полностью ли был прокручен элемент
	checkScroll(yCoord, element) {
		this.goScroll = false;

		// Есть ли элемент и готов ли к работе 
		if (!this.stopEvent && element) {
			this.goScroll = true;
			// Если высота секции не равна высоте окна
			if (this.haveScroll(element)) {
				this.goScroll = false;
				const position = Math.round(element.scrollHeight - element.scrollTop);
				// Проверка на то, прокручена ли полностью секция
				if (
					((Math.abs(position - element.scrollHeight) < 2) && yCoord <= 0) ||
					((Math.abs(position - element.clientHeight) < 2) && yCoord >= 0)
				) {
					this.goScroll = true;
				}
			}
		}
	}
	//===============================
	// Проверка высоты 
	haveScroll(element) {
		return element.scrollHeight !== window.innerHeight
	}
	//===============================
	// Удаление классов 
	removeClasses() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			section.classList.remove(this.options.activeClass);
			section.classList.remove(this.options.previousClass);
			section.classList.remove(this.options.nextClass);
		}
	}
	//===============================
	// Сборник событий...
	events() {
		this.events = {
			// Колесо мыши
			wheel: this.wheel.bind(this),

			// Свайп
			touchdown: this.touchDown.bind(this),
			touchup: this.touchUp.bind(this),
			touchmove: this.touchMove.bind(this),
			touchcancel: this.touchUp.bind(this),

			// Конец анимации
			transitionEnd: this.transitionend.bind(this),

			// Клик для буллетов
			click: this.clickBullets.bind(this),
		}
		if (isMobile.iOS()) {
			document.addEventListener('touchmove', (e) => {
				e.preventDefault();
			});
		}
		this.setEvents();
	}
	setEvents() {
		// Событие колеса мыши
		this.wrapper.addEventListener('wheel', this.events.wheel);
		// Событие нажатия на экран
		this.wrapper.addEventListener('touchstart', this.events.touchdown);
		// Событие клика по булетам
		if (this.options.bullets && this.bulletsWrapper) {
			this.bulletsWrapper.addEventListener('click', this.events.click);
		}
	}
	removeEvents() {
		this.wrapper.removeEventListener('wheel', this.events.wheel);
		this.wrapper.removeEventListener('touchdown', this.events.touchdown);
		this.wrapper.removeEventListener('touchup', this.events.touchup);
		this.wrapper.removeEventListener('touchcancel', this.events.touchup);
		this.wrapper.removeEventListener('touchmove', this.events.touchmove);
		if (this.bulletsWrapper) {
			this.bulletsWrapper.removeEventListener('click', this.events.click);
		}
	}
	//===============================
	// Функция клика по булетам
	clickBullets(e) {
		// Нажатый буллет
		const bullet = e.target.closest(`.${this.options.bulletClass}`);
		if (bullet) {
			// Массив всех буллетов
			const arrayChildren = Array.from(this.bulletsWrapper.children);

			// id Нажатого буллета
			const idClickBullet = arrayChildren.indexOf(bullet)

			// Переключение секции
			this.switchingSection(idClickBullet)
		}
	}
	//===============================
	// Установка стилей для буллетов
	setActiveBullet(idButton) {
		if (!this.bulletsWrapper) return
		// Все буллеты
		const bullets = this.bulletsWrapper.children;

		for (let index = 0; index < bullets.length; index++) {
			const bullet = bullets[index];
			if (idButton === index) bullet.classList.add(this.options.bulletActiveClass);
			else bullet.classList.remove(this.options.bulletActiveClass);
		}
	}
	//===============================
	// Функция нажатие тач/пера/курсора
	touchDown(e) {
		// Переменная для свайпа
		this._yP = e.changedTouches[0].pageY;
		this._eventElement = e.target.closest(`.${this.options.activeClass}`);
		if (this._eventElement) {
			// Вешаем событие touchmove и touchup
			this._eventElement.addEventListener('touchend', this.events.touchup);
			this._eventElement.addEventListener('touchcancel', this.events.touchup);
			this._eventElement.addEventListener('touchmove', this.events.touchmove);
			// Тач произошел
			this.clickOrTouch = true;

			//==============================
			if (isMobile.iOS()) {
				if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
					if (this._eventElement.scrollTop === 0) {
						this._eventElement.scrollTop = 1;
					}
					if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) {
						this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
					}
				}
				this.allowUp = this._eventElement.scrollTop > 0;
				this.allowDown = this._eventElement.scrollTop < (this._eventElement.scrollHeight - this._eventElement.clientHeight);
				this.lastY = e.changedTouches[0].pageY;
			}
			//===============================

		}


	}
	//===============================
	// Событие движения тач/пера/курсора
	touchMove(e) {
		// Получение секции, на которой срабатывает событие
		const targetElement = e.target.closest(`.${this.options.activeClass}`);
		//===============================
		if (isMobile.iOS()) {
			let up = e.changedTouches[0].pageY > this.lastY;
			let down = !up;
			this.lastY = e.changedTouches[0].pageY;
			if (targetElement) {
				if ((up && this.allowUp) || (down && this.allowDown)) {
					e.stopPropagation();
				} else if (e.cancelable) {
					e.preventDefault();
				}
			}
		}
		//===============================
		// Проверка на завершение анимации и наличие НЕ СОБЫТИЙНОГО блока
		if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return
		// Получение направления движения
		let yCoord = this._yP - e.changedTouches[0].pageY;
		// Разрешен ли переход? 
		this.checkScroll(yCoord, targetElement);
		// Переход
		if (this.goScroll && Math.abs(yCoord) > 20) {
			this.choiceOfDirection(yCoord);
		}
	}
	//===============================
	// Событие отпускания от экрана тач/пера/курсора
	touchUp(e) {
		// Удаление событий 
		this._eventElement.removeEventListener('touchend', this.events.touchup);
		this._eventElement.removeEventListener('touchcancel', this.events.touchup);
		this._eventElement.removeEventListener('touchmove', this.events.touchmove);
		return this.clickOrTouch = false;
	}
	//===============================
	// Конец срабатывания перехода 
	transitionend(e) {
		if (e.target.closest(this.options.selectorSection)) {
			this.stopEvent = false;
			this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
		}
	}
	//===============================
	// Событие прокрутки колесом мыши
	wheel(e) {
		// ПРоверка на наличие НЕ СОБЫТИЙНОГО блока
		if (e.target.closest(this.options.noEventSelector)) return
		// Получение направления движения
		const yCoord = e.deltaY;
		// Получение секции, на которой срабатывает событие
		const targetElement = e.target.closest(`.${this.options.activeClass}`);
		// Разрешен ли переход? 
		this.checkScroll(yCoord, targetElement);
		// Переход
		if (this.goScroll) this.choiceOfDirection(yCoord);
	}
	//===============================
	// Функция выбора направления
	choiceOfDirection(direction) {
		// Приостанавливаем работу событий
		this.stopEvent = true;

		// Если слайд крайни, то разрешаем события
		if (((this.activeSectionId === 0) && direction < 0) || ((this.activeSectionId === (this.sections.length - 1)) && direction > 0)) {
			this.stopEvent = false;
		}

		// Установка нужных id
		if (direction > 0 && this.nextSection !== false) {
			this.activeSectionId = (this.activeSectionId + 1) < this.sections.length ?
				++this.activeSectionId : this.activeSectionId;
		} else if (direction < 0 && this.previousSection !== false) {
			this.activeSectionId = (this.activeSectionId - 1) >= 0 ?
				--this.activeSectionId : this.activeSectionId;
		}

		// Смена слайдов
		if (this.stopEvent) this.switchingSection();
	}
	//===============================
	// Функция переключения слайды
	switchingSection(idSection = this.activeSectionId) {
		this.activeSectionId = idSection;
		// Установка события окнчания проигрывания анимации
		this.wrapper.classList.add(this.options.wrapperAnimatedClass);
		this.wrapper.addEventListener('transitionend', this.events.transitionEnd);
		// Удаление классов
		this.removeClasses();
		// Смена классов 
		this.setClasses();
		// Смена стилей
		this.setStyle();
		// Установка стилей для буллетов 
		if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
		// Создание события
		this.options.onSwitching(this);
		document.dispatchEvent(new CustomEvent("fpswitching", {
			detail: {
				fp: this
			}
		}));
	}
	//===============================
	// Установка буллетов
	setBullets() {
		// Поиск оболочки буллетов
		this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);

		// Если нету создаем
		if (!this.bulletsWrapper) {
			const bullets = document.createElement('div');
			bullets.classList.add(this.options.bulletsClass);
			this.wrapper.append(bullets);
			this.bulletsWrapper = bullets;
		}

		// Создание буллетов
		if (this.bulletsWrapper) {
			for (let index = 0; index < this.sections.length; index++) {
				const span = document.createElement('span');
				span.classList.add(this.options.bulletClass);
				this.bulletsWrapper.append(span);
			}
		}
	}
	//===============================
	// Z-INDEX
	setZIndex() {
		let zIndex = this.sections.length
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			section.style.zIndex = zIndex;
			--zIndex;
		}
	}
	removeZIndex() {
		for (let index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			section.style.zIndex = ''
		}
	}
}
// Запускаем и добавляем в объект модулей
if (document.querySelector('[data-fp]')) {
	flsModules.fullpage = new FullPage(document.querySelector('[data-fp]'), '');
}
