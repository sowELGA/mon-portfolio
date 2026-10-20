export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-600 mb-2">
            À propos
          </h2>
          <h3 className="text-3xl font-bold text-navy-900">Qui suis-je</h3>
        </div>
        <div className="md:col-span-2 text-gray-600 leading-relaxed space-y-4">
          <p>
            Titulaire d’une Licence en Génie Logiciel, obtenue avec la mention Très Bien 
            et le titre de major de promotion, je suis passionné par le développement logiciel, 
            la conception d’applications web et la création de systèmes d’information.
          </p>
          <p>
            Rigoureux, curieux et motivé, je m’intéresse à la conception de solutions fiables, 
            performantes et maintenables, adaptées aux besoins des utilisateurs. 
            Mon intérêt pour l’informatique s’étend également à l’administration des systèmes 
            et réseaux ainsi qu’à l’intelligence artificielle.
          </p>
          <p>
            Je suis constamment à la recherche de nouvelles opportunités pour mettre mes compétences 
            en pratique, relever des défis techniques et contribuer à des projets innovants. 
            Mon objectif est de continuer à apprendre et à évoluer dans le domaine du développement logiciel.
          </p>
        </div>
      </div>
    </section>
  )
}