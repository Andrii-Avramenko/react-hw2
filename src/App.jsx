import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Button";

const messageText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni debitis dolorem! Culpa pariatur aperiam perferendis velit vitae reiciendis accusantium, animi, molestiae neque nostrum obcaecati cupiditate sed vel voluptatum accusamus!"

function App() {
  function handleClick() {
    console.log('Clicked');
  }

  return (
    <>
      <Greeting name="Andrii"></Greeting>
      <Message text={messageText}></Message>
      <Button onClick={handleClick}></Button>
    </>
  );
}

export default App;