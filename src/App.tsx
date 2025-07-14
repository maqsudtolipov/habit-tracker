import {Button} from "@/components/ui/button.tsx";

function App() {
  return (
    <main className="min-h-screen px-32 pt-48">
      <div className="bg-blue-100 px-4 py-6 rounded-2xl outline-2 outline-blue-300">
        <p className='mb-1'>Do you want to hear about the latest news?</p>
        <Button>Take Me 🤩</Button>
      </div>
    </main>
  );
}

export default App;
