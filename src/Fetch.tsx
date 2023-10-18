import React from "react";
import { Button } from "@chakra-ui/react";

const Fetch = () => {
  // Déclaration de variables
  const [isIdle, setIsIdle] = React.useState(true);

  // Code applicatif
  const fetchTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      // Succès
    });
  };

  // Rendu visuel
  return (
    <div>
      <Button>Fetch</Button> <br />
    </div>
  );
};

export default Fetch;
