import { Github, Linkedin, Mail, Heart, Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    {
      name: t('nav.about'),
      href: '#about'
    },
    {
      name: t('nav.projects'),
      href: '#projects'
    },
    {
      name: t('nav.skills'),
      href: '#skills'
    },
    {
      name: t('nav.contact'),
      href: '#contact'
    }];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com',
      label: 'Instagram'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://facebook.com',
      label: 'Facebook'
    }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Brahim<span className="text-cyan-500">.dev</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) =>
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors"
                  aria-label={social.label}>
                  {social.icon}
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-wider">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <a href="mailto:brahimalaz51@gmail.com" className="hover:text-cyan-500 transition-colors">
                  brahimalaz51@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>+250 793 895 959</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <span>Ndjamena, Tchad / Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Brahim Al-az Brahim. {t('footer.allRights')}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
            {t('footer.builtWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500" />{' '}
            using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>);

}