import React from 'react'
import { DemoBlock } from 'demos'
import styles from './index.less'
import { Badge, Space } from 'antd-mobile'
import { CloseOutlined, ExclamationOutlined } from '@ant-design/icons'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法'>
        <Space size='24px'>
          <Badge>
            <div className={styles.box} />
          </Badge>
          <Badge content='5'>
            <div className={styles.box} />
          </Badge>
          <Badge content='新'>
            <div className={styles.box} />
          </Badge>
          <Badge content='更新啦'>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义颜色和偏移量'>
        <Space size='24px'>
          <Badge offset={[-40, 40]} color='#108ee9'>
            <div className={styles.box} />
          </Badge>
          <Badge offset={[-40, 0]} color='#87d068'>
            <div className={styles.box} />
          </Badge>
          <Badge offset={[0, 0]}>
            <div className={styles.box} />
          </Badge>
          <Badge offset={[0, 40]} color='orange'>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义徽标内容'>
        <Space size='24px'>
          <Badge content={<ExclamationOutlined className={styles.badgeIcon} />}>
            <div className={styles.box} />
          </Badge>
          <Badge content={<CloseOutlined className={styles.badgeIcon} />}>
            <div className={styles.box} />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title='独立展示'>
        <Space>
          <Badge content='99+' />
          <Badge content='新消息!' />
        </Space>
      </DemoBlock>
    </>
  )
}
