import { FaGithub } from 'react-icons/fa6'
import { MdYard } from 'react-icons/md';


const projects = [
  {
    title: "Gestion et suivi de chantiers",
    description:
      "Application web de gestion des chantiers de construction permettant de centraliser les opérations quotidiennes, de suivre les travaux, les approvisionnements et le pointage des ouvriers : Cas de Dima Groupe .",

    features: [
      "Gestion des utilisateurs et des rôles",
      "Gestion et suivi des travaux",
      "Gestion des approvisionnements et des réceptions",
      "Suivi du pointage des ouvriers",
      "Suivi des dépenses et des coûts",
    ],

    stack: [
      "Laravel",
      "PHP",
      "React.js",
      "MySQL",
      "Tailwind CSS",
      "Git",
      "Docker",
    ],

    repoUrl: "https://github.com/sowELGA",
  },

  {
    title: "Gestion de scolarité",
    description:
      "Application web facilitant la gestion des inscriptions, des dossiers étudiants et le suivi des paiements mensuels de scolarité.",

    features: [
      "Gestion des inscriptions et des dossiers étudiants",
      "Enregistrement et suivi des paiements mensuels",
      "Gestion des années scolaires et des classes",
    ],

    stack: [
      "Laravel",
      "Blade",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
    ],

    repoUrl: "https://github.com/sowELGA",
  },

  {
    title: "Gestion bancaire en Java",
    description:
      "Application bancaire orientée objet permettant de gérer les clients et les comptes courants et d'épargne, avec persistance des données.",

    features: [
      "Gestion des clients",
      "Gestion des comptes courants et d'épargne",
      "Interface graphique avec JavaFX et SceneBuilder",
      "Connexion à une base de données MySQL",
    ],

    stack: [
      "Java",
      "JavaFX",
      "JPA / Hibernate",
      "MySQL",
      "SceneBuilder",
    ],

    repoUrl: "https://github.com/sowELGA",
  },

  {
    title: "Gestion de stock et de boutique",
    description:
      "Application web de gestion commerciale permettant d'administrer les produits, les catégories, les clients et les commandes, avec un suivi des stocks.",

    features: [
      "Gestion des produits et des catégories",
      "Gestion des clients",
      "Création et suivi des commandes",
      "Validation des commandes selon le stock disponible",
      "Gestion des utilisateurs avec rôles administrateur et employé",
      "Architecture MVC pour organiser le code",
    ],

    stack: [
      "PHP",
      "MySQL",
      "PDO",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Architecture MVC",
    ],

    repoUrl:
      "https://github.com/sowELGA/GestionStock_Boutique_FLD",
  },

  {
    title: "ToDo App — Gestion de tâches",
    description:
      "Application web de gestion de tâches personnelles avec création de compte, authentification et suivi de l'état d'avancement des tâches.",

    features: [
      "Inscription et connexion des utilisateurs",
      "Ajout et affichage des tâches",
      "Suppression des tâches",
      "Modification du statut des tâches",
      "Protection contre les injections SQL",
      "Hachage et vérification des mots de passe",
      "Gestion des sessions utilisateur",
    ],

    stack: [
      "PHP",
      "MySQL",
      "PDO",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    repoUrl: "https://github.com/sowELGA/ToDo_APP",
  },
  
  {
    title: "Portfolio personnel",
    description:
      "Portfolio développeur présentant mon parcours, mes compétences techniques et mes réalisations à travers une interface web moderne et responsive.",

    features: [
      "Présentation du profil et du parcours professionnel",
      "Mise en valeur des projets réalisés",
      "Présentation des compétences techniques",
      "Interface responsive adaptée aux différents écrans",
    ],

    stack: [
      "React.js",
      "Tailwind CSS",
      
    ],

    repoUrl: "https://github.com/sowELGA/mon-portfolio",
  },

];

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-600 mb-2">
            Projets
          </h2>
          <h3 className="text-3xl font-bold text-navy-900">Réalisations récentes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-navy-900 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Fonctionnalités
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Stack technique
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-accent-600 text-sm font-medium hover:underline"
              >
                <FaGithub size={16} /> Code source
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}