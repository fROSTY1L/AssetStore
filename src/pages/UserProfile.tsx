import { Layout } from "antd"
import UserInfo from "../features/profile/user-info"
import ProfileTabs from "../features/profile/tabs"
import { ProtectedRoute } from "../features/auth/ui"


const UserProfile = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <UserInfo />
        <ProfileTabs />
      </Layout>
    </ProtectedRoute>
  )
}

export default UserProfile