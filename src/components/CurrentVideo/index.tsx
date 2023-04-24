import { useList } from "../../context/ListContent";
import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container } from "./styles";

export function CurrentVideo() {
  const { currentVideo } = useList()

  return (
    <Container>
      <Title>Current Video</Title>
      {currentVideo?.id ? <VideoItem data={currentVideo} addMode /> : <p>No video is currently open</p> }
    </Container>
  );
}
