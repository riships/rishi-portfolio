import { DiJqueryLogo } from 'react-icons/di';
import { FaBootstrap, FaDatabase, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { TbBrandJavascript } from 'react-icons/tb';
const skills = [
  { Icon: FaHtml5, name: 'HTML5', color: "text-orange-600" },
  { Icon: IoLogoCss3, name: 'CSS3', color: "text-blue-500" },
  { Icon: TbBrandJavascript, name: 'JavaScript', color: "text-yellow-500" },
  { Icon: FaBootstrap, name: 'Bootstrap', color: "text-purple-600" },
  { Icon: DiJqueryLogo, name: 'jQuery', color: "text-[#0868AC]" },
  { Icon: FaReact, name: 'React.js', color: "text-cyan-400" },
  { Icon: FaNodeJs, name: 'Node.js', color: "text-green-600" },
  { Icon: FaDatabase, name: 'MongoDB, mySql', color: "text-teal-600" },
  { Icon: FaGithub, name: 'Git', color: "text-red-600" },
];

function TechStack() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Tech Stack</h2>
      <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map(({ Icon, name, color }) => (
          <div key={Icon} className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
            <Icon className={`w-12 h-12 ${color}`} />
            <p className="mt-4 font-medium text-gray-800">{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
