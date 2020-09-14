import React, { useState, useEffect, useRef} from 'react';
import {FormControl, Collapse, InputGroup, Button, Row, Container} from 'react-bootstrap'
import {useDispatch} from 'react-redux';

import './App.css';
import {BucketList} from './BucketComponent';
import {addTodo} from './actions';

const App = () => {
  const dispatch = useDispatch();
  //bucket name
  const [bucketName, setBucketName] = useState('');
  //show buck popup
  const [open, setOpen] = useState(false);
  //input ref
  const pageRef = useRef(null);
  // const prevBucket = usePrevious(buckets);
  
  useEffect(() => {
    if (document.activeElement.className.indexOf('inputSearch') < 0){
      setOpen(false);
    } else {
      setOpen(true);
    }
  },[bucketName])

  const handleOnChange = (event) => { 
      setBucketName(event.target.value);
  }

  const handleOnClick = () => {
    if (bucketName.length > 0){
      dispatch(addTodo({name: bucketName}));
      setBucketName('');
    }
  }
  
  return (
    
    <div className="App" ref={pageRef}>
      <header className="App-header">
        <Container>
        <Row>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Add Todo"
      className="inputSearch"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      aria-expanded={open}
    onChange={handleOnChange}
    value={bucketName}
    />
    <InputGroup.Append>
      <Button variant="primary" onClick={handleOnClick}>Add</Button>
    </InputGroup.Append>
    <br></br>
    <Collapse in={open}>
      <div>
       <BucketList></BucketList>
       </div>
      </Collapse>
  </InputGroup>
  <BucketList></BucketList>
    </Row>
  </Container>
      </header>
    </div>
  );
}

export default App;
