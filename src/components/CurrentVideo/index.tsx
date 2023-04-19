import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container } from "./styles";

export function CurrentVideo() {
  return (
    <Container>
      <Title>Current Video</Title>
      <VideoItem addMode />
    </Container>
  );
}
