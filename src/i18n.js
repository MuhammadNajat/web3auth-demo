import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Toggle Theme',
            part2: 'About',
            part3: 'Home',
            part4: 'Welcome to the age of Web3!',
            part5: 'Wind is a team of designers, engineers, and founders which is dedicated to making borderless payments a reality for everyone. Their mission is to set people\'s money as free as the wind. Their mission is to empower creators, entrepreneurs and businesses of the new age to go beyond borders and limits.'
          }
        }
      },
      bn: {
        translation: {
          description: {
            part1: 'থীম পরিবর্তন',
            part2: 'আমাদের সম্পর্কে‌',
            part3: 'মূলপাতা',
            part4: 'ওয়েব থ্রি-র যুগে আপনাকে স্বাগতম!',
            part5: 'উইন্ড হল ডিযাইনার, প্রকৌশলী এবং প্রতিষ্ঠাতাদের একটি দল যেটা প্রত্যেকের জন্য যেকোনো সীমানাপ্রাচীরের ঊর্ধ্বে থেকে অর্থপ্রদানকে বাস্তবে পরিণত করার জন্য নিবেদিত৷ তাদের মিশন হল মানুষের অর্থ-সম্পদের মুক্তি ঘটানো, ঠিক মুক্ত বাতাসের মত। তাদের লক্ষ্য - নতুন যুগের নির্মাতা, উদ্যোক্তা এবং ব্যবসায়িকদের সীমানা এবং সীমা ছাড়িয়ে যেতে সক্ষম করা।'
          }
        }
      }
    }
  });
export default i18n;