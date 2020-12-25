import React, { useState } from 'react';
import { Field, Cell, Button } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [tel, setTel] = useState();
  const [digit, setDigit] = useState();
  const [number, setNumber] = useState();
  const [password, setPasswrod] = useState();
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [sms, setSms] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [value7, setValue7] = useState('');

  const formatter = (value) => value.replace(/\d/g, '');

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Cell.Group>
          <Field value={value1} label="文本" onChange={setValue1} placeholder="请输入文本" />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="自定义类型">
        <Field value={value2} label="文本" onChange={setValue2} placeholder="请输入文本" />
        <Field value={tel} type="tel" label="手机号" onChange={setTel} placeholder="请输入手机号" />
        <Field
          value={digit}
          type="digit"
          label="整数"
          onChange={setDigit}
          placeholder="请输入整数"
        />
        <Field
          value={number}
          type="number"
          label="数字"
          onChange={setNumber}
          placeholder="请输入数字"
        />
        <Field
          value={password}
          type="password"
          label="密码"
          onChange={setPasswrod}
          placeholder="请输入密码"
        />
      </DemoBlock>

      <DemoBlock title="禁用输入框">
        <Cell.Group>
          <Field label="文本" value="输入框只读" readonly />
          <Field label="文本" value="输入框已禁用" disabled />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="显示图标">
        <Cell.Group>
          <Field
            value={value3}
            label="文本"
            leftIcon="shop-o"
            rightIcon="shop-o"
            placeholder="显示图标"
            onChange={setValue3}
          />
          <Field
            value={value4}
            clearable
            label="文本"
            leftIcon="shop-o"
            placeholder="显示清除图标"
            onChange={setValue4}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="错误提示">
        <Cell.Group>
          <Field
            value={username}
            error
            required
            label="用户名"
            placeholder="请输入用户名"
            onChange={setUsername}
          />
          <Field
            value={phone}
            required
            label="手机号"
            placeholder="请输入手机号"
            errorMessage="手机号格式错误"
            onChange={setPhone}
          />
        </Cell.Group>
      </DemoBlock>

      <DemoBlock title="插入按钮">
        <Field
          value={sms}
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          onChange={setSms}
          button={
            <Button size="small" type="primary">
              发送
            </Button>
          }
        />
      </DemoBlock>

      <DemoBlock title="格式化输入内容">
        <Field
          value={value5}
          label="文本"
          formatter={formatter}
          placeholder="在输入时执行格式化"
          onChange={setValue5}
        />
        <Field
          value={value6}
          label="文本"
          formatter={formatter}
          formatTrigger="onBlur"
          placeholder="在失焦时执行格式化"
          onChange={setValue6}
        />
      </DemoBlock>

      <DemoBlock title="高度自适应">
        <Field
          value={message}
          rows="1"
          autosize
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          onChange={setMessage}
        />
      </DemoBlock>

      <DemoBlock title="显示字数统计">
        <Field
          value={message2}
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          showWordLimit
          onChange={setMessage2}
        />
      </DemoBlock>

      <DemoBlock title="输入框内容对齐">
        <Field
          value={value7}
          label="文本"
          placeholder="输入框内容右对齐"
          inputAlign="right"
          onChange={setValue7}
        />
      </DemoBlock>
    </DemoSection>
  );
};
