// 1) Источник данных
const posts = [
    {
      title: "Первый пост",
      text: "Сегодня я начал учить JavaScript и это очень интересно!",
      isFavorite: true
    },
    {
      title: "Путешествие",
      text: "Недавно я ездил в горы, там было красиво и спокойно.",
      isFavorite: false
    },
    {
      title: "Советы по учебе",
      text: "Лучше всего учить программирование практикой и маленькими шагами.",
      isFavorite: true
    }
  ];
  
// 2) Находим контейнер в HTML
const postsContainer = document.getElementById("posts-container");
  
// 3) Функция рендеринга постов
const renderPosts = (postsData) => {
    const postsHtml = postsData
      .map(({ title, text, isFavorite }) => {
        // 4) Тернарный оператор для CSS-класса
        const favoriteClass = isFavorite ? "is-favorite" : "";
  
        // 5) Возвращаем HTML карточки
        return `
          <div class="post ${favoriteClass}">
            <h2>${title}</h2>
            <p>${text}</p>
          </div>
        `;
      })
      .join(""); // объединяем массив строк в одну строку
  
    // 6) Вставляем в DOM
    postsContainer.innerHTML = postsHtml;
};
  
// 7) Вызываем функцию
renderPosts(posts);
  