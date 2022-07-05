# Урок 1. Домашнее задание

## Зеленый коридор

### Рождение кнопки

Сделайте компонент-кнопку. Разумеется, это должна быть красивая кнопка. Вдохновитесь стилями с вашего любимого интерфейса или найдите пример в интернете. Вам нужна картинка, а не готовая кнопка.

Сверстайте элемент. Пока не нужно обрабатывать никакие события. Обязательно организуйте и именуйте все в соответствии со схемой с урока. Кнопка пока должна принимать единственное свойство - подпись на кнопке.

### Многоликий кнопкус

Вдохновитесь в интернете готовыми фреймворками с визуальными элементами. Ваш запрос в поиск - реакт библиотеки компонентов.

Выберите из того, что найдете в интернете, понравившиеся вам состояния. Придумайте, как для вашей кнопки будут выглядеть эти состояния.

А теперь - запрограммируйте эти состояния. Заведите новые пропсы, используйте их, чтобы задавать модификаторы блоку кнопки. Теперь на классы модификаторов выставьте нужные стили.

Проверьте, что на пересечении состояний (когда, например, кнопка и “опасная” и “загружается”) – все отображается тоже корректно. Оцените, как много разных кнопок вы только что создали.

### Айконка

Найдите несколько бесплатных svg иконок в интернете. Беглым поиском я нашел [https://www.svgrepo.com](https://www.svgrepo.com/) – но это явно не единственный ресурс с иконками. Скачайте и используйте их проекте. Создайте компонент, который умеет отображать иконку по ее названию. Помимо иконки, пусть компонент еще принимает размер, который позволяет контролировать, собственно, размер выводимого изображения.

### Поженим!

Добавьте для кнопки возможность передать иконку, которая будет выводиться перед подписью. Независимо от размера передаваемой иконки, и текст и иконка по вертикали всегда должны находиться по центру кнопки.

Поэкспериментируйте - сможете ли вы вместо иконки передать utf-8 эмоджик?

## Желтый коридор

### С подписью понятнее

Сделайте отдельный компонент - он выводит иконку с подписью.

_При этом, пусть он принимает все иконочные пропсы, и саму подпись, и, например, размер подписи._

О чем тут предлагается подумать - о типах. Попробуйте с помощью типов выразить то, что я записал курсивом.

### Подскажи это

Сделайте компонент, который добавляет к любому компоненту знак вопроса рядом с этим компонентом, с подсказкой, появляющейся по ховеру на этот знак вопроса. Появление подсказки сделайте просто с помощью атрибута title

## Красный коридор

### Книга реактунглей

У вас получилось довольно много компонентов. Как бы показать коллегам, как они выглядят?

Вам предстоит самостоятельно изучить библиотеку [storybook](https://storybook.js.org). Установите ее и добейтесь того, чтобы у вас получилась витрина компонентов в разных состояниях.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
