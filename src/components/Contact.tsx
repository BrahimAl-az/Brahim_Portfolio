import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';
export function Contact() {
  const { t } = useLanguage();
  return (
    <Section id="contact" className="mb-20">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 block">
              {t('contact.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              {t('contact.desc')}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium hover:text-white transition-colors">
                    brahimalaz51@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium hover:text-white transition-colors">
                    +250 793 895 959
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium hover:text-white transition-colors">
                    Ndjamena, Tchad / Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-1">
                  {t('contact.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder={t('contact.formPlaceholderName')} />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1">
                  {t('contact.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder={t('contact.formPlaceholderEmail')} />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder={t('contact.formPlaceholderMsg')} />
              </div>
              <button
                type="button"
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                {t('contact.sendBtn')}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>);

}