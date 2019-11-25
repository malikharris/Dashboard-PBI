import React from 'react';
import PropTypes from 'prop-types';

import columnsSvg from '../../Assets/images/columns.svg';
import filterSvg from '../../Assets/images/filter.svg';
import './CustomButton.css';

/**
 * @desc
 * isGridBtn: If true renders button with blue styling and an icon/img
 * img: An object with src and alt to render the grid btn img
 * icon: The icon imported from fontawesome if want to use svg icon instead of img
 * isFilter: Must be used in addition to isGridBtn. This adds default img/text
 * isColumns: Must be used in addition to isGridBtn. This adds default img/text
 * isRefresh: Must be used in addition to isGridBtn. This adds default icon/text
 * isFitScreen: Must be used in addition to isGridBtn. This adds default icon/text
 */
const CustomButton = props => {
  const {
    text,
    onClick,
    img,
    isGridBtn,
    isFilter,
    isColumns,
    icon,
    isRefresh,
    isFitScreen,
    isTextBtn,
    textColor,
  } = props;

  if (isGridBtn) {
    let gridBtnText = text;
    let gridBtnImg = img;
    let gridBtnIcon = icon;

    if (isFilter) {
      gridBtnText = 'Filter';
      gridBtnImg = { src: filterSvg, alt: 'Filter Icon' };
    } else if (isColumns) {
      gridBtnText = 'Columns';
      gridBtnImg = { src: columnsSvg, alt: 'Columns Icon' };
    } else if (isRefresh) {
      gridBtnText = 'Refresh';
    } else if (isFitScreen) {
      gridBtnText = 'Fit Screen';
    }

    return (
      <button
        type="button"
        className="grid-btn"
        style={{ backgroundColor: 'rgba(28, 155, 211, 0.1)' }}
        onClick={onClick}
      >
        <span className="grid-btn-text" style={{ color: '#1c9bd3' }}>
          {gridBtnText}
        </span>
        {gridBtnIcon ? (
          <div/>
        ) : (
          <img src={gridBtnImg.src} alt={gridBtnImg.alt} />
        )}
      </button>
    );
  }

  if (isTextBtn) {
    return (
      <button type="button" className="grid-btn" onClick={onClick}>
        <span className="grid-btn-text" style={{ color: textColor }}>
          {text}
        </span>
      </button>
    );
  }

  return (
    <button className="buttonView" type="button" onClick={onClick}>
      <p className="buttonText">{text}</p>
    </button>
  );
};

CustomButton.defaultProps = {
  text: 'Submit',
  img: null,
  isGridBtn: false,
  isFilter: false,
  isColumns: false,
  isRefresh: false,
  isFitScreen: false,
  icon: null,
  isTextBtn: false,
  textColor: 'black',
};

CustomButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  img: PropTypes.shape({
    src: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  icon: PropTypes.any,
  isGridBtn: PropTypes.bool,
  isFilter: PropTypes.bool,
  isColumns: PropTypes.bool,
  isRefresh: PropTypes.bool,
  isFitScreen: PropTypes.bool,
  isTextBtn: PropTypes.bool,
  textColor: PropTypes.string,
};

export default CustomButton;
