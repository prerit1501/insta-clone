import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  // return <img src={src} alt={caption} />;
  return <div className='w-300px'><img src={src} alt={caption} /></div>;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
