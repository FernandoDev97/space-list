import { useList } from "../../context/ListContent";
import { useLoading } from "../../context/LoadingContexts";
import { formatMs } from "../../utils/formatYTDuration";
import { Skeleton } from "../Skeleton";
import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container, ListContainer } from "./styles";

export function VideosList() {
  const { list, totalTime } = useList()
  const { isLoading } = useLoading()

  const fortattedTime = formatMs(totalTime)
  const skeletonArray = new Array(4).fill('')

  return (
    <Container>
      <header>
        <Title>Videos in list</Title>
        <span>Total time: {fortattedTime}</span>
      </header>
      <ListContainer>
        {isLoading && skeletonArray.map((i, index) => (
          <Skeleton key={index}/>
        ))}
        {!isLoading && list.map(video => (
          <VideoItem key={video.id} data={video}/>
        ))}
        {!isLoading && list.length <= 0 && <p>Your list is empty</p> }
      </ListContainer>
    </Container>
  );
}
