import { HiOutlineEmojiSad } from 'react-icons/hi';
import { Wrapper, Title, Text } from './NotFound.styled';

export default function NotFound() {
  return (
    <Wrapper>
      <Title>Error 404</Title>
      <Text>
        Oops, the page you are looking for may have been moved, deleted, or
        possibly never existed :(
      </Text>
      <HiOutlineEmojiSad />
    </Wrapper>
  );
}
