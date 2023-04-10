import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

export default function Button({ children, ...btnProps }) {
  return <StyledBtn {...btnProps}>{children}</StyledBtn>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
