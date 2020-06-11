import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EditOutlined, HeartTwoTone, DeleteOutlined } from '@ant-design/icons';
export default class ViewList extends React.Component {
	render() {
		const {
			title,
			timeStamp,
			deleteItem,
			editItem,
			handleFavItem,
		} = this.props;
		return (
			<Row>
				<Col sm={1} xl={3}></Col>
				<Col sm={10} xl={6}>
					<div className="view shadow-lg">
						<Row>
							<Col xl={10}>
								<div className="view-items">
									<h3 className="view-items-text">
										<strong>{title}</strong>
									</h3>
								</div>
							</Col>
							<Col xl={2} className="d-flex justify-content-xl-center">
								{/* <HeartFilled style={{fontSize:20, color:'#f40552'}}/> */}
							</Col>
						</Row>

						<div className="view-items">
							<div className="view-items-timeline ">
								<p className="view-items-timeline-today mr-2">Today</p>
								<p className="view-items-timeline-time">{timeStamp}</p>
							</div>
							<div className="view-items-icons">
								<div className="icons-list"></div>
								<span className="mx-2 text-success " onClick={editItem}>
									{/* <button className="btn btn-sm btn-info px-3">
										Edit
										<i className="fas fa-pen ml-2"></i>
									</button> */}
									<EditOutlined style={{ fontSize: 18, cursor: 'pointer' }} />
								</span>
								<span className="mx-2 text-info" onClick={deleteItem}>
									{/* <button className="btn btn-sm btn-danger">
										Delete
										<i className="fas fa-trash ml-2"></i>
									</button> */}
									<DeleteOutlined style={{ fontSize: 18, cursor: 'pointer' }} />
								</span>
								<span className="mx-2 text-danger">
									<HeartTwoTone
										twoToneColor="#f40552"
										style={{ fontSize: 18 }}
										onClick={handleFavItem}
									/>
								</span>
							</div>
						</div>
					</div>
				</Col>
				<Col sm={1} xl={3}></Col>
			</Row>
		);
	}
}
