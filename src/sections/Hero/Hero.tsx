import classNames from 'classnames/bind';

import Container from '@/components/Container';
import FadeUp from '@/components/FadeUp';

import styles from './hero.module.scss';

// classnames
const cn = classNames.bind(styles);

const Hero = () => {
    return (
        <section className={cn('hero')}>
            <Container>
                <div className={cn('background')}>
                    <div className={cn('circles')}>
                        <div className={cn('circle', 'circle-1')} />
                        <div className={cn('circle', 'circle-2')} />
                        <div className={cn('circle', 'circle-3')} />
                    </div>

                    <div className={cn('lights')}>
                        <img
                            src="https://www.dimension.dev/build/q-37675410.png"
                            alt="Light"
                            className={cn('light', 'light-1')}
                        />
                        <img
                            src="https://www.dimension.dev/build/q-37675410.png"
                            alt="Light"
                            className={cn('light', 'light-2')}
                        />
                    </div>
                </div>

                <div className={cn('content')}>
                    <a href="mailto:contact@hdang09.tech" className={cn('badge')}>
                        <span>contact@hdang09.tech</span>
                    </a>

                    <div>
                        <FadeUp>
                            <h1 className={cn('title')}>Tran Hai Dang</h1>
                        </FadeUp>
                        <FadeUp delay={0.25}>
                            <h1 className={cn('title', 'main')}>Full-stack Developer</h1>
                        </FadeUp>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;