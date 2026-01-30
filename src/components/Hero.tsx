import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export function Hero() {
  const { t } = useLanguage();
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.5
              }}
              className="flex items-center gap-2 mb-6">

              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium border border-cyan-500/20">
                {t('hero.available')}
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.1
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">

              {t('hero.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                {t('hero.title2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">

              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }}
              className="flex flex-wrap gap-4">

              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center gap-2 group">

                {t('hero.viewWork')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">

                {t('hero.contactMe')}
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}
              className="mt-12 flex items-center gap-6 text-slate-500 dark:text-slate-400">

              <a href="https://github.com" className="hover:text-cyan-500 transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="hover:text-cyan-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-cyan-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" className="hover:text-cyan-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:brahimalaz51@gmail.com"
                className="hover:text-cyan-500 transition-colors"
                aria-label="Email">

                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square max-w-[520px] ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl -rotate-6 scale-110" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/profile-v4.jpg"
                  alt="Brahim Al-az"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}