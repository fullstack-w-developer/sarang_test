"use client";
import BackHeader from '@/components/common/BackHeader'
import { animationsScreens, variants } from '@/theme/animations'
import React from 'react'
import {motion} from "framer-motion"
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useFormik } from 'formik'
import { validationSchemaAmount } from '@/helper/utils/validation/auth';
import { sharjeAccountUser } from '@/server/user/actions';
import useSharjeUserAccount from '@/hooks/mutation/auth/useSharjeUserAccount';
const Sharje = () => {
    const {mutate,isLoading} = useSharjeUserAccount()
    const formik = useFormik({
        initialValues:{
            amount:""
        },
        validationSchema:validationSchemaAmount,
        onSubmit: async (values)=>{
        mutate({amount:Number(values.amount)})
        }
    })
    return (
        <motion.div {...animationsScreens}>
            <motion.div variants={variants} className="w-90 h-screen flex flex-col justify-between">
                <div>
                    <BackHeader url="/user/profile" name="شارژ حساب" />
                  
                    <div className="flex flex-col gap-2 mt-10">
                        <Input ltr label="مقدار شارژ حساب (تومان)" name="amount" formik={formik} />
                    </div>
                </div>

                <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!mb-5 !bg-orange" name="تائید" />
            </motion.div>
        </motion.div>
    )
}

export default Sharje