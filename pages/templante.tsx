import React from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { MainLayaout } from '../components/layouts/MainLayaout';

const inter = Inter({ subsets: ['latin'] });

const templante = () => {
	return (
		<MainLayaout>
			<img src="https://media3.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=ecf05e476h4hh0w0t4svnw30tmgdux5b0eqnzc8lrfqm6ii8&rid=giphy.gif&ct=g" />

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
				<Link href="/about" className={'card'}>
					<h2 className={inter.className}>
						about <span>-&gt;</span>
					</h2>
					<p className={inter.className}>templante OMG🫡 dirrecion&nbsp;About.</p>
				</Link>
			</div>
		</MainLayaout>
	);
};

export default templante;
