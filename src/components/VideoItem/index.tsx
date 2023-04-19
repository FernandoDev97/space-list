import { Button, Container, Details, Thumb } from "./styles";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";

interface VideoProps {
  addMode?: boolean;
}

export function VideoItem({ addMode = false }: VideoProps) {
  return (
    <Container>
      <Thumb imgUrl="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg" />
      <Details>
        <strong title="Titulo do video">Titulo do video</strong>
        <div>
          <div>
            {addMode ? (
              <Button>
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
            15:35
          </span>
        </div>
      </Details>
    </Container>
  );
}
