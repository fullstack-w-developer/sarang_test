import { getUser } from '@/services/user';
import React from 'react'
import EditComponents from './EditComponents';

const Page = async() => {
    const user = await getUser();

  return (
    <div>
        <EditComponents user={user}/>
    </div>
  )
}

export default Page