import React from 'react'
import { BlueLayaout } from '../../components/layouts/BlueLayout'
import { MainLayaout } from '../../components/layouts/MainLayaout'

type Props = {}

const  HomePage= (props: Props) => {
  return (
    <>
      <img src='https://media.giphy.com/media/7frSUXgbGqQPKNnJRS/giphy.gif'></img>
    </>
  )
}

export default HomePage


HomePage.getLayout = function getLayout(page:any) {
	return(
		<MainLayaout>
		<BlueLayaout>
			{page}
		</BlueLayaout>
	</MainLayaout>
	)
};
