import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useActions } from '../../hooks/useActions';

export function Posts() {
  const { getPostsThunk } = useActions();
  const posts = useSelector(({ posts }) => posts);
  const history = useHistory();

  useEffect(() => {
    if (!posts.length) {
      getPostsThunk();
    }
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <ul className="list-group-flush">
            {posts.map(({ id, title }) => (
              <li onClick={() => history.push(`${id}`)} key={id} style={{ cursor: 'pointer' }}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
