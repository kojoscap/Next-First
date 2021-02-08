import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {
  Form,
  Button,
  Col,
  Input,
  Row,
  DatePicker,
  Select,
  Divider,
} from 'antd';

import Axios from 'axios';
import { useState } from 'react';
import PotranTable from './potransTable';

const PotranSearch = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];

    children.push(
      <>
        <Col span={8} key='1'>
          <Form.Item
            name={`field-1`}
            label={`거래처명 조회`}
            rules={[
              {
                required: true,
                message: '거래처명으로 조회한다.',
              },
            ]}
          >
            <Input placeholder='거래처명을 입력하여 조회합니다.' />
          </Form.Item>
        </Col>
        <Col span={8} key='2'>
          <Form.Item
            label='조회기간'
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              // validateStatus='error'
              // help='Please select the correct date'
              style={{
                display: 'inline-block',
              }}
            >
              <DatePicker />
            </Form.Item>
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                lineHeight: '32px',
                textAlign: 'center',
              }}
            >
              -
            </span>
            <Form.Item
              style={{
                display: 'inline-block',
              }}
            >
              <DatePicker />
            </Form.Item>
          </Form.Item>
        </Col>

        <Col span={6} key='3'>
          <Form.Item
            name='select'
            label='Select'
            hasFeedback
            rules={[{ required: true, message: '대표자명 조회합니다.!' }]}
          >
            <Select placeholder='대표자명으로 조회합니다.!'>
              <Option value='china'>China</Option>
              <Option value='usa'>U.S.A</Option>
            </Select>
          </Form.Item>
        </Col>
      </>
    );

    return children;
  };

  const [ds, setDs] = useState([]);

  const API_URL = 'http://localhost:4000/customers';

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setDs(res.data);
    });
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    getData();
  };

  const columns = [
    {
      title: '코드',
      dataIndex: '코드',
      key: 'code',
    },
    {
      title: '거래처명',
      dataIndex: '거래처명',
      key: 'custnm',
    },
    {
      title: '대표자',
      dataIndex: '대표자',
      key: 'cel',
    },
    {
      title: '사업자번호',
      dataIndex: '사업자번호',
      key: 'saupno',
    },
    {
      title: '주소',
      dataIndex: '주소',
      key: 'address',
    },
    {
      title: '업종',
      dataIndex: '업종',
      key: 'upjong',
    },
    {
      title: '업태',
      dataIndex: '업태',
      key: 'uptae',
    },
  ];

  return (
    <Form
      form={form}
      name='advanced_search'
      className='ant-advanced-search-form'
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
          key='99'
        >
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>

      <Divider />
      <PotranTable ds={ds} columns={columns} />
    </Form>
  );
};

export default PotranSearch;
