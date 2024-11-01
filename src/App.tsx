import { useEffect, useState } from 'react';
import { Moon, Sun, Sparkles, Rocket, Brain, Clock, Code2, Zap, MessageSquare, ArrowRight } from 'lucide-react';

function App() {
    const [isDark, setIsDark] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const parallaxStyle = (speed) => ({
        transform: `translateY(${scrollY * speed}px)`,
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <button
                onClick={() => setIsDark(!isDark)}
                className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200"
            >
                {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-600" />}
            </button>

            {/* Hero Section */}
            <section className="min-h-screen relative overflow-hidden flex items-center">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20" style={parallaxStyle(0.2)}>
                        <Code2 className="w-24 h-24 text-blue-500" />
                    </div>
                    <div className="absolute top-40 right-40" style={parallaxStyle(0.3)}>
                        <Sparkles className="w-16 h-16 text-purple-500" />
                    </div>
                    <div className="absolute bottom-40 left-40" style={parallaxStyle(0.25)}>
                        <Rocket className="w-20 h-20 text-red-500" />
                    </div>
                </div>
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Rumi
                        </h1>
                        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
                            Платформа для быстрой разработки бизнес-приложений
                        </p>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                            Создавайте, тестируйте и запускайте приложения в 10 раз быстрее с помощью нашей low-code платформы
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="min-h-screen flex items-center bg-gray-100/50 dark:bg-gray-800/50">
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                            Проблемы современной разработки
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <Clock className="w-12 h-12 text-blue-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Длительные сроки</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Традиционная разработка занимает месяцы, что критично для быстро меняющегося рынка. Каждый день задержки - это упущенная возможность и потерянная прибыль.
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Высокие затраты</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Содержание команды разработчиков и оплата инфраструктуры требуют значительных инвестиций, которые не каждый бизнес может себе позволить.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="min-h-screen flex items-center">
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                            Наше решение
                        </h2>
                        <div className="space-y-8">
                            <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                                    Платформа быстрой разработки
                                </h3>
                                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center group">
                                        <Sparkles className="w-5 h-5 min-w-[24px] min-h-[24px] mr-3 text-blue-500 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                                        <div>
                                            <strong className="block text-gray-800 dark:text-white">Готовые компоненты</strong>
                                            Библиотека профессиональных UI компонентов для быстрой сборки интерфейсов
                                        </div>
                                    </li>
                                    <li className="flex items-center group">
                                        <Rocket className="w-5 h-5 min-w-[24px] min-h-[24px] mr-3 text-purple-500 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                                        <div>
                                            <strong className="block text-gray-800 dark:text-white">Автоматизация процессов</strong>
                                            Встроенные инструменты для автоматизации бизнес-процессов и интеграций
                                        </div>
                                    </li>
                                    <li className="flex items-center group">
                                        <Zap className="w-5 h-5 min-w-[24px] min-h-[24px] mr-3 text-yellow-500 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                                        <div>
                                            <strong className="block text-gray-800 dark:text-white">Мгновенное развертывание</strong>
                                            Публикация приложений в один клик с автоматическим масштабированием
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Integration Section */}
            <section className="min-h-screen flex items-center bg-gray-100/50 dark:bg-gray-800/50">
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <Brain className="w-16 h-16 mx-auto mb-8 text-purple-500" />
                        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
                            Искусственный интеллект
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                            ИИ-ассистент помогает создавать компоненты, оптимизировать код и предлагает улучшения в реальном времени
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Умные подсказки</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    ИИ анализирует ваш проект и предлагает оптимальные решения для улучшения производительности и пользовательского опыта
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Генерация кода</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Автоматическое создание компонентов и функциональности на основе ваших требований с учетом лучших практик
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center">
                <div className="container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <MessageSquare className="w-16 h-16 mx-auto mb-8 text-blue-500" />
                        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
                            Пройдите опрос для участия в бета-тестировании
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                            Ваше мнение важно для нас! Пройдите наш опрос, чтобы получить возможность протестировать наш продукт до его официального запуска.
                        </p>
                        <a
                            href="https://forms.yandex.ru/u/6724be8b3e9d08e2dedc8992/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                        >
                            Пройти опрос
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;