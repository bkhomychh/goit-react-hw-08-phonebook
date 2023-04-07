import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>404 Page not found :(</p>
      <Link to="/">HOME</Link>
    </div>
  );
}
