import { useParams } from "react-router-dom";

export function Breadcrumb() {
  const { id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Posts</li>
            {Boolean(id) && <li className="breadcrumb-item active">{id}</li>}
          </ol>
        </nav>
      </div>
    </div>
  );
}
