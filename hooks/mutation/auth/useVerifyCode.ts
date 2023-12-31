import { useMutation } from "react-query";
import { checkCodeLogin, checkCodeSignup } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios from "@/services/utils/axios";
import { useCookies } from "react-cookie";
import useGlobalStore from "@/stores/global-store";
import jwt_decode from "jwt-decode";
import useFcmToken from "@/hooks/common/useFcmToken";
import useRigisterNootficationToken from "../notfication/useRigisterNootficationToken";
import { errorToast } from "@/helper/utils/error";

const useVerifyCode = () => {
    const searchParams = useSearchParams()
    const { mutate } = useRigisterNootficationToken();
    const { fcmToken } = useFcmToken();
    const { isSignupUser } = useGlobalStore();
    const [, setCookies] = useCookies(["token","jwt"]);
    const router = useRouter();
    return useMutation(async (data: CheckCode) => (isSignupUser ? checkCodeSignup(data) : checkCodeLogin({...data,Phone:searchParams.get("phone")!})), {
        onSuccess: async function (data: any) {
            if (isSignupUser) {
                router.push("/auth/signup/information");
            } else {
                axios.defaults.headers.common["x-access-token"] = `${data.token}`;
                const decoded: any = await jwt_decode(data.token);
                setCookies("token", data.token, { path: "/",maxAge: 3 * 24 * 60 * 60 * 1000});
                // setCookies("jwt", data.refreshToken, { path: "/", maxAge: 3 * 24 * 60 * 60 * 1000 });
                try {
                    //  @ts-ignore
                    await Android.Token(data.token);
                } catch (error) {
                    console.log(error);
                }
                if (fcmToken) {
                    mutate({ token: fcmToken });
                }
                // set coockies and reedirect
                if (decoded.UserRole === "Driver") {
                    router.push("/driver");
                } else if (decoded.UserRole === "Customer") {
                    router.push("/user");
                } else if (decoded.UserRole === "Counter") {
                    router.push("/counter");
                } else {
                    router.push("/admin/user");
                }
            }
        },
        onError: async function (error) {
            errorToast("مشکلی پیش آمده است")
        },
    });
};

export default useVerifyCode;
