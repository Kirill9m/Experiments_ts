import { TeamOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { Layout, Space, Typography, } from 'antd'
import { Link } from 'react-router-dom';
import { CustomButton } from '../custom-button';
import { Paths } from '../../paths';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton variant="primary">Medarbetare</CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.login}>
          <CustomButton variant="secondary">Login</CustomButton>
        </Link>
        <Link to={Paths.register}>
        <CustomButton variant="secondary">Register</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  )
}