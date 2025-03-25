import { useState } from 'react';
import image1 from '../../assets/crepes.png';
import { Button, Form, Input, notification } from 'antd';
import './Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    setLoading(true);
    values.type = 'Front contact us';
    console.log(values);
    fetch(import.meta.env.VITE_BASE_URL + '/api/SendContactUs', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        form.resetFields();
        notification.success({
          message: t('sentSuccess'),
          duration: 3,
          showProgress: true,
          placement: 'top',
        });
      })
      .catch((error) => console.error('❌ خطأ في جلب الفروع:', error));
      // .finally(() => setLoading(false));
  };

  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='contact-content'>
          <div className='contact-item-left'>
            <img src={image1} alt='image' />
          </div>
          <div className='contact-item-right'>
            <h5 className='contact-sub-title'>{t('contactSubTitle')}</h5>
            <h2 className='contact-title'>{t('contactTitle')}</h2>
            <Form form={form} onFinish={onFinish} className='contact-form'>
              <Form.Item
                name='name'
                rules={[
                  {
                    required: true,
                    message: t('required'),
                  },
                ]}
              >
                <Input placeholder={t('name')} className='contact-input' />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: t('requiredEmail'),
                  },
                ]}
              >
                <Input placeholder={t('email')} className='contact-input' />
              </Form.Item>
              <Form.Item
                name='message'
                rules={[
                  {
                    required: true,
                    message: t('required'),
                  },
                ]}
              >
                <Input
                  name='message'
                  placeholder={t('message')}
                  className='contact-input'
                />
              </Form.Item>
              <Form.Item>
                <Button loading={loading} type='primary' htmlType='submit' className='contact-form-btn'>
                  {t('contactBtn')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
