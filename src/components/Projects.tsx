import { ExternalLink, Github } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';
const projects = [
  {
    title: 'AI Agriculture System',
    description:
      'A smart farming dashboard that uses IoT data and AI to predict crop yields and optimize irrigation schedules for local farmers.',
    tags: ['Python', 'TensorFlow', 'React', 'IoT'],
    color: 'from-green-500 to-emerald-700',
    image: '/projects/ai_agri_system.png'
  },
  {
    title: 'Student E-commerce Hub',
    description:
      'A marketplace platform designed specifically for university students to buy, sell, and trade textbooks and electronics securely.',
    tags: ['Django', 'PostgreSQL', 'Bootstrap', 'Stripe'],
    color: 'from-blue-500 to-indigo-700',
    image: '/projects/student_ecommerce_hub.png'
  },
  {
    title: 'Academic Performance Tracker',
    description:
      'An analytics dashboard for students to track their grades, attendance, and predict future performance using historical data.',
    tags: ['React', 'Chart.js', 'Node.js', 'Express'],
    color: 'from-purple-500 to-pink-700',
    image: '/projects/academic_tracker.png'
  },
  {
    title: 'Kigali Transit App',
    description:
      'A mobile-first web application providing real-time bus schedules and route optimization for Kigali public transport.',
    tags: ['Flutter', 'Google Maps API', 'Firebase'],
    color: 'from-orange-500 to-red-700',
    image: '/projects/kigali_transit.png'
  }];

export function Projects() {
  const { t } = useLanguage();
  return (
    <Section id="projects">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2">
          {t('projects.badge')}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {t('projects.title')}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
          {t('projects.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) =>
          <div
            key={index}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

            {/* Project Image */}
            <div className="h-48 w-full relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity`} />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors"
                    aria-label="View Code">

                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-colors"
                    aria-label="View Live">

                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) =>
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700">

                    {tag}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>);

}