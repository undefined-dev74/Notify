import React from 'react';
import ViewList from './ViewList';

class ViewGroup extends React.Component {
	render() {
		const { items } = this.props;
		return (
			<section className="container">
				{items.map((item) => {
					return <ViewList key={item.id} title={item.title} timeStamp={item.Time}/>;
				})}
			</section>
		);
	}
}

export default ViewGroup;
