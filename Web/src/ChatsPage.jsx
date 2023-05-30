
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
      <div style={{height: "100vh", width: "100vw"}}>
      <PrettyChatWindow 
        projectId="3349196a-211b-48b5-8769-b00a6a3796a6"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
      </div>
    )
  };
  export default ChatsPage;