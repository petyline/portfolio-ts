import * as React from 'react';
import './_work.scss';

import Image from '../../atoms/Image';
import Tile from '../../molecules/Tile';
import TileSide from '../../molecules/Tile/TileSide';

interface IProps {
	tags?: string;
}

const WorkTile: React.FC<IProps> = (props) => {
	return (
		<Tile tags={props.tags} flip={true}>
			<TileSide side="front" bgColor="#aacae6">
				<Image src="/static/img/clients/n-logo.svg" title="i30N" />
			</TileSide>
			<TileSide side="back">React other</TileSide>
		</Tile>
	);
};

export default WorkTile;