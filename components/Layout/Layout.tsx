import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Radar, SidebarRoute } from "../../types/radar.types";
import { Meta } from "../Meta/Meta";

type LayoutProps = {
  children: ReactNode;
  radar: Radar;
  sidebarRoutes: SidebarRoute[];
};

export default function Layout({
  children,
  radar,
  sidebarRoutes = [],
}: LayoutProps) {
  const router = useRouter();

  return (
    <div>
      <Meta title={radar?.name || ""} description={radar?.description || ""} />
      <header>
        <Image
          src={"/logo.svg"}
          alt="NoA Ignite Logo"
          width={200}
          height={70}
        />

        <h1>{radar?.title || ""}</h1>
      </header>

      <main>
        <aside>
          <nav>
            {sidebarRoutes.map((page) => (
              <Link key={page.name} href={page.path}>
                <a
                  className={
                    router.asPath === page.path
                      ? styles["link-active"]
                      : styles["link"]
                  }
                >
                  {page?.name || ""}
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
