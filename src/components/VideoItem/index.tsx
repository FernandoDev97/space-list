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

  const { createListItem, deleteListItem, list } = useList()

  async function addCurrentVideo () {
    await createListItem(data)
  }

  async function handleDelete () {
    if(!data?.docId) return;
    await deleteListItem(data.docId)
  }

  function openVideo() {
    chrome.tabs.create({
      url: `http://www.youtube.com/watch?v=${data.id}`
    })
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
                  <BsFillPlayFill onClick={openVideo}/>
                  Play
                </Button>
                <FaTrashAlt size={12} onClick={handleDelete} />
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
