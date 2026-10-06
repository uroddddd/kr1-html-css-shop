# Аудит БЭМ — практика №7

| Исходный пример | Итоговый класс |
|---|---|
| header-inner / logo | site-header__inner / site-header__logo |
| nav item / active | site-nav__item / site-nav__link--active |
| card title / description / price | product-card__title / product-card__description / product-card__price |
| featured / discount | product-card--featured / product-card--discount |
| form-field / form-label | order-form__field / order-form__label |
| form-input / form-select / form-textarea | order-form__input / order-form__select / order-form__textarea |
| form-actions | order-form__actions |
| dialog-title | order-dialog__title |

Блоки переиспользованы на разных страницах. Модификаторы не заменяют базовый класс. Связи label, ARIA и якоря используют ID; оформление задаётся классами. Нет inline-стилей или CSS-селекторов по ID. Общие переменные хранятся в :root. CSS сгруппирован комментариями: базовые правила, шапка/навигация, главная, карточки, форма, дополнительные страницы/адаптация.
