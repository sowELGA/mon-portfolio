import { Mail, Phone } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-500 mb-2">
          Contact
        </h2>
        <h3 className="text-3xl font-bold mb-4">Travaillons ensemble</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Un stage ou une opportunité à discuter ? N'hésitez pas à me contacter.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:algassimousow799@gmail.com"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors px-6 py-3 rounded-md font-semibold"
          >
            <Mail size={18} /> algassimousow799@gmail.com
          </a>
          <a
            href="tel:+22178526914"
            className="inline-flex items-center gap-2 border border-gray-500 hover:border-white transition-colors px-6 py-3 rounded-md font-semibold"
          >
            <Phone size={18} /> 78 526 91 04
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/algassimou-sow-321228373"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/sowELGA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}