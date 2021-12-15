import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Steps, Button, message, Form, Input } from 'antd';
import React, { useState, useEffect } from 'react';


const { Header, Content, Footer } = Layout;

const { Step } = Steps;
const { Item } = Form;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  }
];


function App() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current - 1);
  };

  const [form] = Form.useForm();
  const next = () => {
    form
      .validateFields()
      .then(() => {
        // Here make api call of something else
        setCurrent(current + 1);
      })
      .catch((err) => console.log(err));
  };


  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">New Investment</Menu.Item>
          <Menu.Item key="3">Common Application</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, marginTop: 48 }}>
          <Steps current={current} type="navigation" step>
            <Step title="Payment Voucher" key={0} />
            <Step title="Certificating and Approving" key={11} />
          </Steps>

          <div style={{ margin: "100px 10px" }}>
            <Form form={form}>
              {current === 0 && (
                <>
                <Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!"
                    }
                  ]}
                >
                  <Input placeholder="First Name" />
                </Item>
                <Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!"
                    }
                  ]}
                >
                  <Input placeholder="First Name" />
                </Item>
                <Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!"
                    }
                  ]}
                >
                  <Input placeholder="First Name" />
                </Item>
                <Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!"
                    }
                  ]}
                >
                  <Input placeholder="First Name" />
                </Item>

                </>
              )}

              {current === 1 && (
               <div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
                
              )}
            </Form>
            <div className="steps-action" style={{ float: "right" }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()} size='large'>
                Next
              </Button>
            )}
            {current !== steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')} size='large'>
                Save
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()} size='large'>
                Previous
              </Button>
            )}
          </div>
          </div>
         

        </div>

      </Content>
      <Footer style={{ textAlign: 'left' }}>Copyright ©2021 CSandun. All right reserved.</Footer>
    </Layout>
  );
}

export default App;
