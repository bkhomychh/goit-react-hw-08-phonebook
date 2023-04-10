import { Rings } from 'react-loader-spinner';
import { Backdrop } from './ContentLoader.styled';

export default function ContentLoader() {
  return (
    <Backdrop>
      <Rings radius="6" visible={true} ariaLabel="rings-loading" />
    </Backdrop>
  );
}
