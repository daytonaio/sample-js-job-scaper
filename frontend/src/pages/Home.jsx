import Feature from "../components/Feature";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Landing />
      <Feature />
    </div>
  );
}
