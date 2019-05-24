/*
 * ComponentsTestPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import ContentLoader,  { Facebook } from 'react-content-loader';
import styled from 'styled-components';

import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = styled.div`
  background:#ffffff;
  padding: 25px 30px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.05);
`;

const MyLoader = () => (
  <ContentLoader primaryColor={'#DADDE8'} width="200" height="140" secondaryColor={'#C9CDDF'}>
    {/* Only SVG shapes */}
    <circle cx="25" cy="25" r="25" /> 
    <rect x="65" y="5" rx="4" ry="4" width="100" height="13" /> 
    <rect x="65" y="25" rx="4" ry="4" width="50" height="8" /> 
    <rect x="0" y="65" rx="4" ry="4" width="200" height="70" />
  </ContentLoader>
)
const MyLoader1 = () => (
  <ContentLoader primaryColor={'#DADDE8'} width="200" height="140" secondaryColor={'#C9CDDF'}>
    {/* Only SVG shapes */}
    <rect x="0" y="5" rx="4" ry="4" width="100" height="25" /> 
    <rect x="0" y="37" rx="4" ry="4" width="100" height="8" /> 
    <rect x="0" y="65" rx="4" ry="4" width="200" height="70" />
  </ContentLoader>
)
const MyFacebookLoader = () => <Facebook />
export default class ReactSkeletonLoaders extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Components Test Page</title>
          <meta
            name="description"
            content="React Skeleton Loaders for React.js Boilerplate application"
          />
        </Helmet>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md="4">
              <Card>
                <MyLoader />
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <MyLoader1 />
              </Card>
            </Col>
          </Row>
        </Container>
          
      </div>
    );
  }
}
