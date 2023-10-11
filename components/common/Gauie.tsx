import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const Gauie = () => {
    return (
        <Dialog
            open
            fullWidth
            maxWidth="md"
        >
            <DialogTitle className='border-b !p-0 !py-1'>
                   <h4 className='font-artin-bold text-center'>راهنمای برنامه  </h4>
            </DialogTitle>
            <DialogContent className='!mt-3'>
                <ul className='flex flex-col gap-4'>
                    <li className='font-artin-regular'>
                         1- ابتدا موجودی حساب خود را شارژ کنید
                    </li>
                    <li className='font-artin-regular'>
                         1- ابتدا موجودی حساب خود را شارژ کنید
                    </li>
                    <li className='font-artin-regular'>
                         1- ابتدا موجودی حساب خود را شارژ کنید
                    </li>
                </ul>
            </DialogContent>

        </Dialog>
    )
}

export default Gauie