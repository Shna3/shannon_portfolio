function Projects() {
  return (
    <div>
      <h1>Mes Projets</h1>

      <div className="project">
        <h2>Application web de recherche de logement spécialisée PMR</h2>
        <p>
            De septembre 2025 à avril 2026
        </p>
        <p>
            Un projet technique en équipe d'une durée d'un an qui est en cours.
            À partir de la problématique "La difficulté à obtenir une logement adapté à chacun",
            mon groupe et moi avons décidé de développer une application web
            de recherche de logement. Cette application viserait spécifiquement les personnes à mobilité réduite,
            qui ont des besoins précis en matière de logement.
            L'application n'a pas encore été déployé.
        </p>

        <p>
            Nous avons réfléchi au design et aux besoins d'une PMR pour créer une application
            contenant les informations intéressantes et les filtres les plus pertinents,
            comme la prise en compte des services (hôpitaux, commerces, transports en commun facile d'accès) 
            aux alentours du logement.
        </p>

        <p>
            Nous developpons l'application avec React et Vite pour le frontend, 
            avec Django et Python pour le backend.
            Nous avons découvert ces outils pour la première fois dans le cadre de ce projet,
            donc une partie d'autoformation technique a été nécessaire avant de pouvoir commencer à développer.
            Nous utilisons Gitlab pour mettre en commun le code et assurer le développement progressif du projet.
        </p>

        <p>
            Suivis par un mentor, nous appliquons une méthodologie rigoureuse pour mener à bien le projet.
            Nous utilisons des outils de communications (Teams) et de gestion de projets (Trello).
        </p>

        <p>
            J'ai donc pu m'autoformer à React et Django, et j'ai développé la première version de nos filtres.
        </p>

        
        <a href="https://github.com/your-username/project1" target="_blank">
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h2>Conception de composants programmables et langage HDL</h2>
        <p>
            D'octobre à décembre 2025
        </p>
        <p>
            Le but de ce mini projet en groupe de deux
            était d'implémenter une communication série entre une carte FPGA et un ordinateur.
            Ensuite, nous devions contrôler un servomoteur depuis un PC en utilisant la communication série,
            puis récupérer les données d’un télémètre à ultrasons de la même façon.
        </p>

        <p>
            Nous avons implémenté la communication série en utilisant une IP UART
            que nous avons écrit en VHDL, pour recevoir et envoyer des messages entre la FPGA depuis l'ordinateur.
        </p>


        <p>
            Puis nous avons utilisé la communication série implémentée
            pour contrôler un servomoteur depuis l'ordinateur.
            Le but était de taper un angle dans l'ordinateur, d'envoyer l'angle sur le FPGA
            qui traduit cet angle en une pulsion d'une durée appropriée,
            puis d'envoyer cette pulsion au servomoteur qui tourne dans l'angle donné.

        </p>

        <p>
            Enfin nous avons fait en sorte que la FPGA active un télémètre à ultrasons,
            qui renvoie la durée mesurée par le télémètre sur la FPGA. 
            La FPGA calcule la distance séparant le télémètre et un objet à partir de cette durée.
            Cette distance est envoyée et afficher sur l'ordinateur.
        </p>

        <p>  
            Nous avons testé le fonctionnement de nos codes en faisant des simulations sur ModelSim,
            puis en implémentant le circuit sur le FPGA à partir de Quartus.
        </p>
      </div>

      <div className="project">
        <h2>Optimisation logistique quantique</h2>
        <p>
            De janvier à juillet 2025
        </p>
        <p>
          Ce projet en groupe d'une durée d'un semestre s'est déroulé
          lors de mon semestre d'étude à l'international à Amsterdam,
          pendant lequel j'ai étudié l'informatique quantique appliquée.
        </p>

        <p>
            Le but de ce projet était d'implémenter une solution quantique d'optimisation visant à réduire
            les émissions de CO2 engendrées par le transport de matériaux et pièces dans une chaîne logistique industrielle.
            C'était un problème d'opimisation combinatoire semblable à celui du voyageur de commerce.
        </p>

        <p>
            Nous avons d'abord implémenté une solution classique avec PuLP (API Python) en utilisant la programmation linéaire en nombres entiers.
            Puis, nous avons recherché et implémenté une solution quantique avec Qiskit
            (librairie Python dédiée à l'informatique quantique).
            Nous avons choisi une variation de l'algorithme d'optimisation quantique nommé QAOA.
            Enfin nous avons testé et comparé les deux solutions,
            pour savoir quelle était las plus efficace (complexité, fiabilité des résultats, temps d'exécution, évolutivité).
        </p>

        <p>
            Nous étions supervisés par un mentor et faisions des présentations sur l'avancé du projet à chaque fin de sprint.
            Ce projet m'a appris l'importance de la communication et de l'avancée progressive lors d'un projet
            assez long comme celui-ci.
        </p>
      </div>

      <div className="project">
        <h2>Projet à RSE : Vidéos d'information pour l'étude à l'international</h2>
        <p>
            De janvier à juin 2024
        </p>
        <p>
          Ce projet en groupe d'une durée d'un semestre consistait en la création de contenu vidéo
          sur les destinations d'étude à l'internationale proposées par l'ESIEA.
          Le but était d'informer les étudiants qui n'avaient pas encore d'expérience à l'international sur les différentes destinations pour les aider à faire leur choix.
          Notre commanditaire était l'association internationale de l'école, qui prévoyait de publier les vidéos sur ses réseaux sociaux.
        </p>

        <p>
            Nous avons d'abord trouvés quelques étudiants et anciens élèves volontaires étant déjà partis à l'international dans différentes destinations.
            Nous les avons ensuite interviewés un par un sur leur propre expérience à l'international.
            Nous voulions en savoir plus sur les enseignements, le logement, la culture, etc.
            Puis nous avons pu monter quelques quelques courtes vidéos portant sur plusieurs destinations.
        </p>
      </div>

      <div className="project">
        <h2>Projet à RSE : "Faim 0"</h2>
        <p>
            De septembre 2022 à juin 2023
        </p>
        <p>
          Ce projet en groupe d'une durée d'un an s'est basé sur l'un des
          17 objectifs du développement durable de l'ONU : "Faim zero".
          Le but était d'aider des personnes dans le besoin à se nourrir.
        </p>

        <p>
          Nous avons organisé quelques collectes de nourriture dans des supermarchés
          que nous avons pu redistribuer à des familles dans le besoin, avec l'aide de la ville d'Ivry-sur-Seine.
          Nous avons aussi organisé quelques distributions de nourriture à des sans-abris dans Paris.
        </p>

        <p>
            Lors de ce stage, j'ai pu découvrir que les actions prises pour aider les personnes dans le besoin
            demandent de l'organisation et de la rigueur. Avant de faire la moindre action,
            nous avons longuement réfléchi avec notre mentore, sur les besoins des personnes que nous voulions viser,
            sur la législation concernant de telles actions, sur les éléments dont nous avions besoin.
        </p>
      </div>
    </div>
  );
}

export default Projects;
