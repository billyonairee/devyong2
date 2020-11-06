import React, {useRef} from 'react';
import { Card } from 'react-bootstrap';
import DevYong2 from './project-list/DevYong2';
import SNSApp from './project-list/SNSApp';
import Nodebird from './project-list/Nodebird';
import NbbangApp from './project-list/NbbangApp';
import NbbangAdmin from './project-list/NbbangAdmin';
import Class101 from './project-list/Class101';
import MMReq from './project-list/MMReq';


import './Projects.scss';

const Projects = () => {
  const devYong2HandleShow = () => {
    devYong2Ref.current.openModal();
  };
  const snsAppHandleShow = () => {
    snsAppRef.current.openModal();
  };
  const nodebirdHandleShow = () => {
    nodebirdRef.current.openModal();
  };
  const nbbangAppHandleShow = () => {
    nbbangAppRef.current.openModal();
  };
  const nbbangAdminHandleShow = () => {
    nbbangAdminRef.current.openModal();
  };
  const class101HandleShow = () => {
    class101Ref.current.openModal();
  };
  const mmReqHandleShow = () => {
    mmReqRef.current.openModal();
  };
  const devYong2Ref = useRef();
  const snsAppRef = useRef();
  const nodebirdRef = useRef();
  const nbbangAppRef = useRef();
  const nbbangAdminRef = useRef();
  const class101Ref = useRef();
  const mmReqRef = useRef();
  
  return (
    <div className="body">
      <div className="body-head">
        <div className="head-title">Projects</div>
        <div className="title-line"></div>
      </div>

      <div className="projects-container">
        <Card onClick={devYong2HandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="DevYong2/DevYong2_1.png" />
          </div>
          <Card.Body>
            <Card.Title>DevYong2 (포트폴리오)</Card.Title>
            <Card.Text>개인포트폴리오 웹사이트</Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={snsAppHandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="SNSApp/SNSApp_1.png" />
          </div>
          <Card.Body>
            <Card.Title>SNS APP</Card.Title>
            <Card.Text>SNS App UI Clone</Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={nodebirdHandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="Nodebird/Nodebird_1.png" />
          </div>
          <Card.Body>
            <Card.Title>Node Bird</Card.Title>
            <Card.Text>SNS Web Clone (Full Stack)</Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={nbbangAppHandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="NbbangApp/Nbbang-app_1.png" />
          </div>
          <Card.Body>
            <Card.Title>Business App</Card.Title>
            <Card.Text>기업 앱</Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={nbbangAdminHandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="NbbangAdmin/Nbbang-admin_1.png" />
          </div>
          <Card.Body>
            <Card.Title>Business Admin Web</Card.Title>
            <Card.Text>기업 어드민 웹 페이지</Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={class101HandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="Class101/Class101_1.png" />
          </div>
          <Card.Body>
            <Card.Title>Business App</Card.Title>
            <Card.Text>기업 앱 (기업협업)</Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={mmReqHandleShow}>
          <div className="img-box">
            <Card.Img variant="top" src="MMReq/MMReq_1.png" />
          </div>
          <Card.Body>
            <Card.Title>멍멍ResQ</Card.Title>
            <Card.Text>유기견 서비스</Card.Text>
          </Card.Body>
        </Card>

        {/* <Button variant="primary" onClick={portFolioHandleShow}>
          Launch demo modal
        </Button>
        <Button variant="danger" onClick={nbbangAdminHandleShow}>
          Launch demo modal
        </Button> */}
      </div>
      <DevYong2 ref={devYong2Ref} />
      <SNSApp ref={snsAppRef} />
      <Nodebird ref={nodebirdRef} />
      <NbbangApp ref={nbbangAppRef} />
      <NbbangAdmin ref={nbbangAdminRef} />
      <Class101 ref={class101Ref} />
      <MMReq ref={mmReqRef} />
    </div>
  );
};

export default Projects;

// 포트폴리오 sns앱 노드버드 엔빵앱 엔빵어드민 클래스101 mmrq