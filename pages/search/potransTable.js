import { Button, Table } from 'antd';
import { useState } from 'react';

const PotranTable = ({ ds, columns }) => {
  return (
    <div>
      <Table dataSource={ds} columns={columns} />
    </div>
  );
};

export default PotranTable;
