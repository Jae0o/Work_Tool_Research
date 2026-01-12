import "./App.scss";
import { Flow } from "./lib/containers";
import { initialEdges, initialNodes } from "./lib/constants";

const App = () => {
  return (
    <main className="app">
      <section className="app__section">
        <Flow
          initialNodes={initialNodes}
          initialEdges={initialEdges}
        />
      </section>
    </main>
  );
};

export default App;
