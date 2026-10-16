import {
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiAlpinedotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiCplusplus,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { VscServerProcess } from 'react-icons/vsc'
import { Workflow, Database, RefreshCw, Code2 } from 'lucide-react'

const skillGroups = [
  {
    category: 'Développement web',
    items: [
      { name: 'Laravel', icon: SiLaravel },
      { name: 'React.js', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Alpine.js', icon: SiAlpinedotjs },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    category: 'Programmation & Conception',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: Code2 },
      { name: 'WinDev', icon: Code2 },
      { name: 'UML', icon: Workflow },
      { name: 'Merise', icon: Database },
    ],
  },
  {
    category: 'Outils & Système',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'CI/CD', icon: RefreshCw },
      { name: 'Windows Server', icon: VscServerProcess },
      { name: 'Linux', icon: SiLinux },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-600 mb-2">
            Compétences
          </h2>
          <h3 className="text-3xl font-bold text-navy-900">Ce que je maîtrise</h3>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h4 className="font-bold text-navy-900 mb-4">{group.category}</h4>
              <div className="flex flex-wrap gap-4">
                {group.items.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md hover:border-accent-500 transition-all"
                  >
                    <Icon className="text-accent-600" size={20} />
                    <span className="text-sm font-medium text-gray-700">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}