import { Inter } from '@next/font/google';
import { MainLayaout } from '../components/layouts/MainLayaout';
import { BlueLayaout } from '../components/layouts/BlueLayout';

const inter = Inter({ subsets: ['latin'] });

export default function AboutPage() {
	return (
		<>
			<img src="https://media2.giphy.com/media/yHFg85jmAuwL1CiJUw/giphy.gif?cid=ecf05e4749yytf5cchgs7wvvpbt2e25sxqpfg2vnj22jzfyg&rid=giphy.gif&ct=g" />

			<div className={'grid'}>
				<img src="https://media4.giphy.com/media/lYibSqbggtMdvVAgyM/giphy.gif?cid=ecf05e47p3jk4o123ijnqae4rsgif3tuxh1tuu6fcutq5upq&rid=giphy.gif&ct=g" />
				<img src="https://media1.giphy.com/media/1gdtyFn7EJWJ8G1Bo7/giphy.gif?cid=ecf05e47evjbar0ima288ducnux5r9c9wg6065myt3a2l99j&rid=giphy.gif&ct=g" />
				<img src="https://media1.giphy.com/media/ZD3aIkg03IqbAt6KEX/giphy.gif?cid=ecf05e47rccw3hd3rxsi9jl9zr4oqu3jiihdey1kx5lluqm2&rid=giphy.gif&ct=g" />
				<img src="https://media2.giphy.com/media/elEJi2h4bEvVRYfyJQ/giphy.gif?cid=790b7611c885b144870d1657b855e8818d86808d5b52fff1&rid=giphy.gif&ct=g" />
			</div>
		</>
	);
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return(
		<MainLayaout>
		<BlueLayaout>
			{page}
		</BlueLayaout>
	</MainLayaout>
	)
};
