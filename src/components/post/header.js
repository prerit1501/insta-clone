import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ username }) {
  return (
    <div className='flex border-b border-gray-primary h-3 p-4 py-8'>
      <div className='flex items-center'>
        <Link to={`/p/${username}`} className='flex items-center'>
          <img
            src={`/images/avatars/${username}.jpeg`}
            alt={`${username} profile`}
            className='rounded-full h-8 flex mr-3'
          />
          <p className='font-bold'>{username}</p>
        </Link>
      </div>
</div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};
