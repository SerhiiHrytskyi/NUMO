# Як розширити та налаштувати стилі

## Додавання нових компонентів

Всі нові стилі повинні додаватися в `css/styles.css`. Дотримуйтеся наступної структури:

### 1. Визначіть CSS змінні (якщо потрібно)

Додайте нові змінні в блок `:root`:

```css
:root {
  /* Існуючі змінні... */

  /* Ваші нові змінні */
  --new-color: #ffffff;
  --new-size: 2rem;
}
```

### 2. Напишіть CSS для компонента

```css
/* ========================================
   НОВИЙ КОМПОНЕНТ
   ======================================== */

.my-component {
  background: var(--primary-dark);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
}

.my-component:hover {
  box-shadow: 0 4px 8px var(--shadow-color);
}
```

### 3. Додайте до HTML

```html
<div class="my-component">
  <!-- Вміст -->
</div>
```

## Приклади типових завдань

### Змінення основного кольору бренду

1. Знайдіть у файлі `css/styles.css` блок `:root`
2. Змініть значення `--primary-dark`:

```css
:root {
  --primary-dark: #1a3a52; /* Новий колір */
}
```

### Додавання нового шрифту

```css
:root {
  --font-family-main: "Your Font", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Your+Font&display=swap");
```

### Створення нової кнопки

```css
.btn-success {
  background-color: #27ae60;
}

.btn-success:hover {
  background-color: #229954;
}
```

## Адаптивність

Для мобільних пристроїв використовуйте медіа-запити:

```css
@media (max-width: 768px) {
  .my-component {
    padding: var(--spacing-md); /* Менше відступу на планшетах */
  }
}

@media (max-width: 480px) {
  .my-component {
    padding: var(--spacing-sm); /* Ще менше на мобільних */
  }
}
```

## Best Practices

1. **Використовуйте CSS змінні** - не пишіть жорстко закодовані значення
2. **Організуйте код** - групуйте пов'язані стилі коментарями
3. **Тестуйте адаптивність** - перевіряйте на різних розмірах екранів
4. **Документуйте** - додавайте коментарі для складних стилів
5. **Не дублюйте** - переважте класи, а не inline-стилі в HTML

## Приклад повного компонента

```css
/* ========================================
   БАННЕР
   ======================================== */

.banner {
  background: linear-gradient(
    135deg,
    var(--primary-dark) 0%,
    var(--primary-light) 100%
  );
  padding: var(--spacing-2xl) var(--spacing-xl);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-xl);
  color: var(--text-white);
}

.banner h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--spacing-md);
  color: var(--text-white);
}

.banner p {
  font-size: var(--font-size-large);
  color: #ecf0f1;
}

.banner-button {
  display: inline-block;
  margin-top: var(--spacing-md);
}

@media (max-width: 768px) {
  .banner {
    padding: var(--spacing-xl) var(--spacing-md);
  }

  .banner h2 {
    font-size: var(--font-size-h3);
  }
}
```

## Тестування

Після додавання нових стилів:

1. Відкрийте HTML файл у браузері
2. Перевірте зовнішній вигляд
3. Змініть розмір вікна браузера (F12 → мобільний режим)
4. Перевірте на мобільному пристрої, якщо можливо

## Корисні ресурси

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
