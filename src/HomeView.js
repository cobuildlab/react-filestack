import React, { Component } from 'react';
import { Card, Media, Container, Row, Col, Badge, Button } from 'reactstrap';
import ReactFilestack from 'filestack-react';

const { REACT_APP_FILESTACK_API } = process.env;


class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  onFiles = ({ filesUploaded }) => {
    this.setState({ files: filesUploaded });
  };

  render() {
    const { files } = this.state;

    return (
      <Container fluid>
        <Row className="mt-4">
          <Col className="home-text">Hello World with Filestack</Col>
          <Col>
            <ReactFilestack
              apikey={REACT_APP_FILESTACK_API}
              buttonText="Click me"
              onSuccess={this.onFiles}
              preload={true}
            />

          </Col>
          <Col md={12}>
            <h1> Files </h1>
            {files.map((file, i) => {
              return (
                <Card key={i}>
                  <Media heading className={'m-2'}>
                    {file.filename}
                    <h6>
                      <Badge color="secondary">{file.url}</Badge>
                    </h6>
                    <h6>
                      <img alt={file.fileName} src={file.url} width={100} height={100}/>
                    </h6>
                  </Media>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeView;
