import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useActions } from '../../hooks/useActions';

export function PostItem() {
  const { id } = useParams();
  const { selectItem } = useActions();

  const selectedItem = useSelector(({ selectedItem }) => selectedItem);

  useEffect(() => {
    selectItem(id);
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <figure className="text-center">{selectedItem?.body}</figure>
        </div>
      </div>
    </div>
  );
}
