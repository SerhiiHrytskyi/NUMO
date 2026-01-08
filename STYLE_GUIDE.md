# NUMO Style Guide - Централізоване управління стилями

## Огляд

Проект використовує централізовану систему управління стилями через єдиний файл CSS (`css/styles.css`). Це забезпечує консистентність дизайну та спрощує утримання проекту.

## Архітектура

```
NUMO/
├── css/
│   └── styles.css          # Централізований CSS файл
├── index.html
├── about.html
├── services/
│   ├── index.html
│   ├── power-generation.html
│   ├── solar-energy.html
│   └── ...
├── markets/
│   ├── index.html
│   ├── europe.html
│   ├── ukraine.html
│   └── africa.html
├── legal/
│   ├── imprint.html
│   ├── privacy.html
│   └── terms.html
└── ...
```

## Як використовувати стилі

### В root папці:

```html
<link rel="stylesheet" href="css/styles.css" />
```

### У папках (services/, markets/, legal/):

```html
<link rel="stylesheet" href="../css/styles.css" />
```

## CSS змінні

Всі основні значення стилів визначені як CSS змінні в `:root`:

### Кольори

```css
--primary-dark: #2c3e50          /* Темно-синій */
--primary-light: #34495e         /* Світло-синій */
--accent-color: #3498db          /* Блакитний акцент */
--text-dark: #2c3e50             /* Темний текст */
--text-light: #7f8c8d            /* Світлий текст */
--text-white: #ffffff            /* Білий текст */
```

### Шрифти

```css
--font-family-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
--font-size-base: 16px
--font-size-small: 14px
--font-size-large: 18px
--font-size-xl: 1.2rem
--font-size-h1: 3rem
--font-size-h2: 2rem
--font-size-h3: 1.5rem
--line-height: 1.6
```

### Розміри

```css
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 4rem
```

## Компоненти

### Навігація

- `.dropdown` - Контейнер для випадаючого меню
- `.dropdown-content` - Вміст випадаючого меню
- `.dropdown-toggle` - Кнопка для відкриття меню

### Картки

- `.card` - Базовий компонент карти
- `.card-title` - Заголовок карти
- `.card-body` - Вміст карти

### Формы

- `.form-group` - Контейнер для полів форми
- `.btn` - Базова кнопка
- `.btn-primary` - Первинна кнопка
- `.btn-secondary` - Вторинна кнопка

### Сітки

- `.grid` - Контейнер сітки
- `.grid-2` - Сітка з 2 стовпцями (адаптивна)
- `.grid-3` - Сітка з 3 стовпцями (адаптивна)

## Як змінити стилі

1. **Для змін кольорів**: відредагуйте CSS змінні в `:root` в `css/styles.css`
2. **Для змін шрифтів**: змініть `--font-family-main` або специфічні розміри шрифтів
3. **Для змін відступів**: змініть змінні `--spacing-*`

Приклад:

```css
:root {
  --primary-dark: #1a252f; /* Новий колір */
  --accent-color: #e74c3c; /* Новий акцент */
}
```

## Адаптивність

Стилі включають медіа-запити для адаптивності:

- **Планшети**: `@media (max-width: 768px)`
- **Мобільні**: `@media (max-width: 480px)`

## Порядок підключення CSS

На кожній сторінці CSS повинен бути підключений у `<head>`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
```

## Корисні класи

### Текст

- `.text-center` - Центрування тексту
- `.text-muted` - Світлий текст

### Відступи

- `.mt-1`, `.mt-2`, `.mt-3`, `.mt-4` - Верхні відступи
- `.mb-1`, `.mb-2`, `.mb-3`, `.mb-4` - Нижні відступи
- `.p-1`, `.p-2`, `.p-3`, `.p-4` - Внутрішні відступи
- `.gap-1`, `.gap-2`, `.gap-3` - Розмір проміжків

## Контакт для змін

Всі зміни стилів повинні застосовуватися до `css/styles.css`, щоб забезпечити консистентність.
