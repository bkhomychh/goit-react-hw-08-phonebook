import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

const Button = ({ children, ...btnProps }) => {
  return <StyledBtn {...btnProps}>{children}</StyledBtn>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
