import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Belo Horizonte"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    // O componente ListGroup é chamado com os "itens", "heading" e "função" que eu quiser!
    <div>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
