import { useState } from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, className = "", fetchPriority = "auto", loading = "lazy", ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbackSrc = "/src/assets/images/image-placeholder.svg";

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      fetchPriority={fetchPriority}
      loading={loading}
      onError={() => setImgSrc(fallbackSrc)}
      {...props}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fetchPriority: PropTypes.oneOf(["high", "low", "auto"]),
  loading: PropTypes.oneOf(["eager", "lazy"]),
};

export default Image;
