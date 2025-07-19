import { Layout } from "antd"
import UserInfo from "../features/profile/user-info"
import ProfileTabs from "../features/profile/tabs"


const UserProfile = () => {
  return (
    <Layout>
      <UserInfo />
      <ProfileTabs />
    </Layout>
  )
}

export default UserProfile