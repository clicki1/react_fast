import WayToTeach from "./WayToTeach"
import { ways } from "../data"

export default function TeachingSection(contentType){
    return (
        <section>
        <h3>Our steps</h3>
        <ul>
          {ways.map(way =>  <WayToTeach key={way.title} {...way} />)}
        </ul>
      </section>
      
    );
}