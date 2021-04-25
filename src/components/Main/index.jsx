export function Main() {
  return (
    <div className="container mt-3">
      <figure>
        <blockquote className="blockquote">
          <p>Что нужно сделать</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Подготовить <code>reducer</code> для списка постов
        </figcaption>
        <figcaption className="blockquote-footer">
          Сделать запрос на получение постов через <br />
          <code>store/thunk.js</code>
        </figcaption>
        <figcaption className="blockquote-footer">
          Отрисовать список постов ( только заголовки )
        </figcaption>
        <figcaption className="blockquote-footer">
          По нажатию на элемент списка, открывать пост полностью
        </figcaption>
        <div className="alert small alert-warning" role="alert">
          Все необходимое уже добавленно в <code>package.json</code>
        </div>
      </figure>
    </div>
  );
}
