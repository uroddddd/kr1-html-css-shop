# Практические №1–8

Материалы: предоставленные преподавателем документы «Практическое занятие №1…№8 Фронтенд и бэкенд разработка (Часть 1 из 2)». Код примеров перенесён последовательно; предметная область — одежда. Это учебная адаптация, а не побайтовая копия: тексты, товары, имена БЭМ, доступность и дополнительные страницы изменены.

| № | Выполнено |
|---|---|
| 1 | Репозиторий, начальные коммиты, `feature/start-page`, PR и GitHub Pages. Начальный [PR #1](https://github.com/uroddddd/kr1-html-css-shop/pull/1) уже существовал и объединён. |
| 2 | Семантические header/nav/main/section/article/aside/footer, hero, преимущества, карточки, базовый CSS и box-sizing. |
| 3 | dialog, форма: имя/email/телефон/дата/тема/комментарий/согласие, скрытый выбранный товар, showModal/close, checkValidity/reportValidity, aria-invalid, сообщение. |
| 4 | :root: цвета, отступы и радиусы; CSS сгруппирован по назначению; hover/focus-visible/disabled/aria-invalid. |
| 5 | Каталог и контакты, общая навигация, якоря, хлебные крошки, уникальные title/description, sitemap. |
| 6 | Flexbox в шапке и карточке; Grid-сетка товаров; именованные области filters/products; статичная панель фильтров. |
| 7 | БЭМ: site-header, site-nav, product-card, order-form, order-dialog; модификаторы active/featured/discount; аудит классов. |
| 8 | Итоговая КР1: пять обязательных страниц, изображение, таблица, форма, модальное окно, relative/absolute/sticky/fixed/z-index; дополнительные страницы и FAQ. |

## Реальные ветки и pull request

| Этап | Ветка | PR |
|---|---|---|
| 1 | `feature/start-page` | [PR #1](https://github.com/uroddddd/kr1-html-css-shop/pull/1) |
| 2 | `feature/html-css-start-page` | [PR #2](https://github.com/uroddddd/kr1-html-css-shop/pull/2) |
| 3 | `feature/form-modal-validation` | [PR #3](https://github.com/uroddddd/kr1-html-css-shop/pull/3) |
| 4 | `feature/css-architecture-states` | [PR #4](https://github.com/uroddddd/kr1-html-css-shop/pull/4) |
| 5 | `feature/multi-page-navigation` | [PR #5](https://github.com/uroddddd/kr1-html-css-shop/pull/5) |
| 6 | `feature/flex-grid-navigation` | [PR #6](https://github.com/uroddddd/kr1-html-css-shop/pull/6) |
| 7 | `refactor/bem-css-classes` | [PR #7](https://github.com/uroddddd/kr1-html-css-shop/pull/7) |
| 8 | `fix/kr1-final-check` | Финальный PR добавлен ниже после создания. |

Ветки содержат промежуточные снимки: в практике №2 JavaScript ещё отсутствует, к №3 появляется модальное окно, к №7 классы преобразованы в БЭМ. Старый дизайн сохранён архивной веткой. Контрольная работа №2 из второй части документа №8 в этот проект не входит.

## Небольшие уточнения к образцу

- `novalidate` отключает автоматическую проверку при отправке, но не `checkValidity()`/`reportValidity()`: проверку запускает JavaScript.
- У обработчика закрытия есть `?.`, поскольку на отдельной странице заявки диалог отсутствует.
- После исправления поля и сброса формы снимается `aria-invalid`.
- Название товара видно пользователю; успешная отправка сообщает о клиентской демонстрации, а не о реальном заказе.
- Весь CSS внешний, inline-стилей нет. ID оставлены для якорей, связей label/ARIA и JavaScript.

## Материалы для показа преподавателю

Откройте проект в VS Code, GitHub Pages, вкладку Pull requests и граф `git log --oneline --graph --all`. Снимки интерфейса сохранены вместе с выдачей проекта; история и изменения доступны по ссылкам PR. Для защиты прочитайте DEFENSE.md и проверьте форму самостоятельно.
