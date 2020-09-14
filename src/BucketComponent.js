import React from 'react';
import {ListGroup, Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const BucketComponent = () => {
    let buckets = useSelector((state) => state.addTodo)
    let bucketList = [];
    if (buckets){
       buckets.forEach((bucket)=>{
       bucketList.push(<ListGroup.Item key={bucket.id} variant='primary' tabIndex="0">{bucket.name}</ListGroup.Item>)
       })

    }
return (
    <ListGroup>
        <Col md="12">
    {bucketList}
    </Col>
  </ListGroup>
)
};
export const BucketList = React.memo(BucketComponent);