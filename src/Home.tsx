import profilePic from "./assets/PHOTO.png";

function Home() {
  return (
    <div>

      <img src={profilePic} alt="Shannon portrait" style={{ width: "150px", borderRadius: "50%" }} />

      <h1>Bienvenue, je suis Shannon Assouly</h1>
      <p>
        Étudiante en 4ème année à l’ESIEA, je prépare un diplôme d’ingénieur du numérique.
        La majeure que j’étudie sont les systèmes embarqués et autonomes.
      </p>

      <p>
        Je suis actuellement en recherche de stage technique de 4ème année d’une durée de 4 mois à partir d’avril 2026.
        Je souhaite mettre mes compétences au service d’un projet concret.
      </p>

      <p>
        Ma formation m’a permis de découvrir de nombreux aspects liés au numérique et au métier d’ingénieur,
        aussi bien d’un point de vue technique qu’humain. 
        J’ai pu entre autres étudier les architectures matérielles (bus de terrain, FPGA, langage HDL) dans le cadre de ma majeure.
        J’ai également acquis des connaissances en algorithmique et en programmation.
      </p>

      <p>
        Mes deux semestres d’expérience à l’international et mes projets en responsabilité sociétale m’ont appris à travailler en équipe de manière méthodique et organisée,
        à documenter mes démarches et à communiquer avec clarté.
      </p>

      <p>
        Dans mon travail, je prends le temps de comprendre les contraintes avant de proposer une solution, ce qui permet d’obtenir des résultats fiables.
        Mon objectif au terme de mon cursus est d’appliquer et approfondir mes compétences de manière avisée et calculée, pour contribuer de manière bénéfique à la société.
      </p>
    </div>
  );
}

export default Home;
