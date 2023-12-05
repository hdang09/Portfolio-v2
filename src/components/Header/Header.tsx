import classNames from 'classnames/bind';
import { useEffect, useState } from 'preact/hooks';
import { HiDownload } from 'react-icons/hi';

import { RESUME_URL } from '@/config/constants';
import Container from '@/components/Container';
import Image from '@/components/Image';

import styles from './header.module.scss';

// classnames
const cn = classNames.bind(styles);

const Header = () => {
    const [scroll, setScroll] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 0) setScroll(true);
        else setScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    const downloadResume = () => {
        window.open(RESUME_URL);
    };

    return (
        <header className={cn('header')}>
            <Container>
                <div className={cn('header-inner', scroll && 'header-scrolled')}>
                    <a href="/" className={cn('logo')}>
                        hdang09
                    </a>

                    <nav>
                        <a href="#">Home</a>
                        <a href="#about-me">About me</a>
                        <a href="#projects">
                            Projects
                            <span className={cn('project-count')}>6</span>
                        </a>
                        <a href="#contact">Contact</a>
                        <a className={cn('nav-btn-link')} href="#">
                            <button
                                className={cn('action-btn', 'nav-btn')}
                                onClick={downloadResume}
                            >
                                <HiDownload />
                                <span>Resume</span>
                            </button>
                        </a>
                    </nav>

                    <div className={cn('header-btn')}>
                        <button className={cn('action-btn')} onClick={downloadResume}>
                            <HiDownload />
                            <span>Resume</span>
                        </button>
                    </div>
                </div>

                <Image
                    src="/components/stage-light.png"
                    alt="Stage light"
                    className={cn('stage-light')}
                />
            </Container>
        </header>
    );
};

export default Header;
