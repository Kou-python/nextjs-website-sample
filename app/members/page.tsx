import Image from "next/image";
import styles from "./page.module.css";

const data = {
	contents: [
		{
			id: "1",
			image: {
				url: "/img-member1.jpg",
				width: 240,
				height: 240,
			},
			name: "デイビッド・チャン",
			position: "CEO",
			profile: "グローバルテクノロジー企業に居たよ",
		},
		{
			id: "2",
			image: {
				url: "/PXL_20230826_041517124.jpg",
				width: 240,
				height: 240,
			},
			name: "笹川高聖",
			position: "CTO",
			profile: "ベンチャー企業に居たよ",
		},
		{
			id: "1",
			image: {
				url: "/img-member3.jpg",
				width: 240,
				height: 240,
			},
			name: "ジョン・ウィルソン",
			position: "COO",
			profile: "大手テクノロジー企業に居たよ",
		},
	],
};

export default function Page() {
	return (
		<div className={styles.container}>
			{/* 三項演算子 */}
			{data.contents.length === 0 ? (
				<p className={styles.empty}>メンバーが登録されていません</p>
			) : (
				<ul>
					{data.contents.map((member) => (
						<li key={member.id} className={styles.list}>
							{/* 1つのブロックに画像→説明文を返す */}
							<Image
								alt=""
								src={member.image.url}
								width={member.image.width}
								height={member.image.height}
								className={styles.image}
							/>
							<dl>
								<dt className={styles.name}>{member.name} </dt>
								<dt className={styles.position}>{member.position} </dt>
								<dt className={styles.profile}>{member.profile} </dt>
							</dl>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
