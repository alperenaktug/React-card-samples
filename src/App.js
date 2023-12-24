import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım </p>
        </div>
      </section>

      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quane,
      tempore cumqu accusantium ad, tenetur laborum amnis praesentium errorodio
      earum molestiae! Tempore qum a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap}
              title="Bootstrap 5"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quane,
      tempore cumqu accusantium ad, tenetur laborum amnis praesentium errorodio
      earum molestiae! Tempore qum a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
          <div className="column">
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quane,
      tempore cumqu accusantium ad, tenetur laborum amnis praesentium errorodio
      earum molestiae! Tempore qum a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
          <div className="column">
            <Course
              image={KompleWeb}
              title="Kompleweb"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quane,
      tempore cumqu accusantium ad, tenetur laborum amnis praesentium errorodio
      earum molestiae! Tempore qum a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
