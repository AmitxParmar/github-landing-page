import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
