import { Button, Col, Divider, PageHeader, Row } from 'antd';
import Form from 'antd/lib/form/Form';
import { useState } from 'react';
import PotranSearch from './search/potransSearch';
import PotranTable from './search/potransTable';

const Potrans = () => {
  return (
    <div>
      <PotranSearch />
    </div>
  );
};

export default Potrans;
