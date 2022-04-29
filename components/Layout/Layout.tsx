import Image from 'next/image';
import Link from 'next/link';
import styles from './Layout.module.css';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: ReactNode;
};

type Radar = {
  path: string;
  name: string;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const title = 'NoA Ignite PL - Tech Radar Apr 2022\n';
  const radars: Radar[] = [{ path: '/tech', name: 'NoA Tech Radar' }];

  return (
    <div>
      <header>
        <Image
          src={'/logo.svg'}
          alt="NoA Ignite Logo"
          width={200}
          height={70}
        />

        <h1>{title}</h1>
      </header>

      <main>
        <aside>
          <nav>
            {radars.map((radar) => (
              <Link key={radar.name} href={radar.path}>
                <a
                  className={
                    router.asPath === radar.path
                      ? styles['link-active']
                      : 'link'
                  }
                >
                  {radar?.name || ''}
                </a>
              </Link>
            ))}
          </nav>
        </aside>
        {children}
      </main>
    </div>
  );
}
