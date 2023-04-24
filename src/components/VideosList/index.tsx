import { useList } from "../../context/ListContent";
import { useLoading } from "../../context/LoadingContexts";
import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container, ListContainer } from "./styles";

export function VideosList() {
  const { list } = useList()
  const { isLoading } = useLoading()

  return (
    <Container>
      <header>
        <Title>Videos in list</Title>
      </header>
      <ListContainer>
        {!isLoading && list.map(video => (
          <VideoItem key={video.id} data={video}/>
        ))}
      </ListContainer>
    </Container>
  );
}
