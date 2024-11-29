import React from 'react';
import { Col, Spin } from 'antd';

export const LoadingSpinner = () => (
  <Col offset={12}>
    <Spin spinning size="large" />
  </Col>
);
