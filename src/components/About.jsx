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
            Titulaire d'une Licence en Génie Logiciel obtenue avec la mention Très Bien et
            major de promotion, je m'intéresse au développement d'applications web et à la
            conception de systèmes d'information. Rigoureux et motivé, je souhaite contribuer
            à la réalisation de solutions fiables, maintenables et adaptées aux besoins des
            utilisateurs.
          </p>
          <p>
            Curieux et polyvalent, j'aime autant le développement web que l'administration
            système et réseau, avec un fort intérêt pour l'intelligence artificielle.
          </p>
        </div>
      </div>
    </section>
  )
}