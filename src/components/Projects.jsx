import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

const projects = [
  {
    title: 'Gestion et suivi de chantiers',
    description: "Application pour centraliser la gestion des chantiers de construction : utilisateurs, travaux, approvisionnements et pointage des ouvriers.",
    tags: ['Laravel', 'React.js', 'Tailwind CSS', 'MySQL'],
    image: '/projects/chantiers.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Gestion de scolarité',
    description: "Application de gestion des inscriptions étudiants et du suivi des paiements mensuels de scolarité.",
    tags: ['Laravel', 'Blade', 'Alpine.js', 'Tailwind CSS'],
    image: '/projects/scolarite.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Gestion bancaire en Java',
    description: "Projet orienté objet pour la gestion de clients et de comptes courants/épargne, connecté à une base MySQL.",
    tags: ['Java', 'JavaFX', 'Hibernate', 'MySQL'],
    image: '/projects/bancaire.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'ToDo List en PHP',
    description: "Projet de gestion de tâches en PHP avec une base de données MySQL.",
    tags: ['PHP', 'MySQL'],
    image: '/projects/todolist.jpg',
    demoUrl: '#',
    codeUrl: '#',
  },
]

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
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover bg-navy-900"
              />
              <div className="p-6">
                <h4 className="font-bold text-navy-900 mb-2">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoUrl} className="text-accent-600 text-sm font-medium inline-flex items-center gap-1 hover:underline">
                    Démo <ExternalLink size={14} />
                  </a>
                  <a href={project.codeUrl} className="text-gray-500 text-sm font-medium inline-flex items-center gap-1 hover:underline">
                    Code <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}