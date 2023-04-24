import { Button, Container, Details, Thumb } from "./styles";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";
import { useList } from "../../context/ListContent";

export interface IVideo {
  docId?: string;
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  durationMs: number;
}

interface VideoProps {
  addMode?: boolean;
  data: IVideo;
}

export function VideoItem({data, addMode = false }: VideoProps) {

  const { createListItem, list } = useList()

  async function addCurrentVideo () {
    await createListItem(data)
  }

  const alreadyExiste = list.some(video => video.id === data.id)

  return (
    <Container>
      <Thumb imgUrl={data.thumbnail} />
      <Details>
        <strong title={data.title}>{data.title}</strong>
        <div>
          <div>
            {addMode ? (
              <Button onClick={addCurrentVideo} disabled={alreadyExiste}>
                <RiAddCircleLine />
                Add to list
              </Button>
            ) : (
              <>
                <Button>
                  <BsFillPlayFill />
                  Play
                </Button>
                <FaTrashAlt size={12} />
              </>
            )}
          </div>
          <span>
            <AiOutlineClockCircle />
            {data.duration}
          </span>
        </div>
      </Details>
    </Container>
  );
}
