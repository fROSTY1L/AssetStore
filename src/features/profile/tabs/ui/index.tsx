import { Tabs } from 'antd'

const ProfileTabs = () => {
  return (
    <Tabs
        defaultActiveKey='history'
        centered
        items={[
            {
                label: "Purchases",
                key: "history"
            }, 
            {
                label: "Reviews",
                key: "reviews"
            },
        ]}
    />
    
  )
}

export default ProfileTabs
