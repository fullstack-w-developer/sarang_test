"use client";
import BackHeader from '@/components/common/BackHeader'
import { animationsScreens, variants } from '@/theme/animations'
import React from 'react'
import {motion} from "framer-motion"
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useFormik } from 'formik'
import { validationSchemaAmount } from '@/helper/utils/validation/auth';
import useSharjeUserAccount from '@/hooks/mutation/auth/useSharjeUserAccount';
// @ts-ignore
import PN from "persian-number";

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
                        <Input maxLength={7} type='tel' ltr label="مقدار شارژ حساب (ریال)" name="amount" formik={formik} />
                        {
                            formik.values.amount &&
                        <span className='text-xs font-artin-regular'>{PN.convert(formik.values.amount)} ریال</span>
                        }
                    </div>
                </div>

                <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!mb-5 !bg-orange" name="تائید" />
            </motion.div>
        </motion.div>
    )
}

export default Sharje