import { useRef } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
// @ts-ignore
import Music from "@/assets/music/notfication.mp3";
import { farePayment } from "@/services/fare";
import { errorToast } from "@/helper/utils/error";
const useFarePaymentMutation = ({ url }: { url: string }) => {
    const telegramAudioRef = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(Music) : undefined);
    const router = useRouter();
    return useMutation(async (data: any) => await farePayment(data), {
        onSuccess: async function () {
            await telegramAudioRef.current?.play();
            router.push(url);
        },
        onError: async function (error) {
            errorToast("لطفا حساب کاربری خود را شارژ کنید")
        },
    });
};

export default useFarePaymentMutation;
