import { ArrowDownOutlined, CodeOutlined, ApiOutlined, TeamOutlined, BellOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'antd';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import avatarImage from '../../assets/avatar.jpg';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
    const heroTextRef = useRef(null);
    const heroContainerRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const processSectionRef = useRef(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Hero Text Animation (ScrollTrigger Based)
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroTextRef.current,
                    start: 'top center', // 开始位置
                    end: 'bottom center', // 结束位置
                    toggleActions: 'play reverse play reverse', // 滚动到底部再滚回来时也能重新触发
                }
            });

            heroTl
                .fromTo('.hero-avatar',
                    { x: -50, opacity: 0, scale: 0.9 },
                    { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
                )
                .fromTo(
                    '.hero-text-line',
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
                    '-=0.5'
                );

            // 2. About Section Animation (On Scroll)
            const aboutTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutSectionRef.current,
                    start: 'top center', // 当 section 顶部到达视口中间时触发
                    end: 'bottom center',
                    toggleActions: 'play reverse play reverse'
                }
            });

            aboutTl
                .fromTo('.about-avatar',
                    { x: -50, opacity: 0, scale: 0.9 },
                    { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
                )
                .fromTo('.about-text',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
                    '-=0.5'
                );

            // 3. Skills Section Animation
            const skillsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsSectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play reverse play reverse'
                }
            });

            skillsTl.fromTo('.service-card',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );

            // 4. Process Section Animation
            const processTl = gsap.timeline({
                scrollTrigger: {
                    trigger: processSectionRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play reverse play reverse'
                }
            });

            processTl.fromTo('.process-step',
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
            );

        }, heroContainerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactClick = () => {
        setIsContactModalOpen(true);
    };

    const handleModalClose = () => {
        setIsContactModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-gray-700">
                <div className="flex justify-between items-center p-6 md:p-6">
                    {/* Logo */}
                    <div className="text-xl font-light tracking-wider text-gray-300">Hawtin</div>

                    {/* 导航栏右侧 */}
                    <div className='flex items-center gap-8'>
                        {/* Navigation Menu */}
                        <nav className="hidden md:flex items-center gap-8 text-gray-300">
                            <button
                                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
                                onClick={() => scrollToSection('home-section')}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about-section')}
                                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('skills-section')}
                                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('process-section')}
                                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
                            >
                                Service Process
                            </button>
                        </nav>

                        {/* Buy Templates Button */}
                        <button className="px-4 py-2 border border-gray-300 rounded text-sm font-light tracking-wide text-gray-300 hover:bg-gray-800/50 transition-colors cursor-pointer">
                            Contact Me
                        </button>
                    </div>


                </div>
            </header>

            {/* 主体内容 */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-6 relative" ref={heroContainerRef}>
                {/* Hero Section - Left Text, Right Avatar */}
                <div ref={heroTextRef} id="home-section" className="min-h-screen md:h-[calc(100vh)] flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-12 py-8 md:py-0">
                    
                    {/* 移动端适配占位 */}
                    <div className='h-[87px] md:hidden'></div>

                    {/* Left Side - Text Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] tracking-tight overflow-hidden">
                            <div className="hero-text-line mb-4 md:mb-6">
                                <span className="text-white">Professional</span>{' '}
                                <span className="text-blue-400">consulting</span>{' '}
                                <span className="text-white">for your software & WEB.</span>
                            </div>
                        </h1>
                        <p className="hero-text-line text-base md:text-lg text-gray-300 font-light leading-relaxed">
                            Hey there! I'm Hawtin. A full stack developer focussed on coding and deployment solutions.
                        </p>
                        <div className="hero-text-line flex flex-col sm:flex-row gap-4 mt-6">
                            <button 
                                onClick={handleContactClick}
                                className="px-6 py-3 bg-blue-400 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors cursor-pointer"
                            >
                                Let's talk
                            </button>
                            <button className="px-6 py-3 text-white font-medium hover:opacity-70 transition-opacity cursor-pointer">
                                See case studies
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Avatar Image */}
                    <div className="flex-shrink-0 md:flex-1 flex justify-center md:justify-end items-center">
                        <div className="hero-avatar relative w-[80vw] md:w-full max-w-[100vw] md:max-w-lg">
                            <div className="relative overflow-hidden rounded-full aspect-square">
                                <img
                                    src={avatarImage}
                                    alt="Hawtin"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 hidden md:block md:w-full md:h-full rounded-full border-2 border-white/20 -z-0 scale-110"></div>
                        </div>
                    </div>
                </div>

                {/* 个人介绍部分 */}
                <div ref={aboutSectionRef} id="about-section" className="h-[calc(100vh)] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                    {/* Avatar Circle */}
                    <div className="about-avatar relative shrink-0 hidden md:block">
                        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
                            <img
                                // src="https://api.dicebear.com/9.x/micah/svg?seed=Ning&backgroundColor=b6e3f4"
                                src={avatarImage}
                                alt="Hawtin"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative circle behind */}
                        <div className="absolute -top-4 -left-4 w-full h-full rounded-full border border-white/20 -z-0 scale-110"></div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-2xl space-y-8">
                        <p className="about-text text-gray-500 text-sm tracking-wide font-medium">
                            我相信出色的程序开发来自于关注问题的本质，而不是死板的套用。
                        </p>

                        <h2 className="about-text text-4xl md:text-6xl font-bold leading-tight text-white">
                            我是一名软件开发工程师 <br />
                            <span className="text-white text-3xl">Full Stack Developer</span>
                        </h2>

                        <div className="about-text space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
                            <p>
                                我是一名软件工程师，目前专攻雷达数据分析、机器视觉、网页开发、MES、物联网开发、数据可视化等领域。
                                在进行项目开发的过程中，我不断思考如何将技术与业务需求相结合，抓寻需求的本质，尝试用简单的方法解决复杂的问题。
                            </p>
                            <p>
                                在工作中，我时常发现，复杂的解决方案并不一定是最实用的，而简单的方法却能带来意想不到的效果。但是需要我们深入理解问题的本质，在制定方案前，充分的沟通和对问题的分析，才是重中之重。
                            </p>
                            <p>
                                致力于成为一名独立开发者，拥有属于自己的1000个忠实粉丝。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 服务卡片部分 */}
                <div ref={skillsSectionRef} id="skills-section" className="min-h-[calc(100vh)] py-20 md:py-32 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
                        {/* Left Side - Text Content */}
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Things I do for you that simply make your software <span className='text-blue-400'>better</span>.
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Vivamus elementum semper nisi. Maecenas ullamcorper, dui et feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.
                            </p>
                            <button className="px-6 py-3 border border-gray-600 rounded-lg text-white font-medium hover:bg-gray-800/50 transition-colors cursor-pointer mt-4">
                                See all services
                            </button>
                        </div>

                        {/* Right Side - Service Cards Grid */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 - General code (Highlighted) */}
                            <div className="service-card bg-blue-400/10 border border-blue-400/30 rounded-xl p-6 hover:bg-blue-400/20 transition-colors">
                                <div className="mb-4">
                                    <CodeOutlined className="text-3xl text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">架构设计</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    规划系统结构和运行方式，让系统可扩展、可靠、高性能。提前规避风险，减少后期维护成本。
                                </p>
                                {/* <Link to="/articles" className="text-blue-400 text-sm font-medium hover:underline">
                                    Read more →
                                </Link> */}
                            </div>

                            {/* Card 2 - Code systems */}
                            <div className="service-card bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                                <div className="mb-4">
                                    <ApiOutlined className="text-3xl text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">代码重构</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    对现有代码进行系统化的结构优化，通过改进内部设计、消除重复、明确职责，从而提高软件的可维护性与质量。
                                </p>
                                {/* <Link to="/articles" className="text-gray-300 text-sm font-medium hover:underline">
                                    Read more →
                                </Link> */}
                            </div>

                            {/* Card 3 - DevOps */}
                            <div className="service-card bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                                <div className="mb-4">
                                    <TeamOutlined className="text-3xl text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">定制开发</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    根据特定的业务需求、流程特点和使用场景，量身设计并开发软件系统或功能模块，实现符合个性化要求的解决方案。
                                </p>
                                {/* <Link to="/articles" className="text-gray-300 text-sm font-medium hover:underline">
                                    Read more →
                                </Link> */}
                            </div>

                            {/* Card 4 - Agile consulting */}
                            <div className="service-card bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                                <div className="mb-4">
                                    <BellOutlined className="text-3xl text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">维护保障</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    对交付产品进行持续的维护和优化，确保系统的稳定性和性能，延长产品生命周期。
                                </p>
                                {/* <Link to="/articles" className="text-gray-300 text-sm font-medium hover:underline">
                                    Read more →
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 流程步骤部分 */}
                <div ref={processSectionRef} id="process-section" className="min-h-[calc(100vh)] py-20 md:py-32 flex flex-col justify-center">
                    <div className="space-y-12 md:space-y-18">
                        {/* Header */}
                        <div className="text-center space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                                Proven process for success
                            </h2>
                            <p className="text-gray-400 text-lg ">
                                I will help you on every step of the journey
                            </p>
                        </div>

                        {/* Process Steps */}
                        <div className="relative">
                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0 relative z-10">
                                {/* Step 1 */}
                                <div className="process-step text-center">
                                    <div className="text-6xl font-bold text-gray-500 mb-6">01</div>
                                    <div className='border-1 h-0.5 border-gray-700 mb-6 relative'>
                                        <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-600"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Contact me</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="process-step text-center">
                                    <div className="text-6xl font-bold text-gray-500 mb-6">02</div>
                                    <div className='border-1 h-0.5 border-gray-700 mb-6 relative'>
                                        <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-600"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Research</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="process-step text-center">
                                    <div className="text-6xl font-bold text-gray-500 mb-6">03</div>
                                    <div className='border-1 h-0.5 border-gray-700 mb-6 relative'>
                                        <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-600"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Work</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="process-step text-center">
                                    <div className="text-6xl font-bold text-gray-500 mb-6">04</div>
                                    <div className='border-1 h-0.5 border-gray-700 mb-6 relative'>
                                        <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-600"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Test & results</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Donec sodales sagittis magna. Cras dapibus. Praesent ut ligula non mi varius sagittis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 底部 */}
            <footer className="border-t border-gray-800 py-6 md:py-4">
                <div className="max-w-[1400px] mx-auto px-6 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
                        {/* Left Side - Logo & Copyright */}
                        <div className="space-y-2">
                            <div className="text-xl font-light tracking-wider text-gray-300">Hawtin</div>
                            <p className="text-sm text-gray-500 font-light">
                                © {new Date().getFullYear()} Hawtin. All rights reserved.
                            </p>
                        </div>

                        {/* Right Side - Navigation Links */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 text-sm font-light">
                                <button
                                    onClick={() => scrollToSection('home-section')}
                                    className="text-left md:text-center hover:text-white transition-colors cursor-pointer"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection('about-section')}
                                    className="text-left md:text-center hover:text-white transition-colors cursor-pointer"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('skills-section')}
                                    className="text-left md:text-center hover:text-white transition-colors cursor-pointer"
                                >
                                    Services
                                </button>
                                <button
                                    onClick={() => scrollToSection('process-section')}
                                    className="text-left md:text-center hover:text-white transition-colors cursor-pointer"
                                >
                                    Service Process
                                </button>
                            </nav>
                            <button
                                onClick={handleContactClick}
                                className="px-4 py-2 border border-gray-600 rounded text-sm font-light tracking-wide text-gray-300 hover:bg-gray-800/50 hover:border-gray-500 transition-colors cursor-pointer"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* 联系方式 Modal */}
            <Modal
                title="联系方式"
                open={isContactModalOpen}
                onCancel={handleModalClose}
                footer={null}
                centered
            >
                <div className="space-y-4 py-4">
                    <div className="flex items-center gap-3">
                        <span className="text-gray-600 font-medium min-w-[80px]">微信号：</span>
                        <span className="text-gray-800">your_wechat_id</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-600 font-medium min-w-[80px]">邮箱：</span>
                        <span className="text-gray-800">your_email@example.com</span>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Landing;
