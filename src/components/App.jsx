import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <>
    <Heading />
    {notes.map(note => (<Note key={note.key} title={note.title} content={note.content}/>))}
    <Footer />
    
    </>
  );
}

export default App;