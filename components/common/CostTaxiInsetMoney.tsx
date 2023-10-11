import Input from "@/components/common/Input";
import React from "react";
// @ts-ignore
import PN from "persian-number";

const CostTaxiInsetMoney = ({ formik }: { formik: any }) => {
    return (
        <div className="mt-10">
            <Input
                subTitle="هزینه توافقی"
                ltr
                label={`هزینه (ریال)`}
                // placeholder="هزینه تاکسی را به تومان وارد کنید"
                classInput=""
                formik={formik}
                name="amount"
                type="tel"
            />
            <p className="text-xs font-estedad-medium mt-2 ">{PN.convert(formik.values.amount)} ریال</p>
        </div>
    );
};

export default CostTaxiInsetMoney;
