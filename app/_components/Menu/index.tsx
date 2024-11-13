"use client";
import styles from "./index.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Menu() {
  const open = () => {
    document.querySelector("nav")?.classList.add(styles.open)
  }
  return (
		<div>
			<nav className={styles.nav}>
				<ul>
					<li className={styles.items}>
						<Link href="news">ニュース</Link>
					</li>
					<li className={styles.items}>
						<Link href="members">メンバー</Link>
					</li>
					<li className={styles.items}>
						<Link href="contact">お問い合わせ</Link>
					</li>
				</ul>
			</nav>
			<button className={styles.button} onClick={open}>
				<Image src="/menu.svg" alt="menu" width={24} height={24} />
			</button>
		</div>
  );
}
