import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { MainLayaout } from '../components/layouts/MainLayaout';

const inter = Inter({ subsets: ['latin'] });

type Props = {};

export default function Contacto() {
	return (
		<MainLayaout>
			<img src="https://media2.giphy.com/media/eiMUSSymog0lHMwSqQ/giphy.gif" />

			<div className={'center'}>
				<Image
					className={'logo'}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
				<div className={'thirteen'}>
					<Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
				</div>
			</div>

			<div className={'grid'}>
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					className={'card'}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Docs <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Find in-depth information about Next.js features and&nbsp;API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					className={'card'}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Learn <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>
			</div>
		</MainLayaout>
	);
}
