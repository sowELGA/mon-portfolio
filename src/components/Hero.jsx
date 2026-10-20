import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="pt-32 pb-20 bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent-500 font-semibold text-sm tracking-widest uppercase mb-4">
            {'<elga & code/>'}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Algassimou Sow — Ingénieur Logiciel passionné par le développement web et des systèmes d'information fiables
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Licence en Génie Logiciel (mention Très Bien, major de promotion), je conçois des
            applications web complètes, du back-end à l'interface utilisateur.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors px-6 py-3 rounded-md font-semibold"
            >
              Voir mes projets <ArrowRight size={18} />
            </a>
            <a
              href="/cv-algassimou-sow.pdf"
              download="CV_Algassimou_Sow.pdf"
              className="inline-flex items-center gap-2 border border-gray-500 hover:border-white transition-colors px-6 py-3 rounded-md font-semibold"
            >
              Télécharger le CV <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem]">
            {/* Contour orange en arrière-plan, légèrement décalé */}
            <div
              className="absolute inset-0 bg-orange-400"
              style={{
                borderRadius: '73% 27% 68% 32% / 30% 62% 38% 70%',
              }}
            />
            {/* Photo avec la même forme blob, en premier plan */}
            <img
              src="/profile.jpg"
              alt="Algassimou Sow"
              className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover"
              style={{
                borderRadius: '73% 27% 68% 32% / 30% 62% 38% 70%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

voila recris tout
