import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { signupUser } from "@/services/auth";
import { SignupUser } from "@/types/Auth";
import { useRouter } from "next/navigation";
import { errorToast } from "@/helper/utils/error";

const useSignupUserMutation = () => {
    const router = useRouter();
    return useMutation(async (data: SignupUser) => await signupUser(data), {
        onSuccess: async function () {
            router.push("/auth/signin");
        },
        onError: async function (error) {
            errorToast((error as AxiosError<any>)?.response?.data.message);
        },
    });
};

export default useSignupUserMutation;
