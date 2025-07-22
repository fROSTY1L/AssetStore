import { Tabs } from 'antd'
import PurchasesList from '../../purchases'
import ReviewList from '../../reviews/ui'

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
                key: "reviews",
                children: <ReviewList />
            },
        ]}
    />
    
  )
}

export default ProfileTabs
