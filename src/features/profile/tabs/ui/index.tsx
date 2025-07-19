import { Tabs } from 'antd'
import PurchasesList from '../../purchases'

const ProfileTabs = () => {
  return (
    <Tabs
        defaultActiveKey='history'
        centered
        items={[
            {
                label: "Purchases",
                key: "history",
                children: <PurchasesList />
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
